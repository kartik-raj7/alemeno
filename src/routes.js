import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Homepage")),
    exact: true,
  },
  {
    path: "/home",
    component: lazy(() => import("./pages/Homepage")),
    exact: true,
    preload: true,
  },
  {
    path: "*",
    component: lazy(() => import("./pages/Errorpage")),
    exact: true,
    preload: true,
  },
  {
    path: "/dashboard",
    component: lazy(() => import("./pages/Dashboard")),
    exact: true,
    preload: true,
  },
  {
    path: "/viewcourse/:id",
    component: lazy(() => import("./pages/Dashboard")),
    exact: true,
    preload: true,
  },
];

export default routes;
