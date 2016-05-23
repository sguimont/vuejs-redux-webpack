'use strict';

function setup(form, fields) {
  // TODO: allow onValidateSuccess and onValidateError to be stacked

  var instance = $(form).formValidation({
    framework: 'bootstrap',
    excluded: ':disabled',
    icon: {
      valid: 'fa fa-check',
      invalid: 'fa fa-times',
      validating: 'fa fa-refresh'
    },
    fields: fields || {}
  }).on('success.form.fv', function (e) {
    e.preventDefault();
    if (instance._onValidateSuccess) instance._onValidateSuccess(instance.values(), e);
  }).on('err.form.fv', function (e, data) {
    e.preventDefault();
    if (instance._onValidateError) instance._onValidateError(data, e);
  });

  instance.onValidateSuccess = function (onValidateSuccess) {
    instance._onValidateSuccess = onValidateSuccess;
    return instance;
  };

  instance.onValidateError = function (onValidateError) {
    instance._onValidateError = onValidateError;
    return instance;
  };

  instance.values = function () {
    var values = {};
    var inputs = $(form).serializeArray();

    $.each(inputs, function () {
      if (values[this.name]) {
        if (!values[this.name].push) {
          values[this.name] = [values[this.name]];
        }
        values[this.name].push(this.value || '');
      } else {
        values[this.name] = this.value || '';
      }
    });

    return values;
  };

  return instance;
}

var defaults = {
  validators: {
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
  }
};

function extend(Vue) {
  Vue.form = (form, fields) => {
    return setup(form, fields);
  };

  Vue.prototype.$form = function (form, fields) {
    return setup(form, fields);
  };

  return Vue;
}


function plugin(Vue, opts = {}) {
  if (process.env.NODE_ENV !== 'production' && plugin.installed) {
    warn('already installed.');
    return
  }

  extend(Vue)
}

plugin.version = '1.0.0';

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
