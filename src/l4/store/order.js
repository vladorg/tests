import React from 'react';
import {observable, computed, action} from 'mobx';

class Order{

  labels = {
    name: {
      error: 'Name must be on latin and has no less than 3 letters.',
      success: 'Done :)',
      placeholder: 'John Cena'
    },
    phone: {
      error: 'Phone must be number and has no less than 6 digits.',
      success: 'Done :)',
      placeholder: '+38 (063) 123-45-67'
    },
    email: {
      error: 'Entered email is incorrect! Example: test@test.com',
      success: 'Done :)',
      placeholder: 'test@test.com'
    }
  }

  @observable modal_status = false;

  @observable formData = {
    name: {
      label: 'Name',
      value: '',
      valid: false,
      pattern: /[a-z]{3,}/,
      placeholder: this.labels.name.placeholder,
      error: this.labels.name.error,
      success: this.labels.name.success,
      field_class: '',
      msg_class: '',
      msg: ''
    },
    phone: {
      label: 'Phone',
      value: '',
      valid: false,
      pattern: /[0-9]{6,}/,
      placeholder: this.labels.phone.placeholder,
      error: this.labels.phone.error,
      success: this.labels.phone.success,
      field_class: '',
      msg_class: '',
      msg: ''
    },
    email: {
      label: 'Email',
      value: '',
      valid: false,
      pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      placeholder: this.labels.email.placeholder,
      error: this.labels.email.error,
      success: this.labels.email.success,
      field_class: '',
      msg_class: '',
      msg: ''
    },
  };

  @computed get form_valid() {
    return this.formData.name.valid && this.formData.phone.valid && this.formData.email.valid;
  }

  @computed get user_data() {
    let userData = [];
    for(let key in this.formData) {
      userData.push(
          <p key={key}>{this.formData[key].label}: <strong>{this.formData[key].value}</strong></p>
      );
    }

    return userData;
  }
  


  @action showModal = () => {
    this.modal_status = true;
  }

  @action hideModal = () => {
    this.modal_status = false;
  }

  @action changeData = (name, value) => {
    let field = this.formData[name];
    let reg = field.pattern;

    field.value = value;

    if (reg.test(value)) {
      field.valid = true;
      field.field_class = 'is-valid';
      field.msg_class = 'text-success';
      field.msg = this.labels[name].success;
    } else {
      field.valid = false;
      field.field_class = 'is-invalid';
      field.msg_class = 'text-danger';
      field.msg = this.labels[name].error;
    }
  }

}

export default new Order();