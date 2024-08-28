import { lazy } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import HeaderMatch from "../Components/Header/HeaderMatch";
import TestCom from '../Pages/test'


const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Explore = lazy(() => import("../Pages/Explore/Explore"));
const Football = lazy(() => import("../Pages/Football/Football"));




export const routerHeader = [
    {
      element: <Header />,
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