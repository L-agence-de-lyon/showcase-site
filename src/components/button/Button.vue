<template>
   <button class="button">{{text}}</button>
</template>
<script>

export default {
    name: "Button",
    props: {
        text: String
    }
}
</script>
<style>
    .button{
    }
</style>