import React, { useState } from "react";
import {
	Row,
	Col,
	Card,
	Typography,
	Tabs,
	Form,
	Input,
	Switch,
	Select,
	Button,
	Radio,
	Divider,
	notification,
	Avatar,
	Upload,
	Space,
} from "antd";
import {
	UserOutlined,
	LockOutlined,
	BellOutlined,
	GlobalOutlined,
	SecurityScanOutlined,
	UploadOutlined,
	CreditCardOutlined,
	DollarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const Settings: React.FC = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const handleSave = async (values: any) => {
		setLoading(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));
			notification.success({
				message: "Settings Updated",
				description: "Your settings have been successfully saved.",
			});
		} catch (error) {
			notification.error({
				message: "Error",
				description: "Failed to update settings. Please try again.",
			});
		}
		setLoading(false);
	};

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
				Settings
			</Title>

			<Card>
				<Tabs defaultActiveKey="profile">
					<TabPane
						tab={
							<span>
								<UserOutlined />
								Profile
							</span>
						}
						key="profile"
					>
						<Form
							layout="vertical"
							form={form}
							onFinish={handleSave}
							initialValues={{
								firstName: "John",
								lastName: "Doe",
								email: "john.doe@example.com",
								language: "en",
								timezone: "UTC-5",
							}}
						>
							<Row gutter={24}>
								<Col span={24} style={{ marginBottom: 24 }}>
									<Space align="center">
										<Avatar
											size={64}
											icon={<UserOutlined />}
										/>
										<Upload showUploadList={false}>
											<Button icon={<UploadOutlined />}>
												Change Avatar
											</Button>
										</Upload>
									</Space>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item
										label="First Name"
										name="firstName"
										rules={[{ required: true }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item
										label="Last Name"
										name="lastName"
										rules={[{ required: true }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[
											{ required: true, type: "email" },
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item label="Phone" name="phone">
										<Input />
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</TabPane>

					<TabPane
						tab={
							<span>
								<SecurityScanOutlined />
								Security
							</span>
						}
						key="security"
					>
						<Form layout="vertical">
							<Title level={4}>Password</Title>
							<Row gutter={24}>
								<Col xs={24} md={12}>
									<Form.Item
										label="Current Password"
										name="currentPassword"
										rules={[{ required: true }]}
									>
										<Input.Password />
									</Form.Item>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item
										label="New Password"
										name="newPassword"
										rules={[{ required: true }]}
									>
										<Input.Password />
									</Form.Item>
								</Col>
							</Row>

							<Divider />

							<Title level={4}>Two-Factor Authentication</Title>
							<Form.Item>
								<Switch defaultChecked />
								<Text style={{ marginLeft: 8 }}>
									Enable 2FA
								</Text>
							</Form.Item>

							<Divider />

							<Title level={4}>Login History</Title>
							{/* Add login history table here */}
						</Form>
					</TabPane>

					<TabPane
						tab={
							<span>
								<BellOutlined />
								Notifications
							</span>
						}
						key="notifications"
					>
						<Form layout="vertical">
							<Title level={4}>Email Notifications</Title>
							<Form.Item>
								<Switch defaultChecked />
								<Text style={{ marginLeft: 8 }}>
									Account Updates
								</Text>
							</Form.Item>
							<Form.Item>
								<Switch defaultChecked />
								<Text style={{ marginLeft: 8 }}>
									Security Alerts
								</Text>
							</Form.Item>
							<Form.Item>
								<Switch />
								<Text style={{ marginLeft: 8 }}>
									Marketing Communications
								</Text>
							</Form.Item>

							<Divider />

							<Title level={4}>Push Notifications</Title>
							<Form.Item>
								<Switch defaultChecked />
								<Text style={{ marginLeft: 8 }}>
									Transaction Alerts
								</Text>
							</Form.Item>
							<Form.Item>
								<Switch defaultChecked />
								<Text style={{ marginLeft: 8 }}>
									Bill Payment Reminders
								</Text>
							</Form.Item>
						</Form>
					</TabPane>

					<TabPane
						tab={
							<span>
								<GlobalOutlined />
								Preferences
							</span>
						}
						key="preferences"
					>
						<Form layout="vertical">
							<Row gutter={24}>
								<Col xs={24} md={12}>
									<Form.Item label="Language" name="language">
										<Select>
											<Option value="en">English</Option>
											<Option value="es">Español</Option>
											<Option value="fr">Français</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item
										label="Time Zone"
										name="timezone"
									>
										<Select>
											<Option value="UTC-5">
												Eastern Time (UTC-5)
											</Option>
											<Option value="UTC-8">
												Pacific Time (UTC-8)
											</Option>
											<Option value="UTC+1">
												Central European Time (UTC+1)
											</Option>
										</Select>
									</Form.Item>
								</Col>
								<Col xs={24} md={12}>
									<Form.Item
										label="Currency Display"
										name="currency"
									>
										<Radio.Group>
											<Radio value="usd">USD ($)</Radio>
											<Radio value="eur">EUR (€)</Radio>
											<Radio value="gbp">GBP (£)</Radio>
										</Radio.Group>
									</Form.Item>
								</Col>
							</Row>
						</Form>
					</TabPane>
				</Tabs>

				<Divider />

				<Row justify="end">
					<Space>
						<Button>Cancel</Button>
						<Button
							type="primary"
							loading={loading}
							onClick={() => form.submit()}
						>
							Save Changes
						</Button>
					</Space>
				</Row>
			</Card>
		</div>
	);
};

export default Settings;
