<template lang="">
    <nav class="nav-container flex justify-between py-6 px-11 w-full top-0 items-center">
        <div>
            <h1 class="font-bold text-2xl">AD69.</h1>
        </div>
        <div class="flex space-x-3">
            <router-link to="/">Services</router-link>
            <router-link to="/customer">Customer Stories</router-link>
            <router-link to="/about">About us</router-link>
            <router-link to="/blog">Blog</router-link>
        </div>

        <div>
            <ButtonNav text="Contact us"></ButtonNav>
        </div>
    </nav>
</template>

<script>
import ButtonNav from './nav-button/NavButton.vue';

export default {
    name: 'Nav',
    components: {
        ButtonNav
    }
}
</script>
<style>
.nav-container {
    position: fixed;
}
</style>