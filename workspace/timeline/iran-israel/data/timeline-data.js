/**
 * 伊朗-以色列冲突时间轴 - 完整事件数据
 * 架构：纯数据驱动模式 v2.0
 */

var TIMELINE_DATA = {
    meta: {
        title: "伊朗-以色列冲突事件时间轴",
        startDate: "2026-02-28",
        lastUpdate: "2026年3月20日 16:00",
        version: "2.2.0"
    },
    
    stats: {
        totalDays: 21,
        totalEvents: 122,
        attackWaves: 66,
        iranDeaths: 1425,
        israelDeaths: 22,
        usDeaths: 19,
        usInjured: 298,
        displaced: 4420000,
        lebanonDeaths: 917,
        childDeaths: 227
    },
    
    dates: [
    {
        "id": "d20",
        "date": "3月20日",
        "day": 21,
        "events": [
            {
                "time": "上午",
                "type": "normal",
                "tags": ["政治"],
                "isNew": true,
                "title": "以色列宣布暂停空袭伊朗能源设施",
                "content": "以色列总理内塔尼亚胡宣布遵守美国总统特朗普要求，暂停后续对伊朗能源设施的空袭。特朗普此前表示对以色列袭击伊朗油气设施事先不知情，要求以方停止此类行动。",
                "sources": [
                    {"name": "齐鲁晚报", "url": "https://m.sohu.com/a/998780025_121218495/", "official": true}
                ]
            },
            {
                "time": "凌晨",
                "type": "major",
                "tags": ["军事"],
                "isNew": true,
                "title": "伊朗发动第66轮\"真实承诺-4\"打击，多国美军基地遇袭",
                "content": "伊朗伊斯兰革命卫队发动\"真实承诺-4\"第66轮军事行动，使用超重型多弹头导弹及无人机袭击以色列中部、南部目标，以及沙特、巴林、阿联酋境内的美军基地，首次使用升级版\"卡德尔\"导弹。",
                "sources": [
                    {"name": "中华网", "url": "https://news.china.com/socialgd/10000169/20260320/49338308.html", "official": true}
                ]
            }
        ]
    },
    {
        "id": "d19",
        "date": "3月19日",
        "day": 20,
        "events": [
            {
                "time": "全天",
                "type": "major",
                "tags": ["军事", "人道"],
                "isNew": true,
                "title": "伊朗发动多轮打击，以色列177人受伤，美第五舰队被命中",
                "content": "伊朗当天发动第63、64、65轮打击，使用新一代无人机和导弹击中以色列海法、阿什杜德炼油厂，本-古里安机场受损，大量航班取消，当地民众每小时需躲避3次空袭，共177人送医。伊朗同时宣布击中美国第五舰队，导致美军燃油补给瘫痪。",
                "sources": [
                    {"name": "每日经济新闻", "url": "http://m.163.com/dy/article/KOET1U8K05567I2C.html", "official": true}
                ]
            },
            {
                "time": "下午",
                "type": "major",
                "tags": ["政治"],
                "isNew": true,
                "title": "伊朗宣布冲突进入\"新阶段\"，开始打击能源设施",
                "content": "伊朗伊斯兰革命卫队发表声明称，由于美以袭击伊朗能源基础设施，伊朗同美以的战争已进入\"新阶段\"，将持续攻击美国及盟友的能源基础设施作为报复，警告若再发生此类事件将彻底摧毁相关设施。",
                "sources": [
                    {"name": "新快报", "url": "https://tech.sina.cn/2026-03-20/detail-inhrqccn4435837.d.html", "official": true}
                ]
            }
        ]
    },
    {
        "id": "d18",
        "date": "3月18日",
        "day": 19,
        "events": [
            {
                "time": "夜间",
                "type": "major",
                "tags": ["军事"],
                "isNew": true,
                "title": "以色列空袭伊朗南部天然气设施，引发能源战升级",
                "content": "以色列空军袭击伊朗南部布什尔市主要天然气设施，伊朗随后宣布对中东地区美国相关石油设施展开报复打击，冲突首次升级到能源基础设施领域。",
                "sources": [
                    {"name": "新快报", "url": "https://tech.sina.cn/2026-03-20/detail-inhrqccn4435837.d.html", "official": true}
                ]
            },
            {
                "time": "全天",
                "type": "normal",
                "tags": ["政治"],
                "isNew": true,
                "title": "美以出现战争目标分歧，美国考虑增派军队",
                "content": "美国与以色列在对伊战争终局目标上出现分歧，美国面临国内反战压力，以色列则要求彻底削弱伊朗军事能力。美国五角大楼提交2000亿美元战争预算申请，考虑向中东增派数千海军陆战队，评估夺取伊朗哈尔克岛的可能性。",
                "sources": [
                    {"name": "新快报", "url": "https://tech.sina.cn/2026-03-20/detail-inhrqccn4435837.d.html", "official": true}
                ]
            }
        ]
    },
    {
        "id": "d17",
        "date": "3月17日",
        "day": 18,
        "events": [
            {
                "time": "下午",
                "type": "major",
                "tags": ["军事"],
                "isNew": true,
                "title": "伊朗发动新一轮大规模导弹袭击",
                "content": "伊朗武装部队向以色列发动新一轮大规模导弹袭击，打击以方军事目标。以色列评估战争可能还会持续三周到一个月，远超最初的预期。",
                "sources": [
                    {"name": "财联社", "url": "https://www.cls.cn/detail/2315356", "official": true},
                    {"name": "CCTV国际时讯", "url": "http://m.163.com/dy/article/KO8BO0B205198CJN.html", "official": true}
                ]
            },
            {
                "time": "晚间",
                "type": "normal",
                "tags": ["政治"],
                "isNew": true,
                "title": "伊朗抓捕97名美以关联间谍人员",
                "content": "伊朗情报部宣布在全国范围内开展反间谍行动，抓捕97名与美国和以色列有关联的人员，缴获大量武器弹药，防止美以策划内部骚乱。",
                "sources": [
                    {"name": "千龙网", "url": "http://m.163.com/dy/article/KOE316OV05568W0A.html", "official": true}
                ]
            }
        ]
    },
    {
        "id": "d17",
        "date": "3月17日",
        "day": 18,
        "events": [
            {
                "time": "凌晨",
                "type": "major",
                "tags": ["军事"],
                "isNew": true,
                "title": "伊朗发动第57波\"真实承诺-4\"打击，使用多种导弹突防",
                "content": "伊朗伊斯兰革命卫队发表声明称，已发动\"真实承诺-4\"行动第57波打击，本轮打击针对以色列心脏地带多个目标展开，包括以方指挥控制与通信设施、防空导弹设施等，并打击美军卡塔尔乌代德空军基地。使用\"伊马德\"\"卡德尔\"\"海巴尔\"等多种导弹及无人机。",
                "sources": [
                    {"name": "新华网", "url": "https://app.xinhuanet.com/news/article.html?articleId=877b19c3e4352ed191ad100a71039713", "official": true},
                    {"name": "腾讯新闻/参考消息", "url": "https://news.qq.com/rain/a/20260317A02YE700", "official": true}
                ]
            },
            {
                "time": "上午",
                "type": "normal",
                "tags": ["军事"],
                "isNew": false,
                "title": "美军持续\"史诗狂怒\"行动，累计打击1.5万个目标",
                "content": "美军持续进行\"史诗狂怒\"军事行动，宣称已累计打击超过1.5万个伊朗目标。在3月13日对哈尔克岛的空袭中，打击了90多个军事目标，包括导弹库和水雷阵地。美军的打击刻意避开了伊朗的石油核心设施，伊朗原油出口未受实质性影响。",
                "sources": [
                    {"name": "十分导读/多方来源", "url": "https://shifendaodu.com/article/11883", "official": false}
                ]
            },
            {
                "time": "上午",
                "type": "normal",
                "tags": ["外交"],
                "isNew": false,
                "title": "伊朗总统呼吁停止使用美国军事基地破坏地区关系",
                "content": "伊朗总统佩泽希齐扬在社交媒体发文呼吁，停止使用美国在西亚地区的军事基地破坏伊朗与邻国的关系。伊朗政府发言人穆哈杰拉尼说，美国和以色列的袭击已造成伊朗大量未成年人、女性、医务人员等平民遇难，超过6.1万个民用设施遭袭击或受损。",
                "sources": [
                    {"name": "新华网", "url": "https://app.xinhuanet.com/news/article.html?articleId=877b19c3e4352ed191ad100a71039713", "official": true}
                ]
            },
            {
                "time": "全天",
                "type": "normal",
                "tags": ["人道"],
                "isNew": false,
                "title": "伊朗红新月会：逾4.6万个民用设施遭袭击",
                "content": "伊朗红新月会国际事务副主席阿利什万迪表示，自2月28日美以发动军事打击以来，已有46370处民用设施遭到袭击，其中29146处是住宅，近1万处位于首都德黑兰。17个红新月会中心遭到破坏，1架救援直升机被摧毁，10名工作人员受伤，1人死亡。",
                "sources": [
                    {"name": "腾讯新闻/新华网", "url": "https://news.qq.com/rain/a/20260317A07UEU00", "official": true}
                ]
            }
        ]
    },
    {
        "id": "d16",
        "date": "3月16日",
        "day": 17,
        "events": [
            {
                "time": "下午",
                "type": "major",
                "tags": ["军事"],
                "isNew": false,
                "title": "伊朗首次使用\"泥石\"弹道导弹，称摧毁美军4个萨德系统",
                "content": "伊朗伊斯兰革命卫队发起\"真实承诺-4\"第54轮攻势，首次在本轮冲突中使用\"泥石\"固体燃料弹道导弹，打击以色列空中作战指挥中心、核心军事设施。伊方称已摧毁美军4个萨德反导系统，并表示多数导弹库存尚未动用，目前发射的多为10年前生产的旧型号。",
                "sources": [
                    {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true},
                    {"name": "央视新闻", "url": "https://news.sina.com.cn/w/2026-03-16/doc-inhrcpie9916590.shtml", "official": true}
                ]
            },
            {
                "time": "下午",
                "type": "normal",
                "tags": ["外交"],
                "isNew": false,
                "title": "伊朗外长：战争必须以\"不再重演\"的方式结束",
                "content": "伊朗外长阿拉格齐表示，美国和以色列针对伊朗的战争必须以\"不再重演\"的方式结束。他强调伊朗从未请求停火或谈判，将继续自卫\"无论多久\"，直至美国认识到这是一场\"无法获胜的非法战争\"。伊朗总统与法国总统通话，指责中东不稳定源于美以行为。",
                "sources": [
                    {"name": "中新网", "url": "https://www.chinanews.com/gj/2026/03-16/10587840.shtml", "official": true},
                    {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true}
                ]
            },
            {
                "time": "全天",
                "type": "normal",
                "tags": ["军事"],
                "isNew": false,
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
                "isNew": false,
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
                "isNew": false,
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
                "isNew": false,
                "title": "霍尔木兹海峡14日无船只通航，德国澳大利亚拒绝参与护航",
                "content": "英国媒体报道，3月14日霍尔木兹海峡无船只通航，为战事爆发以来首次。特朗普试图组建\"霍尔木兹联盟\"并威胁北约，但德国、澳大利亚明确表示不会派遣军舰参与护航行动。全球能源供应风险持续升高。",
                "sources": [
                    {"name": "新华网", "url": "https://www.xinhuanet.com/world/20260316/a0fe6ca2bedc4d17aeaba0d10dff2a92/c.html", "official": true}
                ]
            },
            {
                "time": "凌晨",
                "type": "normal",
                "tags": ["政治"],
                "isNew": false,
                "title": "美国会议员批评政府\"严重误判\"伊朗能力",
                "content": "美国议员批评政府\"严重误判\"伊朗能力，称已失去对战争的控制。以色列外长萨尔表示以美决心\"继续与伊朗作战，直到目标实现\"。以军否认防空弹药不足，称已做好\"长期战争\"准备。",
                "sources": [
                    {"name": "新浪新闻/央视", "url": "https://news.sina.com.cn/w/2026-03-16/doc-inhrcpie9916590.shtml", "official": false}
                ]
            }
        ]
    },
    {
        "id": "d15",
        "date": "3月15日",
        "day": 16,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "新华社/新浪",
                        "url": "https://finance.sina.cn/2026-03-15/detail-inhqzkiw9842293.d.html",
                        "official": true
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/world/20260315/a8acbf88da1a48b499c25af8f65879a9/c.html",
                        "official": true
                    }
                ],
                "time": "早上（最新）",
                "title": "伊朗发起第51波攻势，对沙特美军基地发动导弹袭击",
                "content": "伊朗伊斯兰革命卫队于14日深夜发起\"真实承诺－4\"行动第51波攻势，动用液体和固体燃料导弹打击位于沙特阿拉伯海尔季市的美军苏丹王子空军基地（PSAB）。沙特国防部称已拦截并摧毁6枚弹道导弹。截至3月15日，伊朗已累计发动51波反击行动，目标覆盖以色列全境及中东多国美军基地。"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "政治"
                ],
                "sources": [
                    {
                        "name": "新华国际头条",
                        "url": "https://finance.sina.cn/2026-03-15/detail-inhqzkiw9842293.d.html",
                        "official": false
                    }
                ],
                "time": "早上",
                "title": "特朗普宣布多国联合护航霍尔木兹海峡，声称伊朗军事能力\"全面摧毁\"",
                "content": "美国总统特朗普14日在社交媒体发文称，将联合多国（尤其是受伊朗封锁霍尔木兹海峡影响的国家）共同派遣军舰护航，以\"尽快开放海峡\"。他声称美军已\"摧毁伊朗100%的军事能力\"，但同时承认伊朗仍可能通过无人机、水雷或导弹构成威胁，并警告将猛烈轰炸伊朗海岸线并击沉试图阻拦的舰船。"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/world/20260315/a8acbf88da1a48b499c25af8f65879a9/c.html",
                        "official": false
                    }
                ],
                "time": "昨夜",
                "title": "伊朗：逾4.3万处民用设施受损，逾3.6万处为住宅",
                "content": "伊朗方面通报，美以15天持续空袭已造成约4.3万处民用设施受损，其中住宅超过3.6万处。伊朗教育部称，自2月28日冲突爆发以来，已有210名学生和教师遇难，160名师生受伤；文化遗产部门表示至少56处历史文化遗址遭到严重破坏。黎以边境真主党与以军在希亚姆镇爆发直接交火，以军空袭一处黎巴嫩医疗中心致12名医务人员死亡。"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "21经济网/新华社",
                        "url": "https://www.21jingji.com/article/20260314/herald/40960a2f4df41a3dc44b667102578554.html",
                        "official": false
                    }
                ],
                "time": "凌晨",
                "title": "伊朗提出停战两条件：收回所有损失、美国撤出波斯湾",
                "content": "伊朗伊斯兰革命卫队高级指挥官穆赫辛·礼萨伊少将明确表示，伊朗考虑结束战争的两个条件为：一、伊朗收回所有损失；二、美国完全撤离波斯湾。与此同时，以色列国防部长卡茨声称冲突已进入\"决定性阶段\"，将持续到\"必要之时\"。美国总统特朗普则在社交媒体表示，不接受伊朗提出的任何协议。以黎双方据报可能在未来几天于塞浦路斯或巴黎举行直接停火谈判。"
            }
        ]
    },
    {
        "id": "d14",
        "date": "3月14日",
        "day": 15,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "新华社",
                        "url": "https://finance.sina.cn/2026-03-14/detail-inhqxfkq3553175.d.html",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260314A01YX800",
                        "official": false
                    }
                ],
                "time": "上午8:00（最新）",
                "title": "美军对哈尔克岛发动\"猛烈空袭\"，摧毁伊朗石油出口枢纽"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260314A01YX800",
                        "official": false
                    },
                    {
                        "name": "新浪新闻",
                        "url": "https://news.sina.com.cn/w/2026-03-14/doc-inhqxfks0545231.shtml",
                        "official": false
                    }
                ],
                "time": "凌晨3:00",
                "title": "第47波攻势：伊朗重型导弹齐袭美军基地及以色列"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260314A01YX800",
                        "official": false
                    },
                    {
                        "name": "新浪新闻",
                        "url": "https://news.sina.com.cn/w/2026-03-14/doc-inhqxfks0545231.shtml",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "特朗普拒绝普京\"停战换核\"提议，美俄分歧公开化"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260314A01YX800",
                        "official": false
                    },
                    {
                        "name": "华尔街见闻",
                        "url": "https://wallstreetcn.com/articles/3767495",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "美军累计13人死亡约200人受伤，战费已达110亿美元"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "央视网",
                        "url": "https://news.cctv.com/2026/03/14/ARTIBZIib21ukWNUbWZHNij9260314.shtml",
                        "official": false
                    },
                    {
                        "name": "每日经济新闻",
                        "url": "https://www.nbd.com.cn/articles/2026-03-14/4292190.html",
                        "official": false
                    }
                ],
                "time": "凌晨（最新）",
                "title": "第45波攻势：30枚超重型导弹袭击以色列"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "新浪财经",
                        "url": "https://finance.sina.com.cn/wm/2026-03-14/doc-inhqwuux7493862.shtml",
                        "official": false
                    },
                    {
                        "name": "每日经济新闻",
                        "url": "https://www.nbd.com.cn/articles/2026-03-14/4292190.html",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "赫格塞思：美以已打击伊朗1.5万目标，导弹减少90%"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "东方财富",
                        "url": "https://finance.eastmoney.com/a/202603133670575738.html",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    }
                ],
                "time": "3月14日",
                "title": "布伦特原油突破100美元/桶"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "最新"
                ],
                "sources": [
                    {
                        "name": "搜狐新闻",
                        "url": "https://www.sohu.com/a/995893826_119659",
                        "official": false
                    },
                    {
                        "name": "中华网",
                        "url": "https://news.china.com/socialgd/10000169/20260313/49319052.html",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "伊朗称已摧毁中东70%美军基地"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260312A01RGG00",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/world/20260313/dc33835874154e16aa0253334e730dba/c.html",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "特朗普暗示军事行动\"即将结束\""
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "新浪财经",
                        "url": "https://finance.sina.com.cn/jjxw/2026-03-13/doc-inhqvamv4173356.shtml",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260310A0706I00",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "穆杰塔巴发表就任后首份声明"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "联合国新闻",
                        "url": "https://news.un.org/zh/",
                        "official": false
                    },
                    {
                        "name": "联合国日内瓦",
                        "url": "https://www.ungeneva.org/zh/news-media/news/2026/03/116710",
                        "official": false
                    }
                ],
                "time": "上午",
                "title": "中俄联合国会议要求停止对伊朗侵略"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "新浪新闻",
                        "url": "https://news.sina.com.cn/w/2026-03-12/doc-inhqsxnv4933286.shtml",
                        "official": false
                    },
                    {
                        "name": "联合国日内瓦",
                        "url": "https://www.ungeneva.org/zh/news-media/news/2026/03/116710",
                        "official": false
                    }
                ],
                "time": "3月14日",
                "title": "联合国：冲突致410万人流离失所"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "新浪财经",
                        "url": "https://finance.sina.com.cn/7x24/2026-03-11/doc-inhqpxka2975333.shtml",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260313A08FNL00",
                        "official": false
                    }
                ],
                "time": "3月14日",
                "title": "伊朗大规模在霍尔木兹布设水雷"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/20260314/2fe1cde0e1ec4dc7b02e97dd1d103caf/c.html",
                        "official": false
                    },
                    {
                        "name": "新浪财经",
                        "url": "https://finance.sina.com.cn/jjxw/2026-03-14/doc-inhqxfkq3557264.shtml",
                        "official": false
                    }
                ],
                "time": "上午（最新）",
                "title": "以军公布两周战报：7600余次空袭，打死4000至5000名伊朗官兵"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "中国军网",
                        "url": "https://military.china.com/news/13004177/20260314/49321233.html",
                        "official": false
                    },
                    {
                        "name": "新浪新闻",
                        "url": "https://news.sina.com.cn/w/2026-03-14/doc-inhqxfks0545231.shtml",
                        "official": false
                    }
                ],
                "time": "上午（最新）",
                "title": "特朗普：美军下周将对伊朗进行\"猛烈空袭\""
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "突发"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/rain/a/20260314A0320700",
                        "official": false
                    },
                    {
                        "name": "新浪财经",
                        "url": "https://finance.sina.com.cn/jjxw/2026-03-14/doc-inhqxmsv0601239.shtml",
                        "official": false
                    }
                ],
                "time": "3月13日夜",
                "title": "伊朗单日发起4轮反击，德黑兰东部再度爆炸"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视网",
                        "url": "https://news.cctv.com/2026/03/14/ARTIsJyf9kPzpVtJEOJGv2bW260314.shtml",
                        "official": false
                    },
                    {
                        "name": "星岛日报",
                        "url": "https://www.stheadline.com/zh-hans/realtime-world/3551981",
                        "official": false
                    }
                ],
                "time": "上午（最新）",
                "title": "哈尔克岛遭袭详情：15次以上爆炸，石油设施未损"
            }
        ]
    },
    {
        "id": "d13",
        "date": "3月13日",
        "day": 14,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    },
                    {
                        "name": "凤凰网",
                        "url": "https://news.ifeng.com/",
                        "official": false
                    }
                ],
                "time": "美东时间14:00",
                "title": "美军加油机在伊拉克坠毁"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "政治"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    }
                ],
                "time": "3月13日",
                "title": "伊朗提出结束战争三大条件"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "政治"
                ],
                "sources": [
                    {
                        "name": "搜狐新闻",
                        "url": "https://news.sohu.com/",
                        "official": false
                    }
                ],
                "time": "3月12日夜",
                "title": "内塔尼亚胡威胁刺杀伊朗新领袖"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    }
                ],
                "time": "3月13日",
                "title": "国际能源署释放石油储备"
            }
        ]
    },
    {
        "id": "d12",
        "date": "3月12日",
        "day": 13,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "最新"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "中华网",
                        "url": "https://www.china.com/",
                        "official": false
                    }
                ],
                "time": "3月12日",
                "title": "伊朗发动\"真实承诺4\"第41轮"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    },
                    {
                        "name": "云南网",
                        "url": "https://www.yunnan.cn/",
                        "official": false
                    }
                ],
                "time": "12日凌晨",
                "title": "伊朗与真主党联合导弹行动"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新浪新闻",
                        "url": "https://news.sina.com.cn/",
                        "official": false
                    },
                    {
                        "name": "📺 视频报道",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "00:00-04:00",
                "title": "伊朗4小时内发动4次导弹袭击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "新浪新闻",
                        "url": "https://news.sina.com.cn/",
                        "official": false
                    },
                    {
                        "name": "网易新闻",
                        "url": "https://www.163.com/",
                        "official": false
                    }
                ],
                "time": "3月12日",
                "title": "以军袭击德黑兰核设施"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.news.cn/20260312/e7b9c631dcc443dfa0e4d4aa45ea09b2/c.html",
                        "official": false
                    }
                ],
                "time": "截至3月12日",
                "title": "双方伤亡数据汇总"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.news.cn/20260312/e7b9c631dcc443dfa0e4d4aa45ea09b2/c.html",
                        "official": false
                    }
                ],
                "time": "3月12日",
                "title": "IEA史上最大规模释放4亿桶战略石油储备"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "政治"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www3.xinhuanet.com/",
                        "official": false
                    }
                ],
                "time": "3月12日",
                "title": "伊朗总统谈结束战争条件"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "政治"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月12日",
                "title": "内塔尼亚胡放话"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    }
                ],
                "time": "3月12日",
                "title": "以色列外长称不寻求无休止战争"
            }
        ]
    },
    {
        "id": "d11",
        "date": "3月11日",
        "day": 12,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "政治"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    }
                ],
                "time": "下午",
                "title": "特朗普称军事行动即将结束"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    },
                    {
                        "name": "📺 央视移动端",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "凌晨",
                "title": "伊朗与真主党首次协同打击"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    },
                    {
                        "name": "搜狐新闻",
                        "url": "https://www.sohu.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "伊朗第34-40轮密集打击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://new.qq.com/",
                        "official": false
                    },
                    {
                        "name": "联合国新闻",
                        "url": "https://news.un.org/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "伊朗称美以造成1300+平民丧生"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 现场视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月11日",
                "title": "美军击沉60+艘伊朗舰艇"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "搜狐新闻",
                        "url": "https://www.sohu.com/",
                        "official": false
                    }
                ],
                "time": "11日晚",
                "title": "伊朗向三地开火"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    },
                    {
                        "name": "路透社",
                        "url": "https://www.reuters.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "国际能源署释放4亿桶石油储备"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "约 18:50-19:50",
                "title": "以军大规模空袭德黑兰"
            }
        ]
    },
    {
        "id": "d10",
        "date": "3月10日",
        "day": 11,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "腾讯新闻",
                        "url": "https://news.qq.com/",
                        "official": false
                    },
                    {
                        "name": "搜狐新闻",
                        "url": "https://www.sohu.com/",
                        "official": false
                    }
                ],
                "time": "3月10日",
                "title": "伊朗第34轮打击公布"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "大洋网",
                        "url": "https://www.dayoo.com/",
                        "official": false
                    }
                ],
                "time": "3月10日",
                "title": "美以发动\"最猛烈\"空袭"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "人民网",
                        "url": "https://world.people.com.cn/",
                        "official": false
                    },
                    {
                        "name": "📺 战况视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "伊朗第31-36轮密集打击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月10日",
                "title": "伊朗袭击以色列油气设施"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月10日",
                "title": "以色列帕尔马希姆空军基地遭袭"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "联合国新闻",
                        "url": "https://news.un.org/",
                        "official": false
                    }
                ],
                "time": "截至10日",
                "title": "战损数据汇总"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/20260310/c287a8c2f3fc4d989b6d0381b48ea1f6/c.html",
                        "official": false
                    }
                ],
                "time": "3月10日",
                "title": "特朗普有条件同意谈判，威胁20倍打击霍尔木兹"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/20260310/c287a8c2f3fc4d989b6d0381b48ea1f6/c.html",
                        "official": false
                    }
                ],
                "time": "3月10日",
                "title": "普京与特朗普通话提出外交调解方案"
            }
        ]
    },
    {
        "id": "d9",
        "date": "3月9日",
        "day": 10,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "澎湃新闻",
                        "url": "https://www.thepaper.cn/",
                        "official": false
                    },
                    {
                        "name": "观察者网",
                        "url": "https://www.guancha.cn/",
                        "official": false
                    }
                ],
                "time": "3月9日",
                "title": "伊朗选出新任最高领袖"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 视频报道",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "凌晨-夜间",
                "title": "伊朗第30-32波密集打击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月9日",
                "title": "海湾国家首次遭袭击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "联合国新闻",
                        "url": "https://news.un.org/",
                        "official": false
                    }
                ],
                "time": "3月9日",
                "title": "战火波及民用设施"
            }
        ]
    },
    {
        "id": "d8",
        "date": "3月8日",
        "day": 9,
        "events": [
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 击落画面",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "伊朗击落80架无人机"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "伊朗打击科威特美军基地"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "以军打击伊朗F-14战机"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 爆炸现场",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "凌晨",
                "title": "德黑兰沙赫兰油库爆炸"
            }
        ]
    },
    {
        "id": "d7",
        "date": "3月7日",
        "day": 8,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "腾讯网",
                        "url": "https://new.qq.com/",
                        "official": false
                    },
                    {
                        "name": "📺 导弹发射视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "约 00:00-07:00",
                "title": "伊朗7小时内发射5轮导弹"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "7日",
                "title": "美以累计投弹超7500枚"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 讲话视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "7日",
                "title": "伊朗总统拒绝无条件投降"
            }
        ]
    },
    {
        "id": "d6",
        "date": "3月6日",
        "day": 7,
        "events": [
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 打击画面",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "以军重点打击伊朗石油设施"
            }
        ]
    },
    {
        "id": "d5",
        "date": "3月5日",
        "day": 6,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 战况视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "美以伊全面开打第6天"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "澎湃新闻",
                        "url": "https://www.thepaper.cn/",
                        "official": false
                    },
                    {
                        "name": "📺 航母画面",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月5日",
                "title": "伊朗宣称击中美军航母"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.news.cn/world/20260306/98f410fe4460429799f195496e541a21/c.html",
                        "official": false
                    }
                ],
                "time": "3月5日",
                "title": "卡塔尔遭14枚弹道导弹袭击，伊朗警告打击迪莫纳核反应堆"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.news.cn/world/20260306/98f410fe4460429799f195496e541a21/c.html",
                        "official": false
                    }
                ],
                "time": "3月5日",
                "title": "美参议院否决战争授权议案"
            }
        ]
    },
    {
        "id": "d4",
        "date": "3月4日",
        "day": 5,
        "events": [
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "霍尔木兹海峡持续封锁"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 导弹视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "4日",
                "title": "伊朗使用高超音速导弹"
            }
        ]
    },
    {
        "id": "d3",
        "date": "3月3日",
        "day": 4,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 现场视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "凌晨",
                "title": "伊朗发起\"最猛烈\"导弹打击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月3日",
                "title": "伊朗向三方向同时开火"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月3日",
                "title": "北约明确表态不参战"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www3.xinhuanet.com/world/20260304/db82eb4fdc1d46b58eea7145a5eae195/c.html",
                        "official": false
                    },
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "截至3日",
                "title": "战损数据汇总"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www3.xinhuanet.com/world/20260304/db82eb4fdc1d46b58eea7145a5eae195/c.html",
                        "official": false
                    }
                ],
                "time": "3日",
                "title": "美国向中东多国发撤离令，国内爆发反战游行"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www3.xinhuanet.com/world/20260304/db82eb4fdc1d46b58eea7145a5eae195/c.html",
                        "official": false
                    }
                ],
                "time": "3日",
                "title": "沙特大使馆遭无人机袭击，巴林基地受损"
            }
        ]
    },
    {
        "id": "d2",
        "date": "3月2日",
        "day": 3,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    },
                    {
                        "name": "📺 哀悼报道",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "2日",
                "title": "伊朗官方证实哈梅内伊身亡"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "2日",
                "title": "伊朗向三方向同时发射导弹"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "俄罗斯卫星通讯社",
                        "url": "https://sputniknews.cn/",
                        "official": false
                    }
                ],
                "time": "2日",
                "title": "伊朗第10波导弹打击"
            }
        ]
    },
    {
        "id": "d1",
        "date": "3月1日",
        "day": 2,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "3月1日",
                "title": "伊朗全国哀悼 哈梅内伊官方确认身亡"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.news.cn/",
                        "official": false
                    },
                    {
                        "name": "📺 导弹来袭视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "全天",
                "title": "伊朗发射76枚导弹+100架无人机"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "约 09:30",
                "title": "伊朗第6轮打击：27个美军基地"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "南方周末",
                        "url": "https://www.infzm.com/",
                        "official": false
                    }
                ],
                "time": "3月1日",
                "title": "伊拉克埃尔比勒机场遭攻击"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "凌晨-夜间",
                "title": "以色列空袭伊朗多地"
            }
        ]
    },
    {
        "id": "d0",
        "date": "2月28日",
        "day": 1,
        "events": [
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    },
                    {
                        "name": "📺 冲突爆发视频",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "约 08:10 (以时间)",
                "title": "\"史诗怒火\"行动启动 冲突爆发"
            },
            {
                "type": "major",
                "isNew": false,
                "tags": [
                    "重要"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    },
                    {
                        "name": "📺 现场报道",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "约 08:10 (以时间)",
                "title": "伊朗最高领袖哈梅内伊遇袭身亡"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "腾讯新闻",
                        "url": "https://new.qq.com/",
                        "official": false
                    },
                    {
                        "name": "📺 遇难者家属采访",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "约 08:30",
                "title": "美军误击伊朗小学 165人遇难"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    },
                    {
                        "name": "📺 导弹发射画面",
                        "url": "https://m.news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "当天",
                "title": "伊朗向海湾国家发射导弹"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "当天",
                "title": "伊朗反击：导弹命中以总理办公室"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "当天",
                "title": "内塔尼亚胡扬言·特朗普表态"
            }
        ]
    },
    {
        "id": "bg",
        "date": "战前背景",
        "day": 0,
        "events": [
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "外交"
                ],
                "sources": [
                    {
                        "name": "百度百科",
                        "url": "https://baike.baidu.com/item/2025%E5%B9%B4%E4%BB%A5%E4%BC%8A%E5%86%B2%E7%AA%81/65802378",
                        "official": false
                    },
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    }
                ],
                "time": "2025年6月13日-24日",
                "title": "2025年6月\"12日战争\""
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "军事"
                ],
                "sources": [
                    {
                        "name": "新华网",
                        "url": "https://www.xinhuanet.com/",
                        "official": false
                    },
                    {
                        "name": "央视新闻",
                        "url": "https://news.cctv.com/",
                        "official": false
                    }
                ],
                "time": "2025年6月-2026年2月",
                "title": "本轮冲突起因"
            },
            {
                "type": "normal",
                "isNew": false,
                "tags": [
                    "人道"
                ],
                "sources": [
                    {
                        "name": "百度百科",
                        "url": "https://baike.baidu.com/item/2025%E5%B9%B4%E4%BB%A5%E4%BC%8A%E5%86%B2%E7%AA%81/65802378",
                        "official": false
                    }
                ],
                "time": "2025年6月（12天）",
                "title": "2025年6月冲突伤亡数据"
            }
        ]
    }
]
};

