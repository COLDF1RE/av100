<template>
  <button class="settings-section__btn block btn btn--block btn--primary" v-on="$listeners">
    <span class="btn__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.btn {
  display: inline-block;
  padding: 1.3rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  vertical-align: middle;
  border-radius: 0.4rem;
  border: 0.1rem solid transparent;
  background: transparent;
  text-align: center;
  cursor: pointer;
  color: #fff;
  user-select: none;
  outline: none;
  white-space: nowrap;
  transition: all .3s;
  font-family: inherit;
  &__text {
    display: inline-block;
    vertical-align: middle;
  }
  &--block{
    width: 100%;
    display: block;
  }
  &--primary{
    color: #fff;
    background: #2dc574;
  }
}
</style>