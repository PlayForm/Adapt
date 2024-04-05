/**
 * @module Adapt
 *
 */
export default (async (
	...[]: Parameters<Interface>
) => {}) satisfies Interface as Interface;

import type Interface from "@Interface/Document.js";

export const { default: Exec } = await import("@Function/Exec.js");

export const { resolve } = await import("path");

export const Pipe: string[] = [];

export const Current = (await import("url")).fileURLToPath(
	(await import("path")).dirname(import.meta.url)
);
