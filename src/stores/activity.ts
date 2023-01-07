import { reactive, ref, computed} from 'vue'
import { defineStore } from 'pinia'
import type { Activity } from '@/types'
import axios from '@/utility/axios'

export const useActivityStore = defineStore('activity', () => {
  const activityList = reactive<Activity[]>([])
  const loading = ref(false)

  const getAllTerminals = () => {
    loading.value = true
    activityList.splice(0,activityList.length);
    axios.get('/terminals').then(res => {
      for (const terminal of res.data) {
        activityList.push(terminal)
      }
    }).finally(() => loading.value = false)
  }

  return { loading ,activityList, getAllTerminals }
})
