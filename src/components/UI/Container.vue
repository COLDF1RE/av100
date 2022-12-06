<template>
  <div class="container-fluid">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container-fluid {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>