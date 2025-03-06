{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "jekyll-grunt-env";

  # Add Ruby and Bundler
  buildInputs = [
    pkgs.ruby
    pkgs.bundler
    pkgs.nodePackages.grunt-cli
  ];

  # Commands to set up the environment
  shellHook = ''
    echo "Setting up Ruby and Bundler environment..."
    if [ ! -d ".vendor" ]; then
      echo "Installing Bundler dependencies..."
      bundler config set path .vendor/bundle
      bundler install
    fi

    echo "Environment is ready! Use the following commands:"
    echo "  1. bundle exec jekyll serve  # To run the site locally"
    echo "  2. grunt                     # To regenerate CSS files from .less"
  '';
}
