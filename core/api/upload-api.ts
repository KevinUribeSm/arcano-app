import axios from "axios";

const base = process.env.EXPO_PUBLIC_BASE_URL

export const uploadApi = axios.create({
    baseURL: base
})