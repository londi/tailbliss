---
title: Pi Hole to protect your network
date: 2023-08-31T22:00:00.000Z
author: Leon
authorimage: ../assets/images/global/leon-cover.webp
featured_image: ../assets/images/posts/pi-wall.webp
coverCredit: Garden wall that looks like a firewall made of a raspberry pie
imgAuthor: DALL - E
imgAuthorUrl: 'https://openai.com/dall-e-3'
imgSource: 'https://openai.com/dall-e-3'
imgSourceUrl: 'https://openai.com/dall-e-3'
tags:
  - network
keywords:
  - adblocking
  - filter
  - network
summary: Not just for adblocking... also for malicious domains
description: Not just for adblocking... also for malicious domains
showFullContent: false
hideComments: true
---

# Pi Hole can do more for you. Secure your local network

> Attention! This is not advice or a promise for an ultimately secure network setup, but merely food for thought for one of many possible measures for securing network traffic. Me not network wizard :D

Pi hole is great for blocking ads in your local network by blocking dns requests to known adblocking services. However, you can also block malware services.

Since malware also only uses FQDN which must be resolved by a DNS server, the attack simply does not work or is slowed down.

You will find dozens of adblocking-lists that are made for this purpose.

### Explanation of the picture

Pi Hole is built to run on a raspberry pi. The wall should represent a yummy raspberry-pie-wall that protects your network. :-)
