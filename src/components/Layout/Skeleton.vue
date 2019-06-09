<template>
  <a-layout class="full-layout">
    <a-layout>
      <a-layout-header>Wang Diary</a-layout-header>
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
      <a-layout-footer>Personal Diary Blog for self healing purpose @ 2019</a-layout-footer>
    </a-layout>
    <a-layout-sider>
      <a-button type="primary">Button></a-button>
    </a-layout-sider>
  </a-layout>
</template>
<script>
export default {
  name: 'Skeleton'
}
</script>
<style>
.full-layout {
  height: 100vh;
}
</style>