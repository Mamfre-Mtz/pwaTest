import Home from "./components/index-page.vue";
import About from "./components/about-page.vue";
import NotFound from "./components/notfound.vue";
import Starters from "./components/starters-page.vue";

export const routes = [
  { path: "/", component: Home, name: "index-page" },
  {
    path: "/about",
    component: About,
    name: "next-page",
  },
  { path: "/day", component: Starters, name: "startes-page" },
  { path: "/404", component: NotFound, name: "not-exist" },
  { path: "/:catchAll(.*)", redirect: "/404" },
];
