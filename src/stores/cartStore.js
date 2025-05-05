import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])
    const updateNewList = async () => {
      // 购物车添加成功后，重新获取最新的购物车列表
      const res = await findNewCartListAPI()
      // 覆盖本地的购物车数据
      cartList.value = res.result
    }
    // 添加购物车
    const addCart = async (goods) => {
      if (isLogin.value) {
        //登录之后的购物车逻辑
        const { skuId, count } = goods
        await insertCartAPI({ skuId, count })
        updateNewList()
      } else {
        //add cart action
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }
    // 删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        updateNewList()
      } else {
        const idx = cartList.value.findIndex((item) => item.skuId === skuId)
        cartList.value.splice(idx, 1)
      }
    }
    // 1. 清空购物车
    const clearCart = () => {
      cartList.value = []
    }

    //2.allCount
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    )
    // 3. 已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    )
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    )
    const singleCheck = (skuId, selected) => {
      // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }
    // 5. 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    //  6. 全选
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }
    return {
      cartList,
      addCart,
      delCart,
      selectedCount,
      selectedPrice,
      singleCheck,
      isAll,
      allCheck,
      allCount,
      clearCart,
      updateNewList
    }
  },
  {
    persist: true
  }
)
