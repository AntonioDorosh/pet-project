import App from "../App.tsx";
import PurchaseList from "../components/PurchaseList/PurchaseList.tsx";
import React from 'react'

import {createBrowserRouter} from "react-router-dom";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/purchaseList',
        element: <PurchaseList/>
    },
    {
        path: '/favoritePage',
        element: <FavoritesPage/>
    }
]);