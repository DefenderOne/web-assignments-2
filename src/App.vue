<template>
  <div id="app">
    <h2>#4 Уведомление</h2>
    <button type="button" @click="notificationAreaInterface.createNotification()">Открыть</button>
    <notification-area @interface="(notificationAreaInterface) => mountNotificationInterface(notificationAreaInterface)" :position="'right'" :timeout="5000"/>
  </div>
</template>

<script>
import NotificationArea from './components/NotificationArea.vue';

export default {
  name: 'App',
  components: {
    NotificationArea
  },
  data() {
    return {
      notificationAreaInterface: {}
    }
  },
  methods: {
    mountNotificationInterface(notificationAreaInterface) {
      this.notificationAreaInterface = notificationAreaInterface;
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
