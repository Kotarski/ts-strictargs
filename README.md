# ts-strictargs
Provides types to specify how arguments are checked

# Included
```Typescript
/** Checks B is a subset of A and returns B */
type Subset<A extends any, B extends any>

/** Checks B is a superset of A and returns B */
type Superset<A extends any, B extends any>

/** Checks B is exactly A and returns B */
type Strict<A extends any, B extends any>

/** Checks and returns the union of A and B */
type Loose<A extends {}, B extends {}>
```
# Usage
* ```|b?: XXX``` indicates where behaviour would differ if BaseOptions.b was optional
```Typescript
type BaseOptions = { a: string, b: number }

const options0 = { a: "hi", b: 4 }
const options1 = { a: 5, b: 4 }
const options2 = { a: "o", b: "hello" }
const options3 = { a: "o" }
const options4 = { b: 4 }
const options5 = { a: "o", b: 4, c: 5 }

const noMore = <T extends Subset<BaseOptions, T>>(options: T) => { }
noMore(options0)   //Fine
noMore(options1)   //Error 
noMore(options2)   //Error
noMore(options3)   //Fine
noMore(options4)   //Fine
noMore(options5)   //Error

// Checks there are not less properties (More fine, Not Less)
const noLess = <T extends Superset<BaseOptions, T>>(options: T) => { }
noLess(options0)   //Fine
noLess(options1)   //Error
noLess(options2)   //Error
noLess(options3)   //Error  |b?: Fine
noLess(options4)   //Error
noLess(options5)   //Fine


const strict = <T extends Strict<BaseOptions, T>>(options: T) => { }
strict(options0)   //Fine
strict(options1)   //Error
strict(options2)   //Error
strict(options3)   //Error  |b?: Fine
strict(options4)   //Error
strict(options5)   //Error

const loose = <T extends Loose<BaseOptions, T>>(options: T) => { }
loose(options0)   //Fine
loose(options1)   //Error
loose(options2)   //Error
loose(options3)   //Fine
loose(options4)   //Fine
loose(options5)   //Fine
```
# Install
[https://www.npmjs.com/package/ts-strictargs](https://www.npmjs.com/package/ts-strictargs)
```
$ npm install --save-dev ts-strictargs
```
