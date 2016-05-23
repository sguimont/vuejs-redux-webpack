<template>
  <div class="form-group">
    <label>{{ $t(label) }}</label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['label']
  };
</script>
