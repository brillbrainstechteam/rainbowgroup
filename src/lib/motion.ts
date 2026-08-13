/**
 * Shared motion primitives.
 *
 * `EASE_OUT` must be annotated as a fixed 4-tuple: a bare `[0.22, 1, 0.36, 1]`
 * literal widens to `number[]`, which Framer Motion's `Easing` type rejects and
 * which fails the production type check (it passes in dev).
 */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
