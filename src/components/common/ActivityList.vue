<template>
    <small>{{  useDateFormat(activity.updateTime.toString(), 'DD-MMMM (ddd)', { locales: 'en-US' }).value  }}</small>
    <div>
        <gas-sensor :date="activity.gasSensorUpdated_at.toString()" :is-active="Boolean(activity.gasSensorStatus)" />
        <smoke-sensor :date="activity.smokeSensorUpdated_at.toString()" :is-active="Boolean(activity.smokeSensorStatus)" />
        <shutter-sensor :date="activity.shutterSensorUpdated_at.toString()" :is-active="Boolean(activity.shuterSensorStatus)" />
        <motion-sensor :date="activity.motionSensorUpdated_at.toString()" :is-active="Boolean(activity.motionSensorStatus)" />
    </div>
</template>
<script setup lang="ts">
import GasSensor from '@/components/common/GasSensor.vue'
import SmokeSensor from '@/components/common/SmokeSensor.vue'
import ShutterSensor from '@/components/common/ShutterSensor.vue'
import MotionSensor from '@/components/common/MotionSensor.vue'

import { useDateFormat } from '@vueuse/core'
import type { Activity } from '@/types'

interface Props {
    activity: Activity
}

const { activity } = defineProps<Props>()
</script>