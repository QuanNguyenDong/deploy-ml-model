import axios from "axios";

const baseURL = process.env.REACT_APP_MODEL_API;

const httpRequest = axios.create({
    baseURL,
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
