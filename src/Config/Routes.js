import { lazy,useMemo } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import HeaderMatch from "../Components/Header/HeaderMatch";
import TestCom from '../Pages/test'


const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const Overview = lazy(() => import("../Pages/Overview"));
const Explore = lazy(() => import("../Pages/Explore/Explore"));
const Search = lazy(() => import("../Pages/Explore/Search"));
const Football = lazy(() => import("../Pages/Football/Football"));
const League = lazy(() => import("../Pages/Football/League"));
const Matches = lazy(() => import("../Pages/Football/Matches"));
const MatchSingle = lazy(() => import("../Pages/Football/MatchSingle"));

const HeaderRoute = <Header login={true} styk={false} />


export const routerHeader = [
    {
      element: HeaderRoute,
      path: "/",
    },
    {
      element: "",
      path: "/login",
    },
    {
      element: HeaderRoute,
      path: "/football",
    },
    {
      element: HeaderRoute,
      path: "/football/laliga",
    },
    {
      element: HeaderRoute,
      path: "/explore",
    },
    {
      element: HeaderRoute,
      path: "/search",
    },
    {
      element: HeaderRoute,
      path: "/football/match",
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
      element: <League />,
      path: "/football/laliga",
    },
    {
      element: <Matches />,
      path: "/football/matches",
    },
    {
      element: <Explore />,
      path: "/explore",
    },
    {
      element: <Search />,
      path: "/search",
    },
    {
      element: <Overview />,
      path: "/overview",
    },
    {
      element: <MatchSingle />,
      path: "/football/match",
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
      path: "/football/laliga",
    },
    {
      element: <Footer />,
      path: "/football/matches",
    },
    {
      element: <Footer />,
      path: "/explore",
    },
    {
      element: <Footer />,
      path: "/search",
    },
    {
      element: <Footer />,
      path: "/football/match",
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