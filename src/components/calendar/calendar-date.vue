<template>
    <div id="calendar-date">
        <div class="date-text" :class="{
            'date-selected': isSelected,
            'date-today': dateItem.isToday,
            'date-curr-month': dateItem.isCurrMonth,
            'date-prev-month': dateItem.isPrevMonth,
            'date-next-month': dateItem.isNextMonth,
        }">
            {{ dateItem.day }}
        </div>
    </div>
</template>

<script setup lang="ts">
    // import ICalendarItem from 'calendar'
    import type { ICalendarDate } from 'calendar'

    defineProps<{
        dateItem: ICalendarDate,
        isSelected: boolean
    }>()
</script>

<style scoped lang="scss">
    #calendar-date {
        width: 34px;
        height: 34px;

        .date-text {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            box-sizing: border-box;

            cursor: pointer;

            &:hover {
                background-color: #e1eaff;
            }
        }

        .date-selected {
            background-color: #3370ff !important;
            color: #fff !important;
        }
        .date-today {
            border: 1px solid #3370ff;
            color: #3370ff;
        }
        .date-curr-month {
            color: #333;
        }
        .date-prev-month {
            color: #999;
        }
        .date-next-month {
            color: #999;
        }
    }
</style>