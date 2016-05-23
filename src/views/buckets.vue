<template>
  <alert :show.sync="system.displayAlert" type="danger" width="400px" placement="top-right">
    <span class="icon-info-circled alert-icon-float-left"></span>
    <strong>Error!</strong>
    <p>{{ system.alertMessage }}</p>
  </alert>

  <add-bucket :show-modal.sync="buckets.showAddBucketModal"></add-bucket>

  <div>
    <button id="add-bucket-btn" type="button" class="btn btn-link" @click="showAddBucketDialog()">Add a bucket</button>
    <develop resource="sync-api" class="pull-right"></develop>
  </div>

  <div>
    <ul v-if="buckets.items && buckets.items.length > 0">
      <li v-for="bucket in buckets.items" track-by="$index">
        {{ bucket.name }} - {{ bucket.code }}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../store';
  import {alert} from 'vue-strap';
  import addBucket from '../components/add-bucket';
  import develop from '../components/develop';

  export default {
    components: {
      alert,
      develop,
      addBucket
    },

    data() {
      return {
        buckets: this.$select('buckets'),
        system: this.$select('system')
      };
    },

    methods: {
      showAddBucketDialog() {
        store.dispatch({type: 'SHOW_ADD_BUCKET_DIALOG'});
      }
    }
  };
</script>
