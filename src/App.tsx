import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
	AuthPage,
	ErrorComponent,
	ThemedLayoutV2,
	ThemedSiderV2,
	useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import { dataProvider, liveProvider } from "@refinedev/appwrite";
import routerBindings, {
	CatchAllNavigate,
	DocumentTitleHandler,
	NavigateToResource,
	UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
	BlogPostCreate,
	BlogPostEdit,
	BlogPostList,
	BlogPostShow,
} from "./pages/blog-posts";
import {
	CategoryCreate,
	CategoryEdit,
	CategoryList,
	CategoryShow,
} from "./pages/categories";
import { appwriteClient } from "./utility";
import {
	Wallet,
	EuroIcon,
	Home,
	Activity,
	IdCardIcon,
	LaptopIcon,
	ServerIcon,
	BanknoteIcon,
	Settings,
} from "lucide-react";
import { Sider } from "./components/sider";

function App() {
	return (
		<BrowserRouter>
			<RefineKbarProvider>
				<ColorModeContextProvider>
					<AntdApp>
						<DevtoolsProvider>
							<Refine
								dataProvider={dataProvider(appwriteClient, {
									databaseId: "default",
								})}
								liveProvider={liveProvider(appwriteClient, {
									databaseId: "default",
								})}
								authProvider={authProvider}
								notificationProvider={useNotificationProvider}
								routerProvider={routerBindings}
								resources={[
									{
										name: "dashboard",
										list: "/dashboard",
										create: "/dashboard/create",
										edit: "/dashboard/edit/:id",
										show: "/dashboard/show/:id",
										meta: {
											canDelete: true,
											icon: <Home />,
                                            label: "Dashboard"
										},
									},
									{
										name: "transactions",
										list: "/transactions",
										create: "/transactions/create",
										edit: "/transactions/edit/:id",
										show: "/transactions/show/:id",
										meta: {
											canDelete: true,
											icon: <EuroIcon />,
										},
									},
									{
										name: "accounts",
										list: "/accounts",
										create: "/accounts/create",
										edit: "/accounts/edit/:id",
										show: "/accounts/show/:id",
										meta: {
											canDelete: true,
											icon: <Activity />,
										},
									},
									{
										name: "investments",
										list: "/investments",
										create: "/investments/create",
										edit: "/investments/edit/:id",
										show: "/investments/show/:id",
										meta: {
											canDelete: true,
											icon: <Wallet />,
										},
									},
									{
										name: "credit-cards",
										list: "/credit-cards",
										create: "/credit-cards/create",
										edit: "/credit-cards/edit/:id",
										show: "/credit-cards/show/:id",
										meta: {
											canDelete: true,
											icon: <IdCardIcon />,
										},
									},
									{
										name: "loans",
										list: "/loans",
										create: "/loans/create",
										edit: "/loans/edit/:id",
										show: "/loans/show/:id",
										meta: {
											canDelete: true,
											icon: <LaptopIcon />,
										},
									},
									{
										name: "services",
										list: "/services",
										create: "/services/create",
										edit: "/services/edit/:id",
										show: "/services/show/:id",
										meta: {
											canDelete: true,
											icon: <ServerIcon />,
										},
									},
									{
										name: "priviledges",
										list: "/priviledges",
										create: "/priviledges/create",
										edit: "/priviledges/edit/:id",
										show: "/priviledges/show/:id",
										meta: {
											canDelete: true,
											icon: <BanknoteIcon />,
										},
									},
									{
										name: "setting",
										list: "/setting",
										create: "/setting/create",
										edit: "/setting/edit/:id",
										show: "/setting/show/:id",
										meta: {
											canDelete: true,
											icon: <Settings />,
										},
									},
								]}
								options={{
									syncWithLocation: true,
									warnWhenUnsavedChanges: true,
									useNewQueryKeys: true,
									projectId: "oMkogR-Bh7r5D-zbvggX",
									title: {
										text: "Bank Dash",
										icon: <AppIcon />,
									},
								}}
							>
								<Routes>
									<Route
										element={
											<Authenticated
												key="authenticated-inner"
												fallback={
													<CatchAllNavigate to="/login" />
												}
											>
												<ThemedLayoutV2
													Header={Header}
													Sider={(props) => (
														<Sider
															{...props}
															fixed
														/>
													)}
												>
													<Outlet />
												</ThemedLayoutV2>
											</Authenticated>
										}
									>
										<Route
											index
											element={
												<NavigateToResource resource="dashboard" />
											}
										/>
										<Route path="/blog-posts">
											<Route
												index
												element={<BlogPostList />}
											/>
											<Route
												path="create"
												element={<BlogPostCreate />}
											/>
											<Route
												path="edit/:id"
												element={<BlogPostEdit />}
											/>
											<Route
												path="show/:id"
												element={<BlogPostShow />}
											/>
										</Route>
										<Route path="/categories">
											<Route
												index
												element={<CategoryList />}
											/>
											<Route
												path="create"
												element={<CategoryCreate />}
											/>
											<Route
												path="edit/:id"
												element={<CategoryEdit />}
											/>
											<Route
												path="show/:id"
												element={<CategoryShow />}
											/>
										</Route>
										<Route
											path="*"
											element={<ErrorComponent />}
										/>
									</Route>
									<Route
										element={
											<Authenticated
												key="authenticated-outer"
												fallback={<Outlet />}
											>
												<NavigateToResource />
											</Authenticated>
										}
									>
										<Route
											path="/login"
											element={
												<AuthPage
													type="login"
													formProps={{
														initialValues: {
															email: "demo@refine.dev",
															password:
																"demodemo",
														},
													}}
												/>
											}
										/>
										<Route
											path="/register"
											element={
												<AuthPage type="register" />
											}
										/>
										<Route
											path="/forgot-password"
											element={
												<AuthPage type="forgotPassword" />
											}
										/>
									</Route>
								</Routes>
								<RefineKbar />
								<UnsavedChangesNotifier />
								<DocumentTitleHandler />
							</Refine>
						</DevtoolsProvider>
					</AntdApp>
				</ColorModeContextProvider>
			</RefineKbarProvider>
		</BrowserRouter>
	);
}

export default App;
