import type Interface from "../Interface/Adapt.js";

/**
 * @module Adapt
 *
 */
export default (async (
	...[_File]
) => {}) satisfies Interface as Interface;

export const { default: Exec } = await import("@Function/Exec.js");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url),
);
