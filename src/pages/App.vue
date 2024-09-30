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
  <section>
    <header>
      <AppHeader></AppHeader>
    </header>

    <main>
    <RouterView></RouterView>
    </main>

    <footer>
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
</style>
