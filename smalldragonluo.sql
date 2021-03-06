/*
 Navicat Premium Data Transfer

 Source Server         : smalldragonluo.com
 Source Server Type    : MySQL
 Source Server Version : 50173
 Source Host           : 123.56.230.53:3306
 Source Schema         : smalldragonluo

 Target Server Type    : MySQL
 Target Server Version : 50173
 File Encoding         : 65001

 Date: 02/04/2019 17:27:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for kv_pair
-- ----------------------------
DROP TABLE IF EXISTS `kv_pair`;
CREATE TABLE `kv_pair` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `group_id` bigint(20) DEFAULT NULL COMMENT '属性组 ID',
  `key` varchar(128) NOT NULL COMMENT '属性',
  `value` varchar(1024) DEFAULT NULL COMMENT '值',
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kv_pair
-- ----------------------------
BEGIN;
INSERT INTO `kv_pair` VALUES (1, NULL, 'fcoinConfig', '{\n  \"key\": \"d13838b49da046e2bff5e3f7d1442758\",\n  \"secret\": \"8c107008eaeb443596d7dd531ceabe2d\"\n}', NULL, NULL);
INSERT INTO `kv_pair` VALUES (2, NULL, 'btforexConfig', '{\n  \"key\": \"64393b2d0620df363f082cb7855d35f2\",\n  \"secret\": \"a3ed70e1fa4ab612868de2b3bdce5b8a\"\n}', NULL, NULL);
INSERT INTO `kv_pair` VALUES (3, NULL, 'wxConfig', '{\n  \"appId\": \"wx498dee9aad41218a\",\n  \"secret\": \"b7fa859ae6ead51a01e2ef53ad98a8fb\"\n}', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for qq_content
-- ----------------------------
DROP TABLE IF EXISTS `qq_content`;
CREATE TABLE `qq_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id 主键',
  `content` text,
  `creatorId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=436 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of qq_content
-- ----------------------------
BEGIN;
INSERT INTO `qq_content` VALUES (263, '绿葡萄对紫葡萄说：“快呼吸啊，笨蛋！”', 1, '2017-09-29 21:54:54', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (264, '“人生第三个层次：有时候明知做不到还是要义无反顾的努力。” 辅导员对考不过四级的我们说', 1, '2017-09-29 21:54:55', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (265, '车祸后，我失去了双腿，妻子每天推轮椅带我出去散步，大家都对我投以同情的目光，甚至还有人窃窃私语：“真可怜，就算是个残疾人，也不至于娶这么丑的女人吧？”', 1, '2017-09-29 21:54:56', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (266, '好朋友就像是星星，你不一定经常能看到他们，但你知道，只要你一抬头，他们永远在那里远远地看着你，啥用没有。', 1, '2017-09-29 21:54:57', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (267, '公司娱乐提供了台球桌，打了若干次之后，发现我打台球基本上分为两个套路：\n1、我靠，这都不进！\n2、我靠，这也能进！', 1, '2017-09-29 21:54:58', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (268, '查寝大妈发现我还不起床，就说再不起床就通报批评。我没理她，我说你通报就通报吧，可你在通报栏里写我在床上硬不起来是怎么回事？', 1, '2017-09-29 21:54:59', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (269, '去医院做检查，医生拿着化验单说亏你来得及时。 我长舒了一口气，医生关切地说，“再晚点停尸房可就没位置了。”', 1, '2017-09-29 21:55:00', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (270, '高考成绩出来了，学妹跑去问暗恋了很久的学长考得怎样，看着学妹羞得通红的脸，学长笑了，弹了一下学妹的脑袋深情款款地说：“小傻瓜，以后别叫我学长了。” “为……为什么？难道……” 学妹满怀期待地看着他，听着他极富磁性的声音在耳边响起：“呵呵，以后咱俩就同级了。”', 1, '2017-09-29 21:55:01', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (272, '意大利菜：斐波那契例汤。具体做法是把昨天的和前天剩下的汤加热后混合，得到就是今天新鲜的“斐波那契例汤”。', 1, '2017-09-29 21:55:03', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (273, '活到这个岁数才发现自己的梦想并不是什么财富权力、地位名声，人生中最值得珍惜的根本就不是那些。如果现在有谁让我总结我的人生梦想，我的答案只有四个字——不劳而获。', 1, '2017-09-29 21:55:04', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (274, '不知道大家对在电梯里放屁的人是什么态度。反正我是绝对不能忍！我该放就放。', 1, '2017-09-29 21:55:05', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (275, '俗话说得好，是金子总会花光的。', 1, '2017-09-29 21:55:06', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (276, '一位老师 在讲台上讲：“快乐在于对某种事物的追求，而不在于把它追到手。 ”一 学生发问：“那您试过在雨夜追赶最后一班 公交 车而没追到的那种快乐吗？”', 1, '2017-09-29 21:55:07', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (277, '如何優雅地拒絕他人的告白？\n“我知道了，你先回去等消息吧。”', 1, '2017-09-29 21:55:08', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (278, '火车上一个小孩看我在用平板写东西，他小声对他爸爸说：“我要玩那个”\n爸爸微笑着说：“想玩就自己去说，自己的事情自己做”\n小孩犹豫。\n爸爸微笑着教他：“你这样跟叔叔说：叔叔，我可以玩那个吗？”\n我抬起头，也对这孩子投去鼓励的目光。他终于鼓起勇气：“叔叔，我可以玩那个吗？”\n“不可以”我说。', 1, '2017-09-29 21:55:09', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (279, '孔融说：“叔叔，我是小孩，我还是吃小的那个梨吧。”\n叔叔说：“你离我水果摊远一点好吗？”', 1, '2017-09-29 21:55:10', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (280, '“明天你是否会想起...”\n“不想起，还想睡懒觉。”', 1, '2017-09-29 21:55:11', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (281, '当年高一的数学课\n我笔掉到地上弯腰去捡\n从此再也没听懂数学', 1, '2017-09-29 21:55:12', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (282, '今天上街，当着那么多人的面，我老婆一边哭一边骂我是小气鬼。\n把我着急的啊，因为旁边没有发传单的，怎么给她擦眼泪？', 1, '2017-09-29 21:55:13', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (283, '“有时候觉得自己很孤独。”\n“有什么具体表现吗？”\n“喜欢自问自答。”', 1, '2017-09-29 21:55:14', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (284, '“你背着我说我坏话合适吗？”\n“妈的，老子从一楼把你背到五楼说你两句怎么了？”', 1, '2017-09-29 21:55:15', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (285, '比“宇宙”更大的词是什么？\n“穷”，因为宇宙无穷大', 1, '2017-09-29 21:55:16', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (286, '幻想有一天，我早上八点起床，吃完早饭做家务，然后晒晒太阳看看书，午饭比早饭丰盛一些，有肉有菜，营养均衡，吃完午饭小歇一会，下午去小区公园散散步，和邻居们唠唠嗑，晚上喝点清淡小粥，打开电视看看连续剧，十点准时洗漱睡觉。看上去是那么平凡简单的小事，我却他妈死都做不到。', 1, '2017-09-29 21:55:17', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (287, '当我还是个孩子的时候，父母对我说，当你有孩子的时候就明白了；我现在养孩子了，我知道了我父母是多么糟糕的父母。', 1, '2017-09-29 21:55:18', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (288, '家住朝阳区的郝先生认为，拖延症不是一种病态，而是一种非常智慧的生存策略。人类生活中遇到的问题，70%以上，只要拖一拖，就会自行化解。如果没有，那是你拖得还不够久。', 1, '2017-09-29 21:55:19', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (289, '老婆生病住院，下班后买些水果去看她。\n我问老板，这是买给我住院的老婆的，上面有没有喷洒有毒的化学物质？\n老板说真不好意思啊，没有，您买回去后自己喷吧', 1, '2017-09-29 21:55:20', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (290, '丈夫深情地对妻子说：“结婚这么多年了，还好有你在我身边，在我最穷的时候跟了我。”\n妻子泪水在眼眶打转，抚摸着丈夫的脸庞：“可你现在还是很穷啊...”', 1, '2017-09-29 21:55:21', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (291, '“哎呀你看你，来都来了，怎么才带这么点东西？”', 1, '2017-09-29 21:55:22', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (292, '“李总李总，这次让您破费了，下次一起坐公交一定要让我来投币啊”', 1, '2017-09-29 21:55:23', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (293, '他妈立下遗嘱让他把火化后的骨灰做成沙漏，这样即便自己死了也能提醒他拖延浪费了多少时间', 1, '2017-09-29 21:55:24', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (294, '司马光和小伙伴玩耍的时候，其中一个小朋友不慎跌入了水缸之中。大家十分惊慌，只有司马光冷静地观察了一下缸中的水位。灵光一闪，司马光不由分说抓起一个小朋友就往缸里扔，扔完一个再扔第二个，第三个，第四个。最后，所有小朋友都被扔进了水缸里，水位上涨，机智的司马光就这样喝到了缸里的水。', 1, '2017-09-29 21:55:25', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (295, '上课玩手机 → _ →、 ← _ ←、 ↓ _ ↓', 1, '2017-09-29 21:55:26', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (296, '公交车上，有个爸爸抱着他的小女儿。\n小女儿跟爸爸蹭了蹭鼻子，特别可爱地唱道：“爸爸，爸爸，我们去哪里呀？”\n爸爸笑着拍拍她的小屁股说：“当然是去医院打针针呀！”\n直到他们下车，车厢里仍回荡着小女孩的哭声。', 1, '2017-09-29 21:55:27', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (297, '“妈，我出柜了。”\n“嗯？就是同性恋？”\n“是。”\n“离你爸远点。”', 1, '2017-09-29 21:55:28', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (298, '昨日搬家时从旧柜子里翻出来一面锦旗，老爸说这是当年生下我后为了响应计划生育就去做了结扎手术，后来村里送的。\n我打开一看，上面赫然写着四个大字 ------ 永不超生。', 1, '2017-09-29 21:55:29', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (299, '刘备说：“孤得孔明，如鱼得水也。”\n后人把他们的感情总结为“鱼水之欢”。', 1, '2017-09-29 21:55:30', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (300, '刚刚分手，白天还好，情绪还没涌起来，可到了晚上...... 我终于忍不住在被窝里偷偷笑了起来。', 1, '2017-09-29 21:55:31', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (301, '烂泥躺得好好的，却偏要被人扶上墙。', 1, '2017-09-29 21:55:32', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (302, '钥匙圈是一种十分实用的小工具，它可以让你一次把所有的钥匙都丢光。', 1, '2017-09-29 21:55:33', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (303, '年纪越大，越会发现社交的种种不堪，所以，踏实的掌握一门生存的技能，认真发展一个独处的爱好，永远都不会错。', 1, '2017-09-29 21:55:34', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (304, '大学四年来我的成绩一直在宿舍排第一，因为那帮室友一个个都懒的要死，每天我起来的时候他们都在熟睡，而勤奋的我一如既往的网饮水机里放安眠药。', 1, '2017-09-29 21:55:35', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (305, '前段时间，晚上百无聊赖，上街转转，看到路边有位女士站在路边瑟瑟发抖，上前询问后，原来是生活所迫，没钱回家过年，然后，我把她带到宾馆，给她开了个房间，还给了她回家的路费，她洗完澡后，感激涕零，陪了我一晚，做好事，果然有好报，真是英雄救美，美人感激之余以身相许。我说的都是真的，警察同志！', 1, '2017-09-29 21:55:36', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (306, '在生活里，我们命中碰到的一切美好的东西都是以秒计算的。', 1, '2017-09-29 21:55:37', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (307, '花木兰回乡以后梳洗打扮，涂脂抹粉，穿上长裙后出门与战友相见，战友大惊：“卧槽，兄弟你还有这种爱好？”', 1, '2017-09-29 21:55:38', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (308, '一个贼被困在废弃的电梯井里喊了5个小时来了个7岁小萝莉。\n小萝莉说：“你别喊了，这没人，我给你拿点吃的。”\n一个馒头一瓶水。\n一连三天，第四天空手来的：“我没钱了，我到垃圾箱拣点菜叶吧。”\n贼都要疯了：“你报警吧！”\n小萝莉摇摇头：“你又不是坏人，还是养着比较好玩！”', 1, '2017-09-29 21:55:39', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (309, '我方向感很差，连冬瓜和南瓜都分不清楚。', 1, '2017-09-29 21:55:40', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (310, '一群茄子拍照，茄子喊：“我自己！”', 1, '2017-09-29 21:55:41', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (311, '同学来我家玩，太晚了就让留宿了，刚才觉得头有点疼，想找感冒药，药在他那侧的抽屉里，于是趴在他身上找，结果把他弄醒了。\n他迷迷糊糊的问我：“干嘛？”\n我说：“药。”\n结果他把我硬塞回被子里，说：“快睡吧，要什么要。”', 1, '2017-09-29 21:55:42', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (312, '看到地铁上一个小女孩个子很矮，我猜她一定够不到地铁的拉手。热心肠的我将她抱了起来，并让她抓到了地铁拉环。然后坐在了她的座位上。', 1, '2017-09-29 21:55:43', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (313, '“我老公真是牛啊！”\n知道了知道了，大家不厌其烦地对铁扇公主说。', 1, '2017-09-29 21:55:44', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (314, '去买草莓，老大爷称完说，19块5。我说：“大爷，那五毛钱就算了吧。”大爷颤抖的点点头对身边的老伴说：“不用找了，收她二十。”', 1, '2017-09-29 21:55:45', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (315, '初中，教室后门有个缝儿，班主任没事就过来偷瞄，于是把方便面的辣椒粉倒在了缝隙上。\n等班主任来了，我假装在听课，然后突然转头对着缝隙猛的吹了口气，之后就听见外面猛打喷嚏。\n过了一会儿，外面没声音了，我靠近缝隙往外看，就在这时，班主任突然吹了回来。', 1, '2017-09-29 21:55:46', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (316, '生活不只有眼前的苟且，还有长远的凑合。', 1, '2017-09-29 21:55:47', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (317, '小时候的 VCD 歌碟都是盗版，MV 的背景就是 3 点式泳装秀，那时资讯少，撸点低。常躲着看 3 点式就解决了，有次为了看的更清楚，就用了放大镜。于是我成了全班第一个知道球面显示器成像原理的人，物理老师都夸我善于观察。', 1, '2017-09-29 21:55:48', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (318, '她那时候还太年轻，不知道所有命运赠送的礼物，早已在暗中标好了价格。 ——茨威格', 1, '2017-09-29 21:55:49', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (319, '小编因为一次偶然的机会回到了二十年前的一个晚上。他发现一向和蔼可亲的邻居王大爷，正在爬他们家的窗户，便冲过去大喊一声。王大爷落荒而逃。这时小编发现自己的身体慢慢消失。可惜，一切都晚了。', 1, '2017-09-29 21:55:50', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (320, '忘了是前天还是昨天有个谁跟我说“长期撸管会导致记忆力下降”，笑死我了这种东西都信。', 1, '2017-09-29 21:55:51', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (321, '我站在 8 万多一平米豪宅的阳台，搭着扶手抽着烟，在思索人生到底为了什么，钱？或者是权？当这两样都有了又该怎样？这时我身后一倾国倾城的气质佳人缓缓向我走来跟我说：“师傅，这是你通厕所的费用两百块。”', 1, '2017-09-29 21:55:52', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (322, '散步的时候，我看到一个小朋友表情痛苦地蹲在路边，于是我蹲下身，抚摸着他的头问道：“小朋友你怎么了？”小朋友说：“我在拉屎，你走开点好吗？”', 1, '2017-09-29 21:55:53', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (323, '我将妻子紧紧地挽在臂弯，车祸太惨了，我知道她已经撑不了多久。\n“亲爱的，我……还可以为你做点什么吗？”我问。\n她艰难地回答：“就……就一件……”\n我敦促她：“任何事都可以，快说吧。”\n“你……能不能……别他妈笑得这么开心……？”', 1, '2017-09-29 21:55:54', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (324, '一对恩爱多年的老夫妻，睡到半夜，老头子从身后抱住了老太婆叹了口气道：“这辈子太短了。”\n老太太醒了过来，感动地掉下热泪。\n老头子接着说：“我都盖不到脚了！”', 1, '2017-09-29 21:55:55', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (325, '老王两袖清风，却在超市门口被保安拦住，被迫交出了藏在袖子里的纸巾。', 1, '2017-09-29 21:55:56', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (326, '终于凑齐了七颗龙珠。\n神龙：“我可以实现你一个愿望。”\n我：“我要一盏阿拉丁神灯。”\n阿拉丁：“我可以实现你三个愿望，说吧。”\n我：“第一，我要比马云有钱，第二，给我一个神级妹子，第三，我要七颗龙珠。”\n神龙：“我可以实现你一个愿望。”\n我：“我要一盏阿拉丁神灯……”\n神龙：“妈的，又是你！”', 1, '2017-09-29 21:55:57', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (327, '有天我去找一朋友玩，开门的是他妹妹，长的很可爱。我想给她留个好印象，于是装作风度翩翩的古人的样子说：“这位姑娘，你兄长在哪儿？”她迟疑了一下，狠狠甩给我一巴掌。', 1, '2017-09-29 21:55:58', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (328, '“我喜欢在雨中散步，因为没人看得出我在哭。”\n发上面这种状态的人百分之一百会在游泳池里撒尿。', 1, '2017-09-29 21:55:59', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (329, '“刚才我一时愤怒揍了一个算命的。”\n“什么情况？”\n“我刚走到他摊子前，他居然张口就说，你算什么东西？”', 1, '2017-09-29 21:56:00', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (330, '狄仁杰：“此案必有蹊跷，元芳，你怎么看？”\n李元芳：“回大人，卑职用眼睛看。”\n狄仁杰：（无奈转身对着曾泰）：“曾泰，你说呢？”\n曾泰：“呢。”', 1, '2017-09-29 21:56:01', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (331, '老公语重心长的对我说：“你用另一个ID，在网上挑逗我，我上钩了，这说明什么？说明我花心？不。这说明，就算你换个名字，我也一定会爱上你。”', 1, '2017-09-29 21:56:02', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (332, '“姐，我姐夫是流氓。”\n“怎么了？”\n“昨天，我穿着超短裙，他老看我，还几次叫我把裙子脱掉。”\n“你是不是又穿我的超短裙了，要不是我亲弟弟，我早打死你了，变态！”', 1, '2017-09-29 21:56:03', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (333, '横眉冷对千夫指，俯首甘为万人骑', 1, '2017-09-29 21:56:04', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (334, '小时候，冰箱里有根冰棍，我们三兄弟打赌，谁举的东西最重谁就吃了那根冰棍。弟弟举起了板凳，我举起了一盆花，哥哥倒立说举起了整个地球，哥哥赢了，拿走了那根冰棍。而我偷偷捡起了哥哥倒立时掉下来的两块钱纸币，带弟弟买了两根甜筒吃掉了。', 1, '2017-09-29 21:56:05', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (335, '一对情侣去逛街，女的看中了一款 LV 包，执意要买，男子一月工资2000。男子在一旁难过的抽烟，最后连工作人员都看不下去了，忍不住上去劝到，先生这里禁止吸烟。', 1, '2017-09-29 21:56:06', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (336, '吃冰棍的时候\n我妈看着我说\n是不是有男朋友了', 1, '2017-09-29 21:56:07', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (337, '开着价值数百万的敞篷跑车，身旁坐着一位清纯又不失妩媚的大波美少女，嘴里叼着名贵的雪茄，红灯底下顺手一摸美女的大腿，引起她一阵娇嗔，这生活，啧啧，我在旁边公交车的窗户边看的一清二楚。', 1, '2017-09-29 21:56:08', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (338, '科学证明：寒冷的环境可以使人变得年轻。小明的爷爷今年70多岁了，出门冻得跟孙子一样。', 1, '2017-09-29 21:56:09', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (339, '我发现在不知不觉中，一个城市的广告重点，已经从不孕不育转变为美容整形，这说明人们逐渐明白了，其实不能繁衍的主要病因在脸', 1, '2017-09-29 21:56:10', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (340, '男朋友躺在浴缸里洗澡突然发羊癫疯怎么办？\n快倒入洗衣液把脏衣服丢进去！', 1, '2017-09-29 21:56:11', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (341, '一哥们儿最近很郁闷，原因是他租间门面开理发店，生意比较好就招个学徒，结果学徒跟房东女儿谈恋爱了，前几天学徒对哥们儿说：房子到期就不租给你了，我们要自己开理发店。', 1, '2017-09-29 21:56:12', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (342, '小王买了一架时光机，由于科技限制，时光机只能带他回到死前一分钟的时候。小王年仅二十，未婚单身，想到未来或许已走上人生巅峰，死前一定有众多显贵前来探望，再不济也能看到自己儿女的成就，想到此处，不禁心痒难耐。\n坐进时光机，只听得提示音道：“您好，请绑好安全带。”\n“是了，一会机器以光速运行，要固定好自己。”\n“您好，请关闭手机。”\n“是了，坐飞机还要飞行模式呢。”\n小王想到即将看到未来的自己，连按开始按钮的手都颤抖了。\n“您好，距离时光机爆炸还有 60 秒。”', 1, '2017-09-29 21:56:13', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (343, '男朋友躺在浴缸里洗澡突然发羊癫疯怎么办？快倒入洗衣液把脏衣服丢进去！', 1, '2017-09-29 21:56:14', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (344, '老师:“你这篇论文是抄袭的吧？”\n学生:“下次不敢了，您就饶了我这次吧。”\n老师:“这篇论文是我6年前写的。”\n学生:“啊？！对不起，老师，我事先并不……”\n老师:“不过，我还是决定给你优秀。”\n学生:“谢谢老师，可这是为什么？”\n老师:“当时我的导师只给了我及格，可我一直认为，我的这篇论文应该得优秀。”', 1, '2017-09-29 21:56:15', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (345, '刚才玩摇一摇，摇了大概四五次吧，都摇的是同一个男的，于是我就弱弱的问了一句：兄弟，搞基不？\n他回答到：不搞。\n我就说：那你休息一下，让我先摇呗？', 1, '2017-09-29 21:56:16', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (346, '我妈今天轻抚我的额头说：我相信你总有人头落地的一天。', 1, '2017-09-29 21:56:17', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (347, '大海边上\n七岁的小明终于看到了盼望已久的大海。\n他对妈妈说：“妈妈，不是说大海无边无际吗？”\n妈妈：“是呀。”\n小明：“但是我们怎么站在大海的边上？”', 1, '2017-09-29 21:56:18', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (348, '朋友结婚，主持人请我上台，说：“今天是你的好兄弟大婚的日子，你上来说点什么吧？”\n我有点激动：“那就点个糖醋鲤鱼和红烧排骨吧。”', 1, '2017-09-29 21:56:19', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (349, '考场外的一位父亲送孩子高考，这浓浓的父爱，不禁让我想起自己18岁的高三，那是我第一次当父亲。', 1, '2017-09-29 21:56:20', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (350, '“把你最值钱的东西交出来！”\n面对劫匪的恐吓，我二话不说，把女朋友给推了出去。', 1, '2017-09-29 21:56:21', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (351, '有一个人去教堂忏悔。\n他对神父说：“神父，我有罪。”\n神父说：“孩子，每个人都有罪。你犯了什么错？”\n那人回答：“神父，我偷了别人一头牛，我该怎么办？我把牛给你好不好？”\n神父回答：“我不要。你应该把那头牛送还给失主才对。”\n那人说：“但是他说他不要。”\n神父说：“那你就自己收下吧。”\n结果，当天晚上神父回到家后，发觉他的牛不见了。', 1, '2017-09-29 21:56:22', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (352, '开学典礼，校长拿着一张纸放在桌子上，站在前面说了句同学们好，突然一阵狂风把纸吹飞，风停之后校长说：我的话讲完了，谢谢。', 1, '2017-09-29 21:56:23', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (353, '高考并不是人生中唯一的出路。\n警察叔叔说，坦白才是。', 1, '2017-09-29 21:56:24', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (354, '一毛不拔的铁公鸡同事居然说下班要带我去蒸桑拿，正当我满怀憧憬时，他把我带上了那辆没有空调的公交车。', 1, '2017-09-29 21:56:25', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (355, '今天我被宝剑厂的老板辞退了，他说我消极怠工，十年磨一剑。', 1, '2017-09-29 21:56:26', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (356, '你走，我不送你；你来，无论多大的风雨，我都不开门。', 1, '2017-09-29 21:56:27', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (357, '在路上遇到一个老大爷在拎东西，本想上去帮他拎的，随口说了句：“老东西，大爷我帮你拎。”', 1, '2017-09-29 21:56:28', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (358, '昨天发烧，我妈摸了下我额头猛的缩回手说：“这么烫！” 我爸直接给我一耳光说：“看把你妈烫的！” 接着我妈也给我一耳光说：“看把你爸气的！”', 1, '2017-09-29 21:56:29', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (359, '18 岁那年看动画，被我爸发现了，他说：“你这么大还看动画片？” 我快进到关键画面说：“这是成人动画。”', 1, '2017-09-29 21:56:30', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (360, '找了个人来修空调，看他爬在 15 楼的窗外，我赶紧对他说：“你们做这一行还挺危险的，要不这样吧，价格再便宜点，否则我就关窗户了。”', 1, '2017-09-29 21:56:31', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (361, '无论如何，我也是一个拥有后宫佳丽 300G 的人啊。', 1, '2017-09-29 21:56:32', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (362, '去楼下买柚子，问：“酸不酸？”\n大爷说：“不酸。”\n我说：“那不行，媳妇儿怀孕了，必须吃酸的。”\n大爷从两个柚子中拿出一个放在一旁，对我说：“我把他和女朋友分开，他现在老酸了。”', 1, '2017-09-29 21:56:33', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (363, '某同事把一猫和一狗拿到办公室玩。 另一同事想挑起事端让猫和狗打架看热闹，就打了猫一下，然后说：“狗打的！”', 1, '2017-09-29 21:56:34', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (364, '老哥们儿一起去吃饭，吃了俩王八，又喝了一箱啤酒。\n结账的时候，老板娘问服务员：“他们吃了什么？”\n那服务员说：“俩王八喝了一箱啤酒。”\n我们正准备发飙，看到帐单上只算了啤酒的钱，王八钱没算。', 1, '2017-09-29 21:56:35', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (365, '在外靠朋友，在家靠沙发。', 1, '2017-09-29 21:56:36', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (366, '一位天文学家不幸落到食人族手里，很快将被煮食，他知道当天下午有一次日全食，便对食人族首领说：“我是受上帝保护的，你们若要吃我，上帝会将太阳收走！”\n首领不置可否。\n天文学家又问：“你们打算什么时候煮我？”\n“下午三点，日全食一结束就开煮！” 首领冷冷地答道。', 1, '2017-09-29 21:56:37', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (367, '与朋友四人一起吃饭。快结账的时候我们就说好了，谁丑谁结账。服务员听见了，说你们是不是要 AA 制。', 1, '2017-09-29 21:56:38', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (368, '如果你脸长得不好，就要健身。这样当别人再说你丑的时候，你就可以揍他了。', 1, '2017-09-29 21:56:39', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (369, '北漂多年后回到老家，母亲从厨房缓缓出来，手中拧着一壶茶，关切地对他说：“走累了，赶紧喝吧，这是娘泡的茶。”他脸一红，翘起兰花指接过了茶杯。', 1, '2017-09-29 21:56:40', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (370, '中国体育实力不需要也不应该以几块金牌作为衡量。选手没有拿到金牌甚至无缘奖牌，我们不应该批评他们，应该多一份包容。无论结果如何，只要过程精彩，便问心无愧，这才是我们应有的大国心态。——中国男足国奥队', 1, '2017-09-29 21:56:41', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (371, '心理学家曾说过：“一个人越炫耀什么，就越缺少什么。” 可我怎么觉得他们炫富的就是有钱，秀恩爱的就是有对象，晒景区的就是去旅游了呢。', 1, '2017-09-29 21:56:42', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (372, '朋友穷得要跳楼，我劝他不要自杀。他说：“说得轻巧，你换位思考看看！”我换位思考后对他说：“如果你像我这么有钱，你是不会自杀的。”', 1, '2017-09-29 21:56:43', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (373, '在喝咖啡，邻座一个美女戴着耳机听着音乐悠悠地哼唱。我惊讶地问道：“美女，有人说过你唱歌很好听吗？” 她不好意思地回答：“没有啦~” 于是我说：“那就不要唱。”', 1, '2017-09-29 21:56:44', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (374, '“喂，请问里有没有心脏病、高写压啊？” “没有啊，你哪位？” “里儿子在我手丧。”', 1, '2017-09-29 21:56:45', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (375, '“会游泳吗？” “会。” “那我就放心了。” “咋了？” “我脑子进水了。”', 1, '2017-09-29 21:56:46', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (376, '碰到飞机上有人携带炸弹的几率大概是600万分之一，那么，如何保障自己更安全的乘坐飞机呢？那就是：自己带一颗炸弹，一架飞机上有两个人同时携带炸弹的几率是亿万分之一，无限大的提高了自己的安全', 1, '2017-09-29 21:56:47', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (377, '下雨的时候我喜欢打伞在雨中漫步，用伞遮住头部，好惬意，仿佛整个世界只有你一人，直到我被一个骑摩托的给撞了。', 1, '2017-09-29 21:56:48', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (378, '姑娘，请尊重流氓这个职业，我讲个黄段子是想看你满脸羞红低头的样子，不是让你讲回一个更黄的。', 1, '2017-09-29 21:56:49', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (379, '一同事说他每年到八月十五准时拉肚子并且都要拉上好几天，而且狂泻不止。众人皆以为其灵异体质发生的灵异事件，后来另一个同事亲自和那同事过了次八月十五才发现：他吃月饼的时候喜欢把月饼切开，然后把随月饼附带的脱氧剂、干燥剂撕开，撒在上面...', 1, '2017-09-29 21:56:50', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (380, '女朋友可怜巴巴地问我：“我们为什么不能住贵一点的房子？”\n我说：“我们马上就要住贵房子了。房东说明天起给我们加房租。”', 1, '2017-09-29 21:56:51', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (381, '“亲爱的，我们再也回不去了！对不对？ ”\n我沉思片刻，一巴掌煽了过去：“你他妈又把钥匙锁屋里了？”', 1, '2017-09-29 21:56:52', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (382, '“儿子，娶了媳妇不要忘了娘。”\n“妈，你放心我会继续娘下去的。”', 1, '2017-09-29 21:56:53', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (383, '当年我成绩很差，老师和同学都嘲笑我，说我肯定考不上大学，以后只能去搬砖。我不服气，暗暗下定决心，起早贪黑，努力学习，成绩突飞猛进，终于考上了大学。读了土木工程，毕业后跑去搬砖。我就是要证明给他们看：搬砖是命中注定的，和考不考得上大学没关系！', 1, '2017-09-29 21:56:54', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (385, '都说川藏线上的藏民都是拦路抢劫的，其实还是好人多，有一次我开着霸道走川藏线去拉萨，路上压死了一只羊，淳朴的藏民非但没有难为我，还请我吃了一顿藏餐，最后亲自把我送到了火车站，现在想起来还是挺感动的。', 1, '2017-09-29 21:56:56', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (386, '一天，我正走在一座桥上，看见一个人站在桥边，正要跳下去。\n我跑上前去劝说“先生，不要跳下去！”\n那人问道：“为甚么？”\n我说：“有这么多美好的事物值得我们活着！”\n那人答：“比如说呢”\n我说：“你是无神论者还是有宗教信仰？”\n那人答：“我有宗教信仰。”\n我说：“我也是，你是佛教徒还是基督徒？”\n那人答：“基督教”\n我说：“我也是，你是罗马天主教徒还是新教徒？”\n那人答：“新教”\n我说：“我也是新教呢！你是圣公会还是浸信会？”\n那人答：“浸信会”\n我说：“太好啦！我也是浸信会，你是神的浸礼教会（Baptist Church of God）还是主的浸礼教会（Baptist Church of the Lord）? ”\n那人答：“神的浸礼教会。 ”\n我说：“真是太奇妙啦！我也是，那你是初始的的神的浸礼教会还是改革派的神的浸礼教会？”\n那人答：“改革派的”\n我说：“我也是，那你是1879年的改革派还是1915年改革派的？”\n那人答：“1915年的改革派。”\n我朝他屁股一脚，把他踢进海里，说：“异端！去死吧！”', 1, '2017-09-29 21:56:57', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (387, '公司新来一女同事，有一次我发现她喊我们老板喊爸爸，我就决定了要追求她，如果成功了我地位肯定节节高升。\n一周后我被以骚扰老板儿媳妇为名开除了公司。', 1, '2017-09-29 21:56:58', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (388, '警匪对峙十几个小时，气氛紧张，最终王警官率先笑场缓解了尴尬。', 1, '2017-09-29 21:56:59', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (389, '我们家对门的邻居，今年刚结婚的，这星期父母过来催他生小孩，他说现在不想生，生了会后悔。\n他爸说；生孩子怎么会后悔，我们当年也是结婚了马上生你，你看后悔了吗。\n儿子说：别催别催再催我这辈子都不生。\n他爸说：孽子啊真后悔生了你这么个孽子。', 1, '2017-09-29 21:57:00', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (391, '我的邻居凌晨两点过来敲门，说：“Dave，我他妈睡不着觉啊…”\n“那你可就走运了，” 我说，“我这儿开趴体呢，进来啊。”', 1, '2018-04-13 11:14:35', '2018-04-13 11:14:41');
INSERT INTO `qq_content` VALUES (392, '今天和老公吃饭的时候，我说：我怀孕了。结果老公一激动立马给他老爸打电话说：爸，你要当孙子了。', 1, '2018-04-13 11:15:19', '2018-04-13 11:15:22');
INSERT INTO `qq_content` VALUES (393, '有次贪玩天黑才回家。到家老妈没发火还给我留着饭菜，我有点内疚随便吃了点。老妈说：“一天没吃东西了吧，身体扛得住吗？”我：“嗯。”然后老爸提着鸡毛掸子出来了。', 1, '2018-04-13 11:15:54', '2018-04-13 11:15:56');
INSERT INTO `qq_content` VALUES (394, '初中时一个男生恶作剧，把几个同学锁在教室里，然后他在教室外面用手抓住窗户栏杆对我们说：\n“放我出去！放我出去！”\n那天之后我再看这个世界的角度就不同了。', 1, '2018-04-13 11:16:13', '2018-04-13 11:16:17');
INSERT INTO `qq_content` VALUES (395, '大街上看到一个人，他灿烂的笑容感染了我，我问他开心的秘诀是什么，他不说话只是笑。原来他是个傻子。', 1, '2018-04-13 11:16:56', '2018-04-13 11:17:00');
INSERT INTO `qq_content` VALUES (396, '起初，他们抓黑人，我没有说话，因为我不是黑人；接着，他们抓穆斯林，我没有说话，因为我不是穆斯林；后来，治安好了，他们不抓人了', 1, '2018-04-13 11:17:12', '2018-04-13 11:17:15');
INSERT INTO `qq_content` VALUES (397, '据说晚睡三个小时，你就会少活 180 分钟', 1, '2018-04-13 11:17:40', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (398, '有一位医生被残忍的杀害了，死前他用自己的血在地上写出了凶手的名字，案子 10 多年了还没有破案', 1, '2018-04-13 11:17:55', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (399, '昨天进了一个摄影群，看他们都在聊相机。镜头。光圈。感光度。索尼和尼康携手对抗佳能，吵得一地鸡毛，群主盘查我的身份，我说我用的是徕卡，于是一群人点赞！毒！德味儿！大师！学习了！群主崇敬地问我用的是徕卡哪个型号，我说华为P9，然后……我被踢了出来。', 1, '2018-04-13 11:18:21', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (400, '家里发生了火灾，我逃出来突然想到老婆还在里面。“别拦着我！让我进去，让我进去！”消防员对我说。', 1, '2018-04-13 11:18:52', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (401, '考试不及格，班主任叫我去办公室，他见到我第一句就说：你离傻子不远了。我很无奈的说：我不是有意的，是你叫我过来的。', 1, '2018-04-13 11:19:07', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (402, '平稳飞行的飞机突然一阵颠簸，乘客们都面露惊恐，这时广播响起：“各位乘客，刚才有一名精神病患者冲进驾驶舱，不过现在局面已经被及时控制住了咦嘻嘻诶嘿嘿嘿唔哈哈哈……”', 1, '2018-04-13 11:19:19', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (403, 'Paul Eastwick et al. (2006) 收集了九个国家的数据发现，一个男性在性别态度上越不平等，他就越看重女性的年轻美貌；反过来，一个女性在性别态度上越不平等，她就越看重男性的家产地位。\r\n在性别相对不平等的土耳其，女性看重男性赚钱潜力的程度是性别较为平等的芬兰的两倍。实际上，在今天的芬兰，男性比女性更加看重自己另一半的教育水平。', 1, '2018-05-31 19:36:18', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (404, '王警官为了告诉社区群众重金属的危害，当场用铅球砸死旁边的张老头。', 1, '2018-05-31 19:36:40', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (405, '我问我妻子：“如果我中了彩票的话，你会怎么办？”\r\n她嘲弄地说：“我会把彩票夺走，立刻收拾东西离开你，你这个酗酒又出轨的垃圾！”\r\n听到这句话，我拿出了我的彩票——“给你，你这个肥婆。拿着这十块钱过好日子去吧！门在那边！”', 1, '2018-05-31 19:36:59', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (406, '会打游戏的女生真的超酷。我去网吧找朋友，旁边的一个女生在带她男朋友打游戏，看得出来她男朋友是个新手，一直不停问她，她都会耐心回答，偶尔突然说一句「有人！」她男朋友就紧张的喊「哪里哪里」\r\n然后女生一波操作，过几秒后对她男朋友温柔的说：被我杀了。', 1, '2018-05-31 19:37:13', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (407, '朋友吃饭时旁边的婴儿一直哭，搞得我很烦。朋友看出了我的烦躁，说大家都不容易，让我尽量换位思考一下就能理解了。现在我坐在了婴儿车里，还是觉得有点烦。', 1, '2018-05-31 19:37:27', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (408, '小时候家里穷，没吃过草莓。有一次在路边看到有卖草莓的，我不敢开口说想吃，就问爸爸：“草莓甜吗？” 爸爸心领神会，把我带到草莓摊子前，问老板：“这草莓甜吗？” 摊主说：“可甜了！”\r\n我爸扭头对我说：“他说挺甜的。你还有别的问题吗？没有咱就走吧。”', 1, '2018-05-31 19:37:46', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (409, '说实话挺心酸的，十多年前在火车站我想喝水我爸带我去水龙头喝自来水。这件事我爸一直说想起来都特别后悔当时怎么不买瓶水，也就一块钱的事。\n同样的事也在我身上发生过，我女朋友来日本玩正好碰到篠山紀信照片展，她特别想去看。我当时穷学生一个没舍得出门票钱带她去美术馆门口拿了两张免费的主题明信片就走了。这件事一直激励着我要出人头地努力挣钱。', 1, '2018-05-31 19:38:18', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (410, '“物理学家费曼的妻子因病逝世的时候，他一滴眼泪也没掉。他看着妻子，觉得她就像睡着了一样。直到一个多月后，费曼在橡树城的一家商店里看见了一件漂亮的连衣裙，他想，“艾莲一定会喜欢的，”顿时不能自己，潸然泪下，失声痛哭。 ​​​​”', 1, '2018-05-31 19:38:39', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (411, '说花美就会有人说“也有不美的花”。预想到会有这种抱怨于是写“既有美丽的花也有不美的花”。这已经是废话了。让所有人都认同的文字称不上表达。表达需要勇气。——铃木光司', 1, '2018-05-31 19:39:30', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (412, '小学时学到圆周率，老师教到十位左右，我自认为背的很好，能背到小数点三十位。有天老师提问让背圆周率，我美滋滋的举手！还加了一句：我能背到30位，3.14159… 忘了！我又接上了我爸的手机号，我妈的手机号，我家的固定电话号，我的 QQ 号，背的实在没得说了，教室里响起了热烈的掌声，我自己差点都信了…', 1, '2018-08-01 20:02:52', '2018-08-01 20:02:57');
INSERT INTO `qq_content` VALUES (413, '一个肩上站着鹦鹉的黑人走进了酒吧。酒保看了看说：“很不错啊，在哪里买的？”“非洲。到处都是。”鹦鹉回答道。', 1, '2018-08-01 20:04:20', '2018-08-01 20:04:27');
INSERT INTO `qq_content` VALUES (414, '“群体总是被情绪驱使，越激烈的情绪越可能收到群体的欢迎...群体往往更关注情绪和情绪表达方式本身，而不在乎背后的证据、事实或逻辑。在激烈情绪的推动和传染下，群体非常敏感，并更倾向于尽快采取实际行动”——《乌合之众》', 1, '2018-08-01 20:04:37', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (415, '罗伯特·卡帕：“如果你拍得不够好，那是因为你靠得不够近。”', 1, '2018-08-01 20:05:05', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (416, '姐姐毕业后分到了我们市火车站做安检，我要开学了，准备去火车站坐车去学校。没想到是姐姐负责检查，她摸来摸去摸到了我口袋了的烟盒（全家人不知道我吸烟，也不让我吸烟）。\n姐姐：“这个方方的是什么拿出来看一下。”\n我：“烟… 烟盒”\n“啪！” 姐姐一巴掌打到我的脸上，很疼。\n后边进站的人都沸腾了…', 1, '2018-08-01 20:08:03', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (417, '今天去野外爬山（新疆的那种），半路我同学突然指着天空：嘤嘤嘤。我心想他妈一拳打死你个嘤嘤怪，结果另一个同学也在那嘤嘤嘤。我抬头一看，哦，天上确实有一只老鹰。', 1, '2018-08-01 20:20:52', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (418, '一家三口逛街，媳妇和孩子在前面逛，老公实在是不想逛，就在后面路边摊扔了十块钱买了一个假的金链子，快步走到媳妇跟前把链子攥在手里稍微露出一点，低声说：捡的，快走。三口就急急忙忙回家了……', 1, '2018-08-01 20:21:08', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (419, '一位数学家、一位物理学家、一位工程师走进酒吧，酒吧招待说：“您好，高斯教授。”', 1, '2018-08-01 20:21:21', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (420, '工作十年后的一个认识是：基本上整个社会都在欺骗和欺负年轻人。', 1, '2018-08-01 20:21:34', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (421, '一男一女正准备去一场聚会...\n女人：我穿这条裙子显胖吗？\n男人：不管我说什么，你都保证不会生气？\n女人：我保证。\n男人：我和你妹妹上床了。', 1, '2018-08-01 20:21:46', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (422, '有空一起吃鱼吧，你们都挺会挑刺的', 1, '2018-08-01 20:21:56', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (423, '麻木而冷漠的民众，是专制政体最稳固的群众基础。—— 黑格尔', 1, '2018-08-15 18:16:19', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (424, '今天在街上撞着前女友，实在不想停下来和她交谈，于是我就装作在打电话的样子。\n不料她径直冲我走来说：“你在假装打电话吧？”\n“抱歉稍等一下。” 我对不存在的通话对象说了一句，然后转向前女友：“说什么呢，当然没有，你凭什么说我假装打电话？”\n“你拇指在耳朵小指在嘴边……”\n', 1, '2018-08-15 18:17:07', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (425, '我时常逼迫我家的狗狗看那些小动物遭到虐待的公益广告，好让它知道自己有多身在福中不知福。', 1, '2018-08-15 18:17:22', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (426, '“要不是你穿的那么少，” 小张指责穿串的大爷，“我会点那么多吗？”', 1, '2018-08-15 18:17:43', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (427, '按照网上的教程做了透明小抄，仔细的贴在了可乐瓶上。\n结果一进考场老师就问我：“你这可乐瓶上有答案吧？”\n“啊，老师这你都能看出来？”\n“废话，谁他妈没事带一瓶 2.5 升的可乐来考试！”', 1, '2018-08-15 18:18:08', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (428, '准备出门旅游的小雷去买中国地图，他挑了几本，发现包装都有破损，好像被人拆开过，于是问老板：“有新的中国地图吗？我想要一本没有开封的。”\n“汉奸，你给我滚！” 老板生气地说，“开封自古以来就是中国领土不可分割的一部分！”', 1, '2018-08-15 18:18:39', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (429, '消费降级的新体现：我家旁边的西餐厅开始卖西红柿炒蛋盖饭', 1, '2018-08-15 18:18:51', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (430, '在看电视，侄女走过来生气的说：“姑姑，你偷看我的日记。”\n我笑说：“哟，你怎么知道我看你日记了？”\n侄女说：“我在你的日记里看到的！”', 1, '2018-08-15 18:19:04', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (431, '印第安人问他的酋长，今年冬天会不会很冷，酋长说应该会冷可以开始收集木头。但是酋长并不是很确定今年冬天到底冷不冷，就打电话给气象局，气象局说冬天会冷。酋长对族人，冬天会很冷，应该多收集木头。酋长过几天又打电话给气象局，答曰，会很冷。酋长让族人收集更多地木头。酋长第三次打电话，气象局说，今年冬天会非常非常冷，因为那些印第安人在疯狂地收集木头。', 1, '2019-02-02 00:04:15', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (432, '“就你这词汇量我觉得你四级要悲剧啊” \n“unpossible！”', 1, '2019-02-02 00:04:31', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (433, '男子捡到神灯，许下愿望：“我想要这辈子钱多得花不完。”\n灯神点点头：“你还可以活 10 秒。”', 1, '2019-02-02 00:04:58', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (434, '	因为远房的亲戚家办事去过一次山村，真正意义上的山村并不是山清水秀自然风光，路很难走，60 公里路要开三个小时。\n村里平时已经没有 39 岁以下的年轻人了，我看到目测最年轻的一个也快 50 了，他说以前打工东西蹦到眼睛里了，视力越来越不好，我站在他面前他也不知道我什么样子，已经没办法打工了。一辈子没结婚，身后的老房子灰暗破旧，但是可以看出青砖石坎的结构，很多地方还雕着花卉图案。\n另一户老人一辈子单身，无儿无女，家里唯一用电的是一个灯泡。他的房子和另一户并列在一个高坡上，另一个房子门户紧锁，贴着一副绿春联，老头说，那也是一个五保户，去年死了，绿春联还是村委会帮着贴的。\n下午的山村很宁静，除了偶尔远远的一点狗叫声基本没有任何声音，你可以听到自己深呼吸的声音。我在村里逛了一下午，看到一个白发干瘦的老太太，在自己房顶上用一把旧菜刀剁草，出去的时候，老太太就在剁，回来的时候，老太太还在剁。下午的阳光照射下来，我脑子里忽然想到，这阳光也撒到了几百公里外的市中心，那里喧嚣的声音和这里，仿佛是两个世界。这里周围没有其他任何声音，擦擦擦剁草的声音单调地重复着，周而复始。\n我有一种错觉，这个声音会一直持续下去，某一天，就和这个山村一起，彻底沉寂下去了。', 1, '2019-02-02 00:05:26', '0000-00-00 00:00:00');
INSERT INTO `qq_content` VALUES (435, '冬天，一个农民发现一条褐色的蛇冻僵了，于是他把放到自己怀里，第二天，农民立了一块板子“不准随地大小便”', 1, '2019-02-02 00:05:39', '0000-00-00 00:00:00');
COMMIT;

-- ----------------------------
-- Table structure for qq_user
-- ----------------------------
DROP TABLE IF EXISTS `qq_user`;
CREATE TABLE `qq_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `avatar` varchar(256) DEFAULT NULL,
  `openId` varchar(128) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of qq_user
-- ----------------------------
BEGIN;
INSERT INTO `qq_user` VALUES (1, 'smalldragonluo', '2017-09-29 18:50:41', '2018-05-05 17:27:24', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLJaB4BQbt1aRSdHskbXZpzQZylQSMsxpwFs8icKQw2yEx4WRuicNghRp9kAl3M43lGxGcqh7CzC2sA/132', 'oUtcC0RzJGa2UxLH2ugbZE2QMhJ4', NULL);
INSERT INTO `qq_user` VALUES (2, 'smalldragonluo', '2019-02-03 00:43:02', '2019-02-03 00:43:02', NULL, NULL, 'smaldragonluo@gmail.com');
COMMIT;

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `original_pic` varchar(256) DEFAULT NULL,
  `resource_rate` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
BEGIN;
INSERT INTO `test` VALUES (1, 'luo', NULL);
INSERT INTO `test` VALUES (2, 'luo', NULL);
INSERT INTO `test` VALUES (3, 'luo', NULL);
INSERT INTO `test` VALUES (4, 'luo', NULL);
INSERT INTO `test` VALUES (5, 'luo', 4);
COMMIT;

-- ----------------------------
-- Function structure for SPLIT_STR
-- ----------------------------
DROP FUNCTION IF EXISTS `SPLIT_STR`;
delimiter ;;
CREATE DEFINER=`root`@`%` FUNCTION `SPLIT_STR`(x VARCHAR(1024), delim VARCHAR(12), pos INT) RETURNS varchar(1024) CHARSET utf8
RETURN REPLACE(
			   SUBSTRING(
			 	   SUBSTRING_INDEX(x, delim, pos),
           LENGTH(SUBSTRING_INDEX(x, delim, pos -1)) + 1
			 	 ),
         delim,
				 ''
			 );
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
