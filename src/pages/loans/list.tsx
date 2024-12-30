import React from "react";
import {
	Row,
	Col,
	Card,
	Typography,
	Table,
	Statistic,
	Tag,
	Progress,
	Button,
	Tooltip as AntTooltip,
} from "antd";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import {
	SafetyCertificateOutlined,
	ClockCircleOutlined,
	AlertOutlined,
	CheckCircleOutlined,
	DollarCircleOutlined,
	BarChartOutlined,
	ThunderboltOutlined,
	FireOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Loan Portfolio Summary
const loanSummary = [
	{
		title: "Total Loan Balance",
		value: "$523,847.32",
		change: "Next Payment: $3,241.87",
		icon: <DollarCircleOutlined />,
		color: "#1890ff",
		dueDate: "May 15, 2024",
	},
	{
		title: "Risk Score",
		value: "742",
		change: "Excellent",
		icon: <SafetyCertificateOutlined />,
		color: "#52c41a",
		tooltip: "Based on payment history and debt-to-income ratio",
	},
	{
		title: "Active Loans",
		value: "4",
		change: "2 in grace period",
		icon: <ThunderboltOutlined />,
		color: "#722ed1",
		tooltip: "Click to see loan details",
	},
	{
		title: "Payment Streak",
		value: "24 months",
		change: "Perfect Record 🏆",
		icon: <FireOutlined />,
		color: "#faad14",
		tooltip: "Consecutive on-time payments",
	},
];

// Active Loans
const activeLoans = [
	{
		key: "1",
		type: "Mortgage",
		lender: "Quantum Bank",
		originalAmount: "$425,000.00",
		currentBalance: "$398,432.12",
		interestRate: "3.25%",
		monthlyPayment: "$1,850.23",
		nextPayment: "May 15, 2024",
		status: "Current",
		progress: 28,
		statusColor: "success",
	},
	{
		key: "2",
		type: "Auto Loan",
		lender: "AutoFinance Pro",
		originalAmount: "$35,000.00",
		currentBalance: "$28,765.43",
		interestRate: "4.15%",
		monthlyPayment: "$645.32",
		nextPayment: "May 3, 2024",
		status: "Grace Period",
		progress: 42,
		statusColor: "warning",
	},
	{
		key: "3",
		type: "Student Loan",
		lender: "EduFinance",
		originalAmount: "$80,000.00",
		currentBalance: "$65,432.10",
		interestRate: "5.25%",
		monthlyPayment: "$843.21",
		nextPayment: "May 21, 2024",
		status: "Current",
		progress: 35,
		statusColor: "success",
	},
	{
		key: "4",
		type: "Personal Loan",
		lender: "FastCash Solutions",
		originalAmount: "$15,000.00",
		currentBalance: "$12,543.21",
		interestRate: "7.99%",
		monthlyPayment: "$324.56",
		nextPayment: "May 8, 2024",
		status: "Late Notice",
		progress: 25,
		statusColor: "error",
	},
];

// Loan Distribution Data
const loanDistribution = [
	{ name: "Mortgage", value: 76, color: "#1890ff" },
	{ name: "Auto Loan", value: 12, color: "#722ed1" },
	{ name: "Student Loan", value: 8, color: "#52c41a" },
	{ name: "Personal Loan", value: 4, color: "#faad14" },
];

// Payment History Data
const paymentHistory = [
	{ month: "Nov", amount: 3663.32, onTime: true },
	{ month: "Dec", amount: 3663.32, onTime: true },
	{ month: "Jan", amount: 3663.32, onTime: true },
	{ month: "Feb", amount: 3663.32, onTime: false },
	{ month: "Mar", amount: 3663.32, onTime: true },
	{ month: "Apr", amount: 3663.32, onTime: true },
];

export const Loans: React.FC = () => {
	const loanColumns = [
		{
			title: "Loan Type",
			dataIndex: "type",
			key: "type",
			render: (text: string) => <Text strong>{text}</Text>,
		},
		{
			title: "Lender",
			dataIndex: "lender",
			key: "lender",
		},
		{
			title: "Current Balance",
			dataIndex: "currentBalance",
			key: "currentBalance",
			render: (text: string) => <Text strong>{text}</Text>,
		},
		{
			title: "Monthly Payment",
			dataIndex: "monthlyPayment",
			key: "monthlyPayment",
		},
		{
			title: "Next Payment",
			dataIndex: "nextPayment",
			key: "nextPayment",
			render: (text: string) => (
				<span>
					<ClockCircleOutlined style={{ marginRight: 8 }} />
					{text}
				</span>
			),
		},
		{
			title: "Progress",
			dataIndex: "progress",
			key: "progress",
			render: (progress: number) => (
				<Progress percent={progress} size="small" />
			),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (text: string, record: any) => (
				<Tag color={record.statusColor}>{text}</Tag>
			),
		},
		{
			title: "Action",
			key: "action",
			render: () => (
				<Button type="link" size="small">
					Make Payment
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
				Loan Dashboard
			</Title>

			{/* Loan Summary */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				{loanSummary.map((item, index) => (
					<Col xs={24} sm={12} md={6} key={index}>
						<AntTooltip title={item.tooltip}>
							<Card>
								<Statistic
									title={
										<span>
											{item.icon} {item.title}
										</span>
									}
									value={item.value}
									valueStyle={{ color: item.color }}
									suffix={
										<small
											style={{
												fontSize: "14px",
												marginLeft: "8px",
											}}
										>
											{item.change}
										</small>
									}
								/>
							</Card>
						</AntTooltip>
					</Col>
				))}
			</Row>

			{/* Payment History Chart */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				<Col span={24}>
					<Card
						title={
							<>
								<BarChartOutlined /> Payment History
							</>
						}
					>
						<ResponsiveContainer width="100%" height={300}>
							<AreaChart data={paymentHistory}>
								<XAxis dataKey="month" />
								<YAxis />
								<Tooltip />
								<Area
									type="monotone"
									dataKey="amount"
									stroke="#1890ff"
									fill="#1890ff"
									fillOpacity={0.2}
								/>
							</AreaChart>
						</ResponsiveContainer>
					</Card>
				</Col>
			</Row>

			{/* Active Loans and Distribution */}
			<Row gutter={[16, 16]}>
				<Col xs={24} xl={16}>
					<Card
						title={
							<>
								<AlertOutlined /> Active Loans
							</>
						}
					>
						<Table
							columns={loanColumns}
							dataSource={activeLoans}
							pagination={false}
						/>
					</Card>
				</Col>
				<Col xs={24} xl={8}>
					<Card
						title={
							<>
								<CheckCircleOutlined /> Loan Distribution
							</>
						}
					>
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={loanDistribution}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									innerRadius={60}
									outerRadius={80}
									label
								>
									{loanDistribution.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={entry.color}
										/>
									))}
								</Pie>
								<Tooltip />
							</PieChart>
						</ResponsiveContainer>
						{loanDistribution.map((item) => (
							<div
								key={item.name}
								style={{ marginBottom: "8px" }}
							>
								<Text>{item.name}</Text>
								<Progress
									percent={item.value}
									strokeColor={item.color}
									size="small"
								/>
							</div>
						))}
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Loans;
