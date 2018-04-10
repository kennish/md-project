<template>
  <div class="upload-wrap">
    <div class="img-wrap clear">
      <div class="img-item" v-for="(item, index) in imgList" :key="index" @click.stop="preview('http://test-res.yingjiashenghuo.com'+item)">
        <div class="img-item-show">
          <img class="img-show" :src="`http://test-res.yingjiashenghuo.com${item}`"/>
        </div>
        <div class="img-delete" @click.stop="deleteItem(index)">
          <i class="iconfont">&#xe647;</i>
        </div>
      </div>
      <div class="img-item submit">
        <div class="img-item-show">
          <input type="file" multiple accept="image/*" @change.stop="onFileChange"/>
          <i class="iconfont">&#xe6d8;</i>
        </div>
      </div>
    </div>
    <qd-img-preview v-model="previewShow" :path="previewUrl"></qd-img-preview>
  </div>
</template>

<script>
import lrz from 'lrz' // 图片压缩工具
import QdImgPreview from '@/components/common/ImagePreview'
export default {
  components: {
    QdImgPreview
  },
  data () {
    return {
      imgList: [],
      previewUrl: null,
      previewShow: false
    }
  },
  methods: {
    //生成32位随机字符串
    imgName32 () {
        let uid4 = function () {
            return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1);
        }
        return uid4() + uid4() + uid4() + uid4() + uid4() + uid4() + uid4() + uid4();
    },
    onFileChange (e) {
      
      let files = e.target.files || e.dataTransfer.files;
      let rule = /^[0-9]*$/;
      for( let key in files) {
        if(rule.test(key)) { //匹配项

          //调lrz对上传图片进行压缩
          lrz(files[key]).then((res) => { //压缩成功
            
            let formData = new FormData()
            formData.append('fileName', this.imgName32())
            formData.append('file', res.file); // res.file是压缩后的file对象 
            this.axios.post('/innjia-service/innjia/api/uploadFileSave.json', formData).then((response) => {
              this.imgList.push(response.data.res.data.fileAccessPath)
            }).catch((error) => {
              console.log(error)
            })

          }).catch((error) => {
            console.log(error); //压缩失败
          })

        }
      }

    },
    deleteItem (index) {
      this.imgList.splice(index, 1);
    },
    preview (url) {
      this.previewUrl = url;
      this.previewShow = true;
    }
  }
}
</script>

<style>
#img-upload{}
.upload-wrap{
  padding: .5rem;
  background: #ffffff;
}
.upload-wrap .img-wrap{
  
}
.upload-wrap .img-wrap .img-item{
  width: 3rem;
  height: 3rem;
  float: left;
  box-sizing: border-box;
  padding: .2rem;
  position: relative;
}
.upload-wrap .img-wrap .img-item .img-item-show{
  border: 1px solid #eeeeee;
  height: 100%;
}
.upload-wrap .img-wrap .img-delete{
  position: absolute;
  right: 0;
  top: 0;
  width: .8rem;
  height: .8rem;
  line-height: .4rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(232, 25, 25, .7)
}
.upload-wrap .img-wrap .img-delete i{
  font-size: .5rem;
  color: #ffffff;
}
.upload-wrap .img-wrap img.img-show{
  display: block;
  width: 100%;
  height: 100%;
}
.upload-wrap .img-wrap .submit{
  position: relative;
  line-height: 2.6rem;
  text-align: center;
}
.upload-wrap .img-wrap .submit  .img-item-show{
  border-style: dashed;
}
.upload-wrap .img-wrap .submit input[type='file']{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.upload-wrap .img-wrap .submit i{
  font-size: 1.4rem;
  color: #dddddd;
}
</style>
