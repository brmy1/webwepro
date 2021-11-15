<template lang="pug">
    b-row
        b-col
            template(v-if="type !== 'file'")
                label(:for='id') {{ label }}
                the-mask.input_text(v-if='mask.length', :id='id', :class='inputClass', :type='type', :value='value', :mask='mask', :masked='masked', :readonly='readonly', :autocomplete='autocomplete', :placeholder='placeholder', @input="$event => $emit('input', $event)")
                    money.input_text(v-else-if="type === 'money'", :class='inputClass', :value='value', v-bind='money', :autocomplete='autocomplete', @input="$event => $emit('input', $event)")
                        input.input_text(v-else='', :id='id', :class='inputClass', :type='type', :value='value', :readonly='readonly', :autocomplete='autocomplete', :placeholder='placeholder', @input="$event => $emit('input', $event.target.value)")
            template(v-else='')
                label(:for='id') {{ label }}
                input(:id='id', hidden='', type='file', @input='inputFile')
                label.input_text(:id='`file-label-${id}`', :for='id')
                    | {{ fileName }}
            small.input-error  {{ error }}

            b-form-group#fieldset-zip(description='Endereço CEP.' label='CEP' label-for='input-zip' valid-feedback='Thank you!' :invalid-feedback='invalidFeedback' :state='state')
                b-form-input#input-zip(v-model='name' :state='state' trim)
</template>

<script>
/* eslint-disable vue/require-prop-types */
/* eslint-disable vue/require-default-prop */

import Vue from 'vue'
import { v4 } from 'uuid'
import { TheMask } from 'vue-the-mask'
import { Money } from 'v-money'

export default Vue.extend({
  components: { TheMask, Money },
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'off'
    },
    value: {
      required: true,
      default: ''
    },
    mask: {
      required: false,
      default: ''
    },
    masked: {
      required: false,
      default: false
    },
    rules: {
      type: Array,
      required: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    inputClass: String
  },

  data: () => ({
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: '',
      precision: 2,
      masked: false
    }
  }),

  computed: {
    id () {
      return `form-field-${v4()}`
    },
    fileName () {
      if (this.type !== 'file') { return }
      if (this.value && typeof this.value === 'object' && this.value.name) {
        return this.value.name
      }
      return 'Selecionar...'
    },
    error () {
      if (!this.rules) { return '' }
      if (!this.$formSended && !this.value) { return '' }

      for (const rule of this.rules) {
        const result = rule(this.value)
        if (result !== true) { return result }
      }
      return ''
    }
  },

  methods: {
    inputFile (e) {
      const [file] = e.target.files
      this.$emit('input', file)
    }
  }
})
</script>
