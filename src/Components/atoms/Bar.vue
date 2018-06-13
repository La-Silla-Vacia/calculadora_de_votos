<template>
  <div :class="[$style.root, {[$style.small]: small}]">
    <header v-if="showPercentage" :class="$style.header">
      <span>25%</span>
      <span>50%</span>
      <span>75%</span>
    </header>
    <div :class="$style.bar" ref="bar" @click="handleClick">
      <div :class="$style.fill" :style="{backgroundColor: color, width: customSize || size + '%'}"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bar',
    props: [
      'color',
      'showPercentage',
      'size',
      'small'
    ],
    methods: {
      handleClick (e) {
        const barWidth = this.$refs.bar.offsetWidth
        const clickPos = e.offsetX
        const percentage = clickPos * 100 / barWidth
        this.customSize = percentage + '%'
      }
    },
    data () {
      return {
        customSize: null
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/styles/base";

  .header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

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

      &:first-child {
        grid-column-start: 2;
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
  }
</style>
