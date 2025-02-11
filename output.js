//Tue Feb 11 2025 06:34:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

var ctx = apiConfig.ctxx;
var url = {
  login: ctx + decryptDataAtob("L2xvZ2luL2xvZ2lu"),
  logout: ctx + decryptDataAtob("L2xvZ2luL2xvZ291dA=="),
  qrStatus: ctx + decryptDataAtob("L2xvZ2luL3F1ZXJ5QnlXeEFwcA=="),
  addChannel: ctx + decryptDataAtob("L2xvZ2luL2FkZENoYW5uZWw="),
  reg: ctx + decryptDataAtob("L2xvZ2luL3JlZw=="),
  times1: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvZ2V0Q3VycmVudFRpbWU="),
  sealType: ctx + decryptDataAtob("L2NvbnQvc2VhbC9nZXRTZWFsVHlwZQ=="),
  protocol: ctx + decryptDataAtob("L3Byb3RvY29sL3Byb3RvY29sSW5mbw=="),
  agreement: ctx + decryptDataAtob("L2FjY291bnQvYWdyZWVtZW50"),
  verifyIDCard: ctx + decryptDataAtob("L2xvZ2luL3ZlcmlmeUlEQ2FyZA=="),
  verifyPortrit: ctx + decryptDataAtob("L2xvZ2luL3ZlcmlmeVBvcnRyaXQ="),
  verifyVerifyCode: ctx + decryptDataAtob("L2xvZ2luL3ZlcmlmeVZlcmlmeUNvZGU="),
  varifyCode: ctx + decryptDataAtob("L2xvZ2luL2dldFZlcmlmeUNvZGU="),
  sendSms: ctx + decryptDataAtob("L2NvbW1vbi9zZW5kU21z"),
  generateCaptcha: ctx + decryptDataAtob("L2NvbW1vbi9nZW5lcmF0ZUNhcHRjaGE="),
  reAudit: {
    idcard: ctx + decryptDataAtob("L2xvZ2luL3ZlcmlmeUFnYWluSURDYXJk"),
    reAudits: ctx + decryptDataAtob("L2xvZ2luL3ZlcmlmeUFnYWlu")
  },
  hrcommon: {
    login: ctx + decryptDataAtob("L2loci9sb2dpbi9sb2dpbg=="),
    logout: ctx + decryptDataAtob("L2loci9sb2dpbi9sb2dvdXQ="),
    verifyIDCard: ctx + decryptDataAtob("L2loci9sb2dpbi9yZWdSZWFsTmFtZQ=="),
    verifyPortrit: ctx + decryptDataAtob("L2loci9sb2dpbi92ZXJpZnlQb3J0cml0"),
    verifyVerifyCode: ctx + decryptDataAtob("L2loci9sb2dpbi9yZWdQd2Q="),
    protocol: ctx + decryptDataAtob("L2loci9sb2dpbi9wcm90b2NvbEluZm8="),
    getUserInfo: ctx + decryptDataAtob("L2loci9sb2dpbi9nZXRVc2VySW5mbw=="),
    finUser1: ctx + decryptDataAtob("L2loci9sb2dpbi92ZXJ5ZmlVc2Vy"),
    finUser2: ctx + decryptDataAtob("L2loci9sb2dpbi9yZXNldFB3ZA=="),
    resetPwd: ctx + decryptDataAtob("L2loci9sb2dpbi9tb2RpZnlQd2Q=")
  },
  comMethod: {
    upload: ctx + decryptDataAtob("L2F1ZGl0L3VwbG9hZA=="),
    download: ctx + decryptDataAtob("L2ZpbGVUcmFuc2Zlci9kb3dubG9hZA==")
  },
  verifyCaptcha: ctx + decryptDataAtob("L2NvbW1vbi92ZXJpZnlDYXB0Y2hh"),
  Ukey: {
    transfer: ctx + decryptDataAtob("L2NvbnQvdWtleS90cmFuc2Zlcg=="),
    ukeyCheck: ctx + decryptDataAtob("L2NvbnQvdWtleS91a2V5Q2hlY2s="),
    cancel: ctx + decryptDataAtob("L2NvbnQvdWtleS9jYW5jZWw="),
    fillUKey: ctx + decryptDataAtob("L2NvbnQvdWtleS91a2V5Q2VydEZpbGxk"),
    getFillBase64: ctx + decryptDataAtob("L2NvbnQvY2VydC9hY3RpdmVDZXJ0RmlsZQ=="),
    getUkeyInfo: ctx + decryptDataAtob("L2NvbnQvdWtleS9nZXRVa2V5SW5mbw=="),
    perUKey: ctx + decryptDataAtob("L2NvbnQvdWtleS9wZXJVS2V5"),
    entUKey: ctx + decryptDataAtob("L2NvbnQvdWtleS9lbnRVS2V5"),
    checkUserAndEnt: ctx + decryptDataAtob("L2NvbnQvdWtleS9jaGVja1VzZXJBbmRFbnQ="),
    sourceSystem: ctx + decryptDataAtob("L2NvbnQvdWtleS9zb3VyY2VTeXN0ZW0="),
    bindUKey: ctx + decryptDataAtob("L2NvbnQvdWtleS9iaW5kVUtleQ=="),
    entUKeyList: ctx + decryptDataAtob("L2NvbnQvdWtleS9lbnRVS2V5TGlzdA=="),
    sendSms: ctx + decryptDataAtob("L2NvbnQvdWtleS9zZW5kU21z"),
    verifySmsCode: ctx + decryptDataAtob("L2NvbnQvdWtleS92ZXJpZnlTbXNDb2Rl"),
    addCard: ctx + decryptDataAtob("L2NvbnQvdWtleS9hZGRDYXJk"),
    addPerCard: ctx + decryptDataAtob("L2NvbnQvdWtleS9hZGRQZXJDYXJk")
  },
  account: {
    applyCertSeal: ctx + decryptDataAtob("L2NvbnQvY2VydC9hcHBseUVudENlcnQ="),
    applyCertSign: ctx + decryptDataAtob("L2NvbnQvY2VydC9hcHBseVBlcnNvbkNlcnQ="),
    certList: ctx + decryptDataAtob("L2NvbnQvY2VydC9jZXJ0TGlzdA=="),
    viewCert: ctx + decryptDataAtob("L2NvbnQvY2VydC9jZXJ0SW5mbw=="),
    auth: ctx + decryptDataAtob("L2FjY291bnQvYXV0aA=="),
    getUserInfo: ctx + decryptDataAtob("L2FjY291bnQvZ2V0VXNlckluZm8="),
    getUserInfoSimple: ctx + decryptDataAtob("L2FjY291bnQvZ2V0VXNlckluZm9TaW1wbGU="),
    vendorList: ctx + decryptDataAtob("L2FjY291bnQvdmVuZG9yTGlzdA=="),
    myTimeline: ctx + decryptDataAtob("L2FjY291bnQvbXlUaW1lbGluZQ=="),
    getUserInfoForBaseInfo: ctx + decryptDataAtob("L2FjY291bnQvZ2V0VXNlckluZm9Gb3JCYXNlSW5mbw=="),
    attachment: ctx + decryptDataAtob("L2FjY291bnQvYXR0YWNobWVudA=="),
    captcha: ctx + decryptDataAtob("L2FjY291bnQvY2FwdGNoYQ=="),
    sendSms: ctx + decryptDataAtob("L2FjY291bnQvc2VuZFNtcw=="),
    verifySmsCode: ctx + decryptDataAtob("L2FjY291bnQvdmVyaWZ5U21zQ29kZQ=="),
    setNewPwd: ctx + decryptDataAtob("L2FjY291bnQvc2V0TmV3UHdk"),
    isEnNo: ctx + decryptDataAtob("L2FjY291bnQvY2hlY2tDb21wYW55TmFtZQ==")
  },
  seal: {
    addSeal: ctx + decryptDataAtob("L2NvbnQvc2VhbC9hZGRTZWFs"),
    addSign: ctx + decryptDataAtob("L2NvbnQvc2VhbC9hZGRTaWdu"),
    del: ctx + decryptDataAtob("L3NlYWwvZGVsU2VhbA=="),
    qrCode: ctx + decryptDataAtob("L2NvbnQvc2VhbC9xckNvZGU="),
    sealList: ctx + decryptDataAtob("L2NvbnQvc2VhbC9zZWFsTGlzdA=="),
    setDefault: ctx + decryptDataAtob("L3NlYWwvc2V0RGVmYXVsdA=="),
    signList: ctx + decryptDataAtob("L2NvbnQvc2VhbC9zaWduTGlzdA=="),
    activateUkey: ctx + decryptDataAtob("L2NvbnQvdWtleS9hY3RpdmF0ZQ=="),
    showCorporateTabs: ctx + decryptDataAtob("L2NvbnQvdWtleS9zaG93Q29ycG9yYXRlVGFicw==")
  },
  notice: {
    getList: ctx + decryptDataAtob("L25vdGljZS9ub3RpY2VMaXN0")
  },
  order: {
    getOrderDetail: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvb3JkZXJEZXRhaWw="),
    getList: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvb3JkZXJMaXN0"),
    add: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvY3JlYXRlT3JkZXI="),
    orderId: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvZ2V0UGF5bWVudEluZm8="),
    getQr: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvc3ViUGF5")
  },
  invoice: {
    getList: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvaW52b2ljZUxpc3Q="),
    appInvoice: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvYWRkaW52b2ljZQ=="),
    edit: ctx + decryptDataAtob("L2NvbnQvb3JkZXIvdXBkYXRlSW52b2ljZQ==")
  },
  contract: {
    getList: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvY29udHJhY3RMaXN0"),
    getDetail: ctx + decryptDataAtob("L2NvbnRyYWN0L2dldERldGFpbA=="),
    download: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvY29udHJhY3REb3dubG9hZA=="),
    download2: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvZ2V0Q29udHJhY3RaaXA="),
    pdf: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvZ2V0Q29udEZpbGU="),
    sealUpload: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3Qvc2VhbFVwbG9hZA=="),
    contractDetailList: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvY29udHJhY3REZXRhaWw="),
    signerList: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvZ2V0U2lnbkxpc3Q="),
    refuse: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvcmVqZWN0"),
    rollback: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3Qvcm9sbGJhY2s="),
    getContractCount: ctx + decryptDataAtob("L2NvbnRyYWN0L2dldENvbnRyYWN0Q291bnQ="),
    fileList: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvYXVkaXQvZmlsZUxpc3Q="),
    fileCommit: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvYXVkaXQvY29tbWl0"),
    fileSave: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvYXVkaXQvc2F2ZQ=="),
    fileDel: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvYXVkaXQvZGVs"),
    upfiles: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvYXVkaXQvdXBsb2Fk"),
    sealer: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3Qvc2VsbGVyTGlzdA=="),
    doSealer: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3Qvc2V0U2VsbGVy"),
    num: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvY29udHJhY3ROdW0="),
    veryfyFile: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvdmVyeWZ5RmlsZQ=="),
    contractHashDetail: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvY29udHJhY3RIYXNoRGV0YWls"),
    multiDownload: ctx + decryptDataAtob("L2NvbnQvY29udHJhY3QvZ2V0TXVsaXRpQ29udHJhY3RaaXA=")
  },
  dict: {
    areaCode: ctx + decryptDataAtob("L2RpY3QvYXJlYUNvZGU=")
  },
  channelManagement: {
    changeChannel: ctx + decryptDataAtob("L2NoYW5uZWwvY2hhbmdlQ2hhbm5lbA=="),
    all: ctx + decryptDataAtob("L2NoYW5uZWwvYWxsQ2hhbm5lbExpc3Q="),
    myChannel: ctx + decryptDataAtob("L2NoYW5uZWwvY3VyQ2hhbm5lbExpc3Q=")
  },
  company: {
    getcardList: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9zaG93Q29ycG9yYXRlQ2FyZA=="),
    getList: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9kZXB0SW5mb0xpc3Q="),
    checkName: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9jaGVja0NvbXBhbnlOYW1l"),
    save1: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9zYXZlVXNlckF1ZGl0"),
    save2: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9zYXZlQ29ycG9yYXRl"),
    updata: ctx + decryptDataAtob("L2NvcnBvcmF0ZS91cGRhdGVDb3Jwb3JhdGU="),
    getByid: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9zaG93Q29ycG9yYXRlSW5mbw=="),
    getAreaList: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9zaG93Q29ycG9yYXRlTGlzdA=="),
    conpanyChange1: ctx + decryptDataAtob("L2NvcnBvcmF0ZS91cGRhdGVDb3Jwb3JhdGVFbnQ="),
    conpanyChange2: ctx + decryptDataAtob("L2NvcnBvcmF0ZS91cGRhdGVDb3Jwb3JhdGVBdXRo"),
    addArea: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9hZGRBdWRpdEVudElkcw=="),
    getByCid: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9hbGxDb3Jwb3JhdGVBdXRo"),
    delArea: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9kZWxldGVDb3Jwb3JhdGVJbmZv"),
    createTaskList: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9jcmVhdGVUYXNrTGlzdA=="),
    send: ctx + decryptDataAtob("L2NvcnBvcmF0ZS9zZW5kQXV0aEFsZXJ0U21z")
  },
  log: {
    getList: ctx + decryptDataAtob("L21lc3NhZ2Uvc2hvd01zZ0xpc3Q="),
    readers: ctx + decryptDataAtob("L21lc3NhZ2UvdXBkYXRlQWxsTXNnU3RhdHVz"),
    isRead: ctx + decryptDataAtob("L21lc3NhZ2Uvc2hvd01zZ0lzUmVhZA=="),
    getlogList: ctx + decryptDataAtob("L21lc3NhZ2Uvc2hvd05vdGljZUxpc3Q="),
    getbyid: ctx + decryptDataAtob("L21lc3NhZ2Uvc2hvd01zZ0luZm8=")
  },
  QandA: {
    getList: ctx + decryptDataAtob("L21lc3NhZ2Uvc2hvd1F1ZXN0aW9uTGlzdA==")
  },
  address: {
    getList: ctx + decryptDataAtob("L2NvbnQvYWRkci9nZXRBZGRyTGlzdA=="),
    getDefault: ctx + decryptDataAtob("L2NvbnQvYWRkci9nZXREZWZhdWx0"),
    add: ctx + decryptDataAtob("L2NvbnQvYWRkci9uZXdBZGRy"),
    setDef: ctx + decryptDataAtob("L2NvbnQvYWRkci9zZXREZWZhdWx0"),
    updata: ctx + decryptDataAtob("L2NvbnQvYWRkci91cGRhdGVBZGRy"),
    del: ctx + decryptDataAtob("L2NvbnQvYWRkci9kZWxBZGRy"),
    getArea: ctx + decryptDataAtob("L2NvbnQvYWRkci9hcmVhQ29kZQ=="),
    getbyid: ctx + decryptDataAtob("L2NvbnQvYWRkci9nZXRBZGRy")
  },
  file: {
    filedown: ctx + decryptDataAtob("L2FjY291bnQvZG93bmxvYWRGaWxl"),
    filedown2: ctx + decryptDataAtob("L2FjY291bnQvZG93bmxvYWRGaWxlMg==")
  }
};