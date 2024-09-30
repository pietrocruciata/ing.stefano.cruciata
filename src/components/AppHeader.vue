<template>
    <div class=" d-flex justify-content-center bg-header gap-2">

        <div class=" col-sm-4 align-self-center">
            <img src="/img/logo.png" alt="">
        </div>

        <nav class="d-flex gap-4 gap-sm-5 align-items-center col-sm-8 justify-content-center">

            <RouterLink :class="$route.fullPath === '/' ? 'text-header' : 'c-white'" :to="{ name: 'home' }">
                Home
            </RouterLink>
            <RouterLink :class="$route.fullPath === '/projects' ? 'text-header' : 'c-white'" :to="{ name: 'projects' }">
                I
                Progetti
            </RouterLink>
            <RouterLink :class="$route.fullPath === '/contact' ? 'text-header' : 'c-white'" :to="{ name: 'contact' }">
                Contatti
            </RouterLink>
            <RouterLink :class="$route.fullPath === '/me' ? 'text-header' : 'c-white'" :to="{ name: 'me' }">
                Chi Sono
            </RouterLink>

        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>