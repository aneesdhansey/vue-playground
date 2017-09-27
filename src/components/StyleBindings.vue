<template>
    <div>
        <h1>Style Bindings</h1>
        <h1 :class="{'style-me' : isActive}">Class Me [Inline Class]!!!</h1>
        <h1 :class="styleMe">Class Me [Data Property]!!!</h1>
        <h1 :class="myClasses">Class Me [Computed Property]!!!</h1>
        <h1 :class="[styleMe, moreStyle]">Class Me [Array]!!!</h1>
        <my-component :class="myClasses"></my-component>

        <h1 :style="styleObject">Style Me [Style Binding]!!!</h1>
    </div>
</template>

<script>
import Vue from 'vue'

Vue.component('my-component',{
    template : `<h1>Class Me [Component]!!!</h1>`
});

export default {
    name: 'style-bindings',
    data() {
        return {
            isActive: true,
            styleMe: 'style-me',
            moreStyle: 'more-style',
            fontSize : 25,
            colorStyle : {
                color : 'orange'
            }
        }
    },
    computed: {
        myClasses: function() {
            return {
                'style-me': this.isActive,
                'more-style': true
            }
        },
        styleObject : function () {
            return {
                color : 'crimson', 
                fontSize : this.fontSize+'px'
            }
        }
    }
}
</script>


<style scoped>
.style-me {
    background-color: darkblue;
    color: #fff;
}

.more-style {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
</style>