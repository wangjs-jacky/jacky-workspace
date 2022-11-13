---
group:
  title: canvas
  order: 5
---

# Rough 基础上手

## 基础图形：圆、方、线

<code src="./demo01.tsx">

## 填充色

默认采用改的是 `hachure` 填充模式，可控制 `线宽(fillWeight)` 、 `旋转角度(hachureAngle)`、`间隙(hachureGap)`

<code src="./demo02.tsx">

除了默认的 `hachure` 模式，还有：`solid`, `zigzag`, `cross-hatch`, `dots`, `sunburst`, `dashed`, 以及 `zigzag-line`。

<code src="./demo03.tsx" >

## 支持控制的参数

以下部分来源于： `roughjs/bin/canvas.d.ts` 文件

```typescript | pure
import { Point } from './geometry';
import { Random } from './math';
export declare const SVGNS = 'http://www.w3.org/2000/svg';
export interface Config {
  options?: Options;
}
export interface DrawingSurface {
  width: number | SVGAnimatedLength;
  height: number | SVGAnimatedLength;
}
export interface Options {
  maxRandomnessOffset?: number;
  roughness?: number;
  bowing?: number;
  stroke?: string;
  strokeWidth?: number;
  curveFitting?: number;
  curveTightness?: number;
  curveStepCount?: number;
  fill?: string;
  fillStyle?: string;
  fillWeight?: number;
  hachureAngle?: number;
  hachureGap?: number;
  simplification?: number;
  dashOffset?: number;
  dashGap?: number;
  zigzagOffset?: number;
  seed?: number;
  strokeLineDash?: number[];
  strokeLineDashOffset?: number;
  fillLineDash?: number[];
  fillLineDashOffset?: number;
  disableMultiStroke?: boolean;
  disableMultiStrokeFill?: boolean;
  preserveVertices?: boolean;
  fixedDecimalPlaceDigits?: number;
}
export interface ResolvedOptions extends Options {
  maxRandomnessOffset: number;
  roughness: number;
  bowing: number;
  stroke: string;
  strokeWidth: number;
  curveFitting: number;
  curveTightness: number;
  curveStepCount: number;
  fillStyle: string;
  fillWeight: number;
  hachureAngle: number;
  hachureGap: number;
  dashOffset: number;
  dashGap: number;
  zigzagOffset: number;
  seed: number;
  randomizer?: Random;
  disableMultiStroke: boolean;
  disableMultiStrokeFill: boolean;
  preserveVertices: boolean;
}
export declare type OpType = 'move' | 'bcurveTo' | 'lineTo';
export declare type OpSetType = 'path' | 'fillPath' | 'fillSketch';
export interface Op {
  op: OpType;
  data: number[];
}
export interface OpSet {
  type: OpSetType;
  ops: Op[];
  size?: Point;
  path?: string;
}
export interface Drawable {
  shape: string;
  options: ResolvedOptions;
  sets: OpSet[];
}
export interface PathInfo {
  d: string;
  stroke: string;
  strokeWidth: number;
  fill?: string;
}
```

## 还支持 SVG 模式

<code src="./demo05.tsx">
