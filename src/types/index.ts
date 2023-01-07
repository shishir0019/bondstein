export interface Menu {
    name: String,
    icon?: String,
    path: String,
    notification?: any
}

export interface BreadcrumbItem {
    title: String,
    path? : String
}

export interface BreadcrumbsData {
    icon?: String,
    list: Array<BreadcrumbItem>
}

export interface Activity {
    id: Number,
    deviceId: String,
    shuterSensorStatus: Number,
    shutterSensorUpdated_at: String,
    smokeSensorStatus: Number,
    smokeSensorUpdated_at: String,
    motionSensorStatus: Number,
    motionSensorUpdated_at: String,
    gasSensorStatus: Number,
    gasSensorUpdated_at: String,
    isDeviceOff: Number,
    userId: Number,
    updateTime: String,
    created_at: Number,
    updated_at: Number
}