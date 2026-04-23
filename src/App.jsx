import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import Root from "./components/Root";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/signup",
        element: <SignupPage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/shop",
        element: <ProductPage/>
      }
    ]
  },
]);

const App = () => <RouterProvider router={router} />

export default App