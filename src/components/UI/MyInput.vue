<template>
    <div class="input-field settings-section__field">
      <label v-if="labelName" class="input-field__label caption">{{ labelName }}</label>
      <div class="input-field__main">
        <input :value="value" @input="updateInput" type="text" name="text-field" :placeholder="placeholder" :readonly="readonly" class="input-field__input input">
        <div class="extra-field__currency"></div>
        <small v-if="info" class="settings-section__info">{{ info }}</small>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    labelName: [String, Number],
    placeholder: [String, Number],
    readonly: [String],
    info: [String],
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>