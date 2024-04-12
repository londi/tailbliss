---
title: 'Github Profile Readme'
authorimage: images/global/leon-cover.webp
imgAuthor: DALL - E
imgAuthorUrl: 'https://openai.com/dall-e-3'
imgSource: 'https://openai.com/dall-e-3'
imgSourceUrl: 'https://openai.com/dall-e-3'
featured_image: images/posts/github-snake.webp
author: Leon
date: 2024-04-08T10:59:46+02:00
tags:
  - github
summary: Get informed about your user's bug journey in your applications
description: Get informed about your user's bug journey in your applications
showFullContent: false
hideComments: true
---

## Github Profile Readme

Github offers the ability to show a custom Welcome Screen by adding a `README.md`-File 
in a repository that is called like your github handle. 
In my case the repo has to be called ["londi"](https://github.com/londi/londi).

It is typically to describe yourself, write about your interests and link to your favorite repositories. 
In addition, why not adding something special?

## Contribution chart - snake animated

![Github Snake](https://raw.githubusercontent.com/londi/londi/output/github-contribution-grid-snake-dark.svg)

As you can see the snake is eating squares that represents your contribution log oft the last year.
But how does it work?

This widget is bassed on a static SVG image stored in github pages. 
A simple github actions workflow generates a new SVG everytime I change something in the "londi"-Repo. 
In addition to that I have scheduled the workflow to automatically run once a day.

Here you can find the [workflow](https://github.com/londi/londi/blob/main/.github/workflows/snake.yml).
