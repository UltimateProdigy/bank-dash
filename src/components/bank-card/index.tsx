export default function BankCard() {
	return (
		<div
			style={{
				borderRadius: "20px",
				background: "#3733EF",
				color: "white",
				width: "20vw",
				height: "200px",
				marginBottom: "40px",
				lineHeight: "15px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					paddingInline: "20px",
					paddingTop: "20px",
				}}
			>
				<div style={{ lineHeight: "10px"}}>
					<p style={{ fontWeight: "semibold", fontSize: "10px" }}>
						Balance
					</p>
					<p style={{ fontWeight: "semibold", fontSize: "20px" }}>
						$5600
					</p>
				</div>
				<img src="/src/assets/chip.svg" alt="chip" />
			</div>
			<div
				style={{ display: "flex", gap: "50px", paddingInline: "20px", paddingTop: "20px" }}
			>
				<div style={{ lineHeight: "5px" }}>
					<p style={{ fontSize: "10px"  }}>CARD HOLDER</p>
					<p style={{ fontWeight: "bold", fontSize: "15px" }}>
						Eddy Cusuma
					</p>
				</div>
				<div style={{ lineHeight: "5px" }}>
					<p style={{ fontSize: "10px"  }}>VALID THRU</p>
					<p style={{ fontWeight: "bold", fontSize: "15px"}}>
						12/12
					</p>
				</div>
			</div>
			<div
				style={{
					background: "#4C49ED",
					display: "flex",
					justifyContent: "space-between",
					marginTop: "20px",
					paddingBottom: "10px",
					borderRadius: "0 0 20px 20px",
					paddingInline: "20px",
					marginBottom: 0,
				}}
			>
				<p
					style={{
						fontWeight: "semibold",
						fontSize: "20px",
						paddingTop: "30px",
					}}
				>
					3778 **** **** 1234
				</p>
				<img src="/src/assets/mastercard.svg" alt="mastercard" />
			</div>
		</div>
	);
}


