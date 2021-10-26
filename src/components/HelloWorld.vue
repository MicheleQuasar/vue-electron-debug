<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="callHello">Click me!</button>
    <p>Message: {{result}} </p>
  </div>
</template>

<script>
import Module from './../cpp/hello';

export default {
  beforeCreate() {
    if (this.$myModule === null) {
      new Module().then(myModule => {
        this.$myModule = myModule;
      });
    }
  },
  data() {
    return {
      result: null
    }
  },
  methods: {
    callHello() {
      if (this.result === null) {
        this.result = this.$myModule.ccall('hello','string',null,null);
      }
      else {
        this.result = null;
      }
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
