# 🔌 [Adapt]

Playform Adapt allows you to choose a strategy when using peer dependencies in
upstream or downstream packages.

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
