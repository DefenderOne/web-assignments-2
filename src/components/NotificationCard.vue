<template>
    <div :class="['notification', `notification--${state}`]">
        <h2 class="notification__title">{{ title }}</h2>
        <div class="notification__content">{{ content }}</div>
        <div class="notification__close-button" @click="onDisposed()">&#x2715;</div>
    </div>
</template>

<script>
const State = { Created: 'created', Disposed: 'disposed' };

export default {
    name: "notification-card",
    props: {
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: 'Заголовок'
        },
        content: {
            type: String,
            default: 'Содержание'
        },
        timeout: {
            type: Number,
            default: 5000
        }
    },
    created() {
        setTimeout(() => this.onDisposed(), this.timeout);
    },
    data() {
        return {
            state: State.Created
        }
    },
    computed: {
        getState() {
            return this.state;
        }
    },
    emits: [
        'onNotificationDisposed'
    ],
    methods: {
        onDisposed() {
            this.state = State.Disposed;
            this.$emit('onNotificationDisposed', this.id);
        }
    }
}
</script>

<style scoped lang="less">
.notification {
    position: relative;
    border-radius: 5px;
    padding: 15px 25px;
    width: 330px;
    box-shadow: -2px 2px 15px 2px rgb(0 0 0 / 10%);

    &--appeared {
        animation: notification-appeared-animation .2s;
        animation-duration: 200ms;
        animation-direction: alternate;
    }

    &--disposed {
        animation: notification-removed-animation .3ms;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
        animation-direction: alternate;
    }

    &__group {
        position: relative;
    }

    &__title {
        font-weight: 700;
        font-size: 16px;
        color: #303133;
        margin: 0;
        text-align: left;
    }

    &__content {
        font-size: 14px;
        line-height: 20px;
        margin: 6px 0;
        color: #606266;
        text-align: justify;
    }

    &__close-button {
        position: absolute;
        height: auto;
        top: 5px;
        right: 10px;
        cursor: pointer;
        user-select: none;
    }
}

@keyframes notification-appeared-animation {
    0% {
        transform: translate(200px, 0);
    }

    100% {
        transform: translate(0, 0);
    }
}

@keyframes notification-removed-animation {
    0% {
        opacity: 100%;
    }

    100% {
        opacity: 0%;
    }
}
</style>