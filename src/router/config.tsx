import { RouteProps } from "react-router-dom";

interface RouteConfig {
    path: string;
    exact?: boolean;
    component: string;
}

const routes: RouteConfig[] = [
    {
        path: `/`,
        exact: true,
        component: "Home",
    },
    {
        path: `/privacy/en`,
        exact: true,
        component: "PrivacyEn",
    },
    {
        path: `/privacy/kr`,
        exact: true,
        component: "PrivacyKr",
    },
];

export default routes; 