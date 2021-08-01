<template>
	<div class="hello">
		<h3>Stock Calculator</h3>
		<div class="inputBox">
			<div>
				<input v-model="price" placeholder=" Stock Price" />
				<!-- price is the value that v-model gets from input -->
				<button @click="clear">Clear</button>
				<!-- send the msg to methods runs the clear function -->
			</div>
			<div>
				<p>Short: {{ calculatedNow }}</p>
				<p class="percentage">7% 12% 15%</p>
				<!-- return the value from the function of computed -->
				<p>Middle: {{ calculatedBrand }}</p>
				<p class="percentage">20% 25% 27%</p>
				<p>Future: {{ calculatedFuture }}</p>
				<p class="percentage">30% 40% 50%</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			price: 0,
			short: 0.93,
			medium: 0.8,
			long: 0.7,
		};
	},
	methods: {
		// runs the function once after the getter is triggered
		clear() {
			this.price = '0';
		},
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
		calculatedBrand() {
			return (
				(this.price * 0.8).toFixed(2) +
				' ・ ' +
				(this.price * 0.75).toFixed(2) +
				' ・ ' +
				(this.price * 0.73).toFixed(2)
			);
		},
		calculatedFuture() {
			return (
				(this.price * 0.7).toFixed(2) +
				' ・ ' +
				(this.price * 0.6).toFixed(2) +
				' ・ ' +
				(this.price * 0.5).toFixed(2)
			);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.inputBox {
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
