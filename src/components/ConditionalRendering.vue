<template>
    <div>
        <h1>Conditional Rendering</h1>
        
        <h1 v-if="ok">Yes</h1>
        <h1 v-else>No</h1>

        <template v-if="ok">
            <h1>Yes1</h1>
            <h1>Yes2</h1>
        </template>
        <template v-else>
            <h1>No1</h1>
            <h1>No2</h1>
        </template>

        <h1 v-if="type === 'A'">A</h1>
        <h1 v-else-if="type === 'B'">B</h1>
        <h1 v-else-if="type === 'C'">C</h1>

        <template v-if="loginType === 'username'">
            <label for="">Username</label>
            <input type="text" placeholder="Enter your username">
        </template>
        <template v-else>
            <label for="">Email</label>
            <input type="text" placeholder="Enter you email address">
        </template>

        <h1 v-show="ok">Show Me</h1>
    </div>
</template>

<script>

export default {
    name: 'conditional-rendering',
    data() {
        return {
            msg : 'Hello',
            ok : false,
            type : 'C',
            loginType : 'username'
        }
    }
}
</script>

<style>

</style>


