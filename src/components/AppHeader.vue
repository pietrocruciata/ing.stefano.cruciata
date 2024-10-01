<template>

    <div class="container">
        <div class="row justify-content-between">
            
                <img src="/public/img/Logo_orizzzontale.png" alt="" class="logo">
            

            <nav class="d-flex gap-sm-4 align-items-center col-sm-8 justify-content-sm-end justify-content-center me-4">

                <RouterLink :class="$route.fullPath === '/' ? 'text-header' : 'c-green'" :to="{ name: 'home' }">
                    Home
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/projects' ? 'text-header' : 'c-green'"
                    :to="{ name: 'projects' }">
                    Progetti
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/contact' ? 'text-header' : 'c-green'"
                    :to="{ name: 'contact' }">
                    Contatti
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/me' ? 'text-header' : 'c-green'" :to="{ name: 'me' }">
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
    
}

.c-green {
    color: $green;
    font-size: 18px;
    padding: 10px;
    border-right: 4px solid $green;

}

.text-header {

    font-size: 22px;
    padding: 10px;
    color: $orange;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 4px solid $orange;

    // background-color: $green;

}
</style>





  