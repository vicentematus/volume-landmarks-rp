# Volume Landmarks from Reinassance Periodization.

[🔗 See deploy online](volume-landmarks-rp-rals.vercel.app)

This hub contains all the information that break down recommended training volumes by muscle group using the [Renaissance Periodization (RP) training volume landmarks concept](https://www.youtube.com/playlist?list=PL1rSl6Pd49ImuKAUkyy37ziG1tB4v8Q77). Thanks for [@hinsley](https://github.com/hinsley) for standarizing the information in [this google sheets](https://docs.google.com/spreadsheets/d/1APqdi1zb1IXX1PxQEZRFgxYkOMAnxZBi6v003Qrp4z8/edit?usp=sharing).

## Tech Stack (t3-stack)

- Next.js 12
- Typescript
- Chart.js
- Prisma ORM
- Supabase on the backend with PostgreSQL
- TailwindCSS

## Installation

First install `pnpm` as package manager so we avoid dependencies problems.

```bash
npm i -g pnpm
```

Then install the packages

```
pnpm install
```

Modify your prisma schema to use SQLITE:

```prisma
datasource db{
  provider = "sqlite"
  url      = "env(DATABASE_URL)"
}
```

> Before developing, first you need add the SQLITE path to your enviroment variables. In this case will be `DATABASE_URL=file:./prisma/db.sqlite`.

Run prisma commands with

```
pnpm prisma db pull
```

And then generate the client

```
pnpm prisma generate
```

And for development run

```bash
pnpm run dev
```

## Deploy

For deploy you need to use a PostgreSQL database provider. In this case i'm using Supabase. Currently there's a prisma seed file on `/prisma/seed.mjs` that fills the database with the correct volume landmarks.

After you modify your .env variables to connect to your db provider you must modify your prisma schema on `/prisma/schema.prisma` to use PostgreSQL:

```prisma
provider = "sqlite"
```

Then run for the first time run migrations

```
pnpm prisma migrate
```

After migrating, you run the build command from next

```
pnpm run build
```

Or you just can deploy it on Vercel.

# Work to do

- [x] Add .env.example for local development.
- [x] Seed the Excercise table with excercises for each muscle group from the RP website.
- [ ] Add more info to each muscle?
- [ ] Improve the chart
- [ ] Add tooltip on the volume landmarks of each page.
- [x] Maybe improve the design of the cards?
- [x] Fix Typescript typos (still learning how to fetch and add types to it with Next.js ...)
- [x] Fix the values from RP
- [x] Add image URL to each muscle group in SQL
