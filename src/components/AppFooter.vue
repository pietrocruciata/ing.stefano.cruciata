<template>
    <section class="bg-darkgrey pt-4">
     <div class="container">
        <div class="row justify-content-between p-4">
           
            <div class="col-md-2">
                <div class="text-orange mb-2">
                    INFO
                </div>
                <div class="description">
                    <p>Mail: <a href="mailto:stefano.cruciata.93@gmail.com" class="social">Stefano.cruciata.93@gmail.com</a></p>
                    <p>Cell: <a href="tel:+393279527700" class="social">+39 3279527700</a></p>
                    <p>P.IVA: 12556230014</p>
                </div>
            </div>

            <div class="col-md-8 text-center logo p-3">
                <img src="/img/Logo_orizzzontale_ristretto.png" alt="">
            </div>

            <div class="col-md-2 text-lg-end">
                <div class="text-orange mb-2">
                    AREE OPERATIVE
                </div>
                <p class="description">Torino, (TO)</p>
                <p class="description">Milano, (MI)</p>
                <p class="description">FIRENZE, (FI)</p>
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
    border-bottom: 2px solid $green;
    
}

.logo{
    width: 300px;
}

</style>