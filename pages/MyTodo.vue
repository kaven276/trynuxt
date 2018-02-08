<template>
<pre>
通用
1. 任务后台日志，每天分割，方便查询；再测试上看
2. redis 自动开机启动 - 大发配置到启动脚本
3. 后台服务程序 browserify 打包，带 .map 文件
4. git 从最后版本外借 - done
5. 行销获取地理信息
6. 地图 websocket
7. CAS proxy
8. https 服务
9. rxjs
10. https 服务

开发
1. webpack — watch 模式
2. webpack https 模式
3. eslint/prettier 完全 project local into git, 全面启用 vsc 开发 vue 应用，已有项目全面 lint —fix
4. webpack/browserify 打包 node 应用，要求静态包含
5. pm2 deploy environment - done

行销
1. 纳入标准地址合规 - 带验证东旭代码
2. 统一登录 - done
3. 地址资源校验不过可继续做
4. 派工组件默认收起
5. 48 纳入带原有产品: 一次机会confirm保持 - done
6. 意向单过来带产品活动锁定 -
7. 甩单带意向单发展人 - done
8. 竞争资费小区预提交带上 - done
9. bss 整体纳入带标准地址，仿照单成员纳入写入标准地址选择 - done
10. 延伸服务照片 - done
11. 意向单已缴纳活动费用情形的收费正式提交支持 - planning

任务管理
1. 前台进度跟踪出错，每过三秒自动重试，重试三次；确保任务能抵达
2. 任务消息时间戳，前台给出时间，后台直接使用，入库直接使用，国信直接使用；格式进行匹配，oracle 格式，国信格式
3. 取 iom 工单 sql null 问题解决
4. 测试导致连接池因异常出现未释放的问题
5. redis 并发使用，监听队列模式下的并发问题
6. 给中兴接口修改 appointment - done

意向单
1. 意向单静态文件服务从 18003 服务拿出来 - done
2. 从地图过来的 138 写死部分不被覆盖 - done

map10010
1. 地图集成行销，自动登录，方便设置10010/114工号发展人 - done
2. 检测会话丢失后，报会话丢失，然后清理本地会话，要求重新登录；并且停止连续后台调用序列

proxy
1. 出现会话丢失异常时，没有返回 cors 头
2. 服务器端配置代理
3. 可以配置每个路径，代理到哪个服务节点
4. 可以配置每个服务端点，按照 env 配置多套
5. token 化

mbss-mock-server

地图工作概览
1. 行销app上登录和其他事件自动获取手机位置
2. 在地图上显示全部的行销经理的前位置
3. 在地图上显示全部的意向单的位置(小区，或者地址)
4. 意向单图标上标记从提交意向到当前的时间，是否派工到查看，进度
5. 意向单列表上带有如果办理形成的月收入，如 138；列表汇总
6. 动态实时反馈上述信息
7. 展示离意向地址最近的行销经理，带上该经理在途的意向任务数量
8. 行销经理可以看到离自己最近的意向单，并参考意向单预约时间
9. 为客户提供网页，客户不用倒厅，就有行销经理可以咨询和上门办理

</pre>
</template>

<script>
export default {
  head: {
    title: 'todo',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'all my todos by classes',
      },
    ],
  },
};
</script>
