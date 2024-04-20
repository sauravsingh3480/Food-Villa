import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/head/header';
import Body from './components/body/bodyPart';
import Shimmer from '../shimmer';
import SwiggyApiCall from './swiggyAPI';
import CrntLocation from './crntLocation';
import ErrorPage from '../error'

// NavBar Pages
import SearchPage from './components/head/search';
import OfferPage from './components/head/offer';
import HelpPage from './components/head/help';
import SignInPage from './components/head/signIn';

//Restaurant Details Pages
import RestaurantCol1Details from './components/body/col1_whatInMind/retroCol1Detais';
import RestaurantCol4Details from './components/body/col5_allRestaurant/restaurantCol4Details';
const AppLayout = () => {

    const currLocation = CrntLocation();        //Ask For Current Location returns CurrLoction
    const cards = SwiggyApiCall({ currLocation });  //Do Swiggy API call returns Cards

    if (cards?.length == 0) return <Shimmer />;
    console.log(cards)
    return (
        <>
            <Header />
            <Outlet context={{ cards }} />
        </>

    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: '/search',
                element: <SearchPage />,
                errorElement: <ErrorPage />
            },
            {
                path: '/help',
                element: <HelpPage />,
                errorElement: <ErrorPage />
            },
            {
                path: '/offers',
                element: <OfferPage />,
                errorElement: <ErrorPage />
            },
            {
                path: '/signin',
                element: <SignInPage />,
                errorElement: <ErrorPage />
            },
            {
                path: '/restaurants/:id',
                element: <RestaurantCol4Details />,
                errorElement: <ErrorPage />
            },
            {
                path: '/collections/:id',
                element: <RestaurantCol1Details />,
                errorElement: <ErrorPage />
            }

        ]
    },

])

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<React.StrictMode>
    <RouterProvider router={appRouter} />
</React.StrictMode>);