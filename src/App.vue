<template>
  <div id="app">
    <h2>#4 Уведомление</h2>
    <button type="button" @click="notifications.push({ id: uniqueNotificationId++ })">Открыть</button>
    <notification-area 
      :notifications="notifications" 
      :position="'right'" 
      :timeout="5000" @onElementRemoved="(id) => notifications = notifications.filter(n => n.id != id)"/>
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
      notifications: [],
      uniqueNotificationId: 0
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
