// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.min.js'); 
var wxMarkerData = []; 
Page({ 
    data: { 
        markers: [{latitude: 36.468657, longitude: 116.051305}], 
        latitude: 36.468657, 
        longitude: 116.051305, 
        rgcData: {} 
    },
    onLoad: function() { 
        var that = this; 
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({ 
            ak: 'Tsysj1oxCFHwq527G3H58C7gydhFeLhU' 
        }); 
        var fail = function(data) { 
            console.log(data) 
        }; 
        var success = function(data) { 
            console.log(data)
            // wxMarkerData = data.wxMarkerData; 
            // console.log(wxMarkerData)
            // that.setData({ 
            //     markers: wxMarkerData 
            // }); 
            // that.setData({ 
            //     latitude: wxMarkerData[0].latitude
            // }); 
            // that.setData({ 
            //     longitude: wxMarkerData[0].longitude
            // }); 
        } 
        // 发起regeocoding检索请求 
        BMap.regeocoding({ 
            fail: fail, 
            success: success, 
            // iconPath: '../../img/marker_red.png', 
            // iconTapPath: '../../img/marker_red.png' 
        }); 
    }

})