/**
 * Created by ying.wu on 2017/6/27.
 */
const ecpay_logistics = require('../lib/ecpay_logistics.js');
// 參數值為[PLEASE MODIFY]者，請在每次測試時給予獨特值
let base_param = {
	MerchantTradeNo:"fd7e9faasdsabb72bc93", // 請帶20碼uid, ex: f0a0d7e9fae1bb72bc93, 為aiocheckout時所產生的
	MerchantTradeDate:"2017/05/17 16:23:45", // 請帶交易時間, ex: 2017/05/17 16:23:45, 為aiocheckout時所產生的
	LogisticsType:"Home",
	LogisticsSubType:"TCAT",
	GoodsAmount:"100",
	CollectionAmount:"N",
	IsCollection:"N",
	GoodsName:"123435",
	SenderName:"綠界",
	SenderPhone:"",
	SenderCellPhone:"0912345678",
	ReceiverName:"綠界!@#",
	ReceiverPhone:"",
	ReceiverCellPhone:"0912345678",
	ReceiverEmail:"",
	TradeDesc:"",
	ServerReplyURL:"http://192.168.0.1/ReceiverServerReply", // 物流狀況會通知到此URL
	ClientReplyURL:"",
	LogisticsC2CReplyURL:"",
	Remark:"",
	PlatformID:"",
	SenderZipCode:"115",
	SenderAddress:"台北市南港區三重路19-1號6-1樓",
	ReceiverZipCode:"115",
	ReceiverAddress:"台北市南港區三重路19-1號6-1樓",
	Temperature:"0001",
	Distance:"00",
	Specification:"0001",
	ScheduledPickupTime:"4",
	ScheduledDeliveryTime:"4",
	ScheduledDeliveryDate:"",
	PackageCount:""
};

let create = new ecpay_logistics();
let res = create.create_client.create(parameters = base_param);
if (typeof res === 'string'){
    console.log(res);
} else {
    res.then(function (result) {
        console.log(result);
    }).catch(function (err) {
        console.log(err);
    });
}