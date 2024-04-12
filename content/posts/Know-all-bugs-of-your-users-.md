---
title: 'Know all bugs of your users [sentry]'
date: 2024-02-10T23:00:00.000Z
author: Leon
authorimage: images/global/leon-cover.webp
featured_image: images/posts/sentry_symbol_image.webp
coverCredit: Three triangle stickmans talking to each other while constructing a building
imgAuthor: DALL - E
imgAuthorUrl: 'https://openai.com/dall-e-3'
imgSource: 'https://openai.com/dall-e-3'
imgSourceUrl: 'https://openai.com/dall-e-3'
tags:
  - apps
  - monitoring
  - sentry
summary: Get informed about your user's bug journey in your applications
description: Get informed about your user's bug journey in your applications
showFullContent: false
hideComments: true
---

## Story-telling

I recently released an application with some new and beta-worthy features. Now, bugs and even error messages appeared that I didn't know about. Some users have reported these bugs, but some have not. The question is, how can I fix bugs that I don't know about? :-) That's where "sentry" comes in.

### "Sentry" to the rescue

Sentry is a service that can track any exception in your front- and backend application and let you help find and fix the issue. It's easy to set up, even on-premise on your server. A small tracking snippet or a plugin in your application will automatically send any runtime exception to the sentry-server.

In addition to that you can see the stack trace and even which and how many users are affected by the issue.

With sentry or any similar service, you are finally ahead of time if your user hits an exception. Sounds great, doesn't it? ;-)
