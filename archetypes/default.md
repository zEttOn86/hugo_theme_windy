---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
publishdate: {{ .Date }}
categories: [""]
tags: [""]
archives: ["{{ dateFormat "2006/01" .Date }}"]
images: ["/images/blog/"]
keywords: [""]
description: ""
draft: true
comments: true
---
