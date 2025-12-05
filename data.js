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
            date: "2012年11月28日",
            title: "第一次减半",
            description: "比特币迎来第一次区块奖励减半，从50个BTC减少到25个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
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
            date: "2016年7月9日",
            title: "第二次减半",
            description: "比特币迎来第二次区块奖励减半，从25个BTC减少到12.5个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
        },
        {
            date: "2017年8月1日",
            title: "比特币现金分叉",
            description: "比特币硬分叉产生比特币现金（BCH），这是比特币历史上重要的分叉事件。",
            tags: ["分叉", "BCH", "硬分叉"]
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
            date: "2019年",
            title: "Facebook发布Libra",
            description: "Facebook发布加密货币项目Libra（后更名Diem），引发监管关注。",
            tags: ["Libra", "Facebook", "监管"]
        },
        {
            date: "2020年5月11日",
            title: "第三次减半",
            description: "比特币迎来第三次区块奖励减半，从12.5个BTC减少到6.25个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
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
            date: "2024年1月",
            title: "比特币现货ETF获批",
            description: "美国SEC批准多支比特币现货ETF，标志着比特币正式进入主流投资领域。",
            tags: ["ETF", "SEC批准", "主流投资"]
        },
        {
            date: "2024年4月",
            title: "第四次减半",
            description: "比特币迎来第四次区块奖励减半，从6.25个BTC减少到3.125个BTC。",
            tags: ["减半", "区块奖励", "供应量"]
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
            icon: "🔧",
            title: "第一次减半",
            date: "2012年11月",
            description: "区块奖励从50个BTC减少到25个BTC，验证了预设的货币政策。"
        },
        {
            icon: "🔗",
            title: "SegWit提案",
            date: "2015年12月",
            description: " segregated witness（隔离见证）提案提出，旨在解决交易延展性问题。"
        },
        {
            icon: "🔧",
            title: "第二次减半",
            date: "2016年7月",
            description: "区块奖励从25个BTC减少到12.5个BTC，进一步控制供应量增长。"
        },
        {
            icon: "⚡",
            title: "闪电网络",
            date: "2018年3月",
            description: "闪电网络主网上线，提供更快速、低成本的比特币支付解决方案。"
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
            date: "2013年10月",
            title: "丝绸之路被关闭",
            description: "美国FBI关闭了使用比特币进行交易的暗网市场丝绸之路，比特币与非法活动的关联受到质疑。",
            tags: ["丝绸之路", "监管", "非法活动"]
        },
        {
            date: "2014年2月",
            title: "Mt. Gox破产事件",
            description: "当时最大的比特币交易所Mt. Gox因85万比特币被盗而宣布破产，对整个行业造成重大打击。",
            tags: ["Mt. Gox", "破产", "安全事故"]
        },
        {
            date: "2017年8月",
            title: "比特币现金分叉",
            description: "比特币硬分叉产生比特币现金（BCH），社区就区块大小扩容方案产生分歧。",
            tags: ["分叉", "BCH", "社区分歧"]
        },
        {
            date: "2019年6月",
            title: "Facebook发布Libra",
            description: "Facebook宣布推出加密货币项目Libra，引发全球监管机构对加密货币的高度关注。",
            tags: ["Facebook", "Libra", "监管关注"]
        },
        {
            date: "2020年5月",
            title: "第三次减半事件",
            description: "比特币第三次减半，区块奖励减半至6.25个BTC，市场预期推动价格上涨。",
            tags: ["减半", "供应量", "市场预期"]
        },
        {
            date: "2021年2月",
            title: "特斯拉投资比特币",
            description: "特斯拉宣布购买15亿美元比特币，并接受比特币作为支付方式，推动主流企业采用。",
            tags: ["特斯拉", "机构投资", "企业采用"]
        },
        {
            date: "2021年5月",
            title: "中国打击比特币挖矿",
            description: "中国政府加强对比特币挖矿和交易的监管，导致大量矿工迁往海外。",
            tags: ["中国监管", "挖矿禁令", "政策变化"]
        },
        {
            date: "2021年6月",
            title: "萨尔瓦多采用比特币",
            description: "萨尔瓦多成为世界上首个将比特币作为法定货币的国家，具有历史意义。",
            tags: ["萨尔瓦多", "法定货币", "国家采用"]
        },
        {
            date: "2022年11月",
            title: "FTX交易所崩盘",
            description: "全球第二大加密货币交易所FTX因流动性危机而破产，引发市场信任危机。",
            tags: ["FTX", "破产", "信任危机"]
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
            description: "美国SEC批准多支比特币现货ETF，标志着比特币正式进入主流投资领域。",
            tags: ["ETF获批", "SEC", "主流化"]
        }
    ]
};

// 导出数据供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bitcoinData;
}
