<template>
    <section class="">


        <!-- <RouterLink class="view-document mx-5 my-2" :to="{ name: 'projects' }">
                    indietro
                </RouterLink> -->

        <div class="description  py-3 animate__animated animate__zoomIn container text-center">
            <div>
                <span class="underline services ms-3">{{ store.data[$route.params.id].name }}</span>

            </div>
        </div>
        <!-- <div class="d-flex justify-content-center">
            <div class="col-lg-4 ">
                <img :src="store.data[$route.params.id].imgStart" alt="" class="img-size">
            </div>
            <div class="col-4 d-none d-lg-flex">
                <img :src="store.data[$route.params.id].imgMedium" alt="" class="img-size">
            </div>
            <div class="col-4 d-none d-lg-flex">
                <img :src="store.data[$route.params.id].imgNow" alt="" class="img-size">
            </div>
        </div> -->
        <div class="d-flex justify-content-around slider">
            <div class="slides">
                <div class="col-lg-4 ">
                    <img :src="store.data[$route.params.id].imgStart" alt="" class="img-size">
                </div>
                <div class="col-lg-4  ">
                    <img :src="store.data[$route.params.id].imgMedium" alt="" class="img-size">
                </div>
                <div class="col-lg-4  ">
                    <img :src="store.data[$route.params.id].imgNow" alt="" class="img-size">
                </div>
            </div>


            <button class="prev d-lg-none" @click="changeSlide(-1)">&#10094;</button>
            <button class="next d-lg-none" @click="changeSlide(1)">&#10095;</button>
        </div>


        <div class="d-lg-flex ">
            <div class="col-lg-4 bg-lightblue p-3">
                <div class="d-flex justify-content-between">
                    <ul class="text-orange">Committente
                        <li class="description">{{ store.data[$route.params.id].committente }}</li>
                    </ul>
                    <div class="description mt-1">
                        <img src="/img/place.png" alt="" class="place-size "><span>{{ store.data[$route.params.id].city
                            }}</span>
                        <div class="text-end">{{ store.data[$route.params.id].date
                            }}</div>
                    </div>
                </div>

                <ul class="text-orange">Prestazioni
                    <li class="description">-Responsabile dei lavori </li>
                    <li class="description">-Coordinazione dei lavori in fase di progettazione ed esecuzione</li>

                </ul>

                <ul class="text-orange">Responsabile Progetto
                    <li class="description">
                        David
                    </li>
                </ul>

            </div>
            <div class="text-center p-5  description-large  col-lg-8 bg-blue d-flex  flex-column">

                <div class="">
                    {{ store.data[$route.params.id].description }}

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
            store,
            currentSlide: 0
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

    methods: {
        changeSlide(direction) {
            const totalSlides = 3;
            this.currentSlide += direction;

            if (this.currentSlide < 0) {
                this.currentSlide = totalSlides - 1;
            } else if (this.currentSlide >= totalSlides) {
                this.currentSlide = 0;
            }

            const slides = this.$el.querySelector('.slides');
            slides.style.transform = `translateX(-${this.currentSlide * 100}%)`;
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
    color: white;

}

.underline {
    font-family: math;
    border-bottom: 2px solid $orange;

}

.description {
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-align: justify;
    font-family: math;
}

.description-large {
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
    font-size: 18px;
    font-weight: 700;
    color: $orange;
}

.place-size {
    width: 20px;
    margin-bottom: 5px;
}

.slider {
    position: relative;
    max-width: 100%;
    overflow: hidden;
}

.slides {
    display: flex;
    width: 100%;
    transition: transform 0.5s ease-in-out;
}

.slides .col-lg-4,
.slides .col-4 {
    min-width: 100%;
    @media(min-width: 992px){
        min-width: 0;
        
    }

}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    padding: 10px;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>