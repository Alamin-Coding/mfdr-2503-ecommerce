import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import Root from "./components/Root";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/signup",
				element: <SignupPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/shop",
				element: <ProductPage />,
			},
			{
				path: "/wishlist",
				element: <WishlistPage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/account",
				element: <AccountPage />,
			},
			{
				path: "/checkout",
				element: <CheckoutPage />,
			},
			{
				path: "/cart",
				element: <CartPage />,
			},
			{
				path: "/product/:id",
				element: <ProductDetailsPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

const App = () => <RouterProvider router={router} />;

export default App;
