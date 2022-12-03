<template>
    <div :class="[`lg:grid-cols-${countPerRow?countPerRow:3}`]" class="w-full text-center mb-5 bg-white border rounded-lg shadow-md p-8 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-black dark:border-gray-700 grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        <div v-for="content of contents" :key="content.title" >
            <component :is="content.icon" class="lg:h-20 lg:w-20 w-10 h-10 text-white m-auto">
                <slot />
            </component>
            <h5 class="mb-5 text-3xl font-bold text-gray-900 dark:text-white">{{content.title}}</h5>
            <p class="mb-8 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{content.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['contents','countPerRow'],
}
</script>