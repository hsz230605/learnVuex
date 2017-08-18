<template>
    <div id="note-editor">
        <input type="text" name="title"
               class="title form-control"
               placeholder="请输入标题"

               >
            <textarea
                    @input="editNote"
                    class="form-control">
        </textarea>
    </div>
</template>

<script>
  import { editNote } from '../store/action';
  import { activeNote } from '../store/getter';

  export default {
    vuex: {
      getters: {
        activeNote
      },
      actions: {
        editNote
      }
    },
    computed: {
      // 通过计算属性得到的一个对象，这样子我们就能愉快的使用 v-model 了
      currentNote: activeNote
    },
    methods: {
      // 为什么这么做？ 因为在严格模式中不允许直接在模板层面去修改 state 中的值
      updateNote() {
        this.editNote(this.currentNote);
      }
    }
  }
</script>