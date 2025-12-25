const axios = require("axios")

const TOKEN = process.env.VIDEO_SDK_TOKEN;

const AxiosInstance = axios.create({
    baseURL: "https://api.videosdk.live/v2",
    headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
    },
});

AxiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

module.exports = AxiosInstance
