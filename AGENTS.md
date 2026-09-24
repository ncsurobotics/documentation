# AquaPack Robotics Documentation

One Astro + Starlight site at https://docs.aquapackrobotics.org contains a homepage
and three documentation sections, selected using the sidebar dropdown:

- `/software/`
- `/electrical/`
- `/mechanical/`

## Local development

Use Bun. The version used by CI is pinned in `package.json`.

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run build` to generate `_site/`, or `bun run preview` to preview that
build. Write MDX in `src/content/docs/<team>/` with a `title` in YAML
frontmatter. Sidebars use directory names as group labels, so name nested folders
for display (for example, `Hardware Provisioning` or `Quickstart`). Use
`index.mdx` for a group's overview page.
Sidebars are generated from those directories; use `sidebar.order`
in frontmatter to control ordering. The team dropdown is configured in
`astro.config.mjs`, and the homepage is `src/content/docs/index.mdx`.

Pages CMS is configured in `.pages.yml`. It exposes the homepage and the
Software, Mechanical, and Electrical content directories to the hosted Pages
CMS application. Documentation entries expose title, description, sidebar
ordering, all Starlight page metadata, and an MDX body. The CMS can store
uploaded media in `public/`.

Static files live in `public/`. Rust documentation is added by CI after the Astro
build, so Rust API links require a deployment or a separate local Cargo docs build.

## Deployment

`.github/workflows/pages.yml` builds the Starlight site and the Rust docs from the committed
submodule revisions, and deploys everything together. It caches Cargo builds and
runs on pushes to `main` or manually. Pull requests build without deploying.

`.github/workflows/update-submodules.yml` updates submodules on `main` weekly
or when manually triggered. After committing and pushing any changes,
it explicitly triggers the Pages workflow on `main`, even if no revisions changed.

In this repository's **Settings → Pages**, select **GitHub Actions** and set
the custom domain to `docs.aquapackrobotics.org`. Add a DNS CNAME record for
`docs` pointing to `ncsurobotics.github.io`, then enable **Enforce HTTPS** once
GitHub issues the certificate. Keep the main website's DNS records as they are.
See [GitHub's domain setup guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Rust documentation

The Pages workflow checks out the committed submodule revisions recursively and runs
`cargo doc --workspace --no-deps --locked` in each project under
`external/software/` that has a root `Cargo.toml`. SW9-MSB contains hardware
design files and is skipped. Rust build failures fail the deployment build.
The workflow uses the runner's preinstalled Rust toolchain, caches Cargo
dependencies and build outputs with `actions/cache`, and installs `libudev-dev`
for the serial library dependencies.

All crates build into a shared Cargo target directory. Rustdoc combines their
navigation and search data, and the workflow publishes the complete documentation
tree under `/external/software/rust/`. Crates can be linked to individually from
the Starlight pages; no Rust documentation landing page is generated:

- `/external/software/rust/sw9s/`
- `/external/software/rust/auv_control_board/`

URLs use Rust crate names, without an enclosing submodule directory. Shared assets
and source pages are preserved alongside the crate pages. Only compiled build
outputs are cached; documentation is regenerated each run to avoid stale crates.
The submodule update workflow
uses `git submodule update --init --remote --recursive` to fetch the latest
commit from each submodule's configured tracking branch (the remote default branch
unless configured otherwise in `.gitmodules`). It commits changed submodule pointers
and pushes them to `main` using the GitHub Actions bot. The Pages workflow only
builds and deploys documentation. No separate `rustdoc` branches are needed.
