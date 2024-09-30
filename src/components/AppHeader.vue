<template>

    <div class="container">
        <div class="row justify-content-between">
            
                <img src="/public/img/Logo_orizzzontale.png" alt="" class="logo">
            

            <nav class="d-flex gap-4 gap-sm-5 align-items-center col-sm-8 justify-content-center">

                <RouterLink :class="$route.fullPath === '/' ? 'text-header' : 'c-white'" :to="{ name: 'home' }">
                    Home
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/projects' ? 'text-header' : 'c-white'"
                    :to="{ name: 'projects' }">
                    Progetti
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/contact' ? 'text-header' : 'c-white'"
                    :to="{ name: 'contact' }">
                    Contatti
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/me' ? 'text-header' : 'c-white'" :to="{ name: 'me' }">
                    Chi Sono
                </RouterLink>

            </nav>
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

.logo {
    padding: 5px;
    max-width: 300px;
    // background-color: #fffde7;
   
}

.c-white {
    color: $green;
    font-size: 18px;
}

.text-header {

    font-size: 22px;
    color: $orange;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>