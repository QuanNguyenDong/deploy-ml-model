import "./card.css";
import BarChart from "../BarChart/BarChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function Card({ title, prediction = [] }) {
    const chartData = {
        labels:
            prediction.length === 2
                ? ["hateful", "normal"]
                : [
                      "harmful",
                      "severe",
                      "obscene",
                      "threat",
                      "insult",
                      "discriminate",
                      "normal",
                  ],
        datasets: [
            {
                data: prediction,
                backgroundColor: prediction.map((p) =>
                    p >= 0.5 ? "red" : "#777"
                ),
            },
        ],
    };

    return (
        <div className="card-container">
            <div className="card-header">
                <h2>{title}</h2>
            </div>
            <div className="card-body">
                <BarChart chartData={chartData} />
            </div>
        </div>
    );
}

export default Card;
