import { crc32 } from "../mod.ts.js";

Deno.test({
  name: "crc32_test",
  fn: async () => {
  let s =   crc32("hello world")
    console.log(s);
  },
});
