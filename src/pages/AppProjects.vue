<template>
    <div class="services text-center py-5">
        ALC<span class="underline">UNI LAV</span>ORI
    </div>
    <div class="container">
        <div class="row">
            <div v-for="(project, i) in projects" :key="i" :item="item">
                <ProjectCardComponent></ProjectCardComponent>
            </div>
        </div>
    </div>


</template>

<script>
import ProjectCardComponent from '../components/ProjectCardComponent.vue';

export default {
    components: {
        ProjectCardComponent
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