import axios from "axios";
import {APIKEY} from "./APIKEY.ts";

const getShoesData = async () => {
    try {
        const {data} = await axios.get(APIKEY);
        return data;
    } catch (e) {
        console.error(e)
    }
};

export default getShoesData;