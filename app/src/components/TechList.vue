<template>
	<div class="listContainer">
		<h3>Tech List</h3>
		<div>
			<div>
				<p>Symbol: {{ dataFromAAPL.symbol }}</p>

				<p>Close Price: {{ dataFromAAPL.iexClose }}</p>
				<p>Date: {{ dataFromAAPL.latestTime }}</p>
				<p>Range: {{ dataFromAAPL.change + '%' }}</p>

				<p>Symbol: {{ dataFromTSLA.symbol }}</p>
				<p>week52High: {{ dataFromTSLA.week52High }}</p>
				<p>week52High: {{ dataFromTSLA.week52High }}</p>
				<p>Target Price: {{ AAPLdata }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PriceApp',
	props: {},
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
			AAPLdata: 10,
		};
	},
	methods: {
		// runs the function once after the getter is triggered
		clear() {
			this.price = '0';
		},
	},

	created() {
		let AAPL =
			'https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6';
		let AMZN =
			'https://sandbox.iexapis.com/stable/stock/AMZN/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let MSFT =
			'https://sandbox.iexapis.com/stable/stock/MSFT/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let GOOG =
			'https://sandbox.iexapis.com/stable/stock/GOOG/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let FB =
			'https://sandbox.iexapis.com/stable/stock/FB/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let TWTR =
			'https://sandbox.iexapis.com/stable/stock/TWTR/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let TSLA =
			'https://sandbox.iexapis.com/stable/stock/TSLA/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let UBER =
			'https://sandbox.iexapis.com/stable/stock/UBER/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		let ASML =
			'https://sandbox.iexapis.com/stable/stock/ASML/quote?token=Tpk_51f077d880dc4c338d9a7e70aa13b0ba';
		fetch(AAPL, {
			method: 'GET',
		})
			.then((response) => {
				response.json().then((response) => {
					this.dataFromAAPL = response;
					console.log(response.symbol);
					console.log('responsed');
				});
			})
			.catch((err) => {
				console.log(err);
				console.log('error');
			});
		fetch(TSLA, {
			method: 'GET',
		})
			.then((response) => {
				response.json().then((response) => {
					this.dataFromTSLA = response;
					this.AAPLdata = this.dataFromTSLA.week52Low;
					console.log(response.symbol);
				});
			})
			.catch((err) => {
				console.log(err);
				console.log('error');
			});
	},

	computed: {
		// runs the function when the data is changed
		calculatedNow() {
			return (
				(this.price * 0.93).toFixed(2) +
				' ・ ' +
				(this.price * 0.88).toFixed(2) +
				' ・ ' +
				(this.price * 0.85).toFixed(2)
			);
		},
		showTargetPrice() {
			return (this.AAPLdata * 10 + 1).toFixed(2);
			// console.log(this.AAPLdata);
		},
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
