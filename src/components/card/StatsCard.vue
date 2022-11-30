<template>
    <div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-black from-black via-violet-800 to-gray-800 from-sky-400 to-indigo-900 dark:border-gray-700 flex items-center space-x-4">
        <div v-for="content of contents" :key="content.title" >
            <component :is="content.icon" class="h-20 w-20 text-white m-auto">
                <slot />
            </component>
            <h5 class="mb-5 text-3xl font-bold text-gray-900 dark:text-white">{{content.title}}</h5>
            <p class="mb-8 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{content.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['contents'],
}
</script>