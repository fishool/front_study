<template>
  <div id="app">
    <el-card id="card" class="app-header">
      <el-form ref="form" :model="form" :rules="loginFormRules" label-width="100px" label-position="left" style="margin-top: 10px;">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名"  v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <el-input v-model="form.captcha"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      form: {
        username: '',
        password: '',
        captcha: ''
      },
      loginFormRules: {
        username: [
          { required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度在 6 到 18 个字符', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_]+$/, message: '密码只能包含英文、数字和下划线', trigger: 'blur' },
          {validator: this.validatePassword, trigger: 'blur'}
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        } else {
          return false
        }
      })
    },
    validatePassword (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
#card {
  width: 440px;
  height: 300px;
}
</style>
