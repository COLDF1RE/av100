<template>
    <label class="custom-checkbox">
      <input
          class="custom-checkbox__input"
          :type="inputType || 'radio'"
          :value="value"
          v-model="change"
          v-bind="$attrs"
          :name="name"
      />
      <span>{{ title }}</span>
    </label>
</template>

<script>
import Tooltip from "./Tooltip";
export default {
  components: {Tooltip},
  props: {
    value: String,
    title: String,
    inputType: String,
    name: String,
    checkedItems: [Array, String, Object, Number],
  },
  computed: {
    change: {
      get() {
        return this.checkedItems - 1
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
    width: 18px;
    height: 18px;
    border: 1px solid #2dc574;
    margin-right: 5px;
    border-radius: 50%;
  }
}
.custom-checkbox > input:checked + span::before {
  border: 2px solid #2dc574;
}
.custom-checkbox > input:checked + span::after {
  content: '';
  position: absolute;
  background-color: #2dc574;
  border-radius: 50%;
  left: 4px;
  top: 5px;
  color: #fff;
  width: 10px;
  height: 10px;
}
@media(max-width:992px){
  .custom-checkbox > input:checked + span::after {
    top: 4px;
  }
  .custom-checkbox > input:checked + span::before {
    border: 1px solid #2dc574;
  }
}
@media(max-width:768px){
  .custom-checkbox > input:checked + span::after {
    top: 5px;
  }
  .custom-checkbox > input:checked + span::before {
    border: 2px solid #2dc574;
  }
}

</style>