function renderTimeline() {
    var container = document.querySelector('.timeline');
    if (!container || !TIMELINE_DATA) return;
    
    var html = '';
    
    TIMELINE_DATA.dates.forEach(function(dateGroup) {
        html += '<div class="date-group" id="' + dateGroup.id + '">';
        html += '<div class="date-label" onclick="scrollToDate(\'' + dateGroup.id + '\')">';
        html += dateGroup.date + ' <span class="date-day">· 第' + dateGroup.day + '天</span>';
        html += '</div>';
        html += '<div class="events-container">';
        
        dateGroup.events.forEach(function(event) {
            var classes = 'event-card';
            if (event.type === 'major') classes += ' major';
            if (event.isNew) classes += ' event-new';
            
            html += '<div class="' + classes + '">';
            
            if (event.time) {
                html += '<div class="event-time">' + event.time + '</div>';
            }
            
            html += '<div class="event-header">';
            html += '<div class="event-title">';
            
            if (event.isNew) {
                html += '<span class="new-badge">NEW</span> ';
            }
            
            if (event.tags && event.tags.length > 0) {
                event.tags.forEach(function(tag) {
                    var tagClass = '';
                    if (event.type === 'major') tagClass = 'major-tag';
                    else if (tag.includes('人道')) tagClass = 'humanitarian-tag';
                    html += '<span class="category-tag ' + tagClass + '">' + tag + '</span> ';
                });
            }
            
            html += event.title;
            html += '</div></div>';
            
            if (event.content) {
                html += '<div class="event-content">' + event.content + '</div>';
            }
            
            if (event.sources && event.sources.length > 0) {
                html += '<div class="event-sources">';
                event.sources.forEach(function(src) {
                    var srcClass = src.official ? 'source-link official' : 'source-link';
                    html += '<a class="' + srcClass + '" href="' + src.url + '" target="_blank">' + src.name + '</a>';
                });
                html += '</div>';
            }
            
            html += '</div>';
        });
        
        html += '</div></div>';
    });
    
    container.innerHTML = html;
    
    var subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = '2026年2月28日 - 3月17日 · 第18天 · 伊朗第57波反击打击卡塔尔美军基地';
    }
    
    var badge = document.getElementById('update-badge');
    if (badge) {
        badge.textContent = '最后更新：' + TIMELINE_DATA.meta.lastUpdate;
    }
    
    if (typeof filterEvents === 'function') {
        filterEvents();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTimeline);
} else {
    renderTimeline();
}
