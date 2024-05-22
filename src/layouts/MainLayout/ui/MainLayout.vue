<template>
  <div class="main__layout layout">
    <Header/>
    <div class="layout-page__content"></div>
    <slot></slot>
  </div>
</template>


<script setup lang='ts'>
  import { Header } from '@/widgets/header';
</script>


<style scoped lang="scss">
  .layout {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    &-page_content {
      width: var(--content-width);
    }
  }
</style>
