<template>
    <section class="pb-5">

  
    <div class="services text-center py-5">
        ALC<span class="underline">UNI LAV</span>ORI
    </div>
    <div class="container">
        <div class="row gap-5 justify-content-center">
            <ProjectCardComponent v-for="(project, i) in store.data" :key="i" :project="project">
            </ProjectCardComponent>
        </div>
    </div>
</section>

</template>

<script>
import ProjectCardComponent from '../components/ProjectCardComponent.vue';
import { store } from '../store';

export default {
    components: {
        ProjectCardComponent
    },

    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(this.store.projects);

    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.underline {
    font-family: math;
    border-bottom: 2px solid $orange;
}

.services {
    color: white;
    font-size: 38px;
    font-weight: 700;
    font-family: math;
    background-color: $green;
    color: black;

}
</style>