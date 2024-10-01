<template>
    <section class="bg-darkgrey">
        <div class="container">
            <AppHeroComponent></AppHeroComponent>

        </div>
    </section>


    <section class="bg-green py-5">
        <AppServicesComponent></AppServicesComponent>

    </section>

</template>

<script>
import AppHeroComponent from '../components/AppHeroComponent.vue';
import AppServicesComponent from '../components/AppServicesComponent.vue';



export default {
    components: {
        AppHeroComponent,
        AppServicesComponent
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.bg-green {
    background-color: $green;
    border-top: 4px solid $orange;
}

.bg-darkgrey{
    background-color: $black;
    
}
</style>