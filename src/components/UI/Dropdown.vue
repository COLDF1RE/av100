<template>
  <div class="dropdown" @click="toggle">
    <div class="dropdown__button" :class="{'dropdown__button--active': isActive}" >
      <slot name="title"></slot>
    </div>
    <div v-if="isActive" class="dropdown__list">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 100%;
  z-index: 3;
  &__button {
    width: 100%;
    position: relative;
    padding: 2.5px 40px 2.5px 10px;
    background: #fff;
    border: 1px solid #e1e1e3;
    border-radius: 3px;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    &:after {
      content: "";
      position: absolute;
      height: 8px;
      top: 10px;
      right: 11px;
      -moz-background-size: 10px;
      background-size: 10px;
      width: 10px;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.842.99l6.428 6 6.429-6' stroke='%232DC574' stroke-width='1.7' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-position: 50%;
      background-repeat: no-repeat;
    }
  }
  &__list {
    max-height: 300px;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    z-index: 1;
    border-radius: 0.4rem;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #bababa #f9f9fc;
    &-item {
      background-color: #2dc574;
      color: white;
      padding: 1.5rem 2rem 1.5rem 3.5rem;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.1;
      &:hover {
        background-color: #26a763;
      }
      &--active {
        background-color: #26a763;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 1.8rem;
          height: 1.8rem;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 80% 80%;
          left: 9px;
          top: 11px;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092L4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
        }
      }
    }
  }
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: #f9f9fc;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #bababa;
    border-radius: 20px;
  }
  @media(max-width:992px){
    .dropdown__button {
      font-size: inherit;
      &::after {
        top: 8px;
      }
    }
  }
  @media(max-width:768px){
    .dropdown__button {
      font-size: 14px;
      &::after {
        top: 10px;
      }
    }
  }
}
</style>
