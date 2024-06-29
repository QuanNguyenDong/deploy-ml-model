import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container">
            <Bar
                data={chartData}
                options={{

                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: { grid: { display: false } },
                        y: {
                            min: 0,
                            max: 1,
                            ticks: {
                                stepSize: 0.5,
                            },
                            grid: { display: false },
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;
