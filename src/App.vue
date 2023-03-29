<template>
  <div id="app">
    <h2>#4 Уведомление</h2>
    <button type="button" @click="addNotification">Открыть</button>
    <notification-area 
      v-if="isNotificationAreaShown"
      :notifications="notifications" 
      :position="'right'"/>
  </div>
</template>

<script>
import NotificationArea from './components/NotificationArea.vue';
import NotificationManager from './notification-manager';

export default {
  name: 'App',
  components: {
    NotificationArea
  },
  data() {
    return {
      notifications: [],
      uniqueNotificationId: 0
    }
  },
  computed: {
    isNotificationAreaShown() {
      return NotificationManager.hasNotifications();
    }
  },
  methods: {
    addNotification() {
      let date = new Date(Date.now());
      NotificationManager.addNotification('Уведомление ' + date.toLocaleTimeString());
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: 0;
}
</style>
