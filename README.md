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
`config.toml` example

```toml
title = 'Hugo Theme Windy'
baseURL = 'https://example.org/'

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


[[menu.main]]
  name = "About"
  identifier = "about"
  weight = 2
  url = "/about"

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

[services]
  [services.disqus]
    shortname = 'your-disqus-shortname'
  [services.googleAnalytics]
    ID = 'G-MEASUREMENT_ID'

[module]
  [module.hugoVersion]
    extended = true
    min = "0.116.0"
```

## License
This code is licensed under [Apache-2.0](https://github.com/zEttOn86/hugo_theme_windy/blob/main/LICENSE)

> This theme is inspired by [hugo-theme-tailwind](https://github.com/tomowang/hugo-theme-tailwind/tree/main)

## Author
[zEttOn86](https://zetton86.github.io/)