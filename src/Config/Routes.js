import { lazy,useMemo } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import HeaderMatch from "../Components/Header/HeaderMatch";
import TestCom from '../Pages/test'


const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Explore = lazy(() => import("../Pages/Explore/Explore"));
const Search = lazy(() => import("../Pages/Explore/Search"));
const Football = lazy(() => import("../Pages/Football/Football"));




export const routerHeader = [
    {
      element: <Header login={true} />,
      path: "/",
    },
    {
      element: "",
      path: "/login",
    },
    {
      element: <Header />,
      path: "/football",
    },
    {
      element: <Header />,
      path: "/explore",
    },
    {
      element: <Header />,
      path: "/search",
    },
]


export const routerMain = [
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <Football />,
      path: "/football",
    },
    {
      element: <Explore />,
      path: "/explore",
    },
    {
      element: <Search />,
      path: "/search",
    },
]

export const routerFooter = [
    {
      element: <Footer />,
      path: "/",
    },
    {
        element: <Footer />,
      path: "/login",
    },
    {
      element: <Footer />,
      path: "/football",
    },
    {
      element: <Footer />,
      path: "/explore",
    },
    {
      element: <Footer />,
      path: "/search",
    },
]

export const routerDark = [
    {
      element: <TestCom />,
      path: "/",
    },
    {
        element: "",
      path: "/login",
    },
]