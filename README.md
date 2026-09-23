# AquaPack Robotics Documentation

Three mdBooks share https://docs.aquapackrobotics.org:

- `/software/`
- `/electrical/`
- `/mechanical/`

There is no root landing page. Preview a book with `mdbook serve software`
(or `electrical` / `mechanical`), using mdBook 0.5.4.

## Deployment

`.github/workflows/pages.yml` builds the books and the Rust docs from the committed
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
`software/external/` that has a root `Cargo.toml`. SW9-MSB contains hardware
design files and is skipped. Rust build failures fail the deployment build.
The workflow uses the runner's preinstalled Rust toolchain, caches Cargo
dependencies and build outputs with `actions/cache`, and installs `libudev-dev`
for the serial library dependencies.

All crates build into a shared Cargo target directory. Rustdoc combines their
navigation and search data, and the workflow publishes the complete documentation
tree at `/software/external/`, with a landing page listing the generated crates:

- `/software/external/sw9s/`
- `/software/external/auv_control_board/`

URLs use Rust crate names, without an enclosing submodule directory. Shared assets
and source pages are preserved alongside the crate pages. Only compiled build
outputs are cached; documentation is regenerated each run to avoid stale crates.
The submodule update workflow
uses `git submodule update --init --remote --recursive` to fetch the latest
commit from each submodule's configured tracking branch (the remote default branch
unless configured otherwise in `.gitmodules`). It commits changed submodule pointers
and pushes them to `main` using the GitHub Actions bot. The Pages workflow only
builds and deploys documentation. No separate `rustdoc` branches are needed.
