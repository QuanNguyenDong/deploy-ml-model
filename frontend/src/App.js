import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
import { predict } from "./services/searchService";
import Card from "./components/Card/Card";

function App() {
    const models = ["simple_nn", "cnn", "bert"];
    const [predict1, setPredict1] = useState([0, 0]);
    const [predict2, setPredict2] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [predict3, setPredict3] = useState([0, 0, 0, 0, 0, 0, 0]);

    return (
        <div className="content container-md">
            <div className="header">
                <Header />
            </div>
            <div className="form-wrap">
                <SearchBar
                    makePrediction={async (input) => {
                        const p1 = await predict(models[0], input);
                        if (p1) setPredict1([p1[0], 1 - p1[0]]);

                        const p2 = await predict(models[1], input);
                        if (p2) setPredict2(p2);

                        const p3 = await predict(models[2], input);
                        if (p3) setPredict3(p3);
                    }}
                />
            </div>
            <div className="box-wrap">
                <Card title="Simple Neural Network" prediction={predict1}/>
                <Card title="Convolution Neural Network" prediction={predict2}/>
                <Card title="BERT model" prediction={predict3}/>
            </div>
        </div>
    );
}

export default App;
