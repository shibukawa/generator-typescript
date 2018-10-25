# Contributing

## Folder Structure



## Development Tools

All tools to develop this repository are initialized via npm command.

```sh
$ npm install
```

We use the following tools:

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Jest - Delightful JavaScript Testing](https://jestjs.io/)
* [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* [TSLint - An extensible linter for the TypeScript language.](https://palantir.github.io/tslint/)
* [Prettier - An Opinionated code formatter](https://prettier.io/)

If you use [Visual Studio Code](https://code.visualstudio.com/), you can install recommended extensions when you open this folder.


### See Document

```sh
$ npm run dev
```

Then open http://localhost:3000 via your browser.

### Run Test

```sh
$ npm test
```

### Run E2E Test

At first, run dev server:

```sh
$ npm run dev
```

Then run e2e tests:

```sh
$ npm run e2e
```

We use document examples as a fixture to test.

### Build Document

```sh
$ npm run build-doc
```

You get static HTML documents in ``out`` folder.

### Build

```sh
$ npm run build
```

## Basic Contributing Workflow

We love pull requests from everyone. Contributing is easy:

* You can report bugs and request features using the [issues page][issues].

[issues]: <%- github %>/issues

* You can easily work on the code if you have a GitHub account ([get one][github]):

[github]: https://github.com/join

Fork the project, then clone the repo:

    git clone git@github.com:your-username/<%- name %>.git

Make your change(s).

Push to your fork and [submit a pull request][pr].

[pr]: <%- github %>/compare/

At this point you're waiting on us. We like to at least comment on pull requests
as soon as possible. We may suggest some changes or improvements or alternatives.

Some things that will increase the chance that your pull request is accepted:

* Write a [good commit message][commit].

[commit]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
