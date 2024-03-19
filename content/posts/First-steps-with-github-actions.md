---
title: Automate the website deployment
date: 2023-04-04T22:00:00.000Z
author: Leon
authorimage: ../assets/images/global/leon-cover.webp
featured_image: ../assets/images/posts/cable-car-cabin.gif
coverCredit: Cabelcar symbol picture
imgAuthor: Freepik
imgAuthorUrl: 'https://www.flaticon.com/free-animated-icons/cable-car-cabin'
imgSource: Flaticon
imgSourceUrl: 'https://www.flaticon.com/'
tags:
  - pipeline
keywords:
  - github-actions
  - pipeline
  - tinacms
summary: >-
  Push, build and deploy to your server. Github Actions simplifies your CI/CD
  workflow...
description: >-
  Push, build and deploy to your server. Github Actions simplifies your CI/CD
  workflow...
showFullContent: false
hideComments: true
---

# LeonLuethi.com webpage as a test candidate

This site is made with the static website framework "hugo".
Every time you update something on your site you need to build the whole page and re-upload the generated public folder to your web server.
This is not a big deal unless you run a blog like this one.

I want to automate this! What do I have to do?

Every content update I need to perform these steps:

* Create a new file for the blog entry
* build the site
* upload the output folder to the webserver

In addition, there is the need to be able to edit the entries with a
simple editor directly in the browser as simple as with a cms like wordpress.
TinaCMS solves that problem.

Here comes the plan:

1. Integrate TinaCMS into the existing website
2. Automatically build and publish the site with Github Actions
3. Notify me via discord about every website deployment

## TinaCMS

TinaCMS is a self-hosted cms that lives beside your existing website and allows you
to edit your content with a simple wysiwyg-editor directly in the browser. Tina can only read content files.
Therefore, it needs to create a separate git commit for every changed or added content file.
To let the changes be visible, the sites need to be rebuilt. That's the next step.

# Build and deploy

A Github Action workflow contains several steps which describe your build and deploy process.
These steps can be created manually or chosen from the Github Marketplace (free).

My workflow contains the following steps (this is just one of many working solutions):

* Install Hugo
* Install Dart SCSS (Dependency of the theme)
* Install npm dependencies (TinaCMS and the dependencies)
* Build Tina Part
* Build Hugo Part
* Install and configure git
* Clone git repo of deployment server (http\_docs repo or webserver)
* Update all changed files (content, ...)
* Push the changes

The web server automatically deploys the latest state of the main branch every time someone commits to the main branch
and sends a message to a discord channel.

## Summary

I have encountered some hurdles that I like to share and hope you learn something from them.

First of all:

#### "Each step starts at the root directory"

For example, if you check out a git repository in an action step and move for any particular reason to
the directory '/src/main/' to execute something, then you are again in the root directory at the very next step. Keep this in mind ;-)

#### "It's like an alpine image"

The [https://github.com/actions/runner-images](https://github.com/actions/runner-images "github action runner image")
reminds me a little bit of a typical alpine image. You have to install your project dependencies first and can then
use them for the rest of the workflow. However, many tools and compilers are already pre-installed e.g. a LTS version of jdk, go, ...

#### "Secure your keys and tokens"

To avoid having to use keys and tokens as plain text in the workflow, you can use github secrets.
Even if it's a private repository it's always a good decision to keep your secrets hidden.
You don't know where your action workflow is running and who has access to its log files.
I do also recommend absolute paths or information that describe your setup to be hidden from the public.
Attackers can exploit such information in a targeted manner.
