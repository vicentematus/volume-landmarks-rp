# Volume Landmarks from Reinassance Periodization.

Volume Landmarks visualization using Next.js 12, Typescript, Tailwind CSS. Backend with Supabase and PostgreSQL.Inspired by (Volume Landmarks from Reinassance Periodization Guides)[https://www.youtube.com/playlist?list=PL1rSl6Pd49ImuKAUkyy37ziG1tB4v8Q77]. I scrapped the data manually and thanks for (@hinsley)[https://github.com/hinsley] for standarizing the information in (this google sheets)[https://docs.google.com/spreadsheets/d/1APqdi1zb1IXX1PxQEZRFgxYkOMAnxZBi6v003Qrp4z8/edit?usp=sharing]

This is an app is bootstrapped with the T3-Stack.

## Installation

First install `pnpm` as package manager so we avoid dependencies problems.

```bash
npm i -g pnpm
```

Then install the packages

```
pnpm install
```

Run the prisma migrations with

```
pnpm prisma migrate
```

> Before developing, first you need add the SQLITE path to Prisma.

# Work to do

- [ ] Add .env.example for local development.
- [x] Seed the Excercise table with excercises for each muscle group from the RP website.
- [ ] Add more info to each muscle?
- [ ] Improve the chart
- [ ] Add tooltip on the volume landmarks of each page.
- [x] Maybe improve the design of the cards?
- [x] Fix Typescript typos (still learning how to fetch and add types to it with Next.js ...)
- [x] Fix the values from RP
- [x] Add image URL to each muscle group in SQL
