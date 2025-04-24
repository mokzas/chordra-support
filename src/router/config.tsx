import { RouteProps } from "react-router-dom";

interface RouteConfig {
    path: string;
    exact?: boolean;
    component: string;
}

const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component: "Home",
    },
    {
        path: "/privacy",
        exact: true,
        component: "Privacy",
    },
];

export default routes; 