<template>
    <main>
      <header-component />
      <div class="p-3 md:p-8">
        <breadcrumbs :breadcrumbs-data="breadcrumbsData" />
        <div class="flex">
          Help
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
  import Breadcrumbs from '@/components/layouts/Breadcrumbs.vue';
  import type { BreadcrumbsData } from '@/types'
  import { reactive} from 'vue';
  
  const breadcrumbsData = reactive<BreadcrumbsData>({
    icon: 'phone',
    list: [
      { title: 'Help & Support' }
    ]
  })
  
  </script>