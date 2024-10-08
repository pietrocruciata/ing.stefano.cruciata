<template>
    <section class="bg-darkblue d-flex justify-content-center">
        <div class="container">
            <div class="row ">
                <RouterLink class="view-document mx-5 my-2" :to="{ name: 'projects' }">
                    indietro
                </RouterLink>

                <div class="title">
                    {{ store.data.name }}
                </div>
                <div>
                    <img :src="store.data.img" alt="">
                </div>

                <div class="text-center my-3 description px-4 py-2">
                    {{ store.data.description }}

                </div>


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

<style lang="scss" scoped></style>