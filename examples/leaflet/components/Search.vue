<template>
    <div class="search" >
        <select  class="bd search-select">
            <option value="红线面积">项目红线</option>
            <option value="绿地率">绿地率</option>
            <option value="总建筑面积">总建筑面积</option>
        </select>
        <input class="bd search-input" placeholder="请输入查询内容">
        <!--<img role="img" src="../assert/loading.svg"/>-->
        <button class="bd search-btn"  @click='search'>搜索</button>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions({
        search: 'clickSearch' // 映射 this.add() 为 this.$store.dispatch('increment')
      })
    }
  }
</script>