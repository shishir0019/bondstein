<template>
    <div class="flex h-screen bg-slate-100 dark:bg-[#3C4048] text-black dark:text-white">
        <Transition>
            <aside v-if="width > 768 || isMenuOpen" @click.self="applicationStore.menuTrigger" class="outer z-50 absolute left-0 bottom-0 top-0 bg-red-500 w-full backdrop-opacity-10 backdrop-invert bg-white/30 md:w-[280px] md:relative">
                <drawer title="Commando Smart Guard" :menu-list="list" />
            </aside>
        </Transition>
        <main class="w-full overflow-y-scroll">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Drawer from '@/components/layouts/Drawer.vue'
import type { Menu } from '@/types'
import { useApplicationStore } from '@/stores/application'
import { useActivityStore } from '@/stores/activity'
import { storeToRefs } from "pinia";
import { useWindowSize } from '@vueuse/core'
import { computed } from "vue";

const { width, height } = useWindowSize()

const applicationStore = useApplicationStore()
const activityStore = useActivityStore()

const { isMenuOpen } = storeToRefs(applicationStore)
const { activityList } = storeToRefs(activityStore)

const list = computed<Menu[]>(() => ([
    { name: 'Dashboard', icon: 'grid', path: '/dashboard' },
    { name: 'Activity', icon: 'bell', path: '/activity', notification: activityList.value.length },
    { name: 'Settings', icon: 'settings', path: '/settings' },
    { name: 'Help & Support', icon: 'phone', path: '/help' },
]))

</script>

<style scoped>.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>