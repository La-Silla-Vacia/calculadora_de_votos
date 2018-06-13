<template>
  <div :class="$style.root">
    <header :class="$style.header">
      <span>25%</span>
      <span>50%</span>
      <span>75%</span>
    </header>
    <div :class="$style.bar">
      <div :class="$style.fill" :style="{backgroundColor: color}"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bar',
    props: [
      'color'
    ]
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

      &::after {
        content: '';
        width: 1px;
        height: 12px;
        margin-bottom: 2px;
        background-color: #333;
        display: block;
        margin-left: 50%;
      }

      &:first-child {
        grid-column-start: 2;
      }
    }
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
</style>
