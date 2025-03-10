import type Interface from "../Interface/Adapt.js";

/**
 * @module Adapt
 *
 */
export default (async (...[_File]) => {}) satisfies Interface as Interface;

export const { default: Exec } = await import("@Function/Exec.js");

export const { resolve } = await import("node:path");

export const Pipe: string[] = [];

export const Current = (await import("node:url")).fileURLToPath(
	(await import("node:path")).dirname(import.meta.url),
);
