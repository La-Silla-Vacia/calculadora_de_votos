<template>
  <div :class="$style.container">
    <div :class="$style.candidates">
      <Candidate
        v-for="item in items"
        v-if="item.passed"
        :key="item.name"
        :data="item">
      </Candidate>
    </div>

    <div :class="$style.choices">
      <ChoiceCandidate
        v-for="item in items"
        v-if="!item.passed"
        :key="item.name"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
  import Candidate from './Candidate'
  import ChoiceCandidate from './ChoiceCandidate'

  export default {
    name: 'Graphic',
    components: {
      ChoiceCandidate,
      Candidate
    },
    computed: {
      items () {
        return this.$store.getters.getItems()
      }
    },
    methods: {
      handleClick (name) {
        alert(name)
      }
    }
  }
</script>

<style module lang="scss">
  @import '../../assets/styles/base';

  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .candidates {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    grid-gap: 40px;
    padding-bottom: 2em;
    justify-content: center;
  }

  .choices {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 40px;
    padding-bottom: 2em;
  }
</style>
