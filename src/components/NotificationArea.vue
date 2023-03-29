<template>
    <div :class="[`notification-area`, `notification-area--${position}`]">
        <notification-card 
            v-for="notification in notifications" 
            :key="notification.id" 
            :id="notification.id"
            :title="notification.title" 
            :content="notification.content" 
            :timeout="notification.timeout"
            @onNotificationDisposed="(id) => disposeNotification(id)"/>
    </div>
</template>

<script>
import NotificationCard from './NotificationCard.vue';
import NotificationManager from '@/notification-manager';

export default {
    name: "notification-area",
    components: {
        NotificationCard
    },
    props: {
        position: {
            type: String,
            required: true,
            validator(value) {
                return ['left', 'right'].includes(value);
            }
        }
    },
    computed: {
        notifications: () => {
            return NotificationManager.getNotifications();
        }
    },
    methods: {
        disposeNotification(id) {
            NotificationManager.removeNotification(id);
        }
    }
}
</script>

<style scoped lang="less">
.notification-area {
    position: absolute;
    width: auto;
    padding: 10px;

    &--right {
        top: 0;
        right: 0;
        bottom: 0;
    }

    &--left {
        top: 0;
        left: 0;
        bottom: 0;
    }
}

.notification-area>.notification:not(:last-child) {
    margin-bottom: 10px;
}
</style>