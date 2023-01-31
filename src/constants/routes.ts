import Home from "@/pages/Home";
import About from "@/pages/About";
import Address from "@/pages/Adress";

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
        Component: Address,
        path: "/adress",
        pathname: "adress",
        isShowGnb: false
    }
] as const;

export default ROUTES;