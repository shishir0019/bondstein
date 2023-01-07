<template>
    <div class="p-3 bg-gray-200 dark:bg-gray-700 mb-2 rounded flex items-center gap-2">
        <div class="flex justify-center items-center w-10 h-10">
            <Icon :type="isActive? 'lock': 'unlock'" />
        </div>
        <div>
            <div>Motion sensor <span :class="isActive ? 'text-green-500': 'text-red-500'"> {{ isActive ? 'enable': 'disable' }}</span>. Your shop is protection of commando smart guard.
            </div>
            <div>{{ useDateFormat(date, 'hh:mm:ss', { locales: 'en-US' }).value }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
const { date, isActive } = defineProps({
    date: { type: String, required: true },
    isActive: { type: Boolean, required: true }
})

</script>