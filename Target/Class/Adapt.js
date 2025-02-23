#!/usr/bin/env node
var e=new(await import("commander")).Command().name("Adapt").version("0.0.1").description("Adapt\u2001\u{1F50C}").argument("<File...>","File\u2001\u{1F4DD}").action((await import("../Function/Adapt.js")).default).parse();export{e as default};
