This repo is an expanded version to the tutorial [Rails 5 API + ActiveAdmin + create-react-app on Heroku, over on Medium](https://blog.heroku.com/a-rock-solid-modern-web-stack)

## Getting started

``` shell
git clone https://github.com/superhighfives/list-of-ingredients.git
cd list-of-ingredients
bundle
cd client
npm install
cd ..
rake db:migrate
rake db:seed
rake start
```

Once you're ready to deploy to [Heroku](https://surge.sh), run:

``` shell
heroku apps:create
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
git push heroku master
heroku run rake db:migrate
heroku run rake db:seed
heroku open
```

Success!

## Directory structure

```
.
├── app
│   ├── admin
│   ├── assets
│   │   ├── config
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets
│   ├── controllers
│   ├── helpers
│   ├── jobs
│   ├── mailers
│   ├── models
│   └── views
│       └── layouts
├── bin
├── client
    ├── public
    └── src
        ├── actions
        ├── components
        ├── constants
        ├── containers
        ├── enhancers
        ├── reducers
        ├── sagas
        ├── services
        └── store
├── public
├── storage
├── test
└── vendor
```