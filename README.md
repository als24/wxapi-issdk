微信小程序服务接口 
封装sdk
===========

## 功能列表
- 数据分析
- 基本设置
- 插件管理
- 物流助手
- 模板消息
- 附近的小程序
- 客服消息
- 商品添加并提审
- 撤回商品审核
- 重新提交商品审核
- 删除商品
- 更新商品
- 获取商品状态
- 获取商品列表

## 官网
- issdk.com

## Installation

```sh
$ npm install wxapi-issdk
```

## Usage
### 方法调用
- 方法都采用async/awit方式。
- 方法的接口参数都是完全参照微信小程序文档，按需传入即可。

使用如下：

```
const wxapi=require('wxapi-issdk');
const wxConfig=wxapi.config;

wxConfig.setConfig({
    appid:"小程序appid",
    secret:"小程序secret",    
    mch_id:"商户id(如需支付，请设置)",
    domain:"小程序API网关地址",
    paydomain:"小程序支付网关地址",
    paykey:"支付的商户key",
    refundCAPath:'支付商户证书.p12的路径(若要调用退款,请设置此路径)'  
})

async function getInfo(){
    const result=await wxapi.analysis.getMonthlyRetain({
        access_token:'....',
        begin_date,
        end_date
    });

    console.log(result);
    /*
        输出结果如下：
        {
            "list": [ { "ref_date": "20211004-20211010", "session_cnt": 0, "visit_pv": 0, "visit_uv": 0, "visit_uv_new": 0, "stay_time_uv": 0, "stay_time_session": 0, "visit_depth": 0 } ] 
        }
    */
    
}

```