
<template>
    <button @click="$emit('click')" :type="type" class="button-container" :class="classStatus">
        <slot></slot>
    </button>
</template>
  <script setup name="MyButton">
import { computed, ref } from "vue"
let propsData = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    status: {
        type: String,
        default: 'primary',
        validator(value) {
            let data = ['primary', 'success', 'info', "warning", "danger"]
            let result = data.includes(value)
            if (!result) {
                console.log(`请输入${data.join()}`);
            }
            return result
        }
    }
})
defineEmits(["click"])

let classStatus = computed(() => {
    return {
        [propsData.status]: true
    }
})
</script>
  <style lang="less" scoped>
  .button-container {
      padding: 10px;
      border: none;
      cursor: pointer;
      color: inherit;
      border-radius: 5px;
      min-width: 100px;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      color: white;
  }
  
  .primary {
      background-color: #409eff;
      border: 1px solid #409eff;
  }
  
  .success {
      background-color: #67c23a;
      border: 1px solid #67c23a;
  }
  
  .info {
      background-color: #909399;
      border: 1px solid #909399;
  }
  
  .warning {
      background-color: #e6a23c;
      border: 1px solid #e6a23c;
  }
  
  .danger {
      background-color: #f56c6c;
      border: 1px solid #f56c6c;
  }
  </style>
  