---
title: Network - Homelab Setup
date: '2023-02-26T00:00:00.000Z'
author: Leon
authorimage: ../assets/images/global/leon-cover.webp
featured_image: ../assets/images/posts/sandcastle.jpg
tags:
  - proxmox
  - server
  - hp-server
  - homelab
keywords:
  - Homelab
  - Server
summary: Setup an own homelab environment, for training purposes ;-)
description: 'Setup an own homelab environment, for training purposes ;-)'
showFullContent: false
hideComments: true
imgAuthor: Nik
imgAuthorUrl: >-
  https://unsplash.com/@helloimnik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
imgSource: Unsplash
imgSourceUrl: >-
  https://unsplash.com/de/fotos/Uiro__CkZMs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

# Server @ Home

First of all? Why would you need a server at your home instead of using cloud services? The answer is: Why not?
Just kidding ;-)

A server at your home offers you many opportunities and gives you at least a **platform to learn new things**.
Cloud services are usually configured as "ready to use". Therefore, you only need to enable or disable certain features and that's it.
However, I'd like to know how these awesome features are created and what the black magic behind them is.

# Hypervisor? Proxmox!

I've tested several hypervisor platforms like Hyper-V, Vmware, ESXI, ... and ended up using Proxmox as my current favorite hypervisor.
summary:

* It has a free plan
* It's very easy to use
* You can create classic vms or containers (Linux Containers LXC)
* It's compatible with my hp raid controller (out of the box!)
* Large community

# Costs

How much does this fun cost? Since I already had the necessary hardware lying around at home, it's "just" electricity costs...
and (at the moment) these costs are less than using cloud services.

Note: You can build your server on almost every hardware stack.
At this point, I can recommend the videos of [NetworkChuck](https://www.youtube.com/@NetworkChuck). Easy to understand and very educational.

# Public IP / Domain? Reverse Proxy!

The classic use case for a home server is for sure a webserver and probably the best "hello-world"-project for any server application.
But how can securely open the doors of your router without letting anyone/anything in? The answer is: "cloudflare proxy".

Imagine the following situation: You host a blog page on your server by using e.g. Apache/NGINX, ... on port 80
and want to serve it for the whole world. The easiest way is to open port 80 on forward it to your local server, aaaaannnndddd done! ;-)
Optional: You could add a dns record on a domain that is pointing to your ip address.

However, there are some trade-offs with this setup:

* You've opened port 80 to your home network, dangerous!
* You can't serve multiple webservices on the same port (e.g. 443) because the ip:port combination can only point to one device (port forwarding)
* You expose your public ip to the world, not smart
* You need to set up a ssl certificate manually

## Use a reverse proxy

**Quick overview**

I've installed a load-balancer/reverse-proxy on my server (vm) and opened just one port (443).
Then I use cloudflare's proxy solution to "proxy" requests to my server via cloudflare's backbone.
In this case, cloudflare hides my public ip by sitting in the middle due to the proxy setup.

The cool thing is that I can host multiple services with the same port by using subdomains for each service and site.
Every request is processed by the local reverse-proxy which redirects each request, depending on the subdomain, to the corresponding local server.

Additionally, thanks to this setup, every subdomain is automatically secure by a cloudflare ssl certificate. Isn't that great? ;-)

Do you also want to create something like this? Watch the related video from NetworkChuck.
