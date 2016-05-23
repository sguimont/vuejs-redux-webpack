<template>
  <a class="btn btn-link" href="{{ config.baseUrl }}/{{ resource }}" target="_blank">{{ $t('core.develop') }}</a>
</template>

<script>
  export default {
    props: ['resource'],
    data() {
      return {
        config: this.$select('config')
      };
    }
  };
</script>

