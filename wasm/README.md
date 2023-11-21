本库实现了与`python` `zlib.crc32`相同计算CRC校验值结果,主要移值于node web deno

## 编译

1. 编译成deno

`wasm-pack build --target deno `

2. 编译成web npm模块

`wasm-pack build  `

3. 编译成node

`wasm-pack build --target nodejs `

4. 编译成浏览器fetch加载

`wasm-pack build  --target web `


## 相关资料

1. wasm-pack 

https://rustwasm.github.io/docs/wasm-pack/

2. wasm-bindgen

https://github.com/rustwasm/wasm-bindgen