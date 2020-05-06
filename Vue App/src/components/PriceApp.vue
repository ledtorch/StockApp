<template>
  <div class="hello">
    <h3>Stock App</h3>
    <div class="inputBox">
      <div>
        <input v-model="price" placeholder=" Stock Price">
        <!-- price is the value that v-model gets from input -->
        <button @click="clear">Clear</button>
        <!-- send the msg to methods runs the clear function -->
      </div>
      <div>
      <p>Now: {{ calculatedNow }}</p>
        <!-- return the value from the function of computed -->
        <p>Brand: {{ calculatedBrand }}</p>
        <p>Future: {{ calculatedFuture }}</p>
        <br>
        <p>Symbol: {{ dataFromIEXcloud.symbol }}</p>
        <p>Close Price: {{ dataFromIEXcloud.close }}</p>
        <p>Date: {{ dataFromIEXcloud.latestTime }}</p>
        <p>API: {{ dataFromIEXcloud.change +"%"}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PriceApp',
  props: {
  },
  data() {
    return {
      price: 0,
      dataFromIEXcloud: []
    }
  },
  methods: {
    // runs the function once after the getter is triggered
    clear() {
      this.price = '0'
    }
  },
  computed: {
    // runs the function when the data is changed
    calculatedNow() {
      return (this.price * 0.89).toFixed(2) + ' ・ ' + (this.price * 0.84).toFixed(2) + ' ・ ' + (this.price * 0.79).toFixed(2);
    },
    calculatedBrand() {
      return (this.price * 0.84).toFixed(2) + ' ・ ' + (this.price * 0.79).toFixed(2) + ' ・ ' + (this.price * 0.74).toFixed(2);
    },
    calculatedFuture() {
      return (this.price * 0.74).toFixed(2) + ' ・ ' + (this.price * 0.69).toFixed(2) + ' ・ ' + (this.price * 0.64).toFixed(2);
    }
  },

  created() {
    let IEXcloud = "https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bc3b7c3b94d74055a098edc0230d4fc6"
    fetch(IEXcloud, {
    "method": "GET",
    }).then(response => {
      response.json().then(response => {
        this.dataFromIEXcloud = response;
        console.log(response.symbol);
        console.log('responsed');
      })
    }).catch(err => {
      console.log(err);
      console.log('error');
    });
  }
}

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
</style>
