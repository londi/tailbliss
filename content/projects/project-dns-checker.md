---
title: "Project - DNS Checker"
date: "2023-03-18"
author: "Leon"
authorimage: ../assets/images/global/leon-cover.webp
featured_image: ../assets/images/projects/squirrel.jpg
tags: ["python", "server", "dns"]
keywords: ["Python", "DNS"]
summary: Public IP changed? Update your DNS settings automatically...
description: "Public IP changed? Update your DNS settings automatically..."
showFullContent: false
hideComments: true
imgAuthor: Shane Young
imgAuthorUrl: https://unsplash.com/@shane_young?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSource: Unsplash
imgSourceUrl: https://unsplash.com/de/fotos/Uiro__CkZMs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

# Purpose of the tool - Storytelling

I'm hosting several services at home on my server which is publicly exposed by cloudflare proxy service. 
The domain is maintained by cloudflare and has DNS records that are pointing to my public IP address.
Every time my public IP address changes, my whole lab dives, i.e. isn't reachable. 

Therefore, I need something like a service that recognizes when my public IP changes, and in such a case, 
automatically updates the DNS records on the domain.

I didn't find a tool/script for this use case, so I developed something myself. GitHub Project: [cloudflare-dns-checker](https://github.com/londi/cloudflare-dns-checker).

# DNS Checker

This python tool helps you to keep the A-Record of your DNS zone up to date. 
The only thing you have to do is to schedule this script with a cronjob or similar.

It also notifies you via discord if something changed.

You can find it on GitHub: [cloudflare-dns-checker](https://github.com/londi/cloudflare-dns-checker).

![Discord message](/images/projects/discord_bot_msg.png)
