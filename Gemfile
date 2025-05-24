# Gemfile

source 'https://rubygems.org'
gemspec

gem 'jekyll', '~> 4.4', '>= 4.4.1'
gem "kramdown-parser-gfm"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-remote-theme"

gem 'jekyll-archives'

group :jekyll_plugins do
  gem 'jekyll-gzip'
  gem 'jekyll_emoji_tag'
  gem "jekyll-paginate"
end

gem 'jekyll-feed'

gem 'jekyll-target-blank'

gem "jekyll-sitemap"

gem 'jekyll-email-protect'

gem 'gemoji', :require => 'emoji/railtie'

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# gem 'jekyll-multiple-languages-plugin'

# gem 'jekyll-brotli'

