<p align="center">
<img width="620px" alt="hel-logo"  src="https://user-images.githubusercontent.com/7334950/186912479-463a6788-41fd-474d-83ed-08314909d70d.png" />
</p>

## [Doc](https://tnfe.github.io/hel)

**hel-micro**, 模块联邦 sdk 化，免构建、热更新、工具链无关的微模块方案

see doc： https://tnfe.github.io/hel

## 文章
1. [hel-micro 模块联邦新革命](https://juejin.cn/post/7138792768234586148)

2. [使用hel-micro制作远程antd、tdesign-react](https://juejin.cn/post/7150639599499509797)

## 视频
1. [本地调试简介](https://www.bilibili.com/video/BV1pt4y1J7g9/?vd_source=51bc50bf5f860e0d778c49b00d192cee)

## Demo

### 载入远程 js 库

codesandbox[示例](https://codesandbox.io/s/hel-lodash-zf8jh8)，远程 js 库[仓库模板](https://github.com/hel-eco/hel-tpl-remote-lib)

### 载入远程 react 组件

codesandbox[示例](https://codesandbox.io/s/demo-load-remote-react-comp-2bnpl0)，远程 react 组件[js 仓库模板](https://github.com/hel-eco/hel-tpl-remote-react-comp)，[ts 仓库代码](https://github.com/hel-eco/hel-tpl-remote-react-comp-ts)

### 载入远程 vue 组件

codesandbox[示例](https://codesandbox.io/s/demo-load-remote-vue-comp-st0295)，远程 vue 组件[js 仓库模板](https://github.com/hel-eco/hel-tpl-remote-vue-comp)

> 组件运行代码托管在 [unpkg](https://unpkg.com/hel-tpl-remote-vue-comps@1.1.3/hel_dist/index.html) 和 [git.io](https://hel-eco.github.io/hel-tpl-remote-vue-comp/index.html), 被 codesandbox 示例使用`hel-micro`动态载入

## Why hel-micro

![image](https://tnfe.gtimg.com/image/v3qm5w72nl_1659770977424.png)

### 如何使用远程模块

仅需要一句 npm 命令即可载入远程模块，查看下面例子[线上示例](https://codesandbox.io/s/hel-lodash-zf8jh8?file=/src/App.js)

- 1 安装`hel-micro`

```bash
npm i hel-micro
```

- 2 惰性加载远程模块

示例：调用`hel-lodash` 模块的方法

```ts
import { preFetchLib } from 'hel-micro';
async function ran(seed) {
  const mod = await preFetchLib('hel-lodash'); // 首次加载触发模块下载，之后会从hel-micro缓存获取
  const num = mod.myUtils.num.random(500);
  return num;
}
```

- 3 预加载远程模块

示例：静态导入`hel-lodash`后调用其模块方法

安装`hel-lodash`

```bash
npm i hel-lodash
```

先执行模块拉取动作

```ts
import { preFetchLib } from 'hel-micro';

async function main() {
  await preFetchLib('hel-lodash');
  await import('./loadApp'); // 入口文件后移
}

main().catch(console.error);
```

在入口文件里关联的任意文件处静态导入`hel-micro`并调用模块方法

```ts
import m from 'hel-lodash';
console.log(m.myUtils.num.random(500);) // 获得随机数
```

## [hel-micro](packages/hel-micro)

前端微件化 sdk，基于 hel-micro 可实现跨项目共享代码、模块热更新、微前端架构等功能

## [hel-micro-react](packages/hel-micro-react)

依赖 hel-micro 基础 api 实现的 react 组件加载库
