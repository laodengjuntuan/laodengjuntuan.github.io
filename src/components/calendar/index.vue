<template>
    <div id="calendar">
        <calendar-header />
        <calendar-week />
        <calendar-table />
    </div>
</template>

<script setup lang="ts">
    import CalendarHeader from './calendar-header.vue'
    import CalendarWeek from './calendar-week.vue'
    import CalendarTable from './calendar-table.vue'
    import calendarService from './calendar-service'

    calendarService.initMonthDateList()
</script>

<style scoped>
#calendar {
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 300px;
}
</style>