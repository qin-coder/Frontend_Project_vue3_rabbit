<script setup>
import { getHotAPI } from '@/apis/home'
import { ref } from 'vue'
import HomePanel from './HomePanel.vue'
const newList = ref([])
const getNewList = async () => {
  const res = await getHotAPI()
  newList.value = res.result
}
getNewList()
</script>

<template>
  <HomePanel title="人气推荐" sub-title="人气商品 好物推荐"
    ><ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" :src="item.picture" alt="" />
          <p class="name">{{ item.alt }}</p>
          <p class="desc">{{ item.title }}</p>
          <!-- <p class="price">&yen;{{ item.price }}</p> -->
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
