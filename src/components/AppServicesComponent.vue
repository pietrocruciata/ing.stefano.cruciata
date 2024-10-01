<template>
    
        <div class="row ">
            <div class="services text-center mb-4">SERVIZI E COMPETENZE</div>
            <div class="col-md-3 text-center p-3 p-sm-2">
                <img src="/img/houzz.png" alt="" class="img-size">

                <div class="text-orange">
                    Progettazione Strutturale
                </div>
                <div class="description ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div>

            </div>
            <div class="col-md-3 text-center p-3 p-sm-2">
                <div class="text-orange">
                    <div>
                        <img src="/img/workers.png" alt="" class="img-size">

                    </div>

                    Direzione Lavori
                </div>
                <div class="description ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div>
            </div>
            <div class="col-md-3 text-center p-3 p-sm-2">
                <div>
                        <img src="/img/confirm.png" alt="" class="img-size">

                    </div>
                <div class="text-orange">
                    Analisi e consulenze
                </div>
                <div class="description ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div>
            </div>
            <div class="col-md-3 text-center p-3 p-sm-2">
                <div>
                        <img src="/img/renovation.png" alt="" class="img-size">

                    </div>
                <div class="text-orange">
                    Ristrutturazioni
                </div>
                <div class="description ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus est exercitationem excepturi
                    velit assumenda itaque totam quisquam id vero.
                </div>
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


.img-size {

    width: 100px;
}

.text-orange {
    font-size: 22px;
    font-weight: 700;
    color: $orange;
}

.description {
    color: white;
    font-weight: 600;
    font-size: 18;
}

.services{
    color: white;
    font-size: 38px;
    font-weight: 700;
    // background-color: $orange;
}
</style>