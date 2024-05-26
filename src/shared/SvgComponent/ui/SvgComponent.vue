<script setup lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

const props = defineProps<{
  name: string;
}>();

const icon = defineAsyncComponent(() =>
  import(`../assets/svg/${props.name}.svg`)
);
</script>

<template>
  <component :is="icon" class="fill-current" />
</template>
