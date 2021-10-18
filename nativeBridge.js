(function (window) {
  function NativeBridge() {
    var that = this;
    this.indexCount = 1000;
    this.callAppMap = {};
    this.onPressBackKey = null;
    window.executeJS = function (callAppIndex, stringResult) {
      that.appCall(callAppIndex, stringResult);
    };
  }
  var u = navigator.userAgent.toLowerCase();
  NativeBridge.prototype.QuickVersion = {
    // isWeixin: u.indexOf('micromessenger') != -1,
    // isApp: u.indexOf('android_smartidata') != -1,
    // isIOSApp: u.indexOf('ios_smartidata') != -1
    isHainan:
      u.indexOf('ios_health_hainan') != -1 ||
      u.indexOf('android_health_hainan') != -1,
    isWeixin: u.indexOf('micromessenger') != -1,
    isApp: u.indexOf('android_health_hainan') != -1,
    isIOSApp: u.indexOf('ios_health_hainan') != -1,
  };
  NativeBridge.prototype.getAppIndex = function (name) {
    let thisIndex = this.indexCount++;
    let numString = name + thisIndex.toString();
    return numString;
  };
  NativeBridge.prototype.callApp = function (params) {
    if (this.QuickVersion.isIOSApp) {
      window.webkit.messageHandlers.nativePermission.postMessage(
        JSON.stringify(params),
      );
    } else if (this.QuickVersion.isApp) {
      window.WDAndroid.nativePermission(JSON.stringify(params));
    } else {
      console.log('h5');
    }
  };
  var regNumber = /\d+/;
  NativeBridge.prototype.appCall = function (callAppIndex, stringResult) {
    if (this.callAppMap[callAppIndex]) {
      // if (callAppIndex.indexOf('qrCodeScan') > -1) {
      // 	//如果需要修改返回的数据
      // 	let backData = JSON.parse(stringResult)
      // 	backData['thisCode'] = 'test'
      // 	this.callAppMap[callAppIndex](JSON.stringify(backData))
      // } else {
      let backData = JSON.parse(stringResult);
      if (backData.code == '101' || backData.code == 101) {
        console.log(backData.msg);
      } else if (backData.code == '102' || backData.code == 102) {
        console.log(backData.msg);
      } else if (backData.code == '0' || backData.code == 0) {
        this.callAppMap[callAppIndex](backData);
      }
      // }
      if (
        regNumber.test(callAppIndex) &&
        callAppIndex.indexOf('header') == -1
      ) {
        this.callAppMap[callAppIndex] = null;
        delete this.callAppMap[callAppIndex];
      } else {
        // console.log('不移出')
      }
    }
  };
  NativeBridge.prototype.wxPay = function (data, callback) {
    var appIndex = this.getAppIndex('wxPay');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'wxPay', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };

  NativeBridge.prototype.qrCodeScan = function (data, callback) {
    var appIndex = this.getAppIndex('qrCodeScan');
    if (callback) {
      this.callAppMap[appIndex] = callback;
      // console.log(this.callAppMap);
    }
    let params = { type: 'qrCodeScan', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.callPhone = function (data, callback) {
    var appIndex = this.getAppIndex('callPhone');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'phone', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.getVersion = function (callback) {
    var appIndex = this.getAppIndex('getVersion');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'version', callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.share = function (data, callback) {
    var appIndex = this.getAppIndex('share');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'share', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.getLocation = function (data, callback) {
    var appIndex = this.getAppIndex('getLocation');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'location', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.chooseImage = function (data, callback) {
    var appIndex = this.getAppIndex('chooseImage');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = {
      type: 'photoLibrary',
      params: data,
      callBackMethod: appIndex,
    };
    this.callApp(params);
  };
  NativeBridge.prototype.camera = function (data, callback) {
    var appIndex = this.getAppIndex('camera');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'camera', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.nativeStorage = function (data, callback) {
    var appIndex = this.getAppIndex('nativeStorage');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = {
      type: 'nativeStorage',
      params: data,
      callBackMethod: appIndex,
    };
    this.callApp(params);
  };
  NativeBridge.prototype.nativeVioce = function (callback) {
    var appIndex = this.getAppIndex('nativeVioce');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'voice', callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.nativeSearchVal = function (data) {
    let params = { type: 'searchContent', params: data };
    this.callApp(params);
  };
  NativeBridge.prototype.authentication = function (data, callback) {
    var appIndex = this.getAppIndex('authentication');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = {
      type: 'authentication',
      params: data,
      callBackMethod: appIndex,
    };
    this.callApp(params);
  };
  NativeBridge.prototype.authType = function (callback) {
    var appIndex = this.getAppIndex('authType');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'authType', callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.rotate = function (data) {
    let params = { type: 'rotate', params: data };
    this.callApp(params);
  };
  NativeBridge.prototype.login = function (data, callback) {
    var appIndex = this.getAppIndex('login');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'login', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.download = function (data) {
    let params = { type: 'download', params: data };
    this.callApp(params);
  };
  NativeBridge.prototype.cacheSize = function (callback) {
    var appIndex = this.getAppIndex('cacheSize');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'cacheSize', callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.clearCache = function (callback) {
    var appIndex = this.getAppIndex('clearCache');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'clearCache', callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.newMessage = function (data, callback) {
    var appIndex = this.getAppIndex('newMessage');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'newMessage', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.video = function (data, callback) {
    var appIndex = this.getAppIndex('video');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = { type: 'video', params: data, callBackMethod: appIndex };
    this.callApp(params);
  };
  NativeBridge.prototype.bluetoothDevice = function (data, callback) {
    var appIndex = this.getAppIndex('bluetoothDevice');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = {
      type: 'bluetoothDevice',
      params: data,
      callBackMethod: appIndex,
    };
    this.callApp(params);
  };
  NativeBridge.prototype.refreshToken = function (data, callback) {
    var appIndex = this.getAppIndex('refreshToken');
    if (callback) {
      this.callAppMap[appIndex] = callback;
    }
    let params = {
      type: 'refreshToken',
      params: data,
      callBackMethod: appIndex,
    };
    this.callApp(params);
  };
  NativeBridge.prototype.changeRole = function () {
    let params = {
      type: 'changeRole',
      params: {},
    };
    this.callApp(params);
  };
  NativeBridge.prototype.logout = function () {
    let params = {
      type: 'logout',
      params: {},
    };
    this.callApp(params);
  };
  NativeBridge.prototype.tabConfig = function (data) {
    let params = { type: 'tabConfig', params: data };
    this.callApp(params);
  };
  NativeBridge.prototype.setHeader = function (data) {
    function deepCopy(obj) {
      var newobj = obj.constructor === Array ? [] : {};
      if (typeof obj !== 'object') {
        return obj;
      } else {
        for (var i in obj) {
          if (typeof obj[i] === 'object') {
            //判断对象的这条属性是否为对象
            newobj[i] = deepCopy(obj[i]); //若是对象进行嵌套调用
          } else {
            newobj[i] = obj[i];
          }
        }
      }
      return newobj; //返回深度克隆后的对象
    }
    let nativeData = deepCopy(data);
    if (data['right'] && data['right'].length > 0) {
      let rightLenth = data['right'].length;
      for (let i = 0, len = rightLenth; i < len; i++) {
        let appIndex = 'header-right' + i;
        this.callAppMap[appIndex] = data['right'][i]['callBackMethod'];
        nativeData['right'][i]['callBackMethod'] = appIndex;
      }
    }

    if (data['left'] && data['left'].length > 0) {
      let leftLenth = data['left'].length;
      for (let j = 0, len = leftLenth; j < len; j++) {
        let appIndex = 'header-left' + j;
        this.callAppMap[appIndex] = data['left'][j]['callBackMethod'];
        nativeData['left'][j]['callBackMethod'] = appIndex;
      }
    }
    if (
      data.titleView.searchMethods &&
      data.titleView.searchMethods.editingdidbegin
    ) {
      let appIndex1 = 'editingdidbegin';
      this.callAppMap[appIndex1] = data.titleView.searchMethods.editingdidbegin;
      nativeData.titleView.searchMethods.editingdidbegin = appIndex1;
    }
    if (
      data.titleView.searchMethods &&
      data.titleView.searchMethods.editingdidend
    ) {
      let appIndex2 = 'editingdidend';
      this.callAppMap[appIndex2] = data.titleView.searchMethods.editingdidend;
      nativeData.titleView.searchMethods.editingdidend = appIndex2;
    }
    if (
      data.titleView.searchMethods &&
      data.titleView.searchMethods.editingchanged
    ) {
      let appIndex3 = 'editingchanged';
      this.callAppMap[appIndex3] = data.titleView.searchMethods.editingchanged;
      nativeData.titleView.searchMethods.editingchanged = appIndex3;
    }
    if (
      data.titleView.searchMethods &&
      data.titleView.searchMethods.editingfinished
    ) {
      let appIndex4 = 'editingfinished';
      this.callAppMap[appIndex4] = data.titleView.searchMethods.editingfinished;
      nativeData.titleView.searchMethods.editingfinished = appIndex4;
    }
    if (data.titleView.callBackMethod) {
      let appIndex5 = 'searchCallBackMethod';
      this.callAppMap[appIndex5] = data.titleView.callBackMethod;
      nativeData.titleView.callBackMethod = appIndex5;
    }
    if (this.QuickVersion.isIOSApp) {
      window.webkit.messageHandlers.setHeader.postMessage(
        JSON.stringify(nativeData),
      );
    } else if (this.QuickVersion.isApp) {
      window.WDAndroid.setHeader(JSON.stringify(nativeData));
    }
  };

  NativeBridge.prototype.onVisible = function (onVisible) {
    if (this.QuickVersion.isIOSApp || this.QuickVersion.isApp) {
      this.callAppMap['onVisible'] = onVisible;
    }
  };
  NativeBridge.prototype.onInvisible = function (onInvisible) {
    if (this.QuickVersion.isIOSApp || this.QuickVersion.isApp) {
      this.callAppMap['onInvisible'] = onInvisible;
    }
  };
  NativeBridge.prototype.onDestory = function (onDestory) {
    if (this.QuickVersion.isIOSApp || this.QuickVersion.isApp) {
      this.callAppMap['onDestory'] = onDestory;
    }
  };
  NativeBridge.prototype.toNative = function (
    router,
    nativeData,
    refreshUrl,
    animate,
    hasNavigation,
    float,
  ) {
    var params = {
      type: 'Native',
      toPage: router,
      params: nativeData != undefined ? nativeData : {},
      refreshUrl: refreshUrl != undefined ? refreshUrl : '*',
      animate: animate == undefined ? 'push' : animate,
      hasNavigation: hasNavigation || 'true',
      float: float || 'false',
    };
    if (this.QuickVersion.isIOSApp) {
      window.webkit.messageHandlers.forward.postMessage(JSON.stringify(params));
    } else if (this.QuickVersion.isApp) {
      window.WDAndroid.forward(JSON.stringify(params));
    }
  };
  NativeBridge.prototype.toBack = function (
    url,
    nativeData,
    refreshUrl,
    hasNavigation,
    float,
  ) {
    let params = {
      type: 'H5',
      toPage: url || '',
      params: nativeData != undefined ? nativeData : {},
      refreshUrl: refreshUrl != undefined ? refreshUrl : '*',
      hasNavigation: hasNavigation || 'true',
      float: float || 'false',
      animate: 'pop',
    };
    if (this.QuickVersion.isIOSApp) {
      window.webkit.messageHandlers.forward.postMessage(JSON.stringify(params));
    } else if (this.QuickVersion.isApp) {
      window.WDAndroid.forward(JSON.stringify(params));
    }
  };
  NativeBridge.prototype.toPage = function (
    url,
    nativeData,
    hasNavigation,
    float,
  ) {
    let params = {
      type: 'H5',
      toPage: url,
      params: nativeData != undefined ? nativeData : {},
      hasNavigation: hasNavigation || 'true',
      float: float || 'false',
      animate: 'push',
    };
    if (this.QuickVersion.isIOSApp) {
      console.log('isIOSApp');
      window.webkit.messageHandlers.forward.postMessage(JSON.stringify(params));
    } else if (this.QuickVersion.isApp) {
      console.log('isApp');
      window.WDAndroid.forward(JSON.stringify(params));
    } else {
      console.log('H5');
    }
  };
  var thisNativeBridge = new NativeBridge();
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = thisNativeBridge;
  } else {
    window.NativeBridge = thisNativeBridge;
  }
})(window);
