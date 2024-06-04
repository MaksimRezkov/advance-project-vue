<template>
  <div class="main__layout layout">
    <Header
      :route-home="homeRoute"
      :routes="routePaths"
    />
    <div class="layout-page__content">
      <slot></slot>
    </div>
  </div>
</template>


<script setup lang='ts'>
  import { Header } from '@/widgets/header';
  import { useDefineRoutes } from '../lib/hooks/useDefineRoutes';

  const { homeRoute, routePaths } = useDefineRoutes();

</script>


<style scoped lang="scss">
  .layout {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-page__content {
      width: var(--content-width);
      max-width: var(--max-content-width);
    }
  }
</style>
