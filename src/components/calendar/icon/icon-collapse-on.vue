<template>
    <svg t="1692337485610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1734" :width="size" :height="size">
        <path d="M179.2 366.933333l298.666667 398.208a42.666667 42.666667 0 0 0 68.266666 0l298.666667-398.208A42.666667 42.666667 0 0 0 810.666667 298.666667H213.333333a42.666667 42.666667 0 0 0-34.133333 68.266666z" :fill="color" p-id="1735"></path>
    </svg>
</template>

<script setup lang="ts">
    interface IIconProps {
        size?: string | number
        color?: string
    }
    withDefaults(defineProps<IIconProps>(), {
        size: 16,
        color: '#333333'
    })
</script>