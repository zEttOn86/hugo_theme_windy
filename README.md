# Hugo Theme Windy
Simple blog theme for [HUGO](https://gohugo.io/).

demo: https://zetton86.github.io/hugo_theme_windy/

## Screenshot
![screenshot](https://raw.githubusercontent.com/zEttOn86/hugo_theme_windy/main/images/screenshot.png)

## Features
- responsive
- dark
- table of contents
- json-ld
- MathJax

## Getting Started

### Prerequirements
- hugo extended >= v0.128.2
- Node.js
  - cf. [Installing Node.js via package manager | Node.js](https://nodejs.org/en/download/package-manager/)

### Create a site with exampleSite
```bash
$ git clone https://github.com/zEttOn86/hugo_theme_windy.git
$ cd hugo_theme_windy
$ npm install
$ make dev
```
Access the following site.
- [http://localhost:1313/](http://localhost:1313/)


### Customize a site with this theme
```bash
$ cd themes
$ git submodule add https://github.com/zEttOn86/hugo_theme_windy.git
$ cd ..
$ npm install themes/hugo_theme_windy
$ cp -r themes/hugo_theme_windy/static \
        themes/hugo_theme_windy/assets \
        themes/hugo_theme_windy/i18n \
        themes/hugo_theme_windy/layouts \
        themes/hugo_theme_windy/exampleSite/config \
        .
```

Edit the `module.mounts` section in `config/_default/hugo.toml` to specify a proper `node_modules` directory. 

Example:
```diff
[[module.mounts]]
-    source = '../node_modules/mathjax' # Must specify a proper directory for node_modules.
+    source = 'node_modules/mathjax'
    target = 'assets/mathjax'
```

Finaly, run the following command to confirm your site
```bash
hugo server
```

## Usage (Configuration)

### Basic configuration
Please edit the `config/_default/hugo.toml` to change blog title.

```toml
title = 'Hugo Theme Windy'              # To change the blog title.
baseURL = 'https://example.org/'        # To change the base address

copyright = "2024. zEttOn86 - All rights reserved."
languageCode = 'ja-JP'
defaultContentLanguage = "en"
hasCJKLanguage = true
enableInlineShortcodes = true
enableRobotsTXT = true
enableEmoji = true
enableGitInfo = true
theme = "hugo_theme_windy"

...

# Edit the following if you want to enable comment fields by Disqus.
[services]
  [services.disqus]
    shortname = 'your-disqus-shortname'
  [services.googleAnalytics]
    ID = 'G-MEASUREMENT_ID'

[privacy]
    [privacy.googleAnalytics]
      disable = true
...
```

### Other Configurations
Please checkt the following files.
- `config/_default/params.toml`
- `config/_default/menus/`


## License
This code is licensed under [Apache-2.0](https://github.com/zEttOn86/hugo_theme_windy/blob/main/LICENSE)

> This theme is inspired by [hugo-theme-tailwind](https://github.com/tomowang/hugo-theme-tailwind/tree/main)

## Author
[zEttOn86](https://zetton86.github.io/)