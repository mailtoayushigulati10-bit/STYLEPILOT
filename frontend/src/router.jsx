import {
  createRootRoute,
  createRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import RootLayout from "./App";
import Landing from "./routes/index";
import Register from "./routes/register";
import Login from "./routes/login";
import VerifyOtp from "./routes/verify-otp";
import Dashboard from "./routes/dashboard";
import Stylist from "./routes/stylist";
import Compare from "./routes/compare";
import Wishlist from "./routes/wishlist";
import Wardrobe from "./routes/wardrobe";
import Profile from "./routes/profile";

const requireAuth = () => {
  if (!localStorage.getItem("sp_token")) {
    throw redirect({ to: "/login" });
  }
};

const rootRoute = createRootRoute({ component: RootLayout });

const routes = [
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: Landing }),
  createRoute({ getParentRoute: () => rootRoute, path: "/register", component: Register }),
  createRoute({ getParentRoute: () => rootRoute, path: "/login", component: Login }),
  createRoute({ getParentRoute: () => rootRoute, path: "/verify-otp", component: VerifyOtp }),
  createRoute({ getParentRoute: () => rootRoute, path: "/dashboard", component: Dashboard, beforeLoad: requireAuth }),
  createRoute({ getParentRoute: () => rootRoute, path: "/stylist", component: Stylist, beforeLoad: requireAuth }),
  createRoute({ getParentRoute: () => rootRoute, path: "/compare", component: Compare, beforeLoad: requireAuth }),
  createRoute({ getParentRoute: () => rootRoute, path: "/wishlist", component: Wishlist, beforeLoad: requireAuth }),
  createRoute({ getParentRoute: () => rootRoute, path: "/wardrobe", component: Wardrobe, beforeLoad: requireAuth }),
  createRoute({ getParentRoute: () => rootRoute, path: "/profile", component: Profile, beforeLoad: requireAuth }),
];

export const routeTree = rootRoute.addChildren(routes);
