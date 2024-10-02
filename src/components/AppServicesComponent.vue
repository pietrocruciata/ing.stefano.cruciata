<template>

    <div class="row mx-5 ">
        <div class="services text-center mb-4">SERVIZI E COMPETENZE</div>
        <div class="col-md-3 text-center  p-sm-2">
            <img src="/img/houzz.png" alt="" class="img-size">

            <div class="text-orange">
                Progettazione Strutturale
            </div>
            <div class="description ">
                Progettazione strutturale e architettonica di nuove opere edili, sia parzialmente che nella loro
                interezza. Il cliente verrà seguito dall'idea iniziale fino alla realizzazione del progetto e messo al
                corrente di tutte le scelte progettuali. Il rispetto delle normative di settore è di fondamentale
                importanza per ottenere un'opera “sicura” e priva di vizi.
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
                Gestione del cantiere e dell'andamento dei lavori. Accettazione dei materiali utilizzati e valutazione
                della loro qualità, controllo dei processi produttivi e rispondenza fra progettato e costruito. Gestione
                delle possibili anomalie costruttive, delle opere in variante e della contabilità di cantiere.
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
                Valutazione e studio preventivo dei fenomeni di dissesto che possono presentarsi sulle costruzioni
                esistenti (crepe o cedimenti), per trovarne le cause e le relative soluzioni tramite interventi ad hoc.
                Consulenze strutturali, analisi di vulnerabilità sismica e valutazione della prestazione energetica
                degli edifici (APE).
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
                Ristrutturazioni leggere e pesanti di appartamenti o interi edifici. Verranno seguiti sia gli aspetti
                architettonici che eventualmente quelli strutturali; da piccoli interventi locali (aperture, vani,
                tramezzi) fino ad operazioni più complesse come miglioramenti o adeguamenti sismici di interi edifici.
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

.services {
    color: white;
    font-size: 38px;
    font-weight: 700;
    // background-color: $orange;
}
</style>