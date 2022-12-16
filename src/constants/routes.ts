import Home from "@/pages/Home";
import About from "@/pages/About";

const ROUTES = [
    {
        Component: Home,
        path: "/",
        pathname: "HOME"
    }, {
        Component: About,
        path: "/about",
        pathname: "About"

    }
] as const;

export default ROUTES;