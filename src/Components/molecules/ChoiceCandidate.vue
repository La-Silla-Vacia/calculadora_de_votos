<template>
  <div :class="$style.root">
    <div :class="$style.aside">
      <img :class="$style.photo" v-if="data.photo" width="100" :src="data.photo" alt=""/>
      <div :class="$style.nophoto" v-else/>
      <div :class="$style.name">{{data.name}}</div>

      <footer :class="$style.footer">
        <Bar :color="data.color" :size="percentage"/>

        {{Math.round(data.votes - givenVotes)}} votos
      </footer>
    </div>

    <div :class="$style.inner">
      <div :class="$style.title">Se repartirían así:</div>

      <div :class="$style.table">
        <div v-for="item in items" :key="item.name" v-if="item.passed" :class="$style.row">
          <Bar :from="data.name" :to="item.name" :show-percentage="1" :color="data.color"/>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bar from '../atoms/Bar'

  export default {
    name: 'ChoiceCandidate',
    components: {
      Bar
    },
    props: [
      'data'
    ],
    computed: {
      items () {
        return this.$store.getters.getItems()
      },
      givenVotes () {
        return this.$store.getters.getGivenVoteCount(this.data.name)
      },
      percentage () {
        const availableVotes = this.$store.getters.getAvailableVotes()
        const userVotes = this.data.votes
        const percentage = (userVotes - this.givenVotes) * 100 / availableVotes
        return percentage
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/styles/base";

  .root {
    display: grid;
    grid-template-columns: 115px 1fr;
    grid-gap: 1em;
    align-items: center;
  }

  .photo,
  .nophoto {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
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

  .footer {
    text-align: left;
    margin-top: 8px;
    font-size: 12px;
    color: #848484;
  }

  .title {
    color: $color__secondary--dark;
    font-weight: bold;
    font-size: 13px;
    font-family: $font__family--sans--especial;
    margin-bottom: 15px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 82px;
    align-items: flex-end;
    grid-gap: 14px;
    margin-bottom: 10px;

    span {
      font-size: 12px;
    }
  }
</style>
