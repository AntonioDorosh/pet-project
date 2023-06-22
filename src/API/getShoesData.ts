import axios from "axios";
import {APIKEY} from "./APIKEY.ts";

export const getShoesData = async () => {
    try {
        const {data} = await axios.get(APIKEY);
        return data;
    } catch (e) {
        console.error(e)
    }
};

