<template>
  <div class="container">
    <global-header :user="currentUser" />
    <!-- <column-list :list="list" /> -->
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input 
          type="email" 
          class="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <div class="form-text" v-if="emailRef.error">{{ emailRef.message }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'viking'
}

const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

const testData: ColumnProps[] = [{
  id: 1,
  title: 'test1 的专栏',
  description: '一个下午、一杯咖啡、一张沙发。让我来讲述，那些生动有趣的事',
  avatar: 'https://pic1.zhimg.com/v2-736b54c229560b3de19135aeafedbeba_xs.jpg'
}, {
  id: 2,
  title: 'test1 的专栏',
  description: '一个下午、一杯咖啡、一张沙发。让我来讲述，那些生动有趣的事',
  // avatar: 'https://pic1.zhimg.com/v2-736b54c229560b3de19135aeafedbeba_xs.jpg'
}, {
  id: 3,
  title: 'test1 的专栏',
  description: '一个下午、一杯咖啡、一张沙发。让我来讲述，那些生动有趣的事',
  avatar: 'https://pic1.zhimg.com/v2-736b54c229560b3de19135aeafedbeba_xs.jpg'
}, {
  id: 4,
  title: 'test1 的专栏',
  description: '一个下午、一杯咖啡、一张沙发。让我来讲述，那些生动有趣的事',
  avatar: 'https://pic1.zhimg.com/v2-736b54c229560b3de19135aeafedbeba_xs.jpg'
}]

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ColumnList
  },
  setup () {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }
    return {
      currentUser,
      list: testData,
      emailRef,
      validateEmail
    }
  }
})
</script>

<style>

</style>
