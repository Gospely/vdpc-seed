<template>
  <div>
    <div class="view-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

  components: {

  },

  data(){
    return {

    }
  }
}

</script>

<style>
  @import "styles/app.less";
  .view-wrap{
    margin-left: 190px;
    padding-top: 70px;
  }
</style>
