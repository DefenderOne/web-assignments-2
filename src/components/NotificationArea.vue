<template>
    <div :class="[`notification-area`, `notification-area--${position}`]">
        <notification-card 
            v-for="notification in notifications" 
            :key="notification.id" 
            :id="notification.id"
            :title="notification.title" 
            :content="notification.content" 
            :timeout="notification.timeout"
            @onNotificationDisposed="(id) => $emit('onElementRemoved', id)" />
    </div>
</template>

<script>
import NotificationCard from './NotificationCard.vue';

export default {
    name: "notification-area",
    components: {
        NotificationCard
    },
    props: {
        notifications: {
            type: Array,
            validator(array) {
                let isValid = true;
                array.forEach(e => {
                    if (e.id === undefined) {
                        isValid = false;
                    }
                });
                return isValid;
            }
        },
        position: {
            type: String,
            required: true,
            validator(value) {
                return ['left', 'right'].includes(value);
            }
        },
        timeout: {
            type: Number,
            default: 5000
        }
    },
    emits: [
        'onElementRemoved'
    ]
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