import Home from "@/pages/Home";
import About from "@/pages/About";

const ROUTES = [
    {
        Component: Home,
        path: "/",
        pathname: "HOME"
    }, {
        Component: About,
        path: "/about/:id",
        pathname: "About"

    }
] as const;

export default ROUTES;