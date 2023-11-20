# :wave: Say hi to Elizabeth :wave:

[![Generic badge](https://img.shields.io/badge/course%20available%3F-yes-green.svg)](https://shields.io/)

This project is created and intended to be used for the [Shopify Theme Development – Online Store 2.0 + TailwindCSS course](https://weeklyhow.com/courses/)

[Get the course!](https://weeklyhow.com/) | [Lessons covered](#lessons-covered) |
[How to use](#how-to-use) | [Not a student?](#not-a-student)

## Lessons covered

| Status             | Lectures                     |
| ------------------ | ---------------------------- |
| :heavy_check_mark: | Installing Development Tools |
| :heavy_check_mark: | Navigational Bar             |
| :heavy_check_mark: | 404 Page                     |
| :heavy_check_mark: | Article Page                 |
| :heavy_check_mark: | Blog Page                    |
| :heavy_check_mark: | Cart Page                    |
| :heavy_check_mark: | Product Collection Page      |
| :heavy_check_mark: | Collections Page             |
| :heavy_check_mark: | Homepage (Index)             |
| :heavy_check_mark: | Pages (About & Contact)      |
| :heavy_check_mark: | Advanced Product Page        |
| :heavy_check_mark: | Search Page                  |
| :hourglass:        | More lessons coming          |

## How to use

To use the repository for making Shopify themes, use the following command of Shopify CLI.

```sh
shopify theme dev --store dev-store-udemy-course.myshopify.com
```

Alternatively you can run the scripts:

```sh
yarn dev
```

or

```sh
npm run dev
```

If you don't have Shopify CLI installed to your computer, navigate to the [installation page of Shopify CLI](https://shopify.dev/themes/tools/cli/installation).

---

Also remember to have TailwindCSS node package then run the following command during development:

```sh
npx tailwindcss -i ./css/tailwind.css -o ./assets/application.css --watch
```

Alternatively you can run the scripts:

```sh
yarn tailwind
```

or

```sh
npm run tailwind
```
