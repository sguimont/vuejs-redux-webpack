<template>
  <form class="add-bucket-form">
    <modal :show.sync="showModal">
      <div slot="modal-header" class="inmodal ng-scope">
        <div class="modal-header">
          <i class="fa fa-database modal-icon"></i>
          <h4 class="modal-title">{{ $t('buckets.add_bucket.header.title') }}</h4>
          <small class="font-bold"> {{ $t('buckets.add_bucket.header.text') }}</small>
        </div>
      </div>
      <div slot="modal-body" class="modal-body">
        <p>
          {{ $t('buckets.add_bucket.body.text') }}
        </p>
        <form-group label="buckets.bucket.code">
          <input class="form-control" type="text" name="code" v-model="code" placeholder="{{ $t('buckets.bucket.code_hint') }}">
        </form-group>
        <form-group label="buckets.bucket.name">
          <input class="form-control" type="text" name="name" v-model="name" placeholder="{{ $t('buckets.bucket.name_hint') }}">
        </form-group>
        <p v-if="code">
          <small>
            <strong>{{ $t('buckets.sync_api') }}</strong> <br/>https://api.lr360.io/sync/{{ code }}/[language]
          </small>
        </p>
        <p v-if="code">
          <small>
            <strong>{{ $t('buckets.sync_api') }}</strong> <br/>https://api.lr360.io/search/{{ code }}
          </small>
        </p>
      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-default" @click='close()'>Cancel</button>
        <button type="submit" class="btn btn-success">Add Bucket</button>
      </div>
    </modal>
  </form>
</template>

<script>
  import store from '../store';
  import {modal} from 'vue-strap';
  import formGroup from '../components/form-group';

  export default {
    components: {
      modal,
      'form-group': formGroup
    },
    props: ['showModal'],
    ready() {
      this.$form('.add-bucket-form', {
        code: {
          validators: {
            notEmpty: {
              message: 'The code is required'
            },
            stringLength: {
              max: 30,
              message: 'The code must be less than 30 characters long'
            }
          }
        },
        name: {
          validators: {
            notEmpty: {
              message: 'The name is required'
            },
            stringLength: {
              max: 50,
              message: 'The name must be less than 50 characters long'
            }
          }
        }
      }).onValidateSuccess(() => {
        store.dispatch(store.actions.addBucket({code: this.code, name: this.name}));
        store.dispatch({type: 'HIDE_ADD_BUCKET_DIALOG'});
      });
    },
    data() {
      return {
        code: '',
        name: ''
      };
    },
    methods: {
      close() {
        store.dispatch({type: 'HIDE_ADD_BUCKET_DIALOG'});
      },
      addBucket() {
        store.dispatch(store.actions.addBucket({code: this.code, name: this.name}));
        store.dispatch({type: 'HIDE_ADD_BUCKET_DIALOG'});
      }
    }
  };
</script>
