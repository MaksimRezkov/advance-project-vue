<template>
  <div class="main__layout layout">
    <Header :route-home="homeRoute" :routes="routePaths"></Header>
    <div class="layout-page__content">
      <slot></slot>
    </div>
  </div>
</template>


<script setup lang='ts'>
  import { Header } from '@/widgets/header';
  import { useDefineRouteConfig } from '../lib/hooks/useDefineRoutes';

  const { homeRoute, routePaths } = useDefineRouteConfig();

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
