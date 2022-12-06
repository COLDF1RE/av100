<template>
  <div class="wide-section settings-section__subsection">
    <div class="wide-section__header is-flex">
      <div class="wide-section__heading">
        {{ heading }}
      </div>
    </div>
    <div class="wide-section__body">
      <div v-if="headerSubCaption" class="settings-section__subcaption caption is-desktop-hidden">
        {{ headerSubCaption }}
      </div>
      <div v-if="postEntry" class="post-entry">
        <p class="is-muted">
          {{ postEntry }}
        </p>
      </div>
      <div class="settings-section__fields">
        <div v-if="bodySubCaption" class="settings-section__subcaption caption is-mobile-hidden">
          {{ bodySubCaption }}
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    heading: [String, Number],
    headerSubCaption: [String, Number],
    bodySubCaption: [String, Number],
    postEntry: [String, Number],
    switcher: [String, Number],
  },
}
</script>

<style lang="scss" scoped>

</style>