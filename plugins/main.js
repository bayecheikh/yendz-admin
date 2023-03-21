import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

// Global Components
import './global-components'

// import core styles
require('@/@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)
