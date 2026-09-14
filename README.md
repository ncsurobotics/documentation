# AquaPack Robotics Documentation

Three mdBooks share https://docs.aquapackrobotics.org:

- `/software/`
- `/electrical/`
- `/mechanical/`

There is no root landing page. Preview a book with `mdbook serve software`
(or `electrical` / `mechanical`), using mdBook 0.5.4.

## Deployment

`.github/workflows/pages.yml` builds the books, collects prebuilt Rust docs,
and deploys everything together. It caches mdBook and runs on pushes to `main`,
daily, or manually. Pull requests build without deploying.

In this repository's **Settings → Pages**, select **GitHub Actions** and set
the custom domain to `docs.aquapackrobotics.org`. Add a DNS CNAME record for
`docs` pointing to `ncsurobotics.github.io`, then enable **Enforce HTTPS** once
GitHub issues the certificate. Keep the main website's DNS records as they are.
See [GitHub's domain setup guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Rust documentation

SW9S and AUVControlBoard own their Rust documentation builds. Their workflows
should build from `main`, cache Cargo dependencies with `Swatinem/rust-cache@v2`,
run `cargo doc --workspace --no-deps --locked`, and publish the **contents** of
`target/doc/` to a `rustdoc` branch in their own repository. They can use a branch
publishing action with their own `GITHUB_TOKEN` and `contents: write` permission;
no cross-repository write token or separate Pages site is needed.

This repo copies those branches into:

- `/software/crates/sw9s/`
- `/software/crates/auv-control-board/`

Rustdoc adds the crate target directory, for example
`/software/crates/auv-control-board/auv_control_board/`. Each complete Rustdoc tree
is preserved so its assets and links work. Projects without a `rustdoc` branch
are skipped with a workflow warning until their publishing workflow is set up.
New Rust docs appear on the next daily run or a manual run of this workflow.

The Rust publishing workflows still need to be added in their respective repos.
SW9S should target `main` after the rewrite merges.
