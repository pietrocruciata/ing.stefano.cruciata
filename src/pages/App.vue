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

<style scoped></style>
