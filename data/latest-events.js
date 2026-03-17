/**
 * 伊朗-以色列冲突最新事件数据
 * 更新时间：2026年3月17日 08:37
 * 
 * 使用说明：
 * 1. 此文件用于本地预览（避免 fetch CORS 问题）
 * 2. 更新时修改此文件内容即可
 * 3. 时间格式：更新时运行 get_time2.py 获取当前北京时间
 * 
 * 数据来源日期说明：
 * - 伊朗死亡：联合国/伊朗卫生部（截至3月11日）
 * - 以色列死亡：联合国/以色列当局（截至3月11日）
 * - 美军死亡：华尔街日报/央视（截至3月14日）
 * - 流离失所：联合国难民署（截至3月12日）
 * - 反击波次：央视新闻（截至3月15日）
 * - 黎巴嫩死亡：黎巴嫩卫生部（截至3月15日）
 * - 儿童死亡：联合国/各方报告（截至3月15日）
 */

var LATEST_EVENTS_DATA = {
  "lastUpdate": "2026年3月17日 08:37",
  "stats": {
    "iranDeaths": "1332+",
    "israelDeaths": "15+",
    "usDeaths": "13",
    "displaced": "410万+",
    "attackWaves": "54+",
    "lebanonDeaths": "850",
    "childrenDeaths": "202"
  },
  "latestDate": {
    "id": "d17",
    "date": "3月17日",
    "day": 18,
    "events": [
      {
        "time": "上午",
        "type": "normal",
        "tags": ["军事"],
        "isNew": true,
        "title": "美军持续"史诗狂怒"行动，累计打击1.5万个目标",
        "content": "美军持续进行"史诗狂怒"军事行动，宣称已累计打击超过1.5万个伊朗目标。在3月13日对哈尔克岛的空袭中，打击了90多个军事目标，包括导弹库和水雷阵地。美军的打击刻意避开了伊朗的石油核心设施，伊朗原油出口未受实质性影响。",
        "sources": [
          {"name": "十分导读/多方来源", "url": "https://shifendaodu.com/article/11883", "official": false}
        ]
      },
      {
        "time": "上午",
        "type": "normal",
        "tags": ["外交"],
        "title": "美国争取地区盟友支持遇挫，仅巴林明确支持",
        "content": "美国在争取地区盟友支持方面遇挫，除巴林外，未能获得沙特、阿联酋等海合会核心国家在开放领空或领土方面的承诺。美军宣称目标是"重开霍尔木兹海峡"，但实际未能完全控制海峡局势。",
        "sources": [
          {"name": "十分导读/多方来源", "url": "https://shifendaodu.com/article/11883", "official": false}
        ]
      },
      {
        "time": "全天",
        "type": "normal",
        "tags": ["经济"],
        "title": "霍尔木兹海峡仍是博弈核心，能源供应风险持续",
        "content": "霍尔木兹海峡是当前博弈的核心。美军宣称击沉了100多艘伊朗舰艇（含1艘潜艇），但海峡局势依然紧张，未被完全掌控。全球能源供应风险持续升高，伊朗采用"以弱锁喉"战略，通过控制海峡对抗美国。",
        "sources": [
          {"name": "十分导读/多方来源", "url": "https://shifendaodu.com/article/11883", "official": false}
        ]
      }
    ]
  },
  "previousDate": {
    "id": "d16",
    "date": "3月16日",
    "day": 17,
    "events": [
      {
        "time": "下午",
        "type": "major",
        "tags": ["军事"],
        "isNew": false,
        "title": "伊朗首次使用"泥石"弹道导弹，称摧毁美军4个萨德系统",
        "content": "伊朗伊斯兰革命卫队发起"真实承诺-4"第54轮攻势，首次在本轮冲突中使用"泥石"固体燃料弹道导弹，打击以色列空中作战指挥中心、核心军事设施。伊方称已摧毁美军4个萨德反导系统，并表示多数导弹库存尚未动用，目前发射的多为10年前生产的旧型号。",
        "sources": [
          {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true},
          {"name": "央视新闻", "url": "https://news.sina.com.cn/w/2026-03-16/doc-inhrcpie9916590.shtml", "official": true}
        ]
      },
      {
        "time": "下午",
        "type": "normal",
        "tags": ["外交"],
        "title": "伊朗外长：战争必须以"不再重演"的方式结束",
        "content": "伊朗外长阿拉格齐表示，美国和以色列针对伊朗的战争必须以"不再重演"的方式结束。他强调伊朗从未请求停火或谈判，将继续自卫"无论多久"，直至美国认识到这是一场"无法获胜的非法战争"。伊朗总统与法国总统通话，指责中东不稳定源于美以行为。",
        "sources": [
          {"name": "中新网", "url": "https://www.chinanews.com/gj/2026/03-16/10587840.shtml", "official": true},
          {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true}
        ]
      },
      {
        "time": "全天",
        "type": "normal",
        "tags": ["军事"],
        "title": "以军打击伊朗200多个目标，对黎巴嫩真主党展开地面行动",
        "content": "以色列国防军称过去24小时内打击伊朗西部、中部200多个目标，包括指挥中心、防空系统及武器设施。以军第91师对黎巴嫩南部真主党据点展开有限且有针对性的地面行动。以军发言人称军事行动将至少再持续三周。",
        "sources": [
          {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true}
        ]
      },
      {
        "time": "全天",
        "type": "major",
        "tags": ["人道"],
        "title": "冲突已致202名儿童死亡，黎巴嫩826人死亡",
        "content": "联合国及各方报告显示，美以对伊朗的军事打击已导致202名儿童死亡、223名妇女死亡（含3名孕妇）。黎巴嫩卫生部声明称，以色列对黎巴嫩的持续袭击已造成826人死亡、2009人受伤。冲突对平民造成严重伤害，人道主义危机持续加剧。",
        "sources": [
          {"name": "河南日报/新华社", "url": "https://newpaper.dahe.cn/hnrb/html/2026-03/16/content_16_1784498.htm", "official": true}
        ]
      },
      {
        "time": "全天",
        "type": "normal",
        "tags": ["军事"],
        "title": "阿联酋称已拦截298枚弹道导弹、1606架无人机",
        "content": "阿联酋防空系统称已拦截来自伊朗的298枚弹道导弹、15枚巡航导弹和1606架无人机。近期冲突造成阿联酋6人死亡（包括多国公民），142人受伤。迪拜国际机场一度停飞后部分航班恢复。",
        "sources": [
          {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true}
        ]
      },
      {
        "time": "凌晨",
        "type": "normal",
        "tags": ["经济"],
        "title": "霍尔木兹海峡14日无船只通航，德国澳大利亚拒绝参与护航",
        "content": "英国媒体报道，3月14日霍尔木兹海峡无船只通航，为战事爆发以来首次。特朗普试图组建"霍尔木兹联盟"并威胁北约，但德国、澳大利亚明确表示不会派遣军舰参与护航行动。全球能源供应风险持续升高。",
        "sources": [
          {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true}
        ]
      },
      {
        "time": "凌晨",
        "type": "normal",
        "tags": ["政治"],
        "title": "美国会议员批评政府"严重误判"伊朗能力",
        "content": "美国议员批评政府"严重误判"伊朗能力，称已失去对战争的控制。以色列外长萨尔表示以美决心"继续与伊朗作战，直到目标实现"。以军否认防空弹药不足，称已做好"长期战争"准备。",
        "sources": [
          {"name": "新浪新闻/央视", "url": "https://news.sina.com.cn/w/2026-03-16/doc-inhrcpie9916590.shtml", "official": false}
        ]
      }
    ]
  }
};
