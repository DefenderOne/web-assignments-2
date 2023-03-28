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

export default {
    name: "notification-area",
    components: {
        NotificationCard
    },
    mounted() {
        this.$emit('interface', { createNotification: (title, content, timeout) => this.createNotification(title, content, timeout) });
    },
    props: {
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
    data() {
        return {
            notifications: [],
            uniqueId: 0
        }
    },
    emits: [
        'interface'
    ],  
    methods: {
        createNotification(title, content) {
            console.log("created notification with id ", this.uniqueId);
            this.notifications.push({ id: this.uniqueId++, title: title, content: content, timeout: this.timeout });
        },
        disposeNotification(id) {
            this.notifications = this.notifications.filter((value) => value.id != id);
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