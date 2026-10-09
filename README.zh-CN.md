# EZTor SRS Core

> 面向词汇、闪卡和学习应用的轻量级 TypeScript 间隔重复算法核心。

[English](README.md) · 中文

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](./src/srs.ts) [![测试](https://img.shields.io/badge/测试-Vitest-6e9f18)](./tests/srs.test.ts) [![许可证](https://img.shields.io/badge/许可证-GPL--3.0-green)](./LICENSE)

EZTor SRS Core 是 EZTor 学习平台中负责安排复习时间的独立模块。它只保留几个容易理解的状态：连续答对次数、复习间隔、难度系数、遗忘次数和下次复习时间。

## 在线 Demo

[打开交互式 Demo](https://bailipa.github.io/eztor-srs-core/) · [查看示例](examples/)

## 使用方式

核心实现只有一个 TypeScript 文件，没有运行时依赖。可以直接复制 [`src/srs.ts`](src/srs.ts)，也可以按自己的包管理方式发布。

```ts
import { applyReview, SRS_DEFAULTS } from './srs'
const next = applyReview(SRS_DEFAULTS, true)
console.log(next.intervalDays) // 1
```

## 行为规则

- 答对后，复习间隔依次经过 1、2、4、7、15 天，并逐步增长到 30 天以上。
- 答错后会重置连续进度，并在 10 分钟后进入重新学习。
- 难度系数不会低于 1.3。
- 在传入相同状态和时间时，计算结果可预测，方便测试和接入不同的界面。

## 运行测试

```bash
npm install
npm test
```

## 设计说明

这是一个受 SM-2 启发的实用模型，不宣称能够精确描述人的记忆。它的重点是规则透明、接入简单，并且方便不同团队根据自己的复习体验进行调整。

## 许可证

GPL-3.0，详见 [`LICENSE`](LICENSE)。
