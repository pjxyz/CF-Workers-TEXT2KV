
// 部署完成后在网址后面加上这个，获取订阅器默认节点，/auto

let mytoken= ['auto'];//快速订阅访问入口, 留空则不启动快速订阅

// 设置优选地址，不带端口号默认443，TLS订阅生成
let addresses = [
];

// 设置优选地址api接口
let addressesapi = [
	'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesapi.txt', //可参考内容格式 自行搭建。
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressesipv6api.txt', //IPv6优选内容格式 自行搭建。
];

// 设置优选地址，不带端口号默认80，noTLS订阅生成
let addressesnotls = [
	'144.24.76.213:8080#反代',
	'144.24.76.213:8080#反代',
'152.70.155.147:8080#反代',
'193.123.249.210:8080#反代',
'132.226.231.242:8080#反代',
'204.216.218.114:8080#反代',
'144.24.200.164:8080#反代',
'130.162.61.18:8080#反代',
'130.61.190.205:8080#反代',
'129.213.165.166:8080#反代',
'152.67.190.105:8080#反代',
'152.67.222.250:8080#反代',
'193.122.61.167:8080#反代',
'141.148.219.182:8080#反代',
'144.24.85.158:8080#反代',
'132.145.134.230:8080#反代',
'138.2.18.184:8080#反代',
'129.146.166.128:8080#反代',
'146.56.182.4:8080#反代',
'64.110.71.56:8080#反代',
'47.242.107.109:8080#反代',
'47.242.174.27:8080#反代',
'47.242.125.241:8080#反代',
'47.242.79.71:8080#反代',
'8.217.127.73:8080#反代',
'8.217.147.230:8080#反代',
'8.217.154.218:8080#反代',
'8.217.181.213:8080#反代',
'8.217.123.243:8080#反代',
'8.217.207.60:8080#反代',
'8.217.221.165:8080#反代',
'8.218.22.210:8080#反代',
'8.218.53.110:8080#反代',
'8.218.1.163:8080#反代',
'8.218.2.181:8080#反代',
'47.243.243.14:8080#反代',
'47.243.234.9:8080#反代',
'47.243.255.224:8080#反代',
'47.243.90.180:8080#反代',
'47.243.91.58:8080#反代',
'47.243.60.150:8080#反代',
'47.243.51.171:8080#反代',
'47.243.67.28:8080#反代',
'47.243.42.155:8080#反代',
'47.243.74.220:8080#反代',
'47.243.42.219:8080#反代',
'47.243.107.148:8080#反代',
'8.219.60.54:8080#反代',
'8.219.106.156:8080#反代',
'8.219.97.50:8080#反代',
'8.219.40.37:8080#反代',
'8.219.100.168:8080#反代',
'8.219.11.158:8080#反代',
'8.219.103.65:8080#反代',
'8.219.83.71:8080#反代',
'8.219.49.65:8080#反代',
'8.219.99.169:8080#反代',
'8.219.83.201:8080#反代',
'8.219.78.1:8080#反代',
'8.219.50.180:8080#反代',
'8.219.87.30:8080#反代',
'8.219.98.13:8080#反代',
'8.219.78.188:8080#反代',
'8.219.67.133:8080#反代',
'8.219.42.72:8080#反代',
'8.219.51.211:8080#反代',
'8.219.77.222:8080#反代',
'8.219.93.5:8080#反代',
'8.219.66.156:8080#反代',
'8.218.142.253:8080#反代',
'8.218.81.14:8080#反代',
'8.218.92.195:8080#反代',
'8.218.126.53:8080#反代',
'8.218.155.238:8080#反代',
'8.218.98.75:8080#反代',
'8.218.85.128:8080#反代',
'8.218.146.204:8080#反代',
'8.219.132.64:8080#反代',
'8.219.124.227:8080#反代',
'8.219.147.58:8080#反代',
'8.219.114.201:8080#反代',
'8.219.201.8:8080#反代',
'8.219.110.81:8080#反代',
'8.219.199.220:8080#反代',
'8.219.202.130:8080#反代',
'8.219.198.139:8080#反代',
'8.219.142.191:8080#反代',
'8.219.208.104:8080#反代',
'8.219.139.13:8080#反代',
'8.219.113.232:8080#反代',
'8.219.194.170:8080#反代',
'8.219.170.232:8080#反代',
'8.219.174.142:8080#反代',
'8.219.191.40:8080#反代',
'8.219.111.175:8080#反代',
'8.219.111.147:8080#反代',
'8.219.201.245:8080#反代',
'8.219.209.14:8080#反代',
'8.219.120.87:8080#反代',
'8.219.177.205:8080#反代',
'8.219.174.213:8080#反代',
'8.219.117.198:8080#反代',
'8.219.153.237:8080#反代',
'47.243.18.199:8080#反代',
'47.242.183.7:8080#反代',
'47.242.252.237:8080#反代',
'47.243.5.154:8080#反代',
'47.242.234.127:8080#反代',
'47.242.202.230:8080#反代',
'8.210.175.109:8080#反代',
'8.210.164.75:8080#反代',
'8.210.119.11:8080#反代',
'47.245.126.151:8080#反代',
'47.245.118.70:8080#反代',
'47.245.114.163:8080#反代',
'8.222.164.209:8080#反代',
'8.222.180.86:8080#反代',
'8.222.183.242:8080#反代',
'8.222.146.222:8080#反代',
'8.222.179.231:8080#反代',
'8.222.187.4:8080#反代',
'8.222.169.222:8080#反代',
'8.222.184.198:8080#反代',
'8.222.137.192:8080#反代',
'8.222.144.50:8080#反代',
'8.222.174.108:8080#反代',
'8.222.167.147:8080#反代',
'8.222.136.247:8080#反代',
'8.222.145.43:8080#反代',
'8.210.34.188:8080#反代',
'8.210.55.134:8080#反代',
'8.210.48.107:8080#反代',
'8.210.85.222:8080#反代',
'8.210.65.1:8080#反代',
'8.210.66.190:8080#反代',
'8.210.21.65:8080#反代',
'8.217.66.3:8080#反代',
'8.217.121.207:8080#反代',
'8.222.215.228:8080#反代',
'8.222.193.65:8080#反代',
'8.222.244.192:8080#反代',
'8.222.249.190:8080#反代',
'8.222.222.64:8080#反代',
'8.222.237.131:8080#反代',
'8.222.208.38:8080#反代',
'47.243.169.63:8080#反代',
'47.243.203.119:8080#反代',
'47.243.206.150:8080#反代',
'47.243.139.85:8080#反代',
'47.243.186.171:8080#反代',
'47.242.36.78:8080#反代',
'8.218.173.78:8080#反代',
'8.219.0.162:8080#反代',
'8.219.6.150:8080#反代',
'8.219.0.48:8080#反代',
'8.219.1.92:8080#反代',
'8.219.222.98:8080#反代',
'8.219.210.57:8080#反代',
'8.219.248.47:8080#反代',
'8.219.229.190:8080#反代',
'8.219.235.164:8080#反代',
'8.219.210.64:8080#反代',
'8.219.237.250:8080#反代',
'8.219.239.79:8080#反代',
'8.210.207.214:8080#反代',
'8.210.244.38:8080#反代',
'8.210.203.7:8080#反代',
'47.245.105.224:8080#反代',
'47.245.86.230:8080#反代',
'47.245.96.80:8080#反代',
'47.245.84.124:8080#反代',
'8.218.65.171:8080#反代',
'8.217.250.222:8080#反代',
'8.218.65.237:8080#反代',
'8.218.48.92:8080#反代',
'8.210.100.23:8080#反代',
'8.210.126.88:8080#反代',
'8.210.156.6:8080#反代',
'47.242.7.162:8080#反代',
'47.242.42.153:8080#反代',
'47.242.54.157:8080#反代',
'8.218.136.25:8080#反代',
'8.218.122.55:8080#反代',
'8.210.42.171:8080#反代',
'8.210.9.129:8080#反代',
'8.210.43.213:8080#反代',
'8.210.63.130:8080#反代',
'8.210.89.245:8080#反代',
'8.210.3.24:8080#反代',
'8.219.86.200:8080#反代',
'8.219.84.214:8080#反代',
'8.222.191.138:8080#反代',
'47.243.169.90:8080#反代',
'47.243.139.243:8080#反代',
'8.217.164.10:8080#反代',
'8.217.149.28:8080#反代',
'47.242.155.183:8080#反代',
'47.242.119.104:8080#反代',
'47.242.157.96:8080#反代',
'47.242.176.237:8080#反代',
'8.222.160.176:8080#反代',
'8.222.162.45:8080#反代',
'8.222.134.170:8080#反代',
'8.222.165.117:8080#反代',
'8.222.181.117:8080#反代',
'8.222.156.242:8080#反代',
'8.217.50.252:8080#反代',
'8.217.85.14:8080#反代',
'8.219.126.240:8080#反代',
'8.219.163.195:8080#反代',
'8.219.123.11:8080#反代',
'8.219.161.129:8080#反代',
'8.219.110.248:8080#反代',
'8.219.191.110:8080#反代',
'8.219.189.143:8080#反代',
'8.219.198.34:8080#反代',
'8.218.222.36:8080#反代',
'8.218.181.189:8080#反代',
'8.218.243.95:8080#反代',
'8.218.178.79:8080#反代',
'8.219.5.10:8080#反代',
'8.218.201.73:8080#反代',
'8.218.174.118:8080#反代',
'8.218.204.128:8080#反代',
'8.218.211.17:8080#反代',
'47.243.26.83:8080#反代',
'8.210.192.93:8080#反代',
'8.218.74119:8080#反代',
'8.217.145.40:8080#反代',
'8.218.207.169:8080#反代',
'8.218.228.152:8080#反代',
'8.219.4.122:8080#反代',
'8.219.220.88:8080#反代',
'8.219.107.135:8080#反代',
'8.218.3.12:8080#反代',
'8.217.232.246:8080#反代',
'8.218.11.90:8080#反代',
'8.218.18.132:8080#反代',
'47.243.183.127:8080#反代',
'8.210.146.108:8080#反代',
'8.210.101.157:8080#反代',
'8.219.200.145:8080#反代',
'8.219.122.55:8080#反代',
'47.242.59.216:8080#反代',
'47.245.102.52:8080#反代',
'8.222.214.231:8080#反代',
'47.243.70.186:8080#反代',
'47.243.86.79:8080#反代',
'8.222.150.197:8080#反代',
'8.217.91.121:8080#反代',
'8.218.52.115:8080#反代',
'8.217.248.220:8080#反代',
'47.74.155.26:8080#反代',
'47.242.17.250:8080#反代',
'8.218.18.235:8080#反代',
'8.219.240.160:8080#反代',
'8.209.119.190:8080#反代',
'47.242.232.14:8080#反代',
'149.129.8.215:8080#反代',
'8.212.12.98:8080#反代',
'8.212.41.98:8080#反代',
'47.57.14.118:8080#反代',
'47.57.13.107:8080#反代',
'8.217.251.62:8080#反代',
'8.217.72.0:8080#反代',
'47.243.198.198:8080#反代',
'8.218.3.198:8080#反代',
'8.217.239.116:8080#反代',
'8.218.143.10:8080#反代',
'8.217.159.210:8080#反代',
'193.123.2:8080#反代',
	
	
];

