<template>
  <div class="home">
    <!-- <v-system-bar app
                  color="primary"></v-system-bar> -->
    <!-- <v-card class="overflow-hidden">absolute -->
    <v-app-bar 
               elevate-on-scroll
               color="navbarColor"
               scroll-target="#scrolling-techniques-7">
      <!-- <v-app-bar-nav-icon v-if="!inBanMenuRoutes"
                          @click.stop="drawer = !drawer" /> -->

      <v-toolbar-title class="navbarTitleColor--text font-weight-black">KotSwap</v-toolbar-title>
      <!-- <v-btn icon><v-icon>mdi-apps</v-icon></v-btn> -->
      <v-menu offset-y open-on-hover v-if="!inBanMenuRoutes">
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Dropdown
          </v-btn> -->
          <v-btn icon v-bind="attrs"
            v-on="on">
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </template>
        <v-list class="navbarListColor">
          <v-list-item v-for="(item, i) in $ctConfig.navItems"
                       :key="i"
                       :disabled="inDisabledList(item.name)"
                       @click.stop="$router.replace(item.route)">
            <v-list-item-avatar class="rounded">
              <v-icon
                class="navbarListChipColor"
                color="navbarListIconColor"
                dark
              >
                {{ item.icon }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-title>
              <!-- <v-icon v-text="item.icon"></v-icon> -->
              <!-- <v-chip
                class="ma-2 pr-0 pa-3"
                color="navbarListChipColor"
                label
                text-color="white"
              >
                <v-icon left color="navbarListIconColor">
                  {{ item.icon }}
                </v-icon>
              </v-chip> -->
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle v-text="item.title"></v-list-item-subtitle>
              </v-list-item-content>

              <!-- <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action> -->
              <!-- <v-card
                elevation="2"
              ><v-icon left>
                  {{ item.icon }}
                </v-icon></v-card> -->
              <!-- {{ item.title }} -->
              <!-- <span v-text="item.title"></span> -->
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <v-btn onclick="console.log(this.$route.name)">Test</v-btn> -->
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon
             @click="switchThemes()">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <v-sheet id="scrolling-techniques-7"
             class="overflow-y-auto"
             max-height="600">
      <v-container style="height: 56px;">
      </v-container>
    </v-sheet> -->
    <!-- </v-card> -->

    <v-navigation-drawer v-model="drawer"
                         absolute
                         left
                         temporary>
      <v-list nav
              dense>
        <v-list-item-group v-model="currentPage">
          <v-list-item v-for="(item, i) in $ctConfig.navItems"
                       :key="i"
                       @click.stop="$router.replace(item.route)"
                       :disabled="i == currentPage">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Navbar',
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
      drawer: false,
      group: '',
      currentPage: 0,
      inBanMenuRoutes: true,
    }
  },
  methods: {
    switchThemes: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      // console.log(
      //   `%c [切换主题] 当前主题 %c ${this.$vuetify.theme.dark == false ? "light" : "dark"} %c`,
      //   'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      //   'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      //   'background:transparent'
      // )
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        // this.isDarkTheme = matchMedia('(prefers-color-scheme: dark)').matches
        // matchMedia('(prefers-color-scheme: dark)').addEventListener(
        //   'change',
        //   (event) => {
        //     this.isDarkTheme = event.matches
        //   }
        // )
        // this.inAllowBackRoutes = (() => {
        //   const currentRoute = this.$router.currentRoute.name
        //   var i
        //   for (i of this.$feConfig.allowBackRoutes) {
        //     if (currentRoute == i) {
        //       return true
        //     }
        //   }
        //   return false
        // })()
        this.inBanMenuRoutes = (() => {
          const currentRoute = this.$route.name
          var i
          for (i of this.$ctConfig.banMenuRoutes) {
            if (currentRoute == i) {
              return true
            }
          }
          return false
        })()

        this.inDisabledList = ((name) => {
          if (name == this.$route.name) {
              return true
          }
          return false
        })
        // this.username = localStorage.getItem('username')
      },
    },
  },
}
</script>
