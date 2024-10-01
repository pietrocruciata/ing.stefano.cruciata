<template>
    <section class="bg-darkgrey pt-5">
     <div class="container">
        <div class="row">
            <div class="col-sm-4 text-center">
                <div class="text-orange mb-2">
                    ZONE OPERATIVE
                </div>
                <div class="description ">
                    Torino, Milano, Firenze
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="text-orange mb-2">
                    CONTATTAMI
                </div>
                <div class="description">
                    <p> <a href="mailto:stefano.cruciata.93@gmail.com" class="social">Stefano.cruciata.93@gmail.com</a></p>
                    <p> <a href="tel:+393279527700" class="social">+39 3279527700</a></p>
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="text-orange">
                   SEGUIMI SU
                </div>
            </div>
        </div>
     </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';


.bg-darkgrey{
    background-color: $black;
    border-top: 4px solid $orange;
}

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

.social:hover {
    text-decoration: none;
    color: $green;
    
}

</style>