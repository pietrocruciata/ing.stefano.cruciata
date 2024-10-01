<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {

    }
  }
}

</script>

<template>
  <section class="d-flex flex-column min-vh-100 max-vw-100 overflow">
    <header>
      <AppHeader></AppHeader>
    </header>

    <main class="flex-grow-1 bg-green d-flex flex-column justify-content-center">
    <RouterView></RouterView>
    </main>

    <footer >
      <AppFooter></AppFooter>
    </footer>
  </section>

</template>

<style scoped lang="scss">
@use '../style/partials/palette' as *;
@use '../style/general';
header{

  background-color: white;
  border-bottom: 4px solid $orange;
}

.bg-green{
  background-color: $green;
}

.overflow{
  overflow: hidden;
}
</style>
