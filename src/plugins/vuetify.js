import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import { Drawer } from 'vuetify/lib/directives'
import {
  VApp,
  VMain,
  VCol,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VAppBar,
  VAppBarNavIcon,
  VToolbarTitle,
  VNavigationDrawer,
  VImg,
  VList,
  VListItem,
  VListItemGroup,
  VListItemIcon,
  VListItemTitle,
  VListItemAvatar,
  VIcon,
  VSpacer,
  VSheet,
  VContainer,
  VSystemBar,
  VListItemContent,
  VListItemSubtitle,
  VDivider,
  VForm,
  VRow,
  VTextField,
  VSelect,
  VSnackbar,
  VAlert,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VMain,
    VCol,
    VBtn,
    VCard,
    VCardActions,
    VCardText,
    VAppBar,
    VAppBarNavIcon,
    VToolbarTitle,
    VNavigationDrawer,
    VImg,
    VList,
    VListItem,
    VListItemGroup,
    VListItemIcon,
    VListItemTitle,
    VListItemAvatar,
    VIcon,
    VSpacer,
    VSheet,
    VContainer,
    VSystemBar,
    VListItemContent,
    VListItemSubtitle,
    VDivider,
    VForm,
    VRow,
    VTextField,
    VSelect,
    VSnackbar,
    VAlert,
  }
})

const opts = { theme: { dark: false }, }

// export default new Vuetify()

export default new Vuetify(opts)