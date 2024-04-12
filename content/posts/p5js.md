---
title: "Space rocket game [p5js]"
date: "2022-12-11"
author: "Leon"
authorimage: images/global/leon-cover.webp
featured_image: images/posts/spaceGame.gif
tags:
  - "p5js"
  - "JavaScript"
  - "Games"
keywords: ["Game", "Browser Games"]
summary: Building a small JS Game. Teaser for an upcoming project.
description: "Building a small JS Game. Teaser for an upcoming proj..."
showFullContent: false
hideComments: true
---

# Focus on creating

Recently I have started to play around with [p5Js](https://p5js.org/), a library specifically designed to focus on "creating". 
It offers a bunch of useful functions and utils to help you to create graphics, artworks, mathematics or even small games.

## Everything starts with a setup- and a draw-function

Similar to other programming interfaces like arduino, p5js also uses two functions for their main routing: A "setup" and a "draw" function. 

Setup initiates everything while the draw function draws on the canvas or calculates some values. 

```
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

As mentioned before, p5js also offers convenient functions to support you, for example to listen for key or mouse events.

```
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // Do something
  }
...  
```

Try it out with the [p5js online editor](https://editor.p5js.org/).
