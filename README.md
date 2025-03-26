# 📈 Starsoft Marketplace

**Starsoft Marketplace** is a project designed as a pratical test by starsoft, challenging developers to build an entire application using NextJS.

## 🚀 Features

Here are some of the features i found worth mentioning about this project and how i made it:

### Built just like an e-commerce

This specific application was built just like an e-commerce, following all of the best patterns, layouts and features an e-commerce could have. Some of them are:

- **Product Page (PDP) is made to be exactly like an e-commerce:** where users can add products to their cart with the specified quantity, with no distractions;

- **Subtle animations:** So the user knows what's happening and where they should go, intuitively;

- **Everything is designed to be beautiful and easy**, including:
   - the product card grid is even and has ellipsis on the description so it don't take much space and the user can keep reading on the pdp;
   - the font's spacing, positioning and size on pdp is just big enough so the user can read it clearly and knows where to look;

### Accessibility and Performance

- **A debounce function** is triggered when the user changes the product's quantity on the cart. So we don't update states unnecessarily;
- **Products are cached** and first rendered on server side, so everything is as smooth as it can be.
- **Everything that makes sense has a helpful hover effect** so the user knows what to expect from that specific component.

### SEO

Everything related to SEO is centered under `/app/layout.tsx`. There we have the page's default title, descriptions, keywords, robots, page's theme color, scheme, favicons made to work anywhere, etc.

### What more features would i add?

For this app i would add some more features to help the user a little bit more. A couple of them are:
- open the cart when the user adds a new product to it;
- save the products so even when user refreshes the page their products remains on the cart;

## 📁 Project Setup

To setup and explore this project:

1. Clone this repository
```bash
git clone https://github.com/gasampaiosouza/starsoft-frontend-challenge.git starsoft-challenge
cd starsoft-challenge
```

2. Install the dependencies using `pnpm install`

To see it running, we have a couple of ways:

### With docker

To set it up with docker, just run

```bash
docker-compose up
```

### Without docker

To run it with no docker at all, you can run

```bash
pnpm dev
```

## Running tests

To see if all of the tests are ok, you may run

```bash
pnpm test
```

## 🛠️ Tech Stack

For this project i did use:

**Next.js** and **React Query:**

I choose next and react query because of their cache, performance and security abilities. When running an e-commerce that's the first thing you want to think about.

**TypeScript**, **Styled Components** and **Redux:**

Typescript helps a lot when you have a big codebase. When we join it with styled components and redux, it helps even more!!

Styled components helps a lot when styling components that are already made like an SVG, a next/link or something related to it.

Redux makes a lot easier to manage states globally, it helps us to keep track of everything that is happening. States can be a big mess sometimes.


**Framer Motion**

I opted for framer motion because it's a lot easy to setup and run. Their animations are a lot clean right off the box, makes it a lot easier to work with.

**Jest**, **Docker** and **Docker Compose:**

Jest is awesome for testing!! no doubt it's the best one out there.

Docker is really easy to setup and helps you to see the results of your prod environment right away!! also a good choice on products like that.

## 🙏 Thank you

Thank you for taking some time to read this and to see the project online!! bye 🖖🏻

<!-- ### Other versions

For a portuguese version of this readme, [click here]() -->