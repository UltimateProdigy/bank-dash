import React from "react";
import { Row, Col, Card, Typography, Table, Button, Statistic } from "antd";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { DownloadOutlined } from "@ant-design/icons";
import { weeklyTransactionData } from "../../utility/data";
import BankCard from "../../components/bank-card";

const { Title, Text } = Typography;

const recentTransactions = [
	{
		key: "1",
		description: "Grocery Shopping",
		transactionId: "TRX001",
		type: "Expense",
		card: "**** 4321",
		date: "2024-01-15",
		amount: "-$120.50",
	},
	{
		key: "2",
		description: "Salary Deposit",
		transactionId: "TRX002",
		type: "Income",
		card: "**** 1234",
		date: "2024-01-10",
		amount: "+$5000.00",
	},
	{
		key: "3",
		description: "Online Subscription",
		transactionId: "TRX003",
		type: "Expense",
		card: "**** 4321",
		date: "2024-01-05",
		amount: "-$29.99",
	},
];

export const Transactions: React.FC = () => {
	const transactionColumns = [
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Transaction ID",
			dataIndex: "transactionId",
			key: "transactionId",
		},
		{
			title: "Type",
			dataIndex: "type",
			key: "type",
			render: (type: string) => (
				<Text
					strong
					style={{
						color: type === "Income" ? "green" : "red",
					}}
				>
					{type}
				</Text>
			),
		},
		{
			title: "Card",
			dataIndex: "card",
			key: "card",
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
			render: (amount: string) => (
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
		{
			title: "Receipt",
			key: "receipt",
			render: () => (
				<Button type="primary" icon={<DownloadOutlined />} size="small">
					Download
				</Button>
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
				Transactions
			</Title>
			{/* Bank Cards Section */}
			<Row style={{ marginBottom: "24px" }}>
				<Col span={12}>
					<Row gutter={[16, 16]}>
						<Col span={8} style={{ marginRight: "100px" }}>
							<BankCard />
						</Col>
						<Col span={8}>
							<BankCard />
						</Col>
					</Row>
				</Col>

				{/* Expense Bar Chart */}
				<Col span={8}>
					<Card style={{ width: "150%"}}>
						<Title level={4}>Weekly Expenses</Title>
						<ResponsiveContainer width="100%" height={200}>
							<BarChart data={weeklyTransactionData}>
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="Deposit" fill="#1890ff" />
								<Bar dataKey="Withdrawal" fill="#52c41a" />
							</BarChart>
						</ResponsiveContainer>
					</Card>
				</Col>
			</Row>

			{/* Recent Transactions Table */}
			<Card>
				<Title level={4}>Recent Transactions</Title>
				<Table
					columns={transactionColumns}
					dataSource={recentTransactions}
					pagination={{
						pageSize: 5,
						showSizeChanger: false,
					}}
				/>
			</Card>
		</div>
	);
};

export default Transactions;
