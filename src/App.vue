<template>
  <Nav />
  <router-view class="px-11 mt-20" />
</template>

<script>
import Nav from './components/nav/Nav.vue';
import './styles/app.css';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>

</style>
