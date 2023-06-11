import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PurchaseList from "../components/PurchaseList/PurchaseList.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: 'purchaseList',
        element: <PurchaseList/>
    }
]);