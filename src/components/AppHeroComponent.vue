<template>
    <div class="slider">
      <div class="slider-wrapper" :style="sliderStyle" @transitionend="handleTransitionEnd">
        
        <img v-for="(image, index) in extendedImages" :src="image" :key="index" alt="slider image" />
      </div>
    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        images: [
          "/img/mole.webp",  
          "/img/building.jpg",
          "/img/building-2.jpg",
          "/img/building-3.jpg",
           

        ],
        currentImageIndex: 0,
        isTransitioning: true,
      };
    },
    computed: {
     
      extendedImages() {
        return [...this.images, this.images[0]];
      },
      sliderStyle() {
        return {
          transform: `translateX(-${this.currentImageIndex * 100}%)`,
          transition: this.isTransitioning ? "transform 2s ease-in-out" : "none"
        };
      }
    },
    mounted() {
      this.startSlider();
    },
    methods: {
      startSlider() {
        setInterval(() => {
          if (this.currentImageIndex < this.images.length) {
            this.isTransitioning = true;
            this.currentImageIndex++;
          } else {

            this.isTransitioning = false;
            this.currentImageIndex = 0;
          }
        }, 4000);
      },
      handleTransitionEnd() {
   
        if (this.currentImageIndex === this.images.length) {
          this.isTransitioning = false;
          this.currentImageIndex = 0;
        }
      }
    }
  };
  </script>
  



<style scoped>
.slider {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.slider-wrapper {
    display: flex;
    width: 100%;
}

.slider img {
    width: 100%;
    max-height: 700px;
    flex-shrink: 0;
    object-fit: cover;
}
</style>