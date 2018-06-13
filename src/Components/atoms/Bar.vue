<template>
  <div :class="[$style.root, {[$style.small]: small}]">
    <header v-if="showPercentage" :class="$style.header">
      <span @click="setAmount(25)">25%</span>
      <span @click="setAmount(50)">50%</span>
      <span @click="setAmount(75)">75%</span>
    </header>
    <div :class="$style.bar" ref="bar" @click="handleClick">
      <div :class="$style.fill" :style="{backgroundColor: color, width: customSize || size + '%'}"/>
      <div v-if="sergio" :class="$style.fill" :style="{backgroundColor: '#267E3E', width: sergio + '%'}"/>
      <div v-if="humberto" :class="$style.fill" :style="{backgroundColor: '#C02238', width: humberto + '%'}"/>
      <div v-if="german" :class="$style.fill" :style="{backgroundColor: '#7F44C3', width: german + '%'}"/>
    </div>
  </div>
</template>

<script>
  import * as types from '../../store/mutation-types'

  export default {
    name: 'Bar',
    props: [
      'color',
      'showPercentage',
      'size',
      'small',
      'from',
      'to',
      'sergio',
      'humberto',
      'german'
    ],
    methods: {
      handleClick (e) {
        if (!this.from || !this.to) return
        const barWidth = this.$refs.bar.offsetWidth
        const clickPos = e.offsetX
        const percentage = clickPos * 100 / barWidth
        this.setAmount(percentage)
      },
      setAmount (percentage) {
        this.$store.commit(types.RECEIVE_VOTES, {from: this.from, to: this.to, amount: percentage})
      }
    },
    computed: {
      customSize () {
        if (!this.from || !this.to) return null
        return this.$store.getters.getGivenVotes({from: this.from, to: this.to}) + '%'
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/styles/base";

  .header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 18px;

    & span {
      font-size: 12px;
      text-align: center;
      display: block;
      color: #6c6c6c;

      &::after {
        content: '';
        width: 1px;
        height: 6px;
        margin-bottom: 2px;
        background-color: currentColor;
        display: block;
        margin-left: 50%;
      }

      &:nth-child(2)::after {
        height: 8px;
      }
    }
  }

  .bar {
    width: 100%;
    height: 16px;
    border: 1px solid #e8e8e8;
  }

  .fill {
    height: 100%;
    width: 0%;
    background-color: $color__primary--base;
    float: left;
  }
</style>
