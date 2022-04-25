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
        <div className={`tw-text-center tw-text-gray-700 dark:tw-text-gray-300 ${className}`}>
            <div className="tw-flex tw-items-center">
                <button type="button" onClick={prevMonth} className="-tw-m-1.5 tw-flex tw-flex-none tw-items-center tw-justify-center tw-p-1.5 hover:tw-text-gray-400 focus:tw-outline-none">
                    <span className="tw-sr-only">Previous month</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-5 tw-w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="tw-flex-auto tw-font-semibold tw-capitalize">
                    <span>{currentMonth.toLocaleDateString('fr-FR', { month: 'long' })}</span>
                    {' '}
                    <span>{currentMonth.toLocaleDateString('fr-FR', { year: 'numeric' })}</span>
                </div>

                <button type="button" onClick={nextMonth} className="-tw-m-1.5 tw-flex tw-flex-none tw-items-center tw-justify-center tw-p-1.5 hover:tw-text-gray-400 focus:tw-outline-none">
                    <span className="tw-sr-only">Next month</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-5 tw-w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="tw-mt-6 tw-grid tw-grid-cols-7 tw-text-xs tw-leading-6">
                <div>L</div>
                <div>M</div>
                <div>M</div>
                <div>J</div>
                <div>V</div>
                <div>S</div>
                <div>D</div>
            </div>

            <div className="tw-isolate tw-mt-2 tw-grid tw-grid-cols-7 tw-gap-px tw-rounded-lg tw-bg-gray-200 dark:tw-bg-gray-500 tw-text-sm shadow tw-ring-1 tw-ring-gray-200 dark:tw-ring-gray-500">
                {currentMonthDates.map((date, id) => (
                    <div
                        key={date}
                        className={`
                            tw-bg-white dark:tw-bg-gray-900 tw-py-1.5
                            ${date.getMonth() === currentMonth.getMonth() ? 'tw-text-gray-700 dark:tw-text-gray-300' : 'tw-text-gray-300 dark:tw-text-gray-700'}
                            ${id === 0 ? 'tw-rounded-tl-lg' : ''}
                            ${id === 6 ? 'tw-rounded-tr-lg' : ''}
                            ${id === currentMonthDates.length - 7 ? 'tw-rounded-bl-lg' : ''}
                            ${id === currentMonthDates.length - 1 ? 'tw-rounded-br-lg' : ''}
                        `}
                    >
                        <time dateTime={date} className={`tw-mx-auto tw-flex tw-h-7 tw-w-7 tw-items-center tw-justify-center tw-rounded-full ${date.toDateString() === today.toDateString() ? 'tw-font-semibold tw-bg-gray-900 dark:tw-bg-gray-300 tw-text-gray-300 dark:tw-text-gray-800' : ''}`}>
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
