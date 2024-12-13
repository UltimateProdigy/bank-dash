import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	PieChart,
	LineChart,
	Cell,
	Pie,
	CartesianGrid,
	Line,
} from "recharts";
import { CreditCard } from "lucide-react";
import { Row, Col, Card, Typography, Statistic, Table } from "antd";
import {
	cards,
	weeklyTransactionData,
	expenseData,
	recentTransactions,
	COLORS,
	balanceHistoryData,
} from "../../utility/data";
import BankCard from "../../components/bank-card";

const { Title, Text } = Typography;

export const Dashboard = () => {
	const transactionColumns = [
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
			render: (amount: any) => (
				<Text
					strong
					style={{
						color: amount.startsWith("+") ? "green" : "red",
					}}
				>
					{amount}
				</Text>
			),
		},
	];

	return (
		<div
			style={{
				minHeight: "100vh",
			}}
		>
			<Title
				level={2}
				style={{
					marginBottom: "24px",
					fontWeight: "bold",
					marginTop: "-15px",
				}}
			>
				Dashboard
			</Title>

			{/* ATM Cards Section */}
			<Title level={4}>My Cards</Title>
			<Row style={{ gap: "20px" }}>
				<BankCard />
				<BankCard />
			</Row>

			{/* Charts Section */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				{/* Weekly Transaction Chart */}
				<Col span={12}>
					<Card>
						<Title level={4}>Weekly Transactions</Title>
						<ResponsiveContainer width="100%" height={300}>
							<BarChart data={weeklyTransactionData}>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="Deposit" fill="#52c41a" />
								<Bar dataKey="Withdrawal" fill="#1890ff" />
							</BarChart>
						</ResponsiveContainer>
					</Card>
				</Col>

				{/* Expense Statistics Chart */}
				<Col span={12}>
					<Card>
						<Title level={4}>Expense Statistics</Title>
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={expenseData}
									cx="50%"
									cy="50%"
									labelLine={false}
									outerRadius={80}
									fill="#8884d8"
									dataKey="amount"
									label={({ name, percent }) =>
										`${name} ${(percent * 100).toFixed(0)}%`
									}
								>
									{expenseData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip
									formatter={(value, name) => [
										`$${value}`,
										name,
									]}
								/>
								<Legend
									layout="vertical"
									align="right"
									verticalAlign="middle"
								/>
							</PieChart>
						</ResponsiveContainer>
					</Card>
				</Col>
			</Row>

			<div style={{ display: "flex", gap: "20px" }}>
				{/* Recent Transactions */}
				<Card style={{ width: "50vw" }}>
					<Title level={4}>Recent Transactions</Title>
					<Table
						columns={transactionColumns}
						dataSource={recentTransactions}
						pagination={false}
					/>
				</Card>

				{/* Balance History */}
				<Card style={{ width: "50vw" }}>
					<Title level={4}>Balance History</Title>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={balanceHistoryData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis
								tickFormatter={(value) =>
									`$${value.toLocaleString()}`
								}
							/>
							<Tooltip
								formatter={(value) => [
									`$${value.toLocaleString()}`,
									"Balance",
								]}
							/>
							<Legend />
							<Line
								type="monotone"
								dataKey="balance"
								stroke="#1890ff"
								strokeWidth={4}
								activeDot={{ r: 8 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;
