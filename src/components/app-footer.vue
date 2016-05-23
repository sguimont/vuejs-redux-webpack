<template>
  <div class="footer">
    <div class="pull-left">
      <div class="copyright">
        &copy; {{ currentYear }} Lune Rouge 360
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
</script>
