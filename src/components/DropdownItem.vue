<template>
  <li :class="{'dropdown-option': true, 'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DropdownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
// scoped 未起作用
.dropdown-option {
  &.is-disabled * {
    color: #67757d;
    pointer-events: none; // 禁止默认事件
    background-color: transparent;
  }
}
</style>