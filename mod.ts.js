
import { crc32fast } from "./wasm/crc32_wasm.js";
export function crc32(text){
   return  crc32fast(text)
};
