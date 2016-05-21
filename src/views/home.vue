<template>
  <hello></hello>
  <p>{{ message }}</p>
  <input v-model="message"/>
</template>

<script>
  import Hello from '../components/Hello';

  export default {
    components: {
      Hello
    },

    data() {
      return {
        message: 'A Message'
      };
    },

    created() {
      console.log('created');
    },

    compiled() {
      console.log('compiled');
    },

    ready() {
      console.log('ready');
    },

    destroyed() {
      console.log('destroyed');
    }
  };
</script>
