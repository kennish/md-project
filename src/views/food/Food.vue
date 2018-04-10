<template>
  <div class="food-wrap">
    <div class="filter-wrap">
      <qd-filter>
        <div class="category-bar" slot="category">
          <ul class="category-nav">
            <li v-for="(item, index) in categoryData" :class="isIndex == index? 'isactive': ''" :key="index" @click="showMore(item, index)">
              <span>{{item.title}}</span>
              <span>{{item.number}}</span>
            </li>
          </ul>
          <ul class="category-info">
            <li v-if="categoryList.length == 0">没有商品</li>
            <li v-for="(item, index) in categoryList" :key="index">
              <span>{{item.title}}</span>
              <span>{{item.number}}</span>
            </li>
          </ul>
        </div>
        <div slot="sort">排序</div>
        <div slot="filter">筛选</div>
      </qd-filter>
    </div>
    <qd-upload></qd-upload>
  </div>
</template>

<script>
import QdFilter from '@/components/common/Filter'
import QdUpload from '@/components/common/Upload'
export default {
  components: {
    QdFilter,
    QdUpload
  },
  data () {
    return {
      categoryData: [
        {
          title: '全部商家',
          number: '8008'
        },
        {
          title: '测试',
          number: '8008',
          list: [
            {
              title: '测试1',
              number: '20'
            }
          ]
        },
        {
          title: '便当快餐',
          number: '2513',
          list: [
            {
              title: '全部',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            },
            {
              title: '便当',
              number: '600',
            }
          ]
        },
        {
          title: '特色菜系',
          number: '1650',
          list: [
            {
              title: '湘菜',
              number: '100'
            },
            {
              title: '湘菜',
              number: '100'
            },
            {
              title: '湘菜',
              number: '100'
            }
          ]
        },
        {
          title: '异国料理',
          number: '666'
        },
        {
          title: '小吃夜宵',
          number: '267'
        },
        {
          title: '甜品饮品',
          number: '267'
        },
        {
          title: '果蔬生鲜',
          number: '267'
        },
        {
          title: '商店超市',
          number: '267'
        },
        {
          title: '鲜花绿植',
          number: '267'
        },
        {
          title: '医药健康',
          number: '267'
        },
        {
          title: '早餐',
          number: '267'
        },
        {
          title: '午餐',
          number: '267'
        },
        {
          title: '晚餐',
          number: '267'
        },
        {
          title: '夜宵',
          number: '267'
        }
      ],
      isIndex: 0,
      categoryList: []
    }
  },
  methods: {
    showMore(item, index) {
      this.isIndex = index;
      if (item.list) {
        this.categoryList = item.list;
      } else{
        this.categoryList = [];
      }
      
    }
  }
}
</script>

<style>
.filter-wrap{
  position: sticky;
  top: 0;
  z-index: 20;
}
p{
  padding-bottom: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

.category-bar{
  display: flex;
}
.category-bar ul{
  display: flex;
  flex-wrap: wrap;
  max-height: 16rem;
  overflow-y: auto;
  align-content:flex-start;
}
.category-bar ul li{
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: .6rem;
  color: #555555;
  height: 1.6rem;
  padding: 0 .5rem;
  align-items: center;
}
.category-bar ul li span{
  display: block;
}
.category-bar ul li.isactive{
  background: #ffffff;
}
.category-bar .category-nav{
  width: 6rem;
  background: #fafafa;
}
.category-bar .category-nav li{}
.category-bar .category-info{
  flex: 1;
}
.category-bar .category-info li{}
</style>
