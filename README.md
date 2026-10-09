# EZTor SRS Core

> A tiny, dependency-free spaced-repetition engine for vocabulary apps, flashcards, and study tools.

[English](README.md) · [中文](README.zh-CN.md)

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](./src/srs.ts) [![Tests](https://img.shields.io/badge/tests-Vitest-6e9f18)](./tests/srs.test.ts) [![License](https://img.shields.io/badge/license-GPL--3.0-green)](./LICENSE)

EZTor SRS Core is the small piece of the EZTor learning platform that decides when a learner should see a card again. It keeps the model intentionally understandable: repetitions, interval, ease, lapses, and due date.

## Live demo

[Open the interactive demo](https://bailipa.github.io/eztor-srs-core/) · [Try the examples](examples/)

## Install or copy

The core is one TypeScript file with no runtime dependencies. Copy [`src/srs.ts`](src/srs.ts) into your project or publish it through your preferred package registry.

```ts
import { applyReview, SRS_DEFAULTS } from './srs'
const next = applyReview(SRS_DEFAULTS, true)
console.log(next.intervalDays) // 1
```

## Behavior

- Correct reviews progress through 1, 2, 4, 7, 15, and 30+ day intervals.
- Incorrect reviews reset repetitions and schedule a 10-minute relearning step.
- Ease never drops below 1.3.
- The function is pure with respect to the supplied state and clock.

## Run tests

```bash
npm install
npm test
```

## Design notes

This is a practical SM-2-inspired model, not a claim of psychological precision. Its value is predictability, easy integration, and a small surface area that teams can adapt to their own review UX.

## License

GPL-3.0. See [`LICENSE`](LICENSE).
