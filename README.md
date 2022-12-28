> This repo has been archived and moved [here](https://github.com/etn-ccis/blui-icons).

# Brightlayer UI Icons

[![](https://img.shields.io/npm/v/@brightlayer-ui/icons.svg?label=@brightlayer-ui/icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons)
[![](https://img.shields.io/npm/v/@brightlayer-ui/icons-svg.svg?label=@brightlayer-ui/icons-svg&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/icons-svg)
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/icons/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/icons/tree/master)

This is a library of supplemental icons, to be used in conjunction with the standard Material Design icons in Brightlayer UI applications.

These icons are available in various formats to suit your needs:

-   Icon Font ([npm](https://www.npmjs.com/package/@brightlayer-ui/icons), [src](https://github.com/brightlayer-ui/icons/tree/master/packages/mui))
-   SVG Icons ([npm](https://www.npmjs.com/package/@brightlayer-ui/icons-svg), [src](https://github.com/brightlayer-ui/icons/tree/master/packages/svg))
-   React Components ([npm](https://www.npmjs.com/package/@brightlayer-ui/icons-mui), [src](https://github.com/brightlayer-ui/icons/tree/master/packages/mui))
-   React Native Vector Icons ([npm](https://www.npmjs.com/package/@brightlayer-ui/react-native-vector-icons),[src](https://github.com/brightlayer-ui/icons/tree/master/packages/rn-vector))
-   PNG Files ([src](https://github.com/brightlayer-ui/icons/tree/master/packages/png))

Our library of dynamic progress icons has been split off into a dedicated repository:

-   [Progress Icons](https://github.com/brightlayer-ui/progress-icons/tree/master)

### Available Icons

See the [Iconography](https://brightlayer-ui.github.io/style/iconography) on brightlayer-ui.github.io for a list of currently available icons.

# For Icon Creators

Please read the instructions in the [Design](https://github.com/brightlayer-ui/icons/blob/master/design/README.md) folder before creating or submitting new icons.

# For Maintainers / Contributors

This repository uses yarn workspaces with the latest version of yarn. To get started working with the libraries:

```sh
git clone https://github.com/brightlayer-ui/icons.git
cd icons
yarn install
```

To build the libraries:

```sh
yarn build
```

There is a demo project in the repository which shows the various icon formats being used in a project. To start the demo, run:

```sh
yarn start
```
