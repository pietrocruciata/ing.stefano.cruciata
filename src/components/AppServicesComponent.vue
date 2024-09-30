<template>
    <div class="container">
        <div class="row ">
            <div class="col-md-4 text-center">
                <div class="text-orange">
                    Progettazione Strutturale
                </div>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div>
                
            </div>
            <div class="col-md-4 text-center"><div class="text-orange">
                    Direzione Lavori
                </div>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div></div>
            <div class="col-md-4 text-center"><div class="text-orange">
                    Sugnu Babbu
                </div>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.text-orange {
    font-size: 22px;
    font-weight: 700;
    color: $orange;
}

.description{
color: white;
font-weight: 600;
font-size: 18;
}
</style>