<template>
  <div class="container">
    <global-header :user="currentuser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
const currentuser: UserProps = {
  isLogin: true,
  name: "Ivan",
};
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description:
      "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    // avatar: "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 3,
    title: "test3的专栏",
    description:
      "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    ColumnList,
  },
  setup() {
    return {
      currentuser,
      list: testData,
    };
  },
});
</script>

<style lang="scss" scoped>
// .imgBox {
//   width: 200px;
//   height: 200px;
//   background: {
//     image: url("/@img/logo.png"); // 与webpack~@img方式有区别
//     repeat: no-repeat;
//     position: center center;
//     size: 100%;
//   }
// }
</style>
