<template>
  <transition-group name="notification"
                    class="notify fixed top-0 right-0 mt-4 mr-4"
                    :class="[groupReference]"
                    tag="div">
    <div
      v-for="(item) in items"
      :key="item.id"
      :class="[item.type]"
      class="notification rounded py-6 mb-3">
      <div class="flex justify-between px-6">
        <div class="flex items-center justify-center">
          <svg v-if="item.type === 'warning'"
               aria-hidden="true"
               focusable="false"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
               class="w-5 h-5 mr-4"><path fill="currentColor"
                                          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                                          class="" /></svg>
          <svg v-if="item.type === 'success'"
               aria-hidden="true"
               focusable="false"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
               class="w-5 h-5 mr-4"><path fill="currentColor"
                                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                          class="" /></svg>
          <svg v-if="item.type === 'error'"
               aria-hidden="true"
               focusable="false"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 512 512"
               class="w-5 h-5 mr-4"><path fill="currentColor"
                                          d="M440.5 88.5l-52 52L415 167c9.4 9.4 9.4 24.6 0 33.9l-17.4 17.4c11.8 26.1 18.4 55.1 18.4 85.6 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c30.5 0 59.5 6.6 85.6 18.4L311 97c9.4-9.4 24.6-9.4 33.9 0l26.5 26.5 52-52 17.1 17zM500 60h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12h24c6.6 0 12-5.4 12-12s-5.4-12-12-12zM440 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12zm33.9 55l17-17c4.7-4.7 4.7-12.3 0-17-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17 4.8 4.7 12.4 4.7 17 0zm-67.8 0c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17zm67.8 34c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17zM112 272c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-52.9 0-96 43.1-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16z"
                                          class="" /></svg>
          <h4 class="font-bold text-xl">
            {{ item.title }}
          </h4>
        </div>
        <button @click.prevent="removeItem(item)">
          <svg aria-hidden="true"
               focusable="false"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 352 512"
               class="w-5 h-5"><path fill="currentColor"
                                     d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                     class="" /></svg>
        </button>
      </div>
      <div class="divider border-b my-4" />
      <div class="px-6">
        <p v-html="item.message" />
      </div>
    </div>
  </transition-group>
</template>

<script>
import { events } from './events'
export default {
  name: 'Simplyfication',
  props: {
    group: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    groupReference () {
      return `notify-${this.group}`
    }
  },
  created () {
    events.$on('show-notify', this.addItem)
    events.$on('close-notify', this.removeItem)
  },
  beforeDestroy: function () {
    events.$off('show-notify')
    events.$off('close-notify')
  },
  methods: {
    addItem (item) {
      item.id = this.items.length + 1
      item.type = item.type || 'warning'
      setTimeout(() => {
        this.removeItem(item)
      }, item.length || 5000)
      this.items.push(item)
    },
    removeItem (item) {
      this.items = this.items.filter(i => i.id !== item.id)
    }
  }
}
</script>

<style>

</style>
