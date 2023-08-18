import type { ICalendarDate } from "calendar"

const DayMS = 23 * 60 * 60 * 1000

export function isEqualDate(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
}

export function getFirstDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function getLastDate(date: Date):Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

export function getCurrMonthDateList(date: Date) {
    const dateList: Array<ICalendarDate> = []
    const firstDate = getFirstDate(date)
    const lastDate = getLastDate(date)

    const today = new Date()

    for (let i = 1; i < lastDate.getDate() + 1; i++) {
        const currDate = new Date(firstDate)
        currDate.setDate(i)

        dateList.push({
            date: currDate,
            isCurrMonth: true,
            day: currDate.getDate(),
            isToday: isEqualDate(currDate, today)
        })
    }
    return dateList
}
export function getPrevTailDateList(date: Date) {
    const dateList: Array<ICalendarDate> = []
    const firstDate = getFirstDate(date)
    const firstDateTime = firstDate.getTime()
    const firstDateWeek = firstDate.getDay()

    for (let i = 0; i < firstDateWeek; i++) {
        const currDate = new Date(firstDateTime - (i + 1) * DayMS)

        dateList.unshift({
            date: currDate,
            isPrevMonth: true,
            day: currDate.getDate()
        })
    }
    return dateList
}

export function getNextHeadDateList(date: Date) {
    const dateList: Array<ICalendarDate> = []
    const lastDate = getFirstDate(date)
    const lastDateTime = lastDate.getTime()
    const lastDateWeek = lastDate.getDay()

    for (let i = 0; i < lastDateWeek; i++) {
        const currDate = new Date(lastDateTime - (i + 1) * DayMS)

        dateList.push({
            date: currDate,
            isNextMonth: true,
            day: currDate.getDate()
        })
    }
    return dateList
}

function getMonthDateList(date: Date) {
    const preDateList = getPrevTailDateList(date)
    const currDateList = getCurrMonthDateList(date)
    const nextDateList = getNextHeadDateList(date)

    return preDateList.concat(currDateList).concat(nextDateList)
}

export function getNextMonthDate(date: Date) {
    const year = date.getFullYear()

    let nextYear = year
    let nextMonth = (date.getMonth() + 1) + 1
    let nextDay = date.getDate()

    if (nextMonth === 13) {
        nextYear += 1
        nextMonth = 1
    }

    const lastDay = new Date(nextYear, nextMonth, 0).getDate()

    if (nextDay > lastDay) {
        nextDay = lastDay
    }
    return new Date(`${nextYear}/${nextMonth}/${nextDay}`)
}



export function getPrevMonthDate(date: Date) {

    let prevYear = date.getFullYear()
    let prevMonth = (date.getMonth() + 1) - 1
    let prevDay = date.getDate()

    if (prevMonth === 0) {
        prevYear -= 1
        prevMonth = 12
    }

    const lastDay = new Date(prevYear, prevMonth, 0).getDate()

    if (lastDay < prevDay) {
        prevDay = lastDay
    }
    return new Date(`${prevYear}/${prevMonth}/${prevDay}`)
}


export default getMonthDateList