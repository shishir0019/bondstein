<template>
    <div class="flex gap-2 items-center my-3 md:my-8">
        <div class="w-8 h-8 flex items-center justify-center">
            <Icon :type="breadcrumbsData.icon"></Icon>
        </div>
        <div class="flex items-center gap-2" v-for="(item, index) in breadcrumbsData.list" :key="`breadcrumbs-item-${index}`"> {{ item.title }} 
            <div  v-if="index < breadcrumbsData.list.length -1" class="w-6 h-6 flex justify-center items-center">
                <Icon type="chevron-right"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbsData } from '@/types'

const { breadcrumbsData } = defineProps<{ breadcrumbsData: BreadcrumbsData}>()
</script>