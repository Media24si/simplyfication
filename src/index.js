import Simplyfication from './Simplyfication.vue'
import { events } from './events'

const SimpleNotification = {
  install (Vue, args = {}) {
    if (this.installed) {
      return
    }

    this.installed = true
    this.params = args

    Vue.component(args.componentName || 'Simplyfication', Simplyfication)

    const notification = (params) => {
      if (typeof params === 'string') {
        params = { title: '', message: params }
      }

      if (typeof params === 'object') {
        events.$emit('show-notify', params)
      }
    }

    const name = args.name || 'notify'

    Vue.prototype['$' + name] = notification
    Vue[name] = notification
  }
}

export default SimpleNotification
