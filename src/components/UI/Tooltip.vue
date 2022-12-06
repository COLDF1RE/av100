<template>
  <span class="tooltip">
    <div class="tooltip__icon"></div>
    <div class="tooltip__text">
      <div class="tooltip__figure"></div>
      {{tooltipText}}
    </div>
  </span>

</template>

<script>
export default {
  props: {
    tooltipText: String,
  },
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  &__icon {
    width: 18px;
    height: 18px;
    position: relative;
    border-radius: 50%;
    border: 1px solid #bababa;
    z-index: 2;
    &:hover {
      cursor: help;
    }
    &::before {
      content: '';
      position: absolute;
      height: 2px;
      width: 2px;
      left: 50%;
      transform: translate(-50%, 0%);
      top: 3px;
      background: #bababa;
    }
    &::after {
      content: '';
      position: absolute;
      height: 6px;
      width: 2px;
      left: 50%;
      Transform: translate(-50%, 0%);
      top: 7px;
      background: #bababa;
    }
  }
  &__text {
    position: absolute;
    z-index: 1;
    top: 15px;
    left: 50%;
    transform: translate(-50%, 0%);
    background: #2dc574;
    border: 0.1rem solid transparent;
    text-align: center;
    padding: 6px;
    border-radius: 0.4rem;
    line-height: 1.1;
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
    width: 390px;
    box-shadow: 0px 5px 9px -2px rgba(0,0,0,0.1);
    transition-timing-function: cubic-bezier(.165, .84, .44, 1);
    transition-duration: .3s;
    opacity: 0;
  }
}
.tooltip__icon:hover + .tooltip__text {
  opacity: 1;
  top: 25px;
}
.tooltip__figure {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: -7px;
  border: 10px solid transparent;
  border-bottom: 10px solid #2dc574;
}

@media(max-width:992px){
  .tooltip__icon {
    width: 16px;
    height: 16px;
  }
}
@media(max-width:768px){
  .tooltip__icon {
    width: 18px;
    height: 18px;
    white-space: nowrap;
  }
}
@media(max-width:576px){
  .tooltip__text {
    transform: translate(-95%, 0%);
    width: 300px;
  }
  .tooltip__figure {
    left: 95.5%;
  }
}
</style>