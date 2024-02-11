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
    path: "/viewcourses",
    component: lazy(() => import("./pages/Coursespage")),
    exact: true,
    preload: true,
  },
  {
    path: "/viewcourseindetail/:id",
    component: lazy(() => import("./pages/Viewcoursepage")),
    exact: true,
    preload: true,
  },
  {
    path: "/mycourses",
    component: lazy(() => import("./pages/Dashboard")),
    exact: true,
    preload: true,
  },
];

export default routes;
