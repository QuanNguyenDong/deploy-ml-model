import axios from "axios";

const httpRequest = axios.create({
    baseURL: "http://localhost:8501",
});

export const predict = async (model, text) => {
    try {
        const res = await httpRequest.post(`/v1/models/${model}:predict`, {
            instances: [text],
        });

        return res.data["predictions"][0];
    } catch (error) {
        console.log(error);
    }
};
