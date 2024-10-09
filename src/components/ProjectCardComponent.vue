<template>
  <RouterLink class="  col-lg-3 project " :to="{ name: 'project', params: { id: i } }">
    <img :src="project.img" alt="" class="img-projects">

    <div class="card-body bg-white">
      <div class="city-zone p-1 d-flex justify-content-between ">
        <div>
          <img src="/img/place.png" alt="" class="place-size">{{ project.city }}

        </div>
        <div>
          <img src="/public/img/client.png" alt="" class="place-size me-1">{{ project.committente }}
        </div>
      </div>
      <div class=" p-2">
        <span class="name me-2">{{ project.name }}</span>
      </div>

    </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {

    }
  },

  props: {
    project: {
      type: Object,
    },
    i: {
      type: Number
    }

  },
}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.img-projects {
  width: 100%;
  height: 200px;

  @media(max-width: 991px) {
    height: auto;
  }
}

.project {
  box-shadow: 0 8px 16px $black;

  &:hover {
    transform: scale(1.05);

  }
}

.city-zone {
  background-color: $blue;
  color: white;
}

.name {
  color: $orange;
  font-size: 22px;
}

.place-size {
  width: 20px;
}
</style>