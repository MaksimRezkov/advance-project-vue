<template>
  <div class="header flex-all-center">
    <div class="header__content flex-j-between">
      <div class="content__left">
        <div class="home_icon_wrapp">
          <RouterLink :to="routeHome">
            <svgHome/>
          </RouterLink>
        </div>
      </div>
      <div class="content__right flex-j-end">
        <div v-for="route in routes" :key="route.path">
          <RouterLink :to="route.path">
            <span>{{ route.name }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import svgHome from '@/assets/svg/svgHome.svg';
  import { toRefs } from 'vue';

  const props = defineProps<{
    routes: { path: string; name: string }[],
    routeHome: string,
  }>();

  const { routes, routeHome } = toRefs(props);

</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 60px;
    border: 1px solid red;

    &__content {
      width: var(--content-width);
      height: 100%;
    }
  }

  .content {
    &__right {
      flex-grow: 1;
      gap: 20px;
    }
  }

  .home {
    &_icon_wrapp {
      cursor: pointer;
    }
  }
</style>