// 设置优选noTLS地址api接口
let addressesnotlsapi = [
	'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/addressesapi.txt', //可参考内容格式 自行搭建。
];

let DLS = 8;//速度下限
let addressescsv = [
	//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/addressescsv.csv', //iptest测速结果文件。
];

let subconverter = "url.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"; //订阅转换配置文件
let noTLS = 'false'; //改为 true , 将不做域名判断 始终返回noTLS节点
let link = '';
let edgetunnel = 'ed';
let RproxyIP = 'false';
let proxyIPs = [//无法匹配到节点名就随机分配以下ProxyIP域名
	'proxyip.multacom.fxxk.dedyn.io',
	'proxyip.vultr.fxxk.dedyn.io',
];
let CMproxyIPs = [
	//'proxyip.aliyun.fxxk.dedyn.io:HK',//匹配节点名, 有HK就分配该ProxyIP域名
]
let socks5DataURL = '';//'https://raw.githubusercontent.com/cmliu/WorkerVless2sub/main/socks5Data'
let BotToken ='';
let ChatID =''; 
let proxyhosts = [//本地代理域名池
	//'ppfv2tl9veojd-maillazy.pages.dev',
];
let proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts';//在线代理域名池URL
let EndPS = '';//节点名备注内容
let 协议类型 = 'VLESS';
let FileName = 'WorkerVless2sub';
let SUBUpdateTime = 6; 
let total = 99;//PB
//let timestamp = now;
let timestamp = 4102329600000;//2099-12-31
const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;
async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

