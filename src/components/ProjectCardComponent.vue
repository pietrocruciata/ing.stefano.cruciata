<template>
    <RouterLink :to="{ name: 'project', params: { id: item.id } }" class="card  col-md-3 ">
      <img :src="item.image" alt="">

      <div class="p-3 text-center">
        <h4 class="card-title title mt-2 mb-1">
          {{ item.name }}
        </h4>

      </div>

  </RouterLink>
</template>

<script>
    export default {
        data() {
    return {
      store,

    }
  },

  props: {
    item: {
      type: Object,
    },

  },
    }
</script>

<style lang="scss" scoped>

</style>