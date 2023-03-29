import { reactive } from "vue";

const defaultTimeout = 5000

class NotificationManager {
    constructor() {
        this.state = reactive({ notifications: [] });
        this.uniqueNotificationId = 0;
    }

    addNotification(title, content, timeout) {
        console.log("created notification with id ", this.uniqueNotificationId);
        this.state.notifications.push({ id: this.uniqueNotificationId++, title: title, content: content, timeout: timeout ?? defaultTimeout});
    }

    removeNotification(id) {
        console.log("removed notification with id ", id);
        this.state.notifications = this.state.notifications.filter(n => n.id != id);
    }

    getNotifications() {
        return this.state.notifications;
    }

    hasNotifications() {
        return this.state.notifications.length > 0;
    }
}

export default new NotificationManager();