import React from "react";
import { Row, Col, Card, Typography, Table, Statistic, Button } from "antd";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { FileTextOutlined, DownloadOutlined } from "@ant-design/icons";
import BankCard from "../../components/bank-card";

const { Title, Text } = Typography;

// Sample data
const accountSummary = [
	{
		title: "Total Balance",
		value: "$25,456.78",
		color: "#1890ff",
	},
	{
		title: "Total Income",
		value: "$35,200.00",
		color: "#52c41a",
	},
	{
		title: "Total Expense",
		value: "$9,743.22",
		color: "#ff4d4f",
	},
	{
		title: "Total Savings",
		value: "$15,713.56",
		color: "#722ed1",
	},
];

const recentTransactions = [
	{
		key: "1",
		description: "Salary Deposit",
		type: "Credit",
		amount: "+$5,000.00",
		date: "2024-01-15",
	},
	{
		key: "2",
		description: "Rent Payment",
		type: "Debit",
		amount: "-$1,500.00",
		date: "2024-01-10",
	},
	{
		key: "3",
		description: "Grocery Shopping",
		type: "Debit",
		amount: "-$320.50",
		date: "2024-01-05",
	},
];

const invoices = [
	{
		key: "1",
		invoiceNumber: "INV-001",
		client: "Tech Solutions Inc.",
		amount: "$2,500.00",
		status: "Paid",
	},
	{
		key: "2",
		invoiceNumber: "INV-002",
		client: "Marketing Agency",
		amount: "$1,800.00",
		status: "Pending",
	},
];

const debitCreditData = [
	{ month: "Jan", Debit: 4000, Credit: 2400 },
	{ month: "Feb", Debit: 3000, Credit: 1398 },
	{ month: "Mar", Debit: 2000, Credit: 9800 },
	{ month: "Apr", Debit: 2780, Credit: 3908 },
	{ month: "May", Debit: 1890, Credit: 4800 },
];

export const Accounts: React.FC = () => {
	const transactionColumns = [
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Type",
			dataIndex: "type",
			key: "type",
			render: (type: string) => (
				<Text
					strong
					style={{
						color: type === "Credit" ? "green" : "red",
					}}
				>
					{type}
				</Text>
			),
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
			title: "Date",
			dataIndex: "date",
			key: "date",
		},
	];

	const invoiceColumns = [
		{
			title: "Invoice Number",
			dataIndex: "invoiceNumber",
			key: "invoiceNumber",
		},
		{
			title: "Client",
			dataIndex: "client",
			key: "client",
		},
		{
			title: "Amount",
			dataIndex: "amount",
			key: "amount",
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (status: string) => (
				<Text
					strong
					style={{
						color: status === "Paid" ? "green" : "orange",
					}}
				>
					{status}
				</Text>
			),
		},
		{
			title: "Action",
			key: "action",
			render: () => (
				<Button type="primary" icon={<FileTextOutlined />} size="small">
					View
				</Button>
			),
		},
	];

	return (
		<div style={{ minHeight: "100vh" }}>
			<Title
				level={2}
				style={{
					marginBottom: "24px",
					fontWeight: "bold",
					marginTop: "-15px",
				}}
			>
				Accounts
			</Title>

			{/* Account Summary */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				{accountSummary.map((item, index) => (
					<Col span={6} key={index}>
						<Card>
							<Statistic
								title={item.title}
								value={item.value}
								valueStyle={{ color: item.color }}
							/>
						</Card>
					</Col>
				))}
			</Row>

			{/* Bank Card and Transactions */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				{/* Recent Transactions */}
				<Col span={16}>
					<Card>
						<Title level={4}>Recent Transactions</Title>
						<Table
							columns={transactionColumns}
							dataSource={recentTransactions}
							pagination={false}
						/>
					</Card>
				</Col>

				{/* Bank Card */}
				<Col span={8}>
					<BankCard />
				</Col>
			</Row>

			{/* Invoices and Debit/Credit Overview */}
			<Row gutter={[16, 16]}>
				{/* Invoices */}
				<Col span={12}>
					<Card>
						<Title level={4}>Invoices</Title>
						<Table
							columns={invoiceColumns}
							dataSource={invoices}
							pagination={false}
						/>
					</Card>
				</Col>

				{/* Debit and Credit Overview */}
				<Col span={12}>
					<Card>
						<Title level={4}>Debit & Credit Overview</Title>
						<ResponsiveContainer width="100%" height={300}>
							<BarChart data={debitCreditData}>
								<XAxis dataKey="month" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="Debit" fill="#ff4d4f" />
								<Bar dataKey="Credit" fill="#52c41a" />
							</BarChart>
						</ResponsiveContainer>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Accounts;
