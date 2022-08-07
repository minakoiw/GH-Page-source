<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby website for Minako Williams
</h1>

## What you'll need to change this website

### Required Tools

This site is built in GatsbyJS, and requires the following tools installed on your computer.

1. The [Git source management system](https://git-scm.com) is required to clone this code.
2. The [Node runtime and NPM package management system](https://nodejs.org) is required by Gatsby.
3. [GatsbyJS](https://www.gatsbyjs.com) is needed to compile the website.

Install the tools in the order given

### Build steps

Use a command line terminal like Bash, Zsh or PowerShell and execute the following
in a folder where you'd like to place the source code. This will copy the source code to y our computer.

```shell
git clone https://minakoiw.GH-Page-source
```

The following will download the open source libraries required by GatsbyJS. This will download a lot of stuff and take a while. Eventually it will start Gatsby in Development mode

```shell
cd GH-Page-source
npm run develop
```

Now just start your browser and type into the address bar **localhost:8000**

## Adding an event to the Exhibitions section

Adding an event to the exhibition list is done by adding a file to the events folder using Markdown and Front Matter as shown in the template.mdx

## Adding a new piece of art in the portfolio

Adding a piece of art is done by copying in a JPG or PNG into the images folder under portfolio-pieces folder. Then create a MDX file in the porfolio-pieces folder and fill in the Markdown and Front Matter using the examples already in the folder.

## Deploy to GitHub Pages

  In order to build and deploy to minakoiw.github.io, simply type
  
  ```shell
  npm run deploy
  ```