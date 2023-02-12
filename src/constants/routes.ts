import Home from "@/pages/Home";
import About from "@/pages/About";

const ROUTES = [
    {
        Component: Home,
        path: "/",
        pathname: "HOME",
        isShowGnb: true
    },
    {
        Component: About,
        path: "/about/:id",
        pathname: "About",
        isShowGnb: false

    },
] as const;

export default ROUTES;