<template>
  <div :class="$style.root">
    <aside :class="$style.aside">
      <img :class="$style.photo" v-if="data.photo" width="100" :src="data.photo" alt=""/>
      <div :class="$style.nophoto" v-else/>
      <div :class="$style.name">{{data.name}}</div>

      <footer :class="$style.footer">
        <div :class="$style.bar">
          <div :class="$style.fill" :style="{backgroundColor: data.color}"/>
        </div>

        {{data.votes}} votos
      </footer>
    </aside>

    <div :class="$style.inner">
      <div :class="$style.title">Se repartirían así:</div>

      <Bar :color="data.color"/>
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
    ]
  }
</script>

<style lang="scss" module>
  @import "../../assets/styles/base";

  .root {
    display: grid;
    grid-template-columns: 100px 1fr;
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
    margin-top: 20px;
  }

  .bar {
    width: 100%;
    height: 25px;
    border: 1px solid #333;
  }

  .fill {
    height: 100%;
    width: 100%;
    background-color: $color__primary--base;
  }

  .title {
    color: $color__secondary--dark;
    font-weight: bold;
    font-size: 20px;
    font-family: $font__family--sans--especial;
  }
</style>
