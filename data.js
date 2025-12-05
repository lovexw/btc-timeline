// 比特币大事记数据
const bitcoinData = {
    // 完整时间线数据
    timeline: [
        {
            date: "2008年10月31日",
            title: "比特币白皮书发布",
            description: "中本聪发布《比特币：一种点对点的电子现金系统》白皮书，提出了一种去中心化的数字货币概念。",
            tags: ["创世", "白皮书", "中本聪"]
        },
        {
            date: "2009年1月3日",
            title: "创世区块诞生",
            description: "中本聪挖掘了第一个比特币区块（创世区块），标志着比特币网络的正式启动。",
            tags: ["创世区块", "挖矿", "网络启动"]
        },
        {
            date: "2009年1月12日",
            title: "第一笔比特币交易",
            description: "中本聪向哈尔·芬尼发送了10个比特币，这是比特币历史上的第一笔交易。",
            tags: ["首笔交易", "哈尔·芬尼"]
        },
        {
            date: "2010年7月",
            title: "GPU挖矿时代开启",
            description: "首个GPU挖矿程序发布，挖矿效率大幅提升，标志着从CPU挖矿向GPU挖矿的转变。",
            tags: ["挖矿", "GPU", "技术升级"]
        },
        {
            date: "2010年8月15日",
            title: "184亿比特币漏洞",
            description: "比特币历史上最严重的漏洞：有人利用整数溢出漏洞创造了1844亿个比特币。中本聪在数小时内发布补丁并硬分叉修复。",
            tags: ["安全漏洞", "硬分叉", "紧急修复"]
        },
        {
            date: "2010年5月22日",
            title: "比特币披萨日",
            description: "程序员拉斯洛·汉耶茨用1万个比特币购买了两个披萨，这是比特币第一次被用作实物商品交易。",
            tags: ["披萨日", "实物交易", "价格里程碑"]
        },
        {
            date: "2010年7月17日",
            title: "Mt. Gox交易所成立",
            description: "当时最大的比特币交易所Mt. Gox成立，后来成为比特币发展史上的重要事件。",
            tags: ["交易所", "Mt. Gox"]
        },
        {
            date: "2011年2月9日",
            title: "比特币价格突破1美元",
            description: "比特币价格首次达到1美元，标志着其价值的初步认可。",
            tags: ["价格", "里程碑", "1美元"]
        },
        {
            date: "2011年6月",
            title: "维基解密接受比特币捐赠",
            description: "维基解密开始接受比特币捐赠，提高了比特币的知名度。",
            tags: ["应用", "捐赠", "维基解密"]
        },
        {
            date: "2012年9月",
            title: "比特币基金会成立",
            description: "比特币基金会在美国成立，旨在推动比特币的标准化、保护和推广。",
            tags: ["基金会", "组织", "标准化"]
        },
        {
            date: "2012年11月28日",
            title: "第一次减半",
            description: "比特币迎来第一次区块奖励减半，从50个BTC减少到25个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
        },
        {
            date: "2013年1月",
            title: "Avalon首台ASIC矿机",
            description: "全球首台比特币ASIC矿机Avalon发布，挖矿进入专业化时代，算力大幅提升。",
            tags: ["ASIC", "矿机", "Avalon", "算力"]
        },
        {
            date: "2013年3月11日",
            title: "0.7-0.8版本硬分叉事件",
            description: "比特币网络因0.7和0.8版本不兼容导致意外硬分叉，社区快速协调回滚到0.7版本，展示了应急响应能力。",
            tags: ["硬分叉", "技术事故", "版本冲突"]
        },
        {
            date: "2013年3月",
            title: "FinCEN发布监管指引",
            description: "美国金融犯罪执法网络(FinCEN)发布虚拟货币监管指引，将比特币交易所定义为货币服务业务。",
            tags: ["美国政策", "监管", "FinCEN"]
        },
        {
            date: "2013年2月",
            title: "比特币价格突破30美元",
            description: "塞浦路斯金融危机期间，比特币价格大幅上涨，首次突破30美元。",
            tags: ["价格", "金融危机", "避险"]
        },
        {
            date: "2013年4月",
            title: "比特币价格突破100美元",
            description: "比特币价格首次突破100美元大关，市场关注度显著提升。",
            tags: ["价格", "100美元", "关注度"]
        },
        {
            date: "2013年9月",
            title: "BIP32 HD钱包提案",
            description: "BIP32提出分层确定性(HD)钱包标准，允许从单个种子生成多个密钥，大幅提升钱包易用性和安全性。",
            tags: ["BIP32", "HD钱包", "技术标准"]
        },
        {
            date: "2013年9月",
            title: "BIP39 助记词标准",
            description: "BIP39提出助记词标准，用12-24个易记单词代替复杂私钥，革命性地改善了钱包备份体验。",
            tags: ["BIP39", "助记词", "用户体验"]
        },
        {
            date: "2013年11月",
            title: "蚂蚁矿机S1发布",
            description: "比特大陆发布首款蚂蚁矿机S1，算力180GH/s，开启蚂蚁矿机时代。",
            tags: ["蚂蚁矿机", "比特大陆", "ASIC矿机"]
        },
        {
            date: "2013年12月5日",
            title: "中国央行首次监管通知",
            description: "中国人民银行等五部委发布《关于防范比特币风险的通知》，禁止金融机构开展比特币业务，比特币价格大跌。",
            tags: ["中国政策", "央行", "监管", "价格影响"]
        },
        {
            date: "2013年12月",
            title: "比特币价格突破1000美元",
            description: "比特币价格首次突破1000美元，达到历史新高，引发全球关注。",
            tags: ["价格", "1000美元", "历史新高"]
        },
        {
            date: "2014年2月",
            title: "Mt. Gox破产",
            description: "当时最大的比特币交易所Mt. Gox宣布破产，损失85万比特币，对行业造成重大打击。",
            tags: ["Mt. Gox", "破产", "安全事故"]
        },
        {
            date: "2014年3月",
            title: "IRS税务指引",
            description: "美国国税局(IRS)发布指引，将比特币视为财产而非货币，需缴纳资本利得税。",
            tags: ["美国政策", "税务", "IRS"]
        },
        {
            date: "2014年7月",
            title: "蚂蚁矿机S3发布",
            description: "蚂蚁矿机S3发布，算力提升至441GH/s，功耗比大幅优化。",
            tags: ["蚂蚁矿机", "S3", "算力提升"]
        },
        {
            date: "2015年1月",
            title: "Bitstamp交易所被盗",
            description: "欧洲最大交易所Bitstamp被盗1.9万个比特币，再次凸显交易所安全问题。",
            tags: ["安全事故", "交易所", "被盗"]
        },
        {
            date: "2015年10月",
            title: "BIP65激活",
            description: "BIP65（OP_CHECKLOCKTIMEVERIFY）激活，支持时间锁定功能，为闪电网络等Layer2解决方案奠定基础。",
            tags: ["BIP65", "时间锁", "技术升级"]
        },
        {
            date: "2015年12月",
            title: "隔离见证(SegWit)提案",
            description: "Pieter Wuille提出隔离见证(Segregated Witness)提案，旨在解决交易延展性问题并扩容。",
            tags: ["SegWit", "扩容", "技术提案"]
        },
        {
            date: "2016年6月",
            title: "蚂蚁矿机S9发布",
            description: "传奇矿机蚂蚁S9发布，算力13.5TH/s，成为最长寿的比特币矿机之一，服役超过4年。",
            tags: ["蚂蚁矿机", "S9", "经典矿机"]
        },
        {
            date: "2016年7月9日",
            title: "第二次减半",
            description: "比特币迎来第二次区块奖励减半，从25个BTC减少到12.5个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
        },
        {
            date: "2016年8月",
            title: "Bitfinex被盗事件",
            description: "香港交易所Bitfinex被盗12万个比特币，价值约7200万美元，比特币价格下跌20%。",
            tags: ["安全事故", "Bitfinex", "被盗"]
        },
        {
            date: "2017年5月",
            title: "WannaCry勒索病毒",
            description: "全球爆发WannaCry勒索病毒攻击，要求受害者用比特币支付赎金，引发对比特币用于非法活动的担忧。",
            tags: ["勒索病毒", "安全事件", "负面新闻"]
        },
        {
            date: "2017年8月1日",
            title: "比特币现金分叉",
            description: "比特币硬分叉产生比特币现金（BCH），这是比特币历史上重要的分叉事件。",
            tags: ["分叉", "BCH", "硬分叉"]
        },
        {
            date: "2017年8月24日",
            title: "SegWit正式激活",
            description: "经过长期争论，隔离见证(SegWit)在区块高度481,824正式激活，标志着比特币重大技术升级。",
            tags: ["SegWit", "激活", "扩容方案"]
        },
        {
            date: "2017年9月4日",
            title: "中国禁止ICO和关闭交易所",
            description: "中国央行等七部委发布公告，全面禁止ICO，并要求关闭境内所有比特币交易所，对市场造成重大冲击。",
            tags: ["中国政策", "ICO禁令", "交易所关闭"]
        },
        {
            date: "2017年12月",
            title: "芝商所推出比特币期货",
            description: "芝加哥商品交易所(CME)和芝加哥期权交易所(CBOE)推出比特币期货，比特币进入传统金融市场。",
            tags: ["期货", "CME", "金融产品"]
        },
        {
            date: "2017年12月",
            title: "历史最高价近2万美元",
            description: "比特币价格达到近2万美元的历史最高点，全球投机热潮达到顶峰。",
            tags: ["价格", "历史最高", "2万美元"]
        },
        {
            date: "2018年",
            title: "熊市开始",
            description: "比特币价格从高点大幅下跌，进入长期的熊市调整期。",
            tags: ["熊市", "价格下跌", "调整期"]
        },
        {
            date: "2018年3月",
            title: "闪电网络主网上线",
            description: "闪电网络(Lightning Network)主网正式上线，提供即时、低成本的比特币支付解决方案。",
            tags: ["闪电网络", "Layer2", "扩容方案"]
        },
        {
            date: "2018年9月",
            title: "CVE-2018-17144通胀漏洞",
            description: "发现严重漏洞可能导致比特币通胀，开发者紧急修复。这是比特币核心代码的重大安全事件。",
            tags: ["安全漏洞", "通胀风险", "紧急修复"]
        },
        {
            date: "2019年",
            title: "Facebook发布Libra",
            description: "Facebook发布加密货币项目Libra（后更名Diem），引发监管关注。",
            tags: ["Libra", "Facebook", "监管"]
        },
        {
            date: "2019年5月",
            title: "币安被盗7000 BTC",
            description: "全球最大交易所币安遭受黑客攻击，损失7000个比特币，但币安用自有资金全额赔偿用户。",
            tags: ["安全事故", "币安", "黑客攻击"]
        },
        {
            date: "2019年10月",
            title: "神马矿机M20S发布",
            description: "神马矿机M20S发布，算力68TH/s，与蚂蚁S17形成市场竞争。",
            tags: ["神马矿机", "M20S", "矿机竞争"]
        },
        {
            date: "2020年5月11日",
            title: "第三次减半",
            description: "比特币迎来第三次区块奖励减半，从12.5个BTC减少到6.25个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
        },
        {
            date: "2020年3月12日",
            title: "312暴跌事件",
            description: "受COVID-19疫情影响，比特币价格单日暴跌50%，从7900美元跌至3800美元，创下历史最大单日跌幅。",
            tags: ["价格暴跌", "黑天鹅", "疫情影响"]
        },
        {
            date: "2020年8月",
            title: "MicroStrategy大量购入比特币",
            description: "上市公司MicroStrategy宣布购买2.5亿美元比特币作为储备资产，开启上市公司配置比特币潮流。",
            tags: ["机构投资", "MicroStrategy", "储备资产"]
        },
        {
            date: "2020年9月",
            title: "蚂蚁矿机S19系列发布",
            description: "蚂蚁S19/S19 Pro发布，算力达110TH/s，进入百T算力时代，能效比大幅提升。",
            tags: ["蚂蚁矿机", "S19", "百T算力"]
        },
        {
            date: "2020年10月",
            title: "PayPal支持比特币",
            description: "PayPal宣布支持比特币交易，传统金融机构开始大规模接纳比特币。",
            tags: ["PayPal", "机构接纳", "传统金融"]
        },
        {
            date: "2021年2月",
            title: "特斯拉购买比特币",
            description: "特斯拉宣布购买15亿美元比特币，并接受比特币支付，推动价格大幅上涨。",
            tags: ["特斯拉", "机构投资", "支付"]
        },
        {
            date: "2021年4月",
            title: "Coinbase上市",
            description: "美国最大加密货币交易所Coinbase在纳斯达克上市，成为行业重要里程碑。",
            tags: ["Coinbase", "上市", "合规化"]
        },
        {
            date: "2021年5月18日",
            title: "中国打击比特币挖矿",
            description: "中国国务院金融委明确提出打击比特币挖矿和交易，随后各省份关停矿场，全网算力下降50%以上。",
            tags: ["中国政策", "挖矿禁令", "算力迁移"]
        },
        {
            date: "2021年5月21日",
            title: "挖矿难度首次大幅下调",
            description: "由于中国矿场关停，比特币挖矿难度在区块高度686,880下调28%，创历史最大降幅。",
            tags: ["挖矿难度", "算力下降", "历史纪录"]
        },
        {
            date: "2021年6月9日",
            title: "萨尔瓦多采用比特币为法币",
            description: "萨尔瓦多通过法案，成为全球首个将比特币作为法定货币的国家，于9月7日正式实施。",
            tags: ["萨尔瓦多", "法定货币", "国家采用"]
        },
        {
            date: "2021年11月14日",
            title: "Taproot升级激活",
            description: "比特币历史上最重要的升级之一Taproot正式激活，引入Schnorr签名，提升隐私性和智能合约能力。",
            tags: ["Taproot", "Schnorr", "技术升级"]
        },
        {
            date: "2021年11月",
            title: "历史最高价近6.9万美元",
            description: "比特币价格达到近6.9万美元的历史新高，市场情绪达到顶峰。",
            tags: ["价格", "历史最高", "6.9万美元"]
        },
        {
            date: "2022年",
            title: "市场调整与监管加强",
            description: "市场大幅调整，多国加强加密货币监管，行业进入规范发展阶段。",
            tags: ["监管", "市场调整", "规范发展"]
        },
        {
            date: "2022年5月",
            title: "Terra/Luna崩盘",
            description: "算法稳定币Terra(UST)脱锚崩盘，连带Luna归零，市值蒸发超400亿美元，引发加密市场恐慌。",
            tags: ["Terra", "Luna", "崩盘事件"]
        },
        {
            date: "2022年6月",
            title: "三箭资本破产",
            description: "知名加密对冲基金三箭资本(3AC)破产清算，暴露行业高杠杆风险，引发连锁反应。",
            tags: ["三箭资本", "破产", "系统性风险"]
        },
        {
            date: "2022年9月",
            title: "以太坊完成合并",
            description: "以太坊从PoW转向PoS共识机制，大量GPU矿机转向其他币种，对比特币挖矿生态产生影响。",
            tags: ["以太坊", "PoS", "挖矿生态"]
        },
        {
            date: "2023年3月",
            title: "硅谷银行倒闭",
            description: "美国硅谷银行(SVB)倒闭，引发银行业危机，比特币作为避险资产受到关注，价格上涨。",
            tags: ["银行危机", "避险资产", "SVB"]
        },
        {
            date: "2023年6月",
            title: "贝莱德申请比特币ETF",
            description: "全球最大资产管理公司贝莱德(BlackRock)申请比特币现货ETF，推动市场预期和价格回升。",
            tags: ["贝莱德", "ETF申请", "机构入场"]
        },
        {
            date: "2024年1月10日",
            title: "比特币现货ETF获批",
            description: "美国SEC批准11支比特币现货ETF（包括贝莱德IBIT、富达FBTC等），标志着比特币正式进入主流投资领域。",
            tags: ["ETF", "SEC批准", "主流投资"]
        },
        {
            date: "2024年4月20日",
            title: "第四次减半",
            description: "比特币迎来第四次区块奖励减半，从6.25个BTC减少到3.125个BTC，区块高度840,000。",
            tags: ["减半", "区块奖励", "供应量"]
        },
        {
            date: "2024年7月",
            title: "挖矿难度突破90T",
            description: "比特币挖矿难度突破90T（90万亿），创历史新高，反映全网算力持续增长。",
            tags: ["挖矿难度", "算力", "历史新高"]
        },
        {
            date: "2025年1月",
            title: "特朗普政府加密友好政策",
            description: "特朗普就任美国总统后，提出建立国家比特币战略储备，美国加密政策转向友好。",
            tags: ["美国政策", "战略储备", "政策转向"]
        },
        {
            date: "2025年12月",
            title: "比特币市值突破2万亿美元",
            description: "比特币市值突破2万亿美元，成为全球第七大资产，机构配置比例持续提升。",
            tags: ["市值", "2万亿", "机构配置"]
        }
    ],

    // 重要里程碑
    milestones: [
        {
            year: "2008",
            title: "概念诞生",
            description: "中本聪发布比特币白皮书，提出去中心化电子现金系统的概念。"
        },
        {
            year: "2009",
            title: "网络启动",
            description: "创世区块诞生，比特币网络正式启动，第一笔交易完成。"
        },
        {
            year: "2010",
            title: "首次商业应用",
            description: "比特币披萨日标志着比特币首次用于实物商品交易，价值开始被认可。"
        },
        {
            year: "2011",
            title: "交易所兴起",
            description: "Mt. Gox等交易所成立，比特币交易市场开始形成，价格突破1美元。"
        },
        {
            year: "2012",
            title: "第一次减半",
            description: "比特币首次减半，供应量增长速度下降，稀缺性开始显现。"
        },
        {
            year: "2013",
            title: "主流关注",
            description: "价格突破1000美元，引发全球媒体和投资者广泛关注。"
        },
        {
            year: "2014",
            title: "行业危机",
            description: "Mt. Gox破产事件暴露行业风险，安全性和监管成为焦点。"
        },
        {
            year: "2016",
            title: "技术成熟",
            description: "第二次减半，SegWit提案提出，技术升级推动网络发展。"
        },
        {
            year: "2017",
            title: "牛市巅峰",
            description: "价格近2万美元，分叉事件增多，市场投机情绪高涨。"
        },
        {
            year: "2020",
            title: "机构入场",
            description: "第三次减半，传统金融机构开始大规模接纳比特币。"
        },
        {
            year: "2021",
            title: "历史新高",
            description: "价格近6.9万美元，Coinbase上市，行业合规化进程加速。"
        },
        {
            year: "2024",
            title: "主流化",
            description: "现货ETF获批，第四次减半，比特币正式进入主流投资领域。"
        }
    ],

    // 技术发展历程
    technology: [
        {
            icon: "📄",
            title: "白皮书发布",
            date: "2008年10月",
            description: "中本聪发布比特币白皮书，详细阐述了区块链技术和去中心化货币系统的工作原理。"
        },
        {
            icon: "⛏️",
            title: "创世区块",
            date: "2009年1月",
            description: "第一个比特币区块被挖出，包含着'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'的信息。"
        },
        {
            icon: "💱",
            title: "首次交易",
            date: "2009年1月",
            description: "中本聪向哈尔·芬尼发送10个比特币，完成了网络上的第一笔交易。"
        },
        {
            icon: "🏪",
            title: "交易所建立",
            date: "2010年",
            description: "第一个比特币交易所BitcoinMarket.com成立，随后Mt. Gox成为主要交易平台。"
        },
        {
            icon: "🔨",
            title: "GPU挖矿",
            date: "2010年7月",
            description: "GPU挖矿程序发布，挖矿效率比CPU提升数十倍，开启专业挖矿时代。"
        },
        {
            icon: "🐛",
            title: "184亿比特币漏洞修复",
            date: "2010年8月",
            description: "比特币史上最严重漏洞被发现并在数小时内紧急修复，展示了社区响应能力。"
        },
        {
            icon: "🔧",
            title: "第一次减半",
            date: "2012年11月",
            description: "区块奖励从50个BTC减少到25个BTC，验证了预设的货币政策。"
        },
        {
            icon: "⚙️",
            title: "ASIC矿机时代",
            date: "2013年1月",
            description: "Avalon首台ASIC矿机发布，专业矿机取代通用硬件，算力指数级增长。"
        },
        {
            icon: "🔑",
            title: "BIP32 HD钱包",
            date: "2013年9月",
            description: "分层确定性钱包标准提出，从单个种子生成多个密钥，提升钱包管理效率。"
        },
        {
            icon: "📝",
            title: "BIP39 助记词",
            date: "2013年9月",
            description: "助记词标准提出，用12-24个单词代替私钥，极大改善用户体验和备份安全性。"
        },
        {
            icon: "🔒",
            title: "BIP65时间锁",
            date: "2015年10月",
            description: "OP_CHECKLOCKTIMEVERIFY激活，支持时间锁定，为智能合约和Layer2奠定基础。"
        },
        {
            icon: "🔗",
            title: "SegWit提案",
            date: "2015年12月",
            description: "隔离见证（Segregated Witness）提案提出，旨在解决交易延展性问题并扩容。"
        },
        {
            icon: "🔧",
            title: "第二次减半",
            date: "2016年7月",
            description: "区块奖励从25个BTC减少到12.5个BTC，进一步控制供应量增长。"
        },
        {
            icon: "✅",
            title: "SegWit激活",
            date: "2017年8月",
            description: "经过长期争论，隔离见证正式激活，区块容量增加，交易费用降低。"
        },
        {
            icon: "⚡",
            title: "闪电网络",
            date: "2018年3月",
            description: "闪电网络主网上线，提供更快速、低成本的比特币支付解决方案。"
        },
        {
            icon: "🛡️",
            title: "通胀漏洞修复",
            date: "2018年9月",
            description: "CVE-2018-17144严重漏洞被发现并紧急修复，避免了可能的比特币通胀风险。"
        },
        {
            icon: "🔧",
            title: "第三次减半",
            date: "2020年5月",
            description: "区块奖励从12.5个BTC减少到6.25个BTC，供应量增长进一步放缓。"
        },
        {
            icon: "🏦",
            title: "Taproot升级",
            date: "2021年11月",
            description: "Taproot升级激活，提升比特币的隐私性、效率和智能合约能力。"
        },
        {
            icon: "📈",
            title: "现货ETF",
            date: "2024年1月",
            description: "美国SEC批准比特币现货ETF，为传统投资者提供合规投资渠道。"
        },
        {
            icon: "🔧",
            title: "第四次减半",
            date: "2024年4月",
            description: "区块奖励从6.25个BTC减少到3.125个BTC，继续执行通缩货币政策。"
        }
    ],

    // 价格历史关键节点
    priceHistory: [
        {
            amount: "$0.0001",
            date: "2009年",
            details: "比特币最初几乎没有价值，主要用于技术爱好者之间的小额交易。"
        },
        {
            amount: "$0.01",
            date: "2010年4月",
            details: "比特币首次在交易所获得定价，开始形成市场价格。"
        },
        {
            amount: "$1",
            date: "2011年2月",
            details: "比特币价格首次突破1美元，标志着其价值开始被市场认可。"
        },
        {
            amount: "$10",
            date: "2012年6月",
            details: "价格稳步上涨，更多用户开始关注和投资比特币。"
        },
        {
            amount: "$100",
            date: "2013年4月",
            details: "塞浦路斯金融危机推动比特币价格突破100美元，避险属性显现。"
        },
        {
            amount: "$1,000",
            date: "2013年11月",
            details: "价格首次突破1000美元，引发全球媒体广泛关注。"
        },
        {
            amount: "$10,000",
            date: "2017年11月",
            details: "牛市期间价格突破1万美元，市场情绪极度乐观。"
        },
        {
            amount: "$19,783",
            date: "2017年12月",
            details: "达到2017年牛市的历史最高点，随后开始大幅回调。"
        },
        {
            amount: "$3,200",
            date: "2018年12月",
            details: "熊市最低点，价格从高点下跌约84%。"
        },
        {
            amount: "$10,000",
            date: "2020年2月",
            details: "价格重新站上1万美元，开始新一轮上涨周期。"
        },
        {
            amount: "$20,000",
            date: "2020年12月",
            details: "突破2017年历史高点，创出新的历史记录。"
        },
        {
            amount: "$40,000",
            date: "2021年1月",
            description: "机构投资者大量入场，价格快速上涨。"
        },
        {
            amount: "$64,800",
            date: "2021年4月",
            details: "Coinbase上市推动价格达到阶段性高点。"
        },
        {
            amount: "$69,000",
            date: "2021年11月",
            details: "达到历史最高价，市场情绪达到顶峰。"
        },
        {
            amount: "$15,500",
            date: "2022年11月",
            details: "FTX崩盘事件影响，价格跌至熊市低点。"
        },
        {
            amount: "$30,000",
            date: "2023年6月",
            details: "市场开始复苏，价格重新站上3万美元。"
        },
        {
            amount: "$47,000",
            date: "2024年1月",
            details: "现货ETF获批推动价格大幅上涨。"
        }
    ],

    // 重要新闻
    news: [
        {
            date: "2013年3月",
            title: "塞浦路斯金融危机",
            description: "塞浦路斯政府计划征收银行存款税，引发民众对传统银行体系的不信任，比特币作为避险资产受到关注。",
            tags: ["金融危机", "避险资产", "银行信任"]
        },
        {
            date: "2013年1月",
            title: "Avalon ASIC矿机发布",
            description: "全球首台比特币ASIC矿机Avalon发布，挖矿进入专业化和产业化阶段，算力飞速增长。",
            tags: ["ASIC矿机", "Avalon", "挖矿革命"]
        },
        {
            date: "2013年10月",
            title: "丝绸之路被关闭",
            description: "美国FBI关闭了使用比特币进行交易的暗网市场丝绸之路，比特币与非法活动的关联受到质疑。",
            tags: ["丝绸之路", "监管", "非法活动"]
        },
        {
            date: "2013年11月",
            title: "蚂蚁矿机S1发布",
            description: "比特大陆发布首款蚂蚁矿机S1，开启了蚂蚁矿机统治市场的时代。",
            tags: ["蚂蚁矿机", "比特大陆", "矿机市场"]
        },
        {
            date: "2013年12月",
            title: "中国首次监管比特币",
            description: "中国央行等五部委发布《关于防范比特币风险的通知》，首次对比特币进行监管定性。",
            tags: ["中国政策", "监管", "央行"]
        },
        {
            date: "2014年2月",
            title: "Mt. Gox破产事件",
            description: "当时最大的比特币交易所Mt. Gox因85万比特币被盗而宣布破产，对整个行业造成重大打击。",
            tags: ["Mt. Gox", "破产", "安全事故"]
        },
        {
            date: "2016年6月",
            title: "经典矿机S9发布",
            description: "蚂蚁矿机S9发布，成为比特币历史上最成功的矿机之一，服役时间超过4年。",
            tags: ["蚂蚁S9", "经典矿机", "长寿矿机"]
        },
        {
            date: "2017年5月",
            title: "WannaCry勒索病毒",
            description: "全球爆发WannaCry勒索病毒，要求用比特币支付赎金，引发对比特币用于犯罪的争议。",
            tags: ["勒索病毒", "负面新闻", "安全事件"]
        },
        {
            date: "2017年8月",
            title: "比特币现金分叉",
            description: "比特币硬分叉产生比特币现金（BCH），社区就区块大小扩容方案产生分歧。",
            tags: ["分叉", "BCH", "社区分歧"]
        },
        {
            date: "2017年9月",
            title: "中国禁止ICO和交易所",
            description: "中国央行等七部委全面禁止ICO，并要求关闭境内所有比特币交易所，对市场影响巨大。",
            tags: ["中国政策", "ICO禁令", "交易所关闭"]
        },
        {
            date: "2017年12月",
            title: "比特币期货上线",
            description: "芝商所(CME)和芝期所(CBOE)推出比特币期货，比特币进入传统金融市场。",
            tags: ["期货", "金融产品", "CME"]
        },
        {
            date: "2018年3月",
            title: "闪电网络主网上线",
            description: "比特币闪电网络主网正式上线，提供低成本、即时的支付解决方案。",
            tags: ["闪电网络", "Layer2", "扩容"]
        },
        {
            date: "2019年6月",
            title: "Facebook发布Libra",
            description: "Facebook宣布推出加密货币项目Libra，引发全球监管机构对加密货币的高度关注。",
            tags: ["Facebook", "Libra", "监管关注"]
        },
        {
            date: "2020年3月",
            title: "312暴跌黑天鹅",
            description: "受疫情影响，比特币单日暴跌50%，创下历史最大单日跌幅，市场恐慌情绪蔓延。",
            tags: ["价格暴跌", "黑天鹅", "疫情"]
        },
        {
            date: "2020年5月",
            title: "第三次减半事件",
            description: "比特币第三次减半，区块奖励减半至6.25个BTC，市场预期推动价格上涨。",
            tags: ["减半", "供应量", "市场预期"]
        },
        {
            date: "2020年9月",
            title: "百T算力矿机S19发布",
            description: "蚂蚁矿机S19系列发布，算力达110TH/s，进入百T时代，能效比大幅提升。",
            tags: ["蚂蚁S19", "百T算力", "矿机升级"]
        },
        {
            date: "2021年2月",
            title: "特斯拉投资比特币",
            description: "特斯拉宣布购买15亿美元比特币，并接受比特币作为支付方式，推动主流企业采用。",
            tags: ["特斯拉", "机构投资", "企业采用"]
        },
        {
            date: "2021年5月",
            title: "中国全面打击挖矿",
            description: "中国国务院金融委明确打击比特币挖矿和交易，全网算力下降50%以上，大量矿工迁往海外。",
            tags: ["中国政策", "挖矿禁令", "算力迁移"]
        },
        {
            date: "2021年5月",
            title: "挖矿难度暴跌28%",
            description: "由于中国矿场大规模关停，比特币挖矿难度下调28%，创历史最大降幅记录。",
            tags: ["挖矿难度", "历史纪录", "算力下降"]
        },
        {
            date: "2021年6月",
            title: "萨尔瓦多采用比特币",
            description: "萨尔瓦多成为世界上首个将比特币作为法定货币的国家，具有历史意义。",
            tags: ["萨尔瓦多", "法定货币", "国家采用"]
        },
        {
            date: "2021年11月",
            title: "Taproot升级激活",
            description: "比特币自SegWit以来最重要的升级Taproot激活，引入Schnorr签名，提升隐私和智能合约能力。",
            tags: ["Taproot", "技术升级", "Schnorr"]
        },
        {
            date: "2022年5月",
            title: "Terra/Luna崩盘",
            description: "算法稳定币Terra崩盘，Luna归零，市值蒸发超400亿美元，引发加密市场连锁反应。",
            tags: ["Terra", "Luna", "崩盘"]
        },
        {
            date: "2022年11月",
            title: "FTX交易所崩盘",
            description: "全球第二大加密货币交易所FTX因流动性危机而破产，引发市场信任危机。",
            tags: ["FTX", "破产", "信任危机"]
        },
        {
            date: "2023年3月",
            title: "硅谷银行危机",
            description: "美国硅谷银行(SVB)倒闭，引发银行业危机，比特币避险属性再次受到关注。",
            tags: ["银行危机", "避险资产", "SVB"]
        },
        {
            date: "2023年6月",
            title: "贝莱德申请比特币ETF",
            description: "全球最大资产管理公司贝莱德申请比特币现货ETF，推动市场预期和价格回升。",
            tags: ["贝莱德", "ETF申请", "机构入场"]
        },
        {
            date: "2024年1月",
            title: "比特币现货ETF获批",
            description: "美国SEC批准11支比特币现货ETF，标志着比特币正式进入主流投资领域，首日交易量超46亿美元。",
            tags: ["ETF获批", "SEC", "主流化"]
        },
        {
            date: "2024年7月",
            title: "挖矿难度突破90T",
            description: "比特币挖矿难度突破90T（90万亿），创历史新高，反映全网算力持续增长至700EH/s以上。",
            tags: ["挖矿难度", "算力新高", "历史纪录"]
        },
        {
            date: "2025年1月",
            title: "美国建立比特币储备",
            description: "特朗普政府提出建立国家比特币战略储备计划，美国加密货币政策转向积极友好。",
            tags: ["美国政策", "战略储备", "政策转向"]
        }
    ],

    // 挖矿发展历程
    mining: [
        {
            date: "2009年1月",
            title: "CPU挖矿时代",
            description: "比特币诞生初期，使用普通电脑CPU即可挖矿，难度为1，个人电脑即可挖出区块。",
            hashrate: "约10 MH/s",
            difficulty: "1",
            tags: ["CPU", "创世阶段"]
        },
        {
            date: "2010年7月",
            title: "GPU挖矿革命",
            description: "首个GPU挖矿程序发布，挖矿效率比CPU提升50-100倍，开启GPU挖矿时代。",
            hashrate: "约100 MH/s",
            difficulty: "增长至数千",
            tags: ["GPU", "效率提升"]
        },
        {
            date: "2011年",
            title: "矿池出现",
            description: "第一个矿池Slush Pool成立，矿工可以联合挖矿分享收益，降低挖矿风险。",
            hashrate: "约10 GH/s",
            difficulty: "100万+",
            tags: ["矿池", "合作挖矿"]
        },
        {
            date: "2013年1月",
            title: "Avalon首台ASIC",
            description: "全球第一台比特币ASIC矿机Avalon发布，算力60-80 GH/s，挖矿进入专业化时代。",
            hashrate: "网络算力突破100 TH/s",
            difficulty: "数千万",
            tags: ["ASIC", "Avalon", "专业化"]
        },
        {
            date: "2013年11月",
            title: "蚂蚁矿机S1",
            description: "比特大陆发布首款蚂蚁矿机S1，算力180 GH/s，开启蚂蚁矿机统治时代。",
            hashrate: "网络算力突破10 PH/s",
            difficulty: "超过5亿",
            tags: ["蚂蚁矿机", "S1", "比特大陆"]
        },
        {
            date: "2014年7月",
            title: "蚂蚁矿机S3",
            description: "蚂蚁S3发布，算力441 GH/s，功耗比优化至0.77 W/GH，矿机性能持续提升。",
            hashrate: "网络算力突破100 PH/s",
            difficulty: "超过170亿",
            tags: ["蚂蚁矿机", "S3", "能效提升"]
        },
        {
            date: "2015年8月",
            title: "蚂蚁矿机S5+和S7",
            description: "S7发布，算力4.73 TH/s，首次突破T级算力，28nm芯片工艺。",
            hashrate: "网络算力接近1 EH/s",
            difficulty: "超过600亿",
            tags: ["蚂蚁矿机", "S7", "T级算力"]
        },
        {
            date: "2016年6月",
            title: "经典矿机S9诞生",
            description: "蚂蚁S9发布，算力13.5 TH/s，16nm芯片，成为最长寿经典矿机，服役超过4年。",
            hashrate: "网络算力约1.5 EH/s",
            difficulty: "超过2000亿",
            tags: ["蚂蚁矿机", "S9", "经典", "长寿"]
        },
        {
            date: "2018年",
            title: "S9主导市场",
            description: "蚂蚁S9达到巅峰期，占据全网算力50%以上，成为矿工标配设备。",
            hashrate: "网络算力突破40 EH/s",
            difficulty: "超过5万亿",
            tags: ["S9", "市场主导", "巅峰"]
        },
        {
            date: "2019年4月",
            title: "S17系列发布",
            description: "蚂蚁S17/S17 Pro发布，算力53-56 TH/s，7nm芯片工艺，能效比降至40 J/TH。",
            hashrate: "网络算力约50 EH/s",
            difficulty: "超过6万亿",
            tags: ["蚂蚁矿机", "S17", "7nm芯片"]
        },
        {
            date: "2019年10月",
            title: "神马M20S竞争",
            description: "神马矿机M20S发布，算力68 TH/s，与蚂蚁S17形成市场竞争格局。",
            hashrate: "网络算力约100 EH/s",
            difficulty: "超过13万亿",
            tags: ["神马矿机", "M20S", "市场竞争"]
        },
        {
            date: "2020年9月",
            title: "百T时代：S19系列",
            description: "蚂蚁S19/S19 Pro发布，算力95-110 TH/s，进入百T算力时代，能效比提升至29.5 J/TH。",
            hashrate: "网络算力约120 EH/s",
            difficulty: "超过19万亿",
            tags: ["蚂蚁矿机", "S19", "百T算力", "里程碑"]
        },
        {
            date: "2021年5月",
            title: "中国矿工大迁徙",
            description: "中国禁止挖矿，全网算力下降50%以上，矿工迁往美国、哈萨克斯坦等地。",
            hashrate: "从180 EH/s降至84 EH/s",
            difficulty: "从25T降至14T（-28%）",
            tags: ["政策", "算力迁移", "难度暴跌", "历史事件"]
        },
        {
            date: "2021年10月",
            title: "算力恢复新高",
            description: "矿工迁移完成，算力恢复并创新高，难度突破20T，展示网络强大的适应能力。",
            hashrate: "超过180 EH/s",
            difficulty: "超过20T",
            tags: ["算力恢复", "难度新高", "韧性"]
        },
        {
            date: "2022年1月",
            title: "难度突破25T",
            description: "挖矿难度首次突破25T（25万亿），网络算力达到200 EH/s以上。",
            hashrate: "约200 EH/s",
            difficulty: "25T+",
            tags: ["难度里程碑", "25T", "算力增长"]
        },
        {
            date: "2023年",
            title: "S19 XP和M50系列",
            description: "新一代矿机发布，蚂蚁S19 XP达140 TH/s，神马M50S达130 TH/s，能效比降至21 J/TH。",
            hashrate: "网络算力约300 EH/s",
            difficulty: "约40T",
            tags: ["新一代矿机", "S19 XP", "M50"]
        },
        {
            date: "2024年3月",
            title: "难度突破80T",
            description: "减半前夕，挖矿难度突破80T，网络算力达到600 EH/s以上，创历史新高。",
            hashrate: "约600 EH/s",
            difficulty: "80T+",
            tags: ["难度新高", "减半前夕", "80T"]
        },
        {
            date: "2024年4月",
            title: "第四次减半",
            description: "区块奖励从6.25 BTC减半至3.125 BTC，部分老旧矿机因利润下降而关机。",
            hashrate: "约600 EH/s",
            difficulty: "约83T",
            tags: ["减半", "奖励减少", "矿机淘汰"]
        },
        {
            date: "2024年7月",
            title: "难度突破90T",
            description: "挖矿难度突破90T（90万亿），网络算力超过700 EH/s，创下历史最高纪录。",
            hashrate: "700+ EH/s",
            difficulty: "90T+",
            tags: ["历史最高", "90T", "算力顶峰"]
        },
        {
            date: "2025年",
            title: "3nm芯片矿机",
            description: "预计新一代3nm芯片矿机推出，算力和能效比将再次大幅提升，挖矿竞争更加激烈。",
            hashrate: "预计800+ EH/s",
            difficulty: "预计100T+",
            tags: ["3nm芯片", "未来", "技术前沿"]
        }
    ],

    // 政策监管历程
    policies: [
        {
            date: "2013年3月",
            country: "美国",
            title: "FinCEN监管指引",
            description: "美国金融犯罪执法网络(FinCEN)发布虚拟货币监管指引，将比特币交易所定义为货币服务业务(MSB)，需要注册并遵守反洗钱法规。",
            impact: "确立监管框架",
            tags: ["美国", "FinCEN", "MSB", "反洗钱"]
        },
        {
            date: "2013年12月",
            country: "中国",
            title: "防范比特币风险通知",
            description: "中国人民银行等五部委发布《关于防范比特币风险的通知》，禁止金融机构开展比特币业务，但允许个人交易。",
            impact: "价格大幅下跌",
            tags: ["中国", "央行", "首次监管"]
        },
        {
            date: "2014年3月",
            country: "美国",
            title: "IRS税务指引",
            description: "美国国税局(IRS)发布指引，将比特币等虚拟货币视为财产而非货币，需缴纳资本利得税。",
            impact: "税务合规要求",
            tags: ["美国", "IRS", "税务", "资本利得"]
        },
        {
            date: "2015年",
            country: "欧盟",
            title: "欧洲法院裁决",
            description: "欧洲法院裁定比特币交易免征增值税(VAT)，将其视为货币而非商品。",
            impact: "税务优惠",
            tags: ["欧盟", "增值税", "法院裁决"]
        },
        {
            date: "2017年9月",
            country: "中国",
            title: "全面禁止ICO和交易所",
            description: "中国央行等七部委发布公告，全面禁止ICO，并要求关闭境内所有比特币交易所，监管全面收紧。",
            impact: "交易所关停，价格暴跌",
            tags: ["中国", "ICO禁令", "交易所关闭", "严厉监管"]
        },
        {
            date: "2017年12月",
            country: "美国",
            title: "比特币期货获批",
            description: "CFTC批准CME和CBOE推出比特币期货产品，标志着比特币进入传统金融衍生品市场。",
            impact: "主流金融认可",
            tags: ["美国", "CFTC", "期货", "合规化"]
        },
        {
            date: "2019年6月",
            country: "全球",
            title: "Libra引发监管关注",
            description: "Facebook发布Libra项目，引发G7、美国国会、欧盟等全球监管机构高度关注和质疑。",
            impact: "全球监管升级",
            tags: ["全球", "Libra", "科技巨头", "监管压力"]
        },
        {
            date: "2021年5月",
            country: "中国",
            title: "全面打击挖矿和交易",
            description: "国务院金融委明确提出打击比特币挖矿和交易行为，随后各省份关停矿场，内蒙古、四川、新疆等地全面清退矿场。",
            impact: "全网算力暴跌50%",
            tags: ["中国", "挖矿禁令", "算力迁移", "严厉打击"]
        },
        {
            date: "2021年6月",
            country: "萨尔瓦多",
            title: "比特币成为法定货币",
            description: "萨尔瓦多通过法案，成为全球首个将比特币作为法定货币的国家，于9月7日正式实施。",
            impact: "历史性突破",
            tags: ["萨尔瓦多", "法定货币", "国家采用", "里程碑"]
        },
        {
            date: "2021年9月",
            country: "中国",
            title: "全面禁止加密货币交易",
            description: "中国央行等十部门发布通知，全面禁止加密货币交易，境外交易所向中国居民提供服务也属违法。",
            impact: "监管全面封堵",
            tags: ["中国", "全面禁止", "境外交易所"]
        },
        {
            date: "2022年",
            country: "全球",
            title: "各国加强监管",
            description: "美国、欧盟、日本、韩国等多国加强加密货币监管，推动MiCA（欧盟）等监管法规出台。",
            impact: "全球合规化",
            tags: ["全球", "监管加强", "合规化"]
        },
        {
            date: "2023年",
            country: "美国",
            title: "SEC加强执法",
            description: "SEC对Coinbase、Binance等交易所提起诉讼，加强对未注册证券发行的执法力度。",
            impact: "执法升级",
            tags: ["美国", "SEC", "执法", "证券监管"]
        },
        {
            date: "2024年1月",
            country: "美国",
            title: "比特币现货ETF获批",
            description: "SEC批准11支比特币现货ETF，包括贝莱德、富达等机构产品，标志着监管态度转变。",
            impact: "主流化里程碑",
            tags: ["美国", "SEC", "ETF", "历史性批准"]
        },
        {
            date: "2024年",
            country: "欧盟",
            title: "MiCA法规生效",
            description: "欧盟《加密资产市场监管法规》(MiCA)正式生效，建立全面的加密货币监管框架。",
            impact: "统一监管标准",
            tags: ["欧盟", "MiCA", "监管框架"]
        },
        {
            date: "2025年",
            country: "美国",
            title: "比特币战略储备计划",
            description: "特朗普政府提出建立国家比特币战略储备，美国加密政策从监管转向战略拥抱。",
            impact: "政策重大转向",
            tags: ["美国", "战略储备", "国家层面", "政策友好"]
        }
    ],

    // 安全漏洞与事故
    security: [
        {
            date: "2010年8月15日",
            title: "184亿比特币漏洞",
            type: "协议漏洞",
            description: "比特币区块高度74,638出现严重漏洞，有人利用整数溢出漏洞创造了1,844亿个比特币。中本聪和开发者在数小时内发布补丁并硬分叉修复，展示了快速响应能力。",
            severity: "极高",
            impact: "紧急硬分叉修复",
            tags: ["协议漏洞", "整数溢出", "硬分叉", "历史最严重"]
        },
        {
            date: "2013年3月11日",
            title: "0.7-0.8版本硬分叉",
            type: "软件漏洞",
            description: "比特币网络因0.7和0.8版本数据库不兼容导致意外硬分叉，社区迅速协调回滚到0.7版本，避免了更大损失。",
            severity: "高",
            impact: "临时分叉，快速修复",
            tags: ["版本冲突", "意外分叉", "BDB限制"]
        },
        {
            date: "2014年2月",
            title: "Mt. Gox被盗85万BTC",
            type: "交易所安全",
            description: "当时最大的比特币交易所Mt. Gox被盗85万个比特币（占当时总量的7%），损失约4.5亿美元，最终宣布破产。",
            severity: "极高",
            impact: "行业重大打击，价格暴跌",
            tags: ["交易所", "被盗", "破产", "历史性事件"]
        },
        {
            date: "2016年8月",
            title: "Bitfinex被盗12万BTC",
            type: "交易所安全",
            description: "香港交易所Bitfinex被盗约12万个比特币，价值约7200万美元，比特币价格下跌20%。",
            severity: "高",
            impact: "价格下跌，信任危机",
            tags: ["交易所", "被盗", "安全事故"]
        },
        {
            date: "2018年9月",
            title: "CVE-2018-17144通胀漏洞",
            type: "协议漏洞",
            description: "Bitcoin Core发现严重漏洞，可能导致比特币通胀和双花攻击。开发者紧急发布修复版本，避免了潜在灾难。",
            severity: "极高",
            impact: "紧急修复，未被利用",
            tags: ["协议漏洞", "通胀风险", "双花", "紧急修复"]
        },
        {
            date: "2019年5月",
            title: "币安被盗7000 BTC",
            type: "交易所安全",
            description: "全球最大交易所币安遭受黑客攻击，损失7000个比特币（约4000万美元），币安使用SAFU基金全额赔偿用户。",
            severity: "中高",
            impact: "快速赔偿，信任维持",
            tags: ["交易所", "黑客攻击", "快速响应"]
        },
        {
            date: "2020年",
            title: "交易延展性问题",
            type: "协议问题",
            description: "交易延展性问题长期存在，SegWit升级成功解决该问题，提高了网络安全性。",
            severity: "中",
            impact: "SegWit修复",
            tags: ["延展性", "SegWit", "技术改进"]
        }
    ]
};

// 导出数据供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bitcoinData;
}
