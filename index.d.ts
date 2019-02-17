/**
 * Checks B is a subset of A and returns B
 * @example const noMore = <T extends Subset<BaseOptions, T>>(options: T) => { }
 */
export type Subset<A extends any, B extends any> = {
   [P in keyof B]: P extends keyof A ? (B[P] extends A[P] | undefined ? A[P] : never) : never;
}

/**
 * Checks B is a superset of A and returns B
 * @example const noLess = <T extends Superset<BaseOptions, T>>(options: T) => { }
 */
export type Superset<A extends any, B extends any> = Subset<B, A>;

/**
 * Checks B is exactly A and returns B
 * @example const strict = <T extends Strict<BaseOptions, T>>(options: T) => { }
 */
export type Strict<A extends any, B extends any> = Subset<A, B> & Superset<A, B>;

/**
 * Checks and returns the union of A and B
 * @example const loose = <T extends Loose<BaseOptions, T>>(options: T) => { }
 */
export type Loose<A extends {}, B extends {}> = Subset<A, B> | Superset<A, B>;