let MamaJustKilledAMan = ['telegram','twitter','miaoko'];
async function getAddressesapi(api) {
	if (!api || api.length === 0) {
		return [];
	}

	let newapi = "";

	// 创建一个AbortController对象，用于控制fetch请求的取消
	const controller = new AbortController();

	const timeout = setTimeout(() => {
		controller.abort(); // 取消所有请求
	}, 2000); // 2秒后触发

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		// 对api数组进行遍历，对每个API地址发起fetch请求
		const responses = await Promise.allSettled(api.map(apiUrl => fetch(apiUrl, {
			method: 'get', 
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'User-Agent': 'cmliu/WorkerVless2sub'
			},
			signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
		}).then(response => response.ok ? response.text() : Promise.reject())));

		// 遍历所有响应
		for (const response of responses) {
			// 检查响应状态是否为'fulfilled'，即请求成功完成
			if (response.status === 'fulfilled') {
				// 获取响应的内容
				const content = await response.value;
				newapi += content + '\n';
			}
		}
	} catch (error) {
		console.error(error);
	} finally {
		// 无论成功或失败，最后都清除设置的超时定时器
		clearTimeout(timeout);
	}

	const newAddressesapi = await ADD(newapi);

	// 返回处理后的结果
	return newAddressesapi;
}

async function getAddressescsv(tls) {
	if (!addressescsv || addressescsv.length === 0) {
		return [];
	}
	
	let newAddressescsv = [];
	
	for (const csvUrl of addressescsv) {
		try {
			const response = await fetch(csvUrl);
		
			if (!response.ok) {
				console.error('获取CSV地址时出错:', response.status, response.statusText);
				continue;
			}
		
			const text = await response.text();// 使用正确的字符编码解析文本内容
			let lines;
			if (text.includes('\r\n')){
				lines = text.split('\r\n');
			} else {
				lines = text.split('\n');
			}
		
			// 检查CSV头部是否包含必需字段
			const header = lines[0].split(',');
			const tlsIndex = header.indexOf('TLS');
			const speedIndex = header.length - 1; // 最后一个字段
		
			const ipAddressIndex = 0;// IP地址在 CSV 头部的位置
			const portIndex = 1;// 端口在 CSV 头部的位置
			const dataCenterIndex = tlsIndex + 1; // 数据中心是 TLS 的后一个字段
		
			if (tlsIndex === -1) {
				console.error('CSV文件缺少必需的字段');
				continue;
			}
		
			// 从第二行开始遍历CSV行
			for (let i = 1; i < lines.length; i++) {
				const columns = lines[i].split(',');
		
				// 检查TLS是否为"TRUE"且速度大于DLS
				if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
					const ipAddress = columns[ipAddressIndex];
					const port = columns[portIndex];
					const dataCenter = columns[dataCenterIndex];
			
					const formattedAddress = `${ipAddress}:${port}#${dataCenter}`;
					newAddressescsv.push(formattedAddress);
				}
			}
		} catch (error) {
			console.error('获取CSV地址时出错:', error);
			continue;
		}
	}
	
	return newAddressescsv;
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

