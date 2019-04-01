<template>
  <div class="cu-form-group">
    <div class="title">{{title}}</div>
    <div class="pickerbox" @click="$nextTick(() => { $refs.bootomModal.showModal() })">
      <div class="picker" v-if="values.length > 0">
          <span v-for="(item, index) in values" :key="index">
            <em v-if="index > 0">/</em>{{valueKey ? item[valueKey] : item}}
          </span>
      </div>
      <div class="picker" v-else>{{placeholder || '请选择'}}</div>
    </div>
    <BottomModal ref="bootomModal">
      <mt-picker :slots="slots" @change="onValuesChange" :valueKey="valueKey"></mt-picker>
    </BottomModal>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BottomModal from '../bottomModal/bottomModal.vue'
  import {Picker} from 'mint-ui'

  Vue.component(Picker.name, Picker)

  export default {
    components: {
      BottomModal
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      valueKey: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      slots: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        values: [],
        valueTemp: []
      }
    },
    methods: {
      onValuesChange(picker, values) {
        this.valueTemp = values
      },
      confirm(callback) {
        this.values = [...this.valueTemp]
        this.$emit('input', this.slots.length === 1 ? this.values[0] : this.values)
        callback && callback()
      }
    }
  }
</script>