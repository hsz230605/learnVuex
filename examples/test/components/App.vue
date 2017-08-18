<template>
    <div id="app">
        <test></test>
        <h2>this is App.vue</h2>
        <hr>
        <test></test>
        <test2></test2>
    </div>
</template>
<script>
import Test from './Test.vue'
import Test2 from './Test2.vue'
    export default {
    components: { Test,Test2}
    }
</script>