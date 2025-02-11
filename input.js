//Tue Feb 11 2025 06:34:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

var ctx = apiConfig.ctxx;
var url = {
  login: ctx + atob("L2xvZ2luL2xvZ2lu"),
  logout: ctx + atob("L2xvZ2luL2xvZ291dA=="),
  qrStatus: ctx + atob("L2xvZ2luL3F1ZXJ5QnlXeEFwcA=="),
  addChannel: ctx + atob("L2xvZ2luL2FkZENoYW5uZWw="),
  reg: ctx + atob("L2xvZ2luL3JlZw=="),
  times1: ctx + atob("L2NvbnQvY29udHJhY3QvZ2V0Q3VycmVudFRpbWU="),
  sealType: ctx + atob("L2NvbnQvc2VhbC9nZXRTZWFsVHlwZQ=="),
  protocol: ctx + atob("L3Byb3RvY29sL3Byb3RvY29sSW5mbw=="),
  agreement: ctx + atob("L2FjY291bnQvYWdyZWVtZW50"),
  verifyIDCard: ctx + atob("L2xvZ2luL3ZlcmlmeUlEQ2FyZA=="),
  verifyPortrit: ctx + atob("L2xvZ2luL3ZlcmlmeVBvcnRyaXQ="),
  verifyVerifyCode: ctx + atob("L2xvZ2luL3ZlcmlmeVZlcmlmeUNvZGU="),
  varifyCode: ctx + atob("L2xvZ2luL2dldFZlcmlmeUNvZGU="),
  sendSms: ctx + atob("L2NvbW1vbi9zZW5kU21z"),
  generateCaptcha: ctx + atob("L2NvbW1vbi9nZW5lcmF0ZUNhcHRjaGE="),
  reAudit: {
    idcard: ctx + atob("L2xvZ2luL3ZlcmlmeUFnYWluSURDYXJk"),
    reAudits: ctx + atob("L2xvZ2luL3ZlcmlmeUFnYWlu")
  },
  hrcommon: {
    login: ctx + atob("L2loci9sb2dpbi9sb2dpbg=="),
    logout: ctx + atob("L2loci9sb2dpbi9sb2dvdXQ="),
    verifyIDCard: ctx + atob("L2loci9sb2dpbi9yZWdSZWFsTmFtZQ=="),
    verifyPortrit: ctx + atob("L2loci9sb2dpbi92ZXJpZnlQb3J0cml0"),
    verifyVerifyCode: ctx + atob("L2loci9sb2dpbi9yZWdQd2Q="),
    protocol: ctx + atob("L2loci9sb2dpbi9wcm90b2NvbEluZm8="),
    getUserInfo: ctx + atob("L2loci9sb2dpbi9nZXRVc2VySW5mbw=="),
    finUser1: ctx + atob("L2loci9sb2dpbi92ZXJ5ZmlVc2Vy"),
    finUser2: ctx + atob("L2loci9sb2dpbi9yZXNldFB3ZA=="),
    resetPwd: ctx + atob("L2loci9sb2dpbi9tb2RpZnlQd2Q=")
  },
  comMethod: {
    upload: ctx + atob("L2F1ZGl0L3VwbG9hZA=="),
    download: ctx + atob("L2ZpbGVUcmFuc2Zlci9kb3dubG9hZA==")
  },
  verifyCaptcha: ctx + atob("L2NvbW1vbi92ZXJpZnlDYXB0Y2hh"),
  Ukey: {
    transfer: ctx + atob("L2NvbnQvdWtleS90cmFuc2Zlcg=="),
    ukeyCheck: ctx + atob("L2NvbnQvdWtleS91a2V5Q2hlY2s="),
    cancel: ctx + atob("L2NvbnQvdWtleS9jYW5jZWw="),
    fillUKey: ctx + atob("L2NvbnQvdWtleS91a2V5Q2VydEZpbGxk"),
    getFillBase64: ctx + atob("L2NvbnQvY2VydC9hY3RpdmVDZXJ0RmlsZQ=="),
    getUkeyInfo: ctx + atob("L2NvbnQvdWtleS9nZXRVa2V5SW5mbw=="),
    perUKey: ctx + atob("L2NvbnQvdWtleS9wZXJVS2V5"),
    entUKey: ctx + atob("L2NvbnQvdWtleS9lbnRVS2V5"),
    checkUserAndEnt: ctx + atob("L2NvbnQvdWtleS9jaGVja1VzZXJBbmRFbnQ="),
    sourceSystem: ctx + atob("L2NvbnQvdWtleS9zb3VyY2VTeXN0ZW0="),
    bindUKey: ctx + atob("L2NvbnQvdWtleS9iaW5kVUtleQ=="),
    entUKeyList: ctx + atob("L2NvbnQvdWtleS9lbnRVS2V5TGlzdA=="),
    sendSms: ctx + atob("L2NvbnQvdWtleS9zZW5kU21z"),
    verifySmsCode: ctx + atob("L2NvbnQvdWtleS92ZXJpZnlTbXNDb2Rl"),
    addCard: ctx + atob("L2NvbnQvdWtleS9hZGRDYXJk"),
    addPerCard: ctx + atob("L2NvbnQvdWtleS9hZGRQZXJDYXJk")
  },
  account: {
    applyCertSeal: ctx + atob("L2NvbnQvY2VydC9hcHBseUVudENlcnQ="),
    applyCertSign: ctx + atob("L2NvbnQvY2VydC9hcHBseVBlcnNvbkNlcnQ="),
    certList: ctx + atob("L2NvbnQvY2VydC9jZXJ0TGlzdA=="),
    viewCert: ctx + atob("L2NvbnQvY2VydC9jZXJ0SW5mbw=="),
    auth: ctx + atob("L2FjY291bnQvYXV0aA=="),
    getUserInfo: ctx + atob("L2FjY291bnQvZ2V0VXNlckluZm8="),
    getUserInfoSimple: ctx + atob("L2FjY291bnQvZ2V0VXNlckluZm9TaW1wbGU="),
    vendorList: ctx + atob("L2FjY291bnQvdmVuZG9yTGlzdA=="),
    myTimeline: ctx + atob("L2FjY291bnQvbXlUaW1lbGluZQ=="),
    getUserInfoForBaseInfo: ctx + atob("L2FjY291bnQvZ2V0VXNlckluZm9Gb3JCYXNlSW5mbw=="),
    attachment: ctx + atob("L2FjY291bnQvYXR0YWNobWVudA=="),
    captcha: ctx + atob("L2FjY291bnQvY2FwdGNoYQ=="),
    sendSms: ctx + atob("L2FjY291bnQvc2VuZFNtcw=="),
    verifySmsCode: ctx + atob("L2FjY291bnQvdmVyaWZ5U21zQ29kZQ=="),
    setNewPwd: ctx + atob("L2FjY291bnQvc2V0TmV3UHdk"),
    isEnNo: ctx + atob("L2FjY291bnQvY2hlY2tDb21wYW55TmFtZQ==")
  },
  seal: {
    addSeal: ctx + atob("L2NvbnQvc2VhbC9hZGRTZWFs"),
    addSign: ctx + atob("L2NvbnQvc2VhbC9hZGRTaWdu"),
    del: ctx + atob("L3NlYWwvZGVsU2VhbA=="),
    qrCode: ctx + atob("L2NvbnQvc2VhbC9xckNvZGU="),
    sealList: ctx + atob("L2NvbnQvc2VhbC9zZWFsTGlzdA=="),
    setDefault: ctx + atob("L3NlYWwvc2V0RGVmYXVsdA=="),
    signList: ctx + atob("L2NvbnQvc2VhbC9zaWduTGlzdA=="),
    activateUkey: ctx + atob("L2NvbnQvdWtleS9hY3RpdmF0ZQ=="),
    showCorporateTabs: ctx + atob("L2NvbnQvdWtleS9zaG93Q29ycG9yYXRlVGFicw==")
  },
  notice: {
    getList: ctx + atob("L25vdGljZS9ub3RpY2VMaXN0")
  },
  order: {
    getOrderDetail: ctx + atob("L2NvbnQvb3JkZXIvb3JkZXJEZXRhaWw="),
    getList: ctx + atob("L2NvbnQvb3JkZXIvb3JkZXJMaXN0"),
    add: ctx + atob("L2NvbnQvb3JkZXIvY3JlYXRlT3JkZXI="),
    orderId: ctx + atob("L2NvbnQvb3JkZXIvZ2V0UGF5bWVudEluZm8="),
    getQr: ctx + atob("L2NvbnQvb3JkZXIvc3ViUGF5")
  },
  invoice: {
    getList: ctx + atob("L2NvbnQvb3JkZXIvaW52b2ljZUxpc3Q="),
    appInvoice: ctx + atob("L2NvbnQvb3JkZXIvYWRkaW52b2ljZQ=="),
    edit: ctx + atob("L2NvbnQvb3JkZXIvdXBkYXRlSW52b2ljZQ==")
  },
  contract: {
    getList: ctx + atob("L2NvbnQvY29udHJhY3QvY29udHJhY3RMaXN0"),
    getDetail: ctx + atob("L2NvbnRyYWN0L2dldERldGFpbA=="),
    download: ctx + atob("L2NvbnQvY29udHJhY3QvY29udHJhY3REb3dubG9hZA=="),
    download2: ctx + atob("L2NvbnQvY29udHJhY3QvZ2V0Q29udHJhY3RaaXA="),
    pdf: ctx + atob("L2NvbnQvY29udHJhY3QvZ2V0Q29udEZpbGU="),
    sealUpload: ctx + atob("L2NvbnQvY29udHJhY3Qvc2VhbFVwbG9hZA=="),
    contractDetailList: ctx + atob("L2NvbnQvY29udHJhY3QvY29udHJhY3REZXRhaWw="),
    signerList: ctx + atob("L2NvbnQvY29udHJhY3QvZ2V0U2lnbkxpc3Q="),
    refuse: ctx + atob("L2NvbnQvY29udHJhY3QvcmVqZWN0"),
    rollback: ctx + atob("L2NvbnQvY29udHJhY3Qvcm9sbGJhY2s="),
    getContractCount: ctx + atob("L2NvbnRyYWN0L2dldENvbnRyYWN0Q291bnQ="),
    fileList: ctx + atob("L2NvbnQvY29udHJhY3QvYXVkaXQvZmlsZUxpc3Q="),
    fileCommit: ctx + atob("L2NvbnQvY29udHJhY3QvYXVkaXQvY29tbWl0"),
    fileSave: ctx + atob("L2NvbnQvY29udHJhY3QvYXVkaXQvc2F2ZQ=="),
    fileDel: ctx + atob("L2NvbnQvY29udHJhY3QvYXVkaXQvZGVs"),
    upfiles: ctx + atob("L2NvbnQvY29udHJhY3QvYXVkaXQvdXBsb2Fk"),
    sealer: ctx + atob("L2NvbnQvY29udHJhY3Qvc2VsbGVyTGlzdA=="),
    doSealer: ctx + atob("L2NvbnQvY29udHJhY3Qvc2V0U2VsbGVy"),
    num: ctx + atob("L2NvbnQvY29udHJhY3QvY29udHJhY3ROdW0="),
    veryfyFile: ctx + atob("L2NvbnQvY29udHJhY3QvdmVyeWZ5RmlsZQ=="),
    contractHashDetail: ctx + atob("L2NvbnQvY29udHJhY3QvY29udHJhY3RIYXNoRGV0YWls"),
    multiDownload: ctx + atob("L2NvbnQvY29udHJhY3QvZ2V0TXVsaXRpQ29udHJhY3RaaXA=")
  },
  dict: {
    areaCode: ctx + atob("L2RpY3QvYXJlYUNvZGU=")
  },
  channelManagement: {
    changeChannel: ctx + atob("L2NoYW5uZWwvY2hhbmdlQ2hhbm5lbA=="),
    all: ctx + atob("L2NoYW5uZWwvYWxsQ2hhbm5lbExpc3Q="),
    myChannel: ctx + atob("L2NoYW5uZWwvY3VyQ2hhbm5lbExpc3Q=")
  },
  company: {
    getcardList: ctx + atob("L2NvcnBvcmF0ZS9zaG93Q29ycG9yYXRlQ2FyZA=="),
    getList: ctx + atob("L2NvcnBvcmF0ZS9kZXB0SW5mb0xpc3Q="),
    checkName: ctx + atob("L2NvcnBvcmF0ZS9jaGVja0NvbXBhbnlOYW1l"),
    save1: ctx + atob("L2NvcnBvcmF0ZS9zYXZlVXNlckF1ZGl0"),
    save2: ctx + atob("L2NvcnBvcmF0ZS9zYXZlQ29ycG9yYXRl"),
    updata: ctx + atob("L2NvcnBvcmF0ZS91cGRhdGVDb3Jwb3JhdGU="),
    getByid: ctx + atob("L2NvcnBvcmF0ZS9zaG93Q29ycG9yYXRlSW5mbw=="),
    getAreaList: ctx + atob("L2NvcnBvcmF0ZS9zaG93Q29ycG9yYXRlTGlzdA=="),
    conpanyChange1: ctx + atob("L2NvcnBvcmF0ZS91cGRhdGVDb3Jwb3JhdGVFbnQ="),
    conpanyChange2: ctx + atob("L2NvcnBvcmF0ZS91cGRhdGVDb3Jwb3JhdGVBdXRo"),
    addArea: ctx + atob("L2NvcnBvcmF0ZS9hZGRBdWRpdEVudElkcw=="),
    getByCid: ctx + atob("L2NvcnBvcmF0ZS9hbGxDb3Jwb3JhdGVBdXRo"),
    delArea: ctx + atob("L2NvcnBvcmF0ZS9kZWxldGVDb3Jwb3JhdGVJbmZv"),
    createTaskList: ctx + atob("L2NvcnBvcmF0ZS9jcmVhdGVUYXNrTGlzdA=="),
    send: ctx + atob("L2NvcnBvcmF0ZS9zZW5kQXV0aEFsZXJ0U21z")
  },
  log: {
    getList: ctx + atob("L21lc3NhZ2Uvc2hvd01zZ0xpc3Q="),
    readers: ctx + atob("L21lc3NhZ2UvdXBkYXRlQWxsTXNnU3RhdHVz"),
    isRead: ctx + atob("L21lc3NhZ2Uvc2hvd01zZ0lzUmVhZA=="),
    getlogList: ctx + atob("L21lc3NhZ2Uvc2hvd05vdGljZUxpc3Q="),
    getbyid: ctx + atob("L21lc3NhZ2Uvc2hvd01zZ0luZm8=")
  },
  QandA: {
    getList: ctx + atob("L21lc3NhZ2Uvc2hvd1F1ZXN0aW9uTGlzdA==")
  },
  address: {
    getList: ctx + atob("L2NvbnQvYWRkci9nZXRBZGRyTGlzdA=="),
    getDefault: ctx + atob("L2NvbnQvYWRkci9nZXREZWZhdWx0"),
    add: ctx + atob("L2NvbnQvYWRkci9uZXdBZGRy"),
    setDef: ctx + atob("L2NvbnQvYWRkci9zZXREZWZhdWx0"),
    updata: ctx + atob("L2NvbnQvYWRkci91cGRhdGVBZGRy"),
    del: ctx + atob("L2NvbnQvYWRkci9kZWxBZGRy"),
    getArea: ctx + atob("L2NvbnQvYWRkci9hcmVhQ29kZQ=="),
    getbyid: ctx + atob("L2NvbnQvYWRkci9nZXRBZGRy")
  },
  file: {
    filedown: ctx + atob("L2FjY291bnQvZG93bmxvYWRGaWxl"),
    filedown2: ctx + atob("L2FjY291bnQvZG93bmxvYWRGaWxlMg==")
  }
};