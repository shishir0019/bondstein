<template>
    <main>
      <header-component />
      <div class="p-3 md:p-8">
        <breadcrumbs :breadcrumbs-data="breadcrumbsData" />
        <div class="flex gap-3">
          <div class="flex-1">
            <div v-if="loading">Loading ...</div>
            <div v-else>
              <activity-list-component v-for="(activity, index) in activityList" :key="`activity-list-${activity.id}-${index}`" :activity="activity" />
            </div>
          </div>
          <div class="hidden md:flex w-[260px] flex-col px-8">
            <div>
              <router-link to="#" class="">Activity <Icon type="arrow-up-right" /></router-link>
            </div>
            <ul>
              <li><router-link to="#" class="">Shutter status</router-link></li>
              <li><router-link to="#" class="">Smoke status</router-link></li>
              <li><router-link to="#" class="">Motion status</router-link></li>
              <li><router-link to="#" class="">Gas status</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
  import Breadcrumbs from '@/components/layouts/Breadcrumbs.vue';
  import ActivityListComponent from '@/components/common/ActivityList.vue';
  import type { BreadcrumbsData } from '@/types'
  import { reactive, onBeforeMount } from 'vue';
  import { RouterLink } from 'vue-router';
  import { useActivityStore } from '@/stores/activity'
  import { storeToRefs } from 'pinia';
  
  const activityStore = useActivityStore()
  
  const { getSortedActivity, activityList, loading } = storeToRefs(activityStore)
  
  onBeforeMount(() => activityStore.getAllTerminals())
  
  const breadcrumbsData = reactive<BreadcrumbsData>({
    icon: 'bell',
    list: [
      { title: 'Activity' },
      { title: 'Shutter sensor' },
    ]
  })
  
  </script>