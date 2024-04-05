#!/usr/bin/env node

/**
 * @module Adapt
 *
 */
export default new (await import("commander")).Command()
	.name("Adapt")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1")
	.description("🔌 Adapt.")
	.action((await import("../Function/Adapt.js")).default)
	.parse();
