const Base = require('./base');

/**
 * 数据分析
 */
class Analysis extends Base {
    constructor() {
        super();
        
    }
    /**
     * 获取用户访问小程序月留存
     * @param {*} option 
     * @example getMonthlyRetain({access_token,begin_date,end_date});
     */
    async getMonthlyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidmonthlyretaininfo`, option);
    }
    /**
     * 获取用户访问小程序周留存
     * @param {*} option 
     * @example getWeeklyRetain({access_token,begin_date,end_date});
     */
    async getWeeklyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidweeklyretaininfo`, option);
    }
    /**
     * 获取用户访问小程序日留存
     * @param {*} option 
     * @example getDailyRetain({access_token,begin_date,end_date});
     */
    async getDailyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/getweanalysisappiddailyretaininfo`, option);
    }

    /**
     * 获取用户访问小程序数据月趋势
     * @param {*} option 
     * @example getMonthlyVisitTrend({access_token,begin_date,end_date});
     */
    async getMonthlyVisitTrend(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidmonthlyvisittrend`, option);
    }

    /**
     * 获取用户访问小程序数据周趋势
     * @param {*} option 
     * @example getWeeklyVisitTrend({access_token,begin_date,end_date});
     */
    async getWeeklyVisitTrend(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidweeklyvisittrend`, option);
    }

    /**
     * 获取用户访问小程序数据日趋势
     * @param {*} option 
     * @example getDailyVisitTrend({access_token,begin_date,end_date});
     */
    async getDailyVisitTrend(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappiddailyvisittrend`, option);
    }

       /**
     * 获取用户访问小程序数据概况
     * @param {*} option 
     * @example getDailySummary({access_token,begin_date,end_date});
     */
        async getDailySummary(option) {
            return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappiddailysummarytrend`, option);
        }

    /**
     * 获取用户访问小程序访问分布数据
     * @param {*} option 
     * @example getVisitDistribution({access_token,begin_date,end_date});
     */
        async getVisitDistribution(option) {
                return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidvisitdistribution`, option);
            }

            /**
     * 获取用户访问小程序访问页面
     * @param {*} option 
     * @example getVisitPage({access_token,begin_date,end_date});
     */
    async getVisitPage(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidvisitpage`, option);
    }

    /**
     * 获取用户访问小程序用户画像
     * @param {*} option 
     * @example getUserPortrait({access_token,begin_date,end_date});
     */
    async getUserPortrait(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappiduserportrait`, option);
    }
        /**
     * 获取用户访问小程序启动性能
     * @param {*} option 
     * @example getPerformanceData({access_token,time,module,params});
     */
         async getPerformanceData(option) {
            return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/business/performance/boot`, option);
        }

}

module.exports = new Analysis();