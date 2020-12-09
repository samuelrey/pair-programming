# Pair Programming Starting Environment

This is a skeleton project setup with a rails backend and a React frontend.
Before we start pairing, try to follow these steps to get the development environment up and running. 
If you get stuck, don't spend too much time on it. We will spend the first part of pairing figuring out how to get 
it up and running! 

## Installation instructions

- Clone the repo
    - `git clone git@github.com:northstarfinance/pair-programming.git`
    - `cd pair-programming`
  
- Install Ruby 2.6.6
  - Install rvm (ruby version manager) `curl -sSL https://get.rvm.io | bash`
  - open a new shell to the same directory
  - `rvm install 2.6.6 && rvm use`
  - make sure that `ruby -v` returns the correct version
 
- Install Bundler
  - `gem install bundler -v 2.0.2`
 
- Install Ruby deps
  - `bundle install` 
  
- Initialize the database
  - `rails db:setup`

- Install Node
  - Install nvm (node version manager) https://github.com/nvm-sh/nvm
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
  - source your .bashrc (or equivalent) or open a new shell
  - `nvm install && nvm use` will automatically install the correct version of node

- Install yarn
  - `curl -o- -L https://yarnpkg.com/install.sh | bash -s` 
  - source your .bashrc (or equivalent) or open a new shell
  - the repo contains a locked yarn version policy, so you shouldn't have to worry about a specific version

- Install Node Dependencies
  - `yarn install`

## Starting the services
You technically don't need to run webpack dev server, but running it will recompile changes on save instead of when
the page is reloaded.

- Web Server: `rails s`
- Webpack dev server: `bin/webpack-dev-server` 

## Verify
http://localhost:3000 should show you a welcome page!
