<template>
    <section class="">


        <!-- <RouterLink class="view-document mx-5 my-2" :to="{ name: 'projects' }">
                    indietro
                </RouterLink> -->

        <div class="services text-center py-3 animate__animated animate__zoomIn">
            <span class="underline">{{ store.data[$route.params.id].name }}</span>
        </div>
        <div class="d-flex justify-content-center">
            <div class="col-lg-4 ">
                <img :src="store.data[$route.params.id].img" alt="" class="img-size">
            </div>
            <div class="col-4 d-none d-lg-flex">
                <img :src="store.data[$route.params.id].img" alt="" class="img-size">
            </div>
            <div class="col-4 d-none d-lg-flex">
                <img :src="store.data[$route.params.id].img" alt="" class="img-size">
            </div>
        </div>

        <div class="d-flex ">
            <div class="col-lg-4 bg-lightblue p-3">
            <ul class="text-orange">Committente
                <li class="description">{{ store.data[$route.params.id].committente }}</li>
            </ul>
            
            </div>
            <div class="text-center p-3  description  col-lg-8 bg-blue ">
                {{ store.data[$route.params.id].description }}
            </div>


        </div>





    </section>
</template>

<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    watch: {
        'store.getdata'(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue.length > 0) {
                    this.store.data.projetcs(this.$route.params.id)
                }
            }
        }
    },


    mounted() {
        console.log(this.store.data);
        console.log(this.store.data.name);


    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.img-size {
    height: 250px;
    width: 100%;
}

.services {
    color: white;
    font-size: 38px;
    font-weight: 700;
    font-family: math;
    background-color: $green;
    color: black;

}

.underline {
    font-family: math;
    border-bottom: 2px solid $orange;
}

.description {
    color: white;
    font-weight: 600;
    font-size: 18px;
    text-align: justify;
    font-family: math;
}

.bg-blue {
    background-color: $blue;
}

.bg-lightblue {
    background-color: #5286bd;

}

.text-orange {
    font-size: 22px;
    font-weight: 700;
    color: $orange;
}
</style>