<template>
    <div class="introduction">
        <h1>{{title}}</h1>
        <span v-bind:title="title">Hover me</span>
        <br/>
        <span v-if="seen">You can see me</span>
        <ol>
            <li v-for="i in ['a','b','c']" v-bind:key="i">{{i}}</li>
        </ol>
        <button @click="reverseTitle">Reverse Title</button>
        <p v-once>This will never change {{title}}</p>
        <input type="text" v-model="title"/>
        <ul>
            <todo-item todo="Do Stuff"></todo-item>
            <todo-item todo="Eat"></todo-item>
            <todo-item todo="Sleep"></todo-item>
        </ul>
        <button :disabled="disabled">DisabledBtn</button>
        <p> {{seen ? new Date() : Math.sqrt(16)}}   </p>
    </div>
    
</template>

<script>
import Vue from 'vue'

Vue.component('todo-item', {
    template : `
        <li>{{todo}}</li>
    `,
    props : ['todo']
});

export default {
  name : 'introduction',
  data() {
      return {
          title : 'Vue - Introduction',
          seen : false,
          disabled : true
      }
  },
  methods : {
      reverseTitle : function() { this.title = this.title.split('').reverse().join('') }
  }
}
</script>




