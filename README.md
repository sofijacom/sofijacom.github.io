# KL-linux.github.io
This is the (official?) website for Kennel Linux built with the [Hugo](https://gohugo.io/) static site generator.

## Create new page
`hugo new content content/<filename>.md`

## Update navbar
Add the page to `hugo.toml`. Weight is the order of the links, from left to right.

## Test site locally
With draft pages:
`hugo server -D`

Without draft pages:
`hugo server`

## Build site locally
With draft pages:
`hugo -D`

Without draft pages:
`hugo`
