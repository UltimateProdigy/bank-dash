import React from "react";
import {
	Row,
	Col,
	Card,
	Typography,
	Table,
	Statistic,
	Button,
	Tag,
	Progress,
} from "antd";
import {
	AreaChart,
	Area,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import {
	StockOutlined,
	RiseOutlined,
	FallOutlined,
	PieChartOutlined,
	DollarCircleOutlined,
	GlobalOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Portfolio Summary
const portfolioSummary = [
	{
		title: "Total Portfolio Value",
		value: "$847,392.54",
		change: "+12.4%",
		isPositive: true,
		icon: <DollarCircleOutlined />,
		color: "#1890ff",
	},
	{
		title: "Today's Gain/Loss",
		value: "$3,241.87",
		change: "+0.38%",
		isPositive: true,
		icon: <RiseOutlined />,
		color: "#52c41a",
	},
	{
		title: "Total Return",
		value: "$147,392.54",
		change: "+21.04%",
		isPositive: true,
		icon: <StockOutlined />,
		color: "#722ed1",
	},
	{
		title: "Available Cash",
		value: "$42,607.46",
		change: "5.02% of portfolio",
		isPositive: true,
		icon: <DollarCircleOutlined />,
		color: "#faad14",
	},
];

// Top Holdings
const topHoldings = [
	{
		key: "1",
		symbol: "AAPL",
		name: "Apple Inc.",
		shares: 150,
		avgCost: "$145.32",
		currentPrice: "$178.44",
		marketValue: "$26,766.00",
		return: "+23.12%",
		returnColor: "success",
	},
	{
		key: "2",
		symbol: "MSFT",
		name: "Microsoft Corporation",
		shares: 100,
		avgCost: "$242.21",
		currentPrice: "$334.57",
		marketValue: "$33,457.00",
		return: "+38.24%",
		returnColor: "success",
	},
	{
		key: "3",
		symbol: "GOOGL",
		name: "Alphabet Inc.",
		shares: 45,
		avgCost: "$2,234.56",
		currentPrice: "$2,156.88",
		marketValue: "$97,059.60",
		return: "-3.48%",
		returnColor: "error",
	},
];

// Asset Allocation Data
const assetAllocation = [
	{ name: "US Stocks", value: 45, color: "#1890ff" },
	{ name: "International Stocks", value: 25, color: "#722ed1" },
	{ name: "Bonds", value: 15, color: "#52c41a" },
	{ name: "Real Estate", value: 10, color: "#faad14" },
	{ name: "Cash", value: 5, color: "#ff4d4f" },
];

// Portfolio Performance Data
const performanceData = [
	{ month: "Jan", value: 100000 },
	{ month: "Feb", value: 108000 },
	{ month: "Mar", value: 115000 },
	{ month: "Apr", value: 112000 },
	{ month: "May", value: 118000 },
	{ month: "Jun", value: 125000 },
];

export const Investments: React.FC = () => {
	const holdingsColumns = [
		{
			title: "Symbol",
			dataIndex: "symbol",
			key: "symbol",
			render: (text: string) => <Text strong>{text}</Text>,
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Shares",
			dataIndex: "shares",
			key: "shares",
		},
		{
			title: "Avg Cost",
			dataIndex: "avgCost",
			key: "avgCost",
		},
		{
			title: "Current Price",
			dataIndex: "currentPrice",
			key: "currentPrice",
		},
		{
			title: "Market Value",
			dataIndex: "marketValue",
			key: "marketValue",
			render: (text: string) => <Text strong>{text}</Text>,
		},
		{
			title: "Return",
			dataIndex: "return",
			key: "return",
			render: (text: string, record: any) => (
				<Tag color={record.returnColor}>{text}</Tag>
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
				Investments
			</Title>

			{/* Portfolio Summary */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				{portfolioSummary.map((item, index) => (
					<Col xs={24} sm={12} md={6} key={index}>
						<Card>
							<Statistic
								title={
									<span>
										{item.icon} {item.title}
									</span>
								}
								value={item.value}
								valueStyle={{ color: item.color }}
								prefix={
									item.isPositive ? (
										<RiseOutlined />
									) : (
										<FallOutlined />
									)
								}
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
					</Col>
				))}
			</Row>

			{/* Portfolio Performance Chart */}
			<Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
				<Col span={24}>
					<Card
						title={
							<>
								<StockOutlined /> Portfolio Performance
							</>
						}
					>
						<ResponsiveContainer width="100%" height={300}>
							<AreaChart data={performanceData}>
								<XAxis dataKey="month" />
								<YAxis />
								<Tooltip />
								<Area
									type="monotone"
									dataKey="value"
									stroke="#1890ff"
									fill="#1890ff"
									fillOpacity={0.2}
								/>
							</AreaChart>
						</ResponsiveContainer>
					</Card>
				</Col>
			</Row>

			{/* Holdings and Asset Allocation */}
			<Row gutter={[16, 16]}>
				<Col xs={24} xl={16}>
					<Card
						title={
							<>
								<GlobalOutlined /> Top Holdings
							</>
						}
					>
						<Table
							columns={holdingsColumns}
							dataSource={topHoldings}
							pagination={false}
						/>
					</Card>
				</Col>
				<Col xs={24} xl={8}>
					<Card
						title={
							<>
								<PieChartOutlined /> Asset Allocation
							</>
						}
					>
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={assetAllocation}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									innerRadius={60}
									outerRadius={80}
									label
								>
									{assetAllocation.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={entry.color}
										/>
									))}
								</Pie>
								<Tooltip />
							</PieChart>
						</ResponsiveContainer>
						{assetAllocation.map((item) => (
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

export default Investments;
