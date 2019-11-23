// component/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      v:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    send(e){
      // console.log(e.currentTarget.dataset.id)
      this.triggerEvent('sen',e.currentTarget.dataset.id)
    }
  }
})
