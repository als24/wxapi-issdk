const auth=require('./lib/interface/auth');
const pay=require('./lib/interface/pay');
const acode=require('./lib/interface/acode');
const templateMessage=require('./lib/interface/templateMessage');
const analysis=require('./lib/interface/analysis');
const goods=require('./lib/interface/goods');
const units=require('./lib/common/unit');
const config=require('./lib/common/config');
const httpProxy=require('./lib/common/proxy');

module.exports={
    auth,
    pay,
    acode,
    templateMessage,
    analysis,
    goods,
    units,
    config,
    httpProxy
}
