# Installation
## Linux and MacOS
Follow [the Linux and MacOS section](https://doc.rust-lang.org/stable/book/ch01-01-installation.html#installing-rustup-on-linux-or-macos) of the Rust book's installation instructions.

## Windows
You have two options:
1. The native Windows installer. For this option, follow [the Windows section](https://doc.rust-lang.org/stable/book/ch01-01-installation.html#installing-rustup-on-windows) of the Rust book's installation instructions.
2. Install Rust inside Windows Subsystem for Linux (WSL)
  1. [Follow the VS Code WSL setup guide](https://code.visualstudio.com/docs/remote/wsl)
  2. Open a new terminal from the top menu within VS Code and run these commands one by one to download Rust:
    1. `sudo apt update`
    2. `sudo apt upgrade`
    3. `sudo apt install build-essential rustup`
    4. `rustup default stable`
  3. Go to the VS Code 'Extensions' tab and install the `rust-analyzer` extension
