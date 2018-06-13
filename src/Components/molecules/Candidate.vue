<template>
  <div :class="$style.root">
    <div :class="$style.aside">
      <img :class="$style.photo" v-if="data.photo" width="100" :src="data.photo" alt=""/>
      <div :class="$style.nophoto" v-else/>
      <div :class="$style.name">{{data.name}}</div>
    </div>
    <div :class="$style.inner">
      <Bar
        :small="1"
        :size="startPercentage"
        :sergio="percentages.sergio"
        :humberto="percentages.humberto"
        :german="percentages.german"
      />

      <div :class="$style.description">
        {{Math.round(percentage)}}% <br/>
        {{Math.round(data.votes + otherVotes)}} votos
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
      otherVotes () {
        return this.$store.getters.getOtherVotes({from: this.data.name})
      },
      percentages () {
        return this.$store.getters.getOtherVotes({from: this.data.name, splitted: true})
      },
      availableVotes () {
        return this.$store.getters.getAvailableVotes()
      },
      startPercentage () {
        const userVotes = this.data.votes
        const percentage = userVotes * 100 / this.availableVotes
        return percentage
      },
      percentage () {
        return this.startPercentage + (this.otherVotes * 100 / this.availableVotes)
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
