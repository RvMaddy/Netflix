import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/auth/sign in/page";
import SignupPage from "../pages/auth/signup/page";
import HomePage from "../pages/portal/home/page";
import SearchPage from "../pages/portal/search/page";
import MyListPage from "../pages/portal/myList/page";
import LandingPage from "../pages/public/LandingPage";
import {	ProtectedRoute,	ProtectedRouteForUnAuthorizedPage,} from "./ProtectedRoute";
const AppRouter = () => {	
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRouteForUnAuthorizedPage>
							<LandingPage />
						</ProtectedRouteForUnAuthorizedPage>
					}
				/>
				<Route
					path="/signin"
					element={
						<ProtectedRouteForUnAuthorizedPage>
							<SigninPage />
						</ProtectedRouteForUnAuthorizedPage>
					}
				/>
				<Route
					path="/signup"
					element={
						<ProtectedRouteForUnAuthorizedPage>
							<SignupPage />
						</ProtectedRouteForUnAuthorizedPage>
					}
				/>
				<Route
					path="/home"
					element={
						<ProtectedRoute>
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/mylist"
					element={
						<ProtectedRoute>
							<MyListPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/search"
					element={
						<ProtectedRoute>
							<SearchPage />
						</ProtectedRoute>
					}
				/>
				<Route />
			</Routes>
		</BrowserRouter>
		
	);
};

export default AppRouter;