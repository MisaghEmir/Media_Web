import { lazy } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import HeaderMatch from "../Components/Header/HeaderMatch";
import TestCom from '../Pages/test'


const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));


export const routerHeaderMatch = [
    {
      element: <HeaderMatch />,
      path: "/",
    },
    {
      element: "",
      path: "/login",
    },
]


export const routerHeader = [
    {
      element: <Header />,
      path: "/",
    },
    {
      element: "",
      path: "/login",
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