
<template>
    <form class="myform-container" @submit.prevent="onSubmit">
        <slot></slot>
    </form>
</template>
<script setup name="MyForm">
import formRules from "../../utils/formRule.js"
let emit = defineEmits(["submit"])
let propsData = defineProps({
    model: {
        type: Object,
        default: {}
    },
    rule: {
        type: Object,
        default: {}
    }
})
function onSubmit() {
    let result = true
    let data = propsData.model
    let rule = propsData.rule
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            if (rule[key]) {
                let info = formRules(data[key], rule[key].rules)
                rule[key].error = info
                if (info) {
                    result = false
                }
            }
        }
    }
    if (result) {
        emit('submit', data)
    }
}
</script>
  <style lang="less" scoped>
  .myform-container {
      width: 100%;
  }
  </style>
  