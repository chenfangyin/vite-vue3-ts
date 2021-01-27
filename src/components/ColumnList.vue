<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column of columnList" :key="column.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img class="rounded-circle border border-right w-25 my-3" :src="column.avatar" :alt="column.title">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @description 将构造函数断言成为一种指定的类型
 * @description PropType接收一个泛型将Array的构造函数返回传入的泛型类型
 */
import { defineComponent, PropType, computed } from "vue";
import avatar from "/@img/column.jpg"; // 默认专栏图片
export interface ColumnProps {
  id: string;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>, // 不能直接使用类型断言成为ColumnProps类型数组
      required: true,
    },
  },
  setup(props) {
    // props.list[0].id... 编辑器提示
    const columnList = computed(() =>
      props.list.map((column) => {
        if (!column.avatar) {
          Object.assign(column, {
            avatar,
          });
        }
        return column;
      })
    );
    return {
      columnList,
    };
  },
});
</script>