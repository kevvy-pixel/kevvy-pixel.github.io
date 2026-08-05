---
title: 道路结构沉降监测与塌陷早期预警
published: 2026-07-20
pinned: true
description: 融合 FBG 传感网络、温度补偿 iFEM 与运动学约束神经场，从应变观测反演路面响应，为道路塌陷早期预警提供可解释的算法链路。
tags: [FBG, iFEM, Neural Field, Structural Health Monitoring]
category: 智能感知
image: /assets/images/sensing-cover.svg
author: 肖闫可唯
comment: false
---

## 项目概述

本项目面向道路结构沉降监测与塌陷预警，探索如何将 **FBG（光纤布拉格光栅）传感器**采集的应变数据，转化为具有工程意义的路面响应与风险信号。我作为核心成员，主要负责算法设计、数据清洗、反演建模和程序实现。

## 技术路线

1. 对多通道 FBG 应变序列进行异常点识别、同步与清洗；
2. 设计集成温度补偿模块的改进型 iFEM（逆有限元）反演算法，处理温度场与应变场耦合；
3. 将运动学约束引入神经场，学习连续的路面响应表示；
4. 在多工况加载实验中验证响应重构与参数识别能力。

## 阶段成果

- 完成算法核心模块的 MATLAB 编写、调试与参数优化；
- 论文 *FBG Sensor Network-Based Structural Response Modeling and Parameter Identification of Multi-layered Asphalt Pavements* 已投稿至 *Sensors and Actuators: A. Physical*，处于同行评审阶段；
- 受邀在香港理工大学 SMLLM 2026 国际研讨会上报告 *FBG-Based Pavement Response Inversion With a Kinematics-Constrained Neural Field for Early Sinkhole Warning*。

## 我的工作

项目中最关键的工作不是单一模型精度，而是把传感数据、物理约束与工程解释连接成一条稳定链路。我重点处理温度补偿与应变反演耦合问题，并围绕可复现实验流程组织代码，使模型结果能够被后续预警模块直接使用。
