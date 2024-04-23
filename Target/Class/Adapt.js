#!/usr/bin/env node
var e=new(await import("commander")).Command().name("Adapt").version("0.0.1").description("\u{1F50C}\u2001Adapt.").argument("<File...>","File.").action((await import("../Function/Adapt.js")).default).parse();export{e as default};
