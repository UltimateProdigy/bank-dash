import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
	AuthPage,
	ErrorComponent,
	ThemedLayoutV2,
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
    PenTool
} from "lucide-react";
import { Sider } from "./components/sider";
import { Dashboard } from "./pages/dashboard";
import { Transactions } from "./pages/transactions";
import { Accounts } from "./pages/accounts";
import { Investments } from "./pages/investments";
import { Loans } from "./pages/loans";
import Settings from "./pages/settings/list";
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
											label: "Dashboard",
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
										name: "settings",
										list: "/settings",
										create: "/settings/create",
										edit: "/settings/edit/:id",
										show: "/settings/show/:id",
										meta: {
											canDelete: true,
											icon: <PenTool />,
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
										<Route path="/dashboard">
											<Route
												index
												element={<Dashboard />}
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
										<Route path="/transactions">
											<Route
												index
												element={<Transactions />}
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
										<Route path="/accounts">
											<Route
												index
												element={<Accounts />}
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
										<Route path="/investments">
											<Route
												index
												element={<Investments />}
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
										<Route path="/loans">
											<Route index element={<Loans />} />
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
										<Route path="/settings">
											<Route index element={<Settings />} />
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
