<template>
   <button class="nav-button">{{text}}</button>
</template>
<script>

export default {
    name: "NavButton",
    props: {
        text: String
    }
}
</script>
<style>
    .nav-button{
        background: #ededed;
        padding: 10px 20px;
        border-radius: 10px;
    }
</style>