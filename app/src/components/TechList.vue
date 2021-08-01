<template>
	<div class="listContainer">
		<h3>Tech List</h3>
		<div>
			<table style="width: 100%">
				<tr>
					<th>Symbol</th>
					<th>Target Price</th>
					<th>1Y Highest | Lowest</th>
				</tr>
				<!-- Table La! -->
				<tr>
					<td>{{ dataFromAAPL.symbol }}</td>
					<td :class="[AAPLdata.buyAlert ? 'alert' : 'default']">
						{{ AAPLdata.targetPrice }}
					</td>
					<td>{{ dataFromAAPL.week52High }} | {{ dataFromAAPL.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromAMZN.symbol }}</td>
					<td :class="[AMZNdata.buyAlert ? 'alert' : 'default']">
						{{ AMZNdata.targetPrice }}
					</td>
					<td>{{ dataFromAMZN.week52High }} | {{ dataFromAMZN.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromMSFT.symbol }}</td>
					<td :class="[MSFTdata.buyAlert ? 'alert' : 'default']">
						{{ MSFTdata.targetPrice }}
					</td>
					<td>{{ dataFromMSFT.week52High }} | {{ dataFromMSFT.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromGOOG.symbol }}</td>
					<td :class="[GOOGdata.buyAlert ? 'alert' : 'default']">
						{{ GOOGdata.targetPrice }}
					</td>
					<td>{{ dataFromGOOG.week52High }} | {{ dataFromGOOG.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromFB.symbol }}</td>
					<td :class="[FBdata.buyAlert ? 'alert' : 'default']">
						{{ FBdata.targetPrice }}
					</td>
					<td>{{ dataFromFB.week52High }} | {{ dataFromFB.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromTWTR.symbol }}</td>
					<td :class="[TWTRdata.buyAlert ? 'alert' : 'default']">
						{{ TWTRdata.targetPrice }}
					</td>
					<td>{{ dataFromTWTR.week52High }} | {{ dataFromTWTR.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromTSLA.symbol }}</td>
					<td :class="[TSLAdata.buyAlert ? 'alert' : 'default']">
						{{ TSLAdata.targetPrice }}
					</td>
					<td>{{ dataFromTSLA.week52High }} | {{ dataFromTSLA.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromUBER.symbol }}</td>
					<td :class="[UBERdata.buyAlert ? 'alert' : 'default']">
						{{ UBERdata.targetPrice }}
					</td>
					<td>{{ dataFromUBER.week52High }} | {{ dataFromUBER.week52Low }}</td>
				</tr>
				<tr>
					<td>{{ dataFromASML.symbol }}</td>
					<td :class="[ASMLdata.buyAlert ? 'alert' : 'default']">
						{{ ASMLdata.targetPrice }}
					</td>
					<td>{{ dataFromASML.week52High }} | {{ dataFromASML.week52Low }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			price: 0,
			dataFromAAPL: [],
			dataFromAMZN: [],
			dataFromMSFT: [],
			dataFromGOOG: [],
			dataFromFB: [],
			dataFromTWTR: [],
			dataFromTSLA: [],
			dataFromUBER: [],
			dataFromASML: [],
			short: 0.93,
			medium: 0.8,
			long: 0.7,
			AAPLdata: {
				purchaseTag: 'stable',
				buyAlert: false,
				targetPrice: 0,
			},
			AMZNdata: {
				purchaseTag: 'stable',
				buyAlert: false,
				targetPrice: 0,
			},
			MSFTdata: {
				purchaseTag: 'stable',
				buyAlert: false,
				targetPrice: 0,
			},
			GOOGdata: {
				purchaseTag: 'stable',
				buyAlert: false,
				targetPrice: 0,
			},
			FBdata: {
				purchaseTag: 'middle',
				buyAlert: false,
				targetPrice: 0,
			},
			TWTRdata: {
				purchaseTag: 'middle',
				buyAlert: false,
				targetPrice: 0,
			},
			TSLAdata: {
				purchaseTag: 'risky',
				buyAlert: false,
				targetPrice: 0,
			},
			UBERdata: {
				purchaseTag: 'middle',
				buyAlert: false,
				targetPrice: 0,
			},
			ASMLdata: {
				purchaseTag: 'stable',
				buyAlert: false,
				targetPrice: 0,
			},
		};
	},

	created() {
		let AAPL =
			'https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let AMZN =
			'https://cloud.iexapis.com/stable/stock/AMZN/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let MSFT =
			'https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let GOOG =
			'https://cloud.iexapis.com/stable/stock/GOOG/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let FB =
			'https://cloud.iexapis.com/stable/stock/FB/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let TWTR =
			'https://cloud.iexapis.com/stable/stock/TWTR/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let TSLA =
			'https://cloud.iexapis.com/stable/stock/TSLA/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let UBER =
			'https://cloud.iexapis.com/stable/stock/UBER/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let ASML =
			'https://cloud.iexapis.com/stable/stock/ASML/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		fetch(AAPL, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromAAPL = response;
				console.log(response.symbol);
				// Calculate the target price
				this.AAPLdata.targetPrice = (
					this.dataFromAAPL.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.AAPLdata.targetPrice > this.dataFromAAPL.latestPrice) {
					this.AAPLdata.buyAlert = true;
				} else {
					this.AAPLdata.buyAlert = false;
				}
			});
		});
		// .catch((err) => {
		// 	console.log(err);
		// 	console.log('error!');
		// });

		fetch(AMZN, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromAMZN = response;
				console.log(response.symbol);
				// Calculate the target price
				this.AMZNdata.targetPrice = (
					this.dataFromAMZN.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.AMZNdata.targetPrice > this.dataFromAMZN.latestPrice) {
					this.AMZNdata.buyAlert = true;
				} else {
					this.AMZNdata.buyAlert = false;
				}
			});
		});

		fetch(MSFT, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromMSFT = response;
				console.log(response.symbol);
				// Calculate the target price
				this.MSFTdata.targetPrice = (
					this.dataFromMSFT.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.MSFTdata.targetPrice > this.dataFromMSFT.latestPrice) {
					this.MSFTdata.buyAlert = true;
				} else {
					this.MSFTdata.buyAlert = false;
				}
			});
		});

		fetch(GOOG, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromGOOG = response;
				console.log(response.symbol);
				// Calculate the target price
				this.GOOGdata.targetPrice = (
					this.dataFromGOOG.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.GOOGdata.targetPrice > this.dataFromGOOG.latestPrice) {
					this.GOOGdata.buyAlert = true;
				} else {
					this.GOOGdata.buyAlert = false;
				}
			});
		});

		fetch(FB, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromFB = response;
				console.log(response.symbol);
				// Calculate the target price
				this.FBdata.targetPrice = (
					this.dataFromFB.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.FBdata.targetPrice > this.dataFromFB.latestPrice) {
					this.FBdata.buyAlert = true;
				} else {
					this.FBdata.buyAlert = false;
				}
			});
		});

		fetch(TWTR, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromTWTR = response;
				console.log(response.symbol);
				// Calculate the target price
				this.TWTRdata.targetPrice = (
					this.dataFromTWTR.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.TWTRdata.targetPrice > this.dataFromTWTR.latestPrice) {
					this.TWTRdata.buyAlert = true;
				} else {
					this.TWTRdata.buyAlert = false;
				}
			});
		});

		fetch(TSLA, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromTSLA = response;
				// Calculate the target price
				this.TSLAdata.targetPrice = (
					this.dataFromTSLA.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.TSLAdata.targetPrice > this.dataFromTSLA.latestPrice) {
					this.TSLAdata.buyAlert = true;
				} else {
					this.TSLAdata.buyAlert = false;
				}
			});
		});

		fetch(UBER, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromUBER = response;
				console.log(response.symbol);
				// Calculate the target price
				this.UBERdata.targetPrice = (
					this.dataFromUBER.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.UBERdata.targetPrice > this.dataFromUBER.latestPrice) {
					this.UBERdata.buyAlert = true;
				} else {
					this.UBERdata.buyAlert = false;
				}
			});
		});

		fetch(ASML, {
			method: 'GET',
		}).then((response) => {
			response.json().then((response) => {
				this.dataFromASML = response;
				console.log(response.symbol);
				// Calculate the target price
				this.ASMLdata.targetPrice = (
					this.dataFromASML.week52High * this.short
				).toFixed(2);
				// Buy Alert Condition
				if (this.ASMLdata.targetPrice > this.dataFromASML.latestPrice) {
					this.ASMLdata.buyAlert = true;
				} else {
					this.ASMLdata.buyAlert = false;
				}
			});
		});
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.listContainer {
	// width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	object-position: 0% 50%;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
p {
	text-align: left;
}
p.percentage {
	font-size: 10pt;
	font-weight: 700;
	color: #333;
}

th,
td {
	padding: 15px;
	text-align: left;
}

td.default {
	color: #cdcdcd;
	font-weight: bold;
}

td.alert {
	color: #0057d9;
	font-weight: bold;
}

button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	border-radius: 20px;
	margin: 0 1rem;
}
</style>
