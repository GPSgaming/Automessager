// Được Viết Bởi MinhAcoustic03
// Phiên bản hỗ trợ đa API
// Automessenger.lxl.js Tự động Thông báo!
(()=>{"use strict";
	const e={NAME:"AutoMessage",PLUGINS_PATH:"plugins/AutoMessage/",CONFIG:void 0,getConfig(t,n=""){
		if(e.CONFIG){let o=e.CONFIG.get(t);
			return null!=o?o:(log(o),e.setConfig(t,n),n)}},setConfig(t,n){
				if(e.CONFIG)return console.log(n),
					e.CONFIG.set(t,n)}};
				logger.setTitle(e.NAME),
				(new class{run(){e.CONFIG=data.openConfig(e.PLUGINS_PATH+"config.json","json"),
					function(){
					let t=e.PLUGINS_PATH+"join.txt",
					n=`§9[Lời nhắc dịch vụ] §rCảm ơn bạn đã tải xuống §a${e.NAME}§r\n§9[Mẹo vào máy chủ] §rTác giả của trình cắm này: §aMinhacoustic§r\n§9[Mẹo vào máy chủ] §r Bạn có thể§c${t}§rSửa đổi lời nhắc máy chủ`,
					o=file.readFrom(t);o||(file.writeTo(t,n),o=n),
					e.getConfig("openjoinMessage",!0)&&
					mc.listen("onJoin",(e=>{setTimeout((()=>{e.sendText(o),
						logger.info("Gửi tin nhắn đến："+o)}),200)}))}(),
					function(){
						let t=e.PLUGINS_PATH+"message.json",
						n=[{text:`§9[Thông báo hẹn giờ] §rĐây là thông báo được hẹn giờ mặc định, bạn có thể sửa đổi các thông báo này trong §a${t}§r`,time:120}],
						o=data.openConfig(t,"json"),
						i=o.get("list");
						null==i&&(o.set("list",n),i=n),
						e.getConfig("openTimingMessage",!0)&&i.forEach((e=>{let t=e.time||10;setInterval((()=>{
							mc.broadcast(e.text),
							logger.info("Gửi tin nhắn hẹn giờ："+e.text)}),1e3*t)}))}(),
						logger.info(`${e.NAME} Đã tải thành công`)}}).run()})();