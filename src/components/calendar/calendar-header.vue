<template>
    <div id="calendar-header">
        <div class="month-text">{{ monthText }}</div>
        <div class="month-swithcher">
            <icon-arrow-left color="#717171" @click="calendarService.toPrevMonth()" />
            <icon-arrow-right color="#717171" @click="calendarService.toNextMonth()" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import IconArrowLeft from './icon/icon-arrow-left.vue'
    import IconArrowRight from './icon/icon-arrow-right.vue'
    import { computed } from 'vue'
    import calendarService from './calendar-service'
    
    const monthText = computed(() => {
        const selectedDate = calendarService.selectedDate.value
        
        const year = selectedDate.getFullYear()
        const month = `${selectedDate.getMonth() + 1}`.padStart(2, '0')

        return `${year}年 ${month}月`
    })
</script>

<style scoped lang="scss">
    #calendar-header {
        height: 32px;

        display: flex;
        justify-content: space-between;
        align-items: center

    }

    .month-swithcher .icon {
        margin-left: 12px;
        padding: 4px;
        cursor: pointer;
        border-radius: 4px;

        &:hover {
            background-color: #d0d3d3;
        }
        &:active {
            background-color: #bcbfc1;
        }
    }
</style>