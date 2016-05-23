<template>
  <div id="app">
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>


<script>
  import appFooter from './components/app-footer';

  export default {
    components: {
      'app-footer': appFooter
    }
  };

</script>
