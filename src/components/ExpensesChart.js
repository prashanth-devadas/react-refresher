import React from 'react';

import Chart from './Chart/Chart';

const ExpensesChart = props => {
        const chartDataPoints = [
            {label: 'Jan', value: 0},
            {label: 'Feb', value: 0},
            {label: 'Mar', value: 0},
            {label: 'Apr', value: 0},
            {label: 'May', value: 0},
            {label: 'Jun', value: 0},
            {label: 'Jul', value: 0},
            {label: 'Aug', value: 0},
            {label: 'Sep', value: 0},
            {label: 'Oct', value: 0},
            {label: 'Nov', value: 0},
            {label: 'Dec', value: 0},
        ]
    
        // console.log( props.expFilterResult);
    
    for(let i=0; i<props.expFilterResult.length; i++){
        // console.log(props.expFilterResult[i]);
        const expense = props.expFilterResult[i];
        const expenseMonth = expense.date.getMonth(); // Starting at zero; 0 - Jan... 11 - Dec
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart  dataPoints={chartDataPoints}/>
}

export default ExpensesChart;