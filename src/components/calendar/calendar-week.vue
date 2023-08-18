<template>
    <div id="calendar-week">
        <div class="week-item" v-for="(week, idx) in weekList" :key="week">{{ week }}</div>
    </div>
</template>

<script setup lang="ts">
    const weekList = ['日', '一', '二', '三', '四', '五', '六']
</script>

<style scoped lang="scss">
    #calendar-week {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .week-item {
            width: 34px;
            text-align: center;
        }
    }
</style>