<template>
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
    value: [String, Number, Boolean],
    title: String,
    inputType: String,
    checkedItems: [Array, String, Object, Number],
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
    font-size: 1.4rem;
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
    width: 3.5rem;
    min-width: 3.5rem;
    height: 2rem;
    border-radius: 12px;
    border: 0.2rem solid #bababa;
    background: none;
    transition: all .3s;
  }
  & span::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 1.9rem;
    height: 1.9rem;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background: #bababa;
    left: 0;
    transition: all .3s;
  }
}
.custom-checkbox > input:checked + span::before {
  border: 2px solid #2dc574;
}
.custom-checkbox > input:checked + span::after {
  left: 1.6rem;
  background: #2dc574;
}
.custom-checkbox > input:disabled + span::before {
  background-color: #B5B5B5;
}
@media(max-width:992px){
  .custom-checkbox > input:checked + span::before {
    border: 1px solid #2dc574;
  }
}
@media(max-width:768px){
  .custom-checkbox > input:checked + span::before {
    border: 2px solid #2dc574;
  }
}

</style>