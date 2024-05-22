import { Route, Router } from "@solidjs/router";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};
