import Chart from 'react-apexcharts';

export default function TransactionChartSummary({ expens = 100, income = 100 }) {

    const options = {
        labels: ["Income", "Expense"],
        color: ['#21BF73', '#FD5E53'],
        chart: {
            width: '50px',
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                },
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        hover: {
            mode: null,
        },
        plotOptions: {
            expandOnClick: false,
            donut: {
                label: {
                    show: false,
                },
            },
        },
        fill: {
            colors: ['#21BF73', '#FD5E53']
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            style: {
                fontSize: '12px',
                fontFamily: undefined,
                backgroundColor: '#000000',
            }
        },
    }

    return (
        <div>
            <h1>Transaction Chart Summary</h1>
            <Chart
                options={options}
                series={[income, expens]}
                type='pie'
                width={'100%'}
                height={'100%'}
            />
        </div>
    );
}