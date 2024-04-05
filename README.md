# 🔌 [Adapt]

`Adapt` tweaks your `package.json` before installing dependencies. It gives you
the option to choose how to deal with a `peerDependency` used in other packages
connected either upstream or downstream. This helps avoid any clashes or
inconsistencies in how dependencies are handled.

## Installation

To install `Adapt`, run the following from your project directory and follow the
prompts:

Using NPM:

```sh
npx astro add @playform/adapt
```

Using Yarn:

```sh
yarn astro add @playform/adapt
```

Using PNPM:

```sh
pnpx astro add @playform/adapt
```

## Getting started

Place `Adapt` in your `package.json` `dependencies` and configure the
`preinstall` hook like so:

```json
{
	"scripts": {
		"preinstall": "Adapt"
	},
	"dependencies": {
		"@playform/adapt": "0.0.1"
	}
}
```

[Adapt]: https://npmjs.org/@playform/adapt

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this component.