let protocol;
let socks5Data;
export default {
	async fetch (request, env) {
		if (env.TOKEN) mytoken = await ADD(env.TOKEN);
		//mytoken = env.TOKEN.split(',') || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		socks5DataURL = env.SOCKS5DATA || socks5DataURL;
		if (env.CMPROXYIPS) CMproxyIPs = await ADD(env.CMPROXYIPS);;
		//console.log(CMproxyIPs);
		EndPS = env.PS || EndPS;
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const format = url.searchParams.get('format') ? url.searchParams.get('format').toLowerCase() : "null";
		let host = "";
		let uuid = "";
		let path = "";
		let sni = "";
		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		if (env.UA) MamaJustKilledAMan = MamaJustKilledAMan.concat(await ADD(env.UA));
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;

		link = env.LINK || link;
		const links = await ADD(link);
		link = links.join('\n');
		
		if (env.ADD) addresses = await ADD(env.ADD);
		if (env.ADDAPI) addressesapi = await ADD(env.ADDAPI);
		if (env.ADDNOTLS) addressesnotls = await ADD(env.ADDNOTLS);
		if (env.ADDNOTLSAPI) addressesnotlsapi = await ADD(env.ADDNOTLSAPI);
		if (env.ADDCSV) addressescsv = await ADD(env.ADDCSV);
		DLS = env.DLS || DLS;

		/*
		console.log(`
			addresses: ${addresses}
			addressesapi: ${addressesapi}
			addressesnotls: ${addressesnotls}
			addressesnotlsapi: ${addressesnotlsapi}
			addressescsv: ${addressescsv}
			DLS: ${DLS}
		`);
		*/
		
		if (socks5DataURL) {
			try {
				const response = await fetch(socks5DataURL);
				const socks5DataText = await response.text();
				if (socks5DataText.includes('\r\n')){
					socks5Data = socks5DataText.split('\r\n').filter(line => line.trim() !== '');
				} else {
					socks5Data = socks5DataText.split('\n').filter(line => line.trim() !== '');
				}
			} catch {
				socks5Data = null ;
			}
		}
		
		if (env.PROXYIP) proxyIPs = await ADD(env.PROXYIP);
		//console.log(proxyIPs);

		if (mytoken.length > 0 && mytoken.some(token => url.pathname.includes(token))) {
			host = "null";
			if (env.HOST) {
				const hosts = await ADD(env.HOST);
				host = hosts[Math.floor(Math.random() * hosts.length)];
			}
			
			if (env.PASSWORD){
				协议类型 = 'Trojan';
				uuid = env.PASSWORD
			} else {
				协议类型 = 'VLESS';
				uuid = env.UUID || "null";
			}
			
			path = env.PATH || "/?ed=2560";
			sni = env.SNI || host;
			edgetunnel = env.ED || edgetunnel;
			RproxyIP = env.RPROXYIP || RproxyIP;

			if (host == "null" || uuid == "null" ){
				let 空字段;
				if (host == "null" && uuid == "null") 空字段 = "HOST/UUID";
				else if (host == "null") 空字段 = "HOST";
				else if (uuid == "null") 空字段 = "UUID";
				EndPS += ` 订阅器内置节点 ${空字段} 未设置！！！`;
			}

			const hasSos = url.searchParams.has('sos');
			if (hasSos) {
				const hy2Url = "https://hy2sub.pages.dev/auto";
				try {
					const subconverterResponse = await fetch(hy2Url);
	
					if (!subconverterResponse.ok) {
						throw new Error(`Error fetching lzUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
					}
	
					const base64Text = await subconverterResponse.text();
					link += '\n' + atob(base64Text); // 进行 Base64 解码
	
				} catch (error) {
					// 错误处理
				}	
			}
		await sendMessage("#VLESS订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		} else {
			host = url.searchParams.get('host');
			uuid = url.searchParams.get('uuid') || url.searchParams.get('password') || url.searchParams.get('pw');
			path = url.searchParams.get('path');
			sni = url.searchParams.get('sni') || host;
			edgetunnel = url.searchParams.get('edgetunnel') || url.searchParams.get('epeius') || edgetunnel;
			RproxyIP = url.searchParams.get('proxyip') || RproxyIP;

			if (url.searchParams.has('edgetunnel') || url.searchParams.has('uuid')){
				协议类型 = 'VLESS';
			} else if (url.searchParams.has('epeius') || url.searchParams.has('password') || url.searchParams.has('pw')){
				协议类型 = 'Trojan';
			}

			if (!url.pathname.includes("/sub")) {
				const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
				if (envKey) {
					const URLs = await ADD(env[envKey]);
					const URL = URLs[Math.floor(Math.random() * URLs.length)];
					return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
				}
				//首页改成一个nginx伪装页
				return new Response(await nginx(), {
					headers: {
						'Content-Type': 'text/html; charset=UTF-8',
					},
				});
			}
			
			if (!host || !uuid) {
				const responseText = `
			缺少必填参数：host 和 uuid
			Missing required parameters: host and uuid
			پارامترهای ضروری وارد نشده: هاست و یوآی‌دی
			
			${url.origin}/sub?host=[your host]&uuid=[your uuid]&path=[your path]
			
			
			
			
			
			
				
				https://github.com/cmliu/WorkerVless2sub
				`;
			
				return new Response(responseText, {
				status: 400,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
			
			if (!path || path.trim() === '') {
				path = '/?ed=2560';
			} else {
				// 如果第一个字符不是斜杠，则在前面添加一个斜杠
				path = (path[0] === '/') ? path : '/' + path;
			}
		}
		
		if (host.toLowerCase().includes('notls') || host.toLowerCase().includes('worker') || host.toLowerCase().includes('trycloudflare')) noTLS = 'true';
		noTLS = env.NOTLS || noTLS;
		let subconverterUrl = '';

		if (!userAgent.includes('subconverter') && MamaJustKilledAMan.some(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead => userAgent.includes(PutAGunAgainstHisHeadPulledMyTriggerNowHesDead)) && MamaJustKilledAMan.length > 0) {
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			//首页改成一个nginx伪装页
			return new Response(await nginx(), {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( (userAgent.includes('clash') || (format === 'clash' && !userAgent.includes('subconverter')) ) && !userAgent.includes('nekobox') && !userAgent.includes('cf-workers-sub')) {
			subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
		} else if ( (userAgent.includes('sing-box') || userAgent.includes('singbox') || (format === 'singbox' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')){
			subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
		} else {
			if(host.includes('workers.dev') || host.includes('pages.dev')) {
				if (proxyhostsURL) {
					try {
						const response = await fetch(proxyhostsURL); 
					
						if (!response.ok) {
							console.error('获取地址时出错:', response.status, response.statusText);
							return; // 如果有错误，直接返回
						}
					
						const text = await response.text();
						const lines = text.split('\n');
						// 过滤掉空行或只包含空白字符的行
						const nonEmptyLines = lines.filter(line => line.trim() !== '');
					
						proxyhosts = proxyhosts.concat(nonEmptyLines);
					} catch (error) {
						console.error('获取地址时出错:', error);
					}
				}
				// 使用Set对象去重
				proxyhosts = [...new Set(proxyhosts)];
			}
			
			const newAddressesapi = await getAddressesapi(addressesapi);
			const newAddressescsv = await getAddressescsv('TRUE');
			addresses = addresses.concat(newAddressesapi);
			addresses = addresses.concat(newAddressescsv);
			
			// 使用Set对象去重
			const uniqueAddresses = [...new Set(addresses)];
			
			let notlsresponseBody;
			if(noTLS == 'true' && 协议类型 == 'VLESS'){
				const newAddressesnotlsapi = await getAddressesapi(addressesnotlsapi);
				const newAddressesnotlscsv = await getAddressescsv('FALSE');
				addressesnotls = addressesnotls.concat(newAddressesnotlsapi);
				addressesnotls = addressesnotls.concat(newAddressesnotlscsv);
				const uniqueAddressesnotls = [...new Set(addressesnotls)];

				notlsresponseBody = uniqueAddressesnotls.map(address => {
					let port = "80";
					let addressid = address;
				
					const match = addressid.match(regex);
					if (!match) {
						if (address.includes(':') && address.includes('#')) {
							const parts = address.split(':');
							address = parts[0];
							const subParts = parts[1].split('#');
							port = subParts[0];
							addressid = subParts[1];
						} else if (address.includes(':')) {
							const parts = address.split(':');
							address = parts[0];
							port = parts[1];
						} else if (address.includes('#')) {
							const parts = address.split('#');
							address = parts[0];
							addressid = parts[1];
						}
					
						if (addressid.includes(':')) {
							addressid = addressid.split(':')[0];
						}
					} else {
						address = match[1];
						port = match[2] || port;
						addressid = match[3] || address;
					}
	
					//console.log(address, port, addressid);

					if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
						// 将addressid转换为小写
						let lowerAddressid = addressid.toLowerCase();
						// 初始化找到的proxyIP为null
						let foundProxyIP = null;
					
						if (socks5Data) {
							const socks5 = getRandomProxyByMatch(lowerAddressid, socks5Data);
							path = `/?${socks5}`;
						} else {
							// 遍历CMproxyIPs数组查找匹配项
							for (let item of CMproxyIPs) {
								if (lowerAddressid.includes(item.split(':')[1].toLowerCase())) {
									foundProxyIP = item.split(':')[0];
									break; // 找到匹配项，跳出循环
								}
							}
						
							if (foundProxyIP) {
								// 如果找到匹配的proxyIP，赋值给path
								path = `/?proxyip=${foundProxyIP}`;
							} else {
								// 如果没有找到匹配项，随机选择一个proxyIP
								const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
								path = `/?proxyip=${randomProxyIP}`;
							}
						}
					}

					const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=&type=ws&host=${host}&path=${encodeURIComponent(path)}#${encodeURIComponent(addressid + EndPS)}`;
			
					return vlessLink;

				}).join('\n');
			}

			const responseBody = uniqueAddresses.map(address => {
				let port = "443";
				let addressid = address;
			
				const match = addressid.match(regex);
				if (!match) {
					if (address.includes(':') && address.includes('#')) {
						const parts = address.split(':');
						address = parts[0];
						const subParts = parts[1].split('#');
						port = subParts[0];
						addressid = subParts[1];
					} else if (address.includes(':')) {
						const parts = address.split(':');
						address = parts[0];
						port = parts[1];
					} else if (address.includes('#')) {
						const parts = address.split('#');
						address = parts[0];
						addressid = parts[1];
					}
				
					if (addressid.includes(':')) {
						addressid = addressid.split(':')[0];
					}
				} else {
					address = match[1];
					port = match[2] || port;
					addressid = match[3] || address;
				}

				//console.log(address, port, addressid);
		
				if (edgetunnel.trim() === 'cmliu' && RproxyIP.trim() === 'true') {
					// 将addressid转换为小写
					let lowerAddressid = addressid.toLowerCase();
					// 初始化找到的proxyIP为null
					let foundProxyIP = null;
				
					if (socks5Data) {
						const socks5 = getRandomProxyByMatch(lowerAddressid, socks5Data);
						path = `/?${socks5}`;
					} else {
						// 遍历CMproxyIPs数组查找匹配项
						for (let item of CMproxyIPs) {
							if (lowerAddressid.includes(item.split(':')[1].toLowerCase())) {
								foundProxyIP = item.split(':')[0];
								break; // 找到匹配项，跳出循环
							}
						}
					
						if (foundProxyIP) {
							// 如果找到匹配的proxyIP，赋值给path
							path = `/?proxyip=${foundProxyIP}`;
						} else {
							// 如果没有找到匹配项，随机选择一个proxyIP
							const randomProxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
							path = `/?proxyip=${randomProxyIP}`;
						}
					}
				}
				
				let 伪装域名 = host ;
				let 最终路径 = path ;
				let 节点备注 = EndPS ;
				if(proxyhosts && (host.includes('.workers.dev') || host.includes('pages.dev'))) {
					最终路径 = `/${host}${path}`;
					伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
					节点备注 = `${EndPS} 已启用临时域名中转服务，请尽快绑定自定义域！`;
					sni = 伪装域名;
				}

				if (协议类型 == 'Trojan'){
					const trojanLink = `trojan://${uuid}@${address}:${port}?security=tls&sni=${sni}&alpn=http%2F1.1&fp=randomized&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;

					return trojanLink;
				} else {
					const vlessLink = `vless://${uuid}@${address}:${port}?encryption=none&security=tls&sni=${sni}&alpn=http%2F1.1&fp=random&type=ws&host=${伪装域名}&path=${encodeURIComponent(最终路径)}#${encodeURIComponent(addressid + 节点备注)}`;
			
					return vlessLink;
				}

			}).join('\n');
			
			let combinedContent = responseBody; // 合并内容
			
			if (link) {
				combinedContent += '\n' + link;
				console.log("link: " + link)
			}
			
			if (notlsresponseBody && noTLS == 'true') {
				combinedContent += '\n' + notlsresponseBody;
				console.log("notlsresponseBody: " + notlsresponseBody);
			}
			
			if (协议类型 == 'Trojan' && (userAgent.includes('surge') || (format === 'surge' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')) {
				const TrojanLinks = combinedContent.split('\n');
				subconverterUrl =  `https://${subconverter}/sub?target=surge&ver=4&url=${encodeURIComponent(TrojanLinks.join('|'))}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&xudp=false&udp=false&tfo=false&expand=true&scv=true&fdn=false`;
			} else {
				const base64Response = btoa(combinedContent); // 重新进行 Base64 编码

				const response = new Response(base64Response, {
					headers: { 
						//"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					},
				});
	
				return response;
			}

		}

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
				
			let subconverterContent = await subconverterResponse.text();

			if (协议类型 == 'Trojan' && (userAgent.includes('surge') || (format === 'surge' && !userAgent.includes('subconverter')) ) && !userAgent.includes('cf-workers-sub')){
				subconverterContent = surge(subconverterContent, host);
			}

			return new Response(subconverterContent, {
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
					"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
				},
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}
	}
};

function surge(content, url) {
	let 每行内容;
	if (content.includes('\r\n')){
		每行内容 = content.split('\r\n');
	} else {
		每行内容 = content.split('\n');
	}

	let 输出内容 = "";
	for (let x of 每行内容) {
		if (x.includes('= trojan,')) {
			const host = x.split("sni=")[1].split(",")[0];
			const 备改内容 = `skip-cert-verify=true, tfo=false, udp-relay=false`;
			const 正确内容 = `skip-cert-verify=true, ws=true, ws-path=/?ed=2560, ws-headers=Host:"${host}", tfo=false, udp-relay=false`;
			输出内容 += x.replace(new RegExp(备改内容, 'g'), 正确内容).replace("[", "").replace("]", "") + '\n';
		} else {
			输出内容 += x + '\n';
		}
	}

	输出内容 = `#!MANAGED-CONFIG ${url.href} interval=86400 strict=false` + 输出内容.substring(输出内容.indexOf('\n'));
	return 输出内容;
}

function getRandomProxyByMatch(CC, socks5Data) {
	// 将匹配字符串转换为小写
	const lowerCaseMatch = CC.toLowerCase();
	
	// 过滤出所有以指定匹配字符串结尾的代理字符串
	let filteredProxies = socks5Data.filter(proxy => proxy.toLowerCase().endsWith(`#${lowerCaseMatch}`));
	
	// 如果没有匹配的代理，尝试匹配 "US"
	if (filteredProxies.length === 0) {
		filteredProxies = socks5Data.filter(proxy => proxy.toLowerCase().endsWith(`#us`));
	}
	
	// 如果还是没有匹配的代理，从整个代理列表中随机选择一个
	if (filteredProxies.length === 0) {
		return socks5Data[Math.floor(Math.random() * socks5Data.length)];
	}
	
	// 从匹配的代理中随机选择一个并返回
	const randomProxy = filteredProxies[Math.floor(Math.random() * filteredProxies.length)];
	return randomProxy;
}
