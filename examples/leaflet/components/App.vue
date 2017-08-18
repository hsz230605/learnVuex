<template>
    <div>
        <search></search>
        <div id="map">
            <h1>加载失败</h1>
        </div>
    </div>
</template>
<style>
    #map{
        height: 500px;
    }
</style>
<script>
    import Vue from 'vue'
    import Leaflet from 'leaflet'
    import Search from './Search.vue'

    export default {
      components:{ Search },
      mounted () {
        this.$nextTick(function () {
          // 代码保证 this.$el 在 document 中
          this.$store.commit('testa')
          this.$store.commit('mapInit')
          this.$store.commit('popMaker')
        })
      }

    }
</script>