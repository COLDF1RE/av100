<template>
<!--  switcher, radio, checkbox почти полностью повторяют код друг друга, как вариант можно сделать универсальный компонент-->
  <div>
    <label class="custom-checkbox">
      <input
          class="custom-checkbox__input"
          :type="inputType || 'checkbox'"
          :value="value"
          v-model="change"
          v-bind="$attrs"
      />
      <span>{{ title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    // Перечисленно больше чем нужно в пользу универсальности
    value: [String, Number, Boolean],
    title: String,
    inputType: String,
    checkedItems: [Array, String, Object, Boolean],
  },
  computed: {
    change: {
      get() {
        return this.checkedItems
      },
      set(newArr) {
        this.$emit('change', newArr)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  & span {
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    color: #000;
    position: relative;
    margin: 0;
    user-select: none;
    line-height: 1.2;
    display: flex;
    align-items: center;
    min-width: 2rem;
    min-height: 2rem;
  }
  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & span::before {
    content: '';
    width: 1.8rem;
    height: 1.8rem;
    border: 1px solid #2dc574;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80% 80%;
    left: 0.2rem;
    top: 0.3rem;
    color: #fff;
    margin-right: 5px;
  }
}
.custom-checkbox > input:checked + span::before {
  background-color: #2dc574;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.492 6.092L4.76 9.333l7.843-7.778' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
}
@media(max-width:992px){
  .custom-checkbox span::before {
    width: 1.3rem;
    height: 1.3rem;
  }
}
@media(max-width:768px){
  .custom-checkbox span::before {
    width: 1.8rem;
    height: 1.8rem;
  }
}
</style>