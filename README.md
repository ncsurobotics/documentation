# AquaPack Robotics Documentation

[docs.aquapackrobotics.org](https://docs.aquapackrobotics.org), built with Astro and Starlight.

## Build locally

Install [Bun](https://bun.sh/docs/installation), then run:

```sh
bun install --frozen-lockfile
bun run dev
```

Open the local URL printed in the terminal. To build and preview the production site:

```sh
bun run build
bun run preview
```

The build output is in `_site/`. Rust API documentation is generated separately by CI
and is not included in the local Astro build.

## Edit with Pages CMS

1. Open [Pages CMS](https://app.pagescms.org) and sign in with GitHub.
2. Select this repository and the branch you want to edit.
3. Choose **Homepage** or a team collection: **Software**, **Mechanical**, or **Electrical**.
4. Create or edit a page, fill in its title and other fields, and write its content in the MDX body editor.
5. Save your changes. Changes on `main` trigger the documentation deployment.

Use **Sidebar → Order** to arrange pages; lower numbers come first. To create nested
folders, enter a relative path such as `Quickstart/New Section` in **Create folder**.
Uploaded media is stored in `public/`.
