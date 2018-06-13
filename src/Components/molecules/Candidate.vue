<template>
  <div :class="$style.root">
    <aside :class="$style.aside">
      <img :class="$style.photo" v-if="data.photo" width="100" :src="data.photo" alt=""/>
      <div :class="$style.nophoto" v-else/>
      <div :class="$style.name">{{data.name}}</div>
    </aside>
    <div :class="$style.inner">
      <Bar :small="1" :size="percentage" />

      <div :class="$style.description">
        {{Math.round(percentage)}}% <br/>
        {{data.votes}} votos
      </div>
    </div>
  </div>
</template>

<script>
  import Bar from '../atoms/Bar'

  export default {
    name: 'Candidate',
    components: {
      Bar
    },
    props: [
      'data'
    ],
    computed: {
      percentage () {
        const availableVotes = this.$store.getters.getAvailableVotes()
        const userVotes = this.data.votes
        const percentage = userVotes * 100 / availableVotes
        return percentage
      }
    }
  }
</script>

<style module lang="scss">
  @import "../../assets/styles/base";

  .root {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1em;
    align-items: center;
  }

  .photo,
  .nophoto {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 10px;
    display: inline-block;
  }

  .nophoto {
    border: 1px solid #000;
  }

  .name {
    font-family: "Roboto Condensed", Roboto, sans-serif;
    font-size: 13px;
  }

  .aside {
    text-align: center;
  }

  .bar {
    width: 100%;
    height: 12px;
    border: 1px solid #dedede;
  }

  .fill {
    height: 100%;
    width: 100%;
    background-color: $color__primary--base;
  }

  .description {
    color: #929292;
    font-size: 12px;
  }
</style>
