# CGPT-Backup

## Development

To develop this project run

```bash
  npm install
```

```bash
  npm run dev:<chrome|firefox>
```

### Available Commands

| Commands | Description |
| --- | --- |
| `npm run dev:chrome` | build extension for chrome, watch file changes |
| `npm run dev:firefox` | build extension for firefox, watch file changes |
| `npm run build:chrom` | generate release version for chrome |
| `npm run build:firefox` | generate release version for firefox |
| `npm run docs` | generate source code docs |
| `npm run clean` | remove temporary files |
| `npm run test` | run unit tests |
| `npm run sync` | update config files |

For CLI instructions see [User Guide &rarr;](https://oss.mobilefirst.me/extension-cli/)

### Learn More

**Extension Developer guides**

- [Getting started with extension development](https://developer.chrome.com/extensions/getstarted)
- Manifest configuration: [version 2](https://developer.chrome.com/extensions/manifest)
    - [version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Permissions reference](https://developer.chrome.com/extensions/declare_permissions)
- [Chrome API reference](https://developer.chrome.com/docs/extensions/reference/)

**Extension Publishing Guides**

- [Publishing for Chrome](https://developer.chrome.com/webstore/publish)
- [Publishing for Firefox](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
