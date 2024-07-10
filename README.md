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
- katex

## Installation
```bash
$ cd themes
$ git submodule add https://github.com/zEttOn86/hugo_theme_windy.git
$ cd ..
$ npm install themes/hugo_theme_windy
```

## Usage (Configuration)
`config.toml` example.
This file is included in exampleSite folder as hugo.toml.

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

[params]
  comments = true
  math = true

  # Show table of contents at the top of your posts (defaults to false)
  # Alternatively, add this param to post front matter for specific posts
  toc = true

  favicon = "/images/favicon.ico"

  # dir name of your blog content (default is `content/posts`).
  # the list of set content will show up on your index page (baseurl).
  contentTypeName = "posts"

  # SEO keywords and description for your site.
  keywords = "hugo, tailwind, tailwindcss, hugo theme, hugo theme tailwind"

  description = "Website based on tailwindcss"

  author = "zEttOn86"

# Edit if you want to add items to the navigation bar.
[[menu.main]]
  name = "About"
  identifier = "about"
  weight = 2
  url = "/about"

[[menu.main]]
  name = "Archive"
  identifier = "archives"
  weight = 4
  url = "/archives"

# Basically, the following items do not need to be edited.
[markup]
  [markup.highlight]
    # lineNos = true
    noClasses = false
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
    [markup.goldmark.extensions]
      [markup.goldmark.extensions.cjk]
        enable = true
        eastAsianLineBreaks = true
        escapedSpace = true
      [markup.goldmark.extensions.passthrough]
        enable = true
        [markup.goldmark.extensions.passthrough.delimiters]
          block = [['\[', '\]'], ['$$', '$$']]
          inline = [['\(', '\)']]

# Edit the following if you want to enable comment fields by Disqus.
[services]
  [services.disqus]
    shortname = 'your-disqus-shortname'
  [services.googleAnalytics]
    ID = 'G-MEASUREMENT_ID'

[privacy]
    [privacy.googleAnalytics]
      disable = true

[module]
  [module.hugoVersion]
    extended = true
    min = "0.116.0"
  [[module.mounts]]
    source = '../node_modules/mathjax' # Must specify a proper directory for node_modules.
    target = 'assets/mathjax'
  [[module.mounts]]
    source = '../node_modules/@fortawesome/fontawesome-free'
    target = 'assets/fontawesome'

```

## License
This code is licensed under [Apache-2.0](https://github.com/zEttOn86/hugo_theme_windy/blob/main/LICENSE)

> This theme is inspired by [hugo-theme-tailwind](https://github.com/tomowang/hugo-theme-tailwind/tree/main)

## Author
[zEttOn86](https://zetton86.github.io/)