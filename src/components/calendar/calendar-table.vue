<template>
    <div id="calendar-table">
        <div class="calendar-content">
            <CalendarDate 
                v-for="(date, idx) in dateList" 
                :key="idx" 
                :date-item="date" 
                :is-selected="isDateSelected(date)"
                @click="calendarService.toCertainDate(date.date)" 
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import CalendarDate from './calendar-date.vue'
    import calendarService from './calendar-service'
    import { ICalendarItem } from 'calendar'
    import { isEqualDate } from './getMonthDateList'

    const dateList = calendarService.monthDateList

    function isDateSelected(dateItem: ICalendarItem) {
        return isEqualDate(dateItem.date, calendarService.selectedDate.value)
    }
</script>

<style scoped lang="scss">
    #calendar-table {
        width: 100%;
        height: 204px;
        
        .calendar-content {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>