const Base = require('./base');

/**
 * Goods直播商品
 */
class Goods extends Base {

    constructor(){
        super();
    }
    /**
     * 小程序的获取直播商品列表
     * @param {*} option 
     * @example getapproved({access_token,offset,limit,status});
     */
    async getapproved(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxaapi/broadcast/goods/getapproved`, option);
    }

    /**
     * 小程序直播商品添加并提审
     * @param {*} option 
     * @example addGoods({access_token,coverImgUrl,name,priceType,price,url});
     */
    async addGoods(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxaapi/broadcast/goods/add`, option);
    }

    /**
     * 小程序直播商品撤回审核
     * @param {*} option 
     * @example resetaudit({access_token,goodsId,auditId});
     */
    async resetaudit(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxaapi/broadcast/goods/resetaudit`, option);
    }
    /**
     * 小程序直播商品重新提交审核
     * @param {*} option 
     * @example audit({access_token,goodsId});
     */
     async audit(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxaapi/broadcast/goods/audit?`, option);
    }
    /**
     * 小程序直播商品删除
     * @param {*} option 
     * @example delete({access_token,goodsId});
     */
    async delete(option) {
            return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxaapi/broadcast/goods/delete`, option);
        }

            /**
     * 小程序直播商品更新
     * @param {*} option 
     * @example update({access_token,goodsId,coverImgUrl,name,priceType,price,url});
     */
    async update(option) {
             return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxaapi/broadcast/goods/update`, option);
    }
    /**
     * 小程序直播商品状态查询
     * @param {*} option 
     * @example getgoodswarehouse({access_token,goods_ids});
     */
    async getgoodswarehouse(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/business/getgoodswarehouse`, option);
    }
}


module.exports=new Goods();