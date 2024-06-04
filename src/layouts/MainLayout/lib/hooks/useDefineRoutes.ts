import { RoutePaths, routes } from '@/app/router/routes';
import { ref } from 'vue';

export function useDefineRoutes() {
  const routePaths = ref<{ path: string; name: string }[]>([]);
  const homeRoute = RoutePaths.home;

  routes.forEach(routeConfig => {
    const { path, name } = routeConfig;
    routePaths.value.push({ name: name as string, path });
  });

  return {
    homeRoute,
    routePaths,
  };
};
