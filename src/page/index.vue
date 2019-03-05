<template>
    <div>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-form ref="form">
            <el-form-item label="活动名称">
              <el-input></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="handlerClick">Main</el-button>
          <router-link to="/list">About</router-link>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    import { Message } from 'element-ui';
    export default {
        name: "index",
        methods:{
          handlerClick(){
            // this.$message({
            //   message: '您已支付成功！',
            //   type: 'success'
            // });
            this.$store.dispatch('getTest')
            // Message.error('获取品牌初始化时列表')
          }
        }
    }
</script>

<style scoped>

</style>
