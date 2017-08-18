<template>
    <div id="toolbar">
            <i @click="newNote" class="glyphicon glyphicon-plus"></i>
            <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
            <i @click="toggleFavorite" class="glyphicon glyphicon-star"></i>
    </div>
</template>
<script>
    import { newNote, deleteNote, toggleFavorite } from '../store/action'
    import { activeNote } from '../store/getter'

    export default {
      vuex: {
        getters: {
          activeNote
        },
        actions: {
          newNote,
          deleteNote,
          toggleFavorite
        }
      }
    }
</script>