webpackJsonp([10],{"7QXF":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("nVM5"),s=t("NiC8"),i=t("VU/8")(o.a,s.a,!1,null,null,null);i.options.__file="pages/MyTodo.vue",e.default=i.exports},NiC8:function(n,e,t){"use strict";var o=function(){var n=this.$createElement;return(this._self._c||n)("pre",[this._v("通用\n1. 任务后台日志，每天分割，方便查询；再测试上看\n2. redis 自动开机启动 - 大发配置到启动脚本\n3. 后台服务程序 browserify 打包，带 .map 文件\n4. git 从最后版本外借 - done\n5. 行销获取地理信息\n6. 地图 websocket\n7. CAS proxy\n8. https 服务\n9. rxjs\n10. https 服务\n\n开发\n1. webpack — watch 模式\n2. webpack https 模式\n3. eslint/prettier 完全 project local into git, 全面启用 vsc 开发 vue 应用，已有项目全面 lint —fix\n4. webpack/browserify 打包 node 应用，要求静态包含\n5. pm2 deploy environment - done\n\n行销\n1. 纳入标准地址合规 - 带验证东旭代码\n2. 统一登录 - done\n3. 地址资源校验不过可继续做\n4. 派工组件默认收起\n5. 48 纳入带原有产品: 一次机会confirm保持 - done\n6. 意向单过来带产品活动锁定 -\n7. 甩单带意向单发展人 - done\n8. 竞争资费小区预提交带上 - done\n9. bss 整体纳入带标准地址，仿照单成员纳入写入标准地址选择 - done\n10. 延伸服务照片 - done\n11. 意向单已缴纳活动费用情形的收费正式提交支持 - planning\n\n任务管理\n1. 前台进度跟踪出错，每过三秒自动重试，重试三次；确保任务能抵达\n2. 任务消息时间戳，前台给出时间，后台直接使用，入库直接使用，国信直接使用；格式进行匹配，oracle 格式，国信格式\n3. 取 iom 工单 sql null 问题解决\n4. 测试导致连接池因异常出现未释放的问题\n5. redis 并发使用，监听队列模式下的并发问题\n6. 给中兴接口修改 appointment - done\n\n意向单\n1. 意向单静态文件服务从 18003 服务拿出来 - done\n2. 从地图过来的 138 写死部分不被覆盖 - done\n\nmap10010\n1. 地图集成行销，自动登录，方便设置10010/114工号发展人 - done\n2. 检测会话丢失后，报会话丢失，然后清理本地会话，要求重新登录；并且停止连续后台调用序列\n\nproxy\n1. 出现会话丢失异常时，没有返回 cors 头\n2. 服务器端配置代理\n3. 可以配置每个路径，代理到哪个服务节点\n4. 可以配置每个服务端点，按照 env 配置多套\n5. token 化\n\nmbss-mock-server\n\n地图工作概览\n1. 行销app上登录和其他事件自动获取手机位置\n2. 在地图上显示全部的行销经理的前位置\n3. 在地图上显示全部的意向单的位置(小区，或者地址)\n4. 意向单图标上标记从提交意向到当前的时间，是否派工到查看，进度\n5. 意向单列表上带有如果办理形成的月收入，如 138；列表汇总\n6. 动态实时反馈上述信息\n7. 展示离意向地址最近的行销经理，带上该经理在途的意向任务数量\n8. 行销经理可以看到离自己最近的意向单，并参考意向单预约时间\n9. 为客户提供网页，客户不用倒厅，就有行销经理可以咨询和上门办理\n\n")])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},nVM5:function(n,e,t){"use strict";e.a={head:{title:"todo",meta:[{hid:"description",name:"description",content:"all my todos by classes"}]}}}});