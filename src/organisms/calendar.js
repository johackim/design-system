import React, { useState } from 'react';

const Calendar = ({ className }) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const getDates = (start, end) => {
        const dates = [];
        const currentDate = new Date(start);

        while (currentDate <= end) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

    const firstDayOfTheCurrentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfTheCurrentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDayOfTheCurrentMonth.setDate(firstDayOfTheCurrentMonth.getDate() - firstDayOfTheCurrentMonth.getDay()));
    const endDate = new Date(lastDayOfTheCurrentMonth.setDate(lastDayOfTheCurrentMonth.getDate() + (35 - getDates(startDate, lastDayOfTheCurrentMonth).length)));

    const currentMonthDates = getDates(startDate, endDate);

    return (
        <div className={`text-center text-gray-700 dark:text-gray-300 ${className}`}>
            <div className="flex items-center">
                <button type="button" onClick={prevMonth} className="-m-1.5 flex flex-none items-center justify-center p-1.5 hover:text-gray-400 focus:outline-none">
                    <span className="sr-only">Previous month</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex-auto font-semibold capitalize">
                    <span>{currentMonth.toLocaleDateString('fr-FR', { month: 'long' })}</span>
                    {' '}
                    <span>{currentMonth.toLocaleDateString('fr-FR', { year: 'numeric' })}</span>
                </div>

                <button type="button" onClick={nextMonth} className="-m-1.5 flex flex-none items-center justify-center p-1.5 hover:text-gray-400 focus:outline-none">
                    <span className="sr-only">Next month</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="mt-6 grid grid-cols-7 text-xs leading-6">
                <div>L</div>
                <div>M</div>
                <div>M</div>
                <div>J</div>
                <div>V</div>
                <div>S</div>
                <div>D</div>
            </div>

            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 dark:bg-gray-500 text-sm shadow ring-1 ring-gray-200 dark:ring-gray-500">
                {currentMonthDates.map((date, id) => (
                    <div
                        key={date}
                        className={`
                            bg-white dark:bg-gray-900 py-1.5
                            ${date.getMonth() === currentMonth.getMonth() ? 'text-gray-700 dark:text-gray-300' : 'text-gray-300 dark:text-gray-700'}
                            ${id === 0 ? 'rounded-tl-lg' : ''}
                            ${id === 6 ? 'rounded-tr-lg' : ''}
                            ${id === currentMonthDates.length - 7 ? 'rounded-bl-lg' : ''}
                            ${id === currentMonthDates.length - 1 ? 'rounded-br-lg' : ''}
                        `}
                    >
                        <time dateTime={date} className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${date.toDateString() === today.toDateString() ? 'font-semibold bg-gray-900 dark:bg-gray-300 text-gray-300 dark:text-gray-800' : ''}`}>
                            {date.getDate()}
                        </time>
                    </div>
                ))}
            </div>
        </div>
    );
};

Calendar.defaultProps = {
    className: '',
};

export default Calendar;
