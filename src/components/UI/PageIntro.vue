<template>
  <div class="page-intro">
    <Container>
      <div class="page-intro__header">
        <h1 class="page-intro__heading main-heading">
          <p>
            <slot></slot>
          </p>
        </h1>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "../../components/UI/Container";

export default {
  components: {Container}
}
</script>

<style lang="scss" scoped>
.page-intro {
  background: #f9f9fc;
  margin-bottom: 1.3rem;
  padding: 0 0 0.1rem;
  &__header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 1.5rem;
  }
}
.page-intro__header .main-heading {
  margin: 0;
}

.main-heading {
  margin-bottom: 1.5rem;
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  font-size: 2.6rem;
  font-weight: 600;
  color: #000;
  line-height: 1.25;
}

@media (min-width: 768px){
  .main-heading {
    font-size: 3rem;
  }
}
</style>