<template>
    <div id="app" class="app">
        <toolbar></toolbar>
        <notes-list></notes-list>
        <editor></editor>
        <test></test>
    </div>
</template>

<script>
    import Toolbar from './Toolbar.vue'
    import NotesList from './NotesList.vue'
    import Editor from './Editor.vue'
    import Test from './test.vue'
    import store from '../store/index'
    import { initStore } from '../store/action'

    export default {
      components: {
        Toolbar,
        NotesList,
        Editor,
        Test
      },
      store,
      vuex: {
        actions: {
          initStore
        }
      },
      mounted () {
        this.$nextTick(function () {
          this.initStore()
        // 代码保证 this.$el 在 document 中
      })

      }
    }
</script>