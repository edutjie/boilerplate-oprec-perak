# 💻 Boilerplate Setup Guide

If you have not installed Node.js before in your system, download the latest LTS release from the Node.js website.

Remember to fork this repository to your own GitHub account before starting any work on it.

## Getting Started

### Running Next.js

First, run npm install on the main directory.

Second, run the following commands to start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Running Strapi API

For the purposes of this assignment, you are also given a Strapi boilerplate with the content models needed to implement the site.

First, enter the strapi directory and run npm install

```bash
cd strapi
npm install
```

You can then start the Strapi app using the following command in the strapi directory

```bash
# Run this after switching to the Strapi directory.
npm run develop
```

You can then open the Strapi control panel by opening [https://localhost:1337/admin](https://localhost:1337/admin)

A full guide to using Strapi is available in the Strapi v4 documentation given in the assignment document.

# 🚀 Good Luck, Have Fun!

No pressure, just try your best to fulfill the given criteria, don't forget to eat and sleep hehe.

If there are any questions regarding this assignment feel free to contact **Meta#0147** on Discord.
