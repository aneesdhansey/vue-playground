<template>
  <div id="app">
    <ul>
      <li v-for="r in rts" :key="r.name">
        <router-link :to="r.path" :class="{'is-active' : isActiveRoute(r.name)}">{{r.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from './router/app-routes'

export default {
  name: 'app',
  data () {
    return {
      title : 'test'
    }
  },
  methods : {
      isActiveRoute : function (routename) {
          return this.$route.name === routename
      }
  },
  computed : {
    rts : function() {
      return routes.filter(r => r.meta.isVisible);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111111;
}

.is-active {
  background-color: #111111;
}
</style>
