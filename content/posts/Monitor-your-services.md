---
title: Monitor your services
date: 2024-01-01T22:00:00.000Z
author: Leon
authorimage: ../assets/images/global/leon-cover.webp
featured_image: ../assets/images/posts/cows.webp
coverCredit: Cows that eat flowers on a grass yard.
imgAuthor: DALL - E
imgAuthorUrl: 'https://openai.com/dall-e-3'
imgSource: 'https://openai.com/dall-e-3'
imgSourceUrl: 'https://openai.com/dall-e-3'
tags:
  - monitoring
keywords:
  - monitoring
  - network
summary: Get notified if something goes down
description: Get notified if something goes down
showFullContent: false
hideComments: true
---

# Monitoring to focus on other things

After setting up one service after the other it is necessary for me to know if some service goes suddendly down. E.g. a virtual machine that hosts my website.

For this purpose I use the free tool [Uptime Kuma](https://github.com/louislam/uptime-kuma).

You can define a simple healthcheck for every service, schedule the check to run e.g. once a minute and last but not least, define a notification service (discord or something differnt) to get notified if something is not healthy.

After setting everything up you can create a statuspage and see all services on one page.
