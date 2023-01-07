<template>
    <div class="w-[280px] h-full shadow-2xl px-3 py-8 bg-slate-100 dark:bg-[#3C4048] flex flex-col">
        <div class="mb-[100px] text-center text-xl">{{ title }}</div>
        <div class="flex-1">
            <ul>
                <li v-for="(menu, index) in menuList" :key="`menu-item-${index}`">
                    <router-link :to="`${menu.path}`" class="group flex rounded hover:bg-teal-500 hover:text-white my-1" exact-active-class="bg-teal-500 text-white">
                        <div class="flex items-center w-full gap-2">
                            <div class="h-6 w-1 group-hover:bg-white group-active:bg-white"></div>
                            <div class="flex items-center w-full">
                                <div class="w-8 h-8 flex justify-center items-center">
                                    <Icon class="" :type="menu.icon"></Icon>
                                </div>
                                <div class="flex justify-between w-full items-center p-3">
                                    <div class="flex-1">{{ menu.name }}</div>
                                    <div v-if="menu.notification" class="px-3 rounded-2xl border">{{ menu.notification }}</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            <button class="flex gap-2 items-center w-full hover:bg-teal-500 hover:text-white rounded p-3">
                <Icon type="log-out"></Icon>
                <div>Logout</div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import type { Menu } from '@/types'
import { RouterLink } from 'vue-router'

const { title, menuList } = defineProps({ title: { type: String, required: true }, menuList: { type: Array<Menu>, required: true } })
</script>