import Home from "@/pages/Home";
import About from "@/pages/About";
import My from "@/pages/My";

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
    {
        Component: My,
        path: "/my",
        pathname: "My",
        isShowGnb: true
    },
] as const;

export default ROUTES;