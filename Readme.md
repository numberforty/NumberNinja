# Numi

[Numi](https://numi.app) is a handy calculator app for macOS. It allows you to describe tasks naturally and instantly get an answer. For example, `$20 in euro - 5% discount` or `today + 2 weeks`.

![](https://numi.app/images/numi-screenshot-yellow.png)

## Installation

Desktop version for macOS can be downloaded from the [app website](https://numi.app) or from releases page on GitHub.

-   [Numi for MacOS](https://s1.numi.app/download)
-   [Numi for Windows](https://api.ak.numi.app/win-download)

Terminal version can be installed using provided shell command (same command used to update binary).

```
curl -sSL https://s.numi.app/cli | sh
```

Alternative way of installing using [Homebrew](https://brew.sh/): `brew install nikolaeu/numi/numi-cli`.

Alfred extension can be [downloaded](https://s3.numi.io/extensions/numi.alfredworkflow) directly, requires terminal version to work.

## Usage

Terminal version can be used this way:

`numi-cli "20 inches in cm"`

Most features of the Numi for macOS are supported in terminal. However, these are the features that **have not yet been implemented**:

-   ~Localization support~
-   ~Tokens (sum, prev, avg)~
-   ~Dates~
-   Timezone conversion
-   CSS
-   Variables
-   Plugins/extension

## Running locally

Clone this repository and ensure [Node.js](https://nodejs.org/) is available. The
`run_project.sh` script executes a small test for one of the community
extensions and, if the `numi-cli` binary is on your path, shows an example
calculation.

```bash
./run_project.sh
```

## Adding your plugin

Plugins are simple JavaScript files placed inside Numi's extensions folder. Copy
your `.js` file to `~/Library/Application Support/com.dmitrynikolaev.numi/extensions`
(create the directory if it doesn't exist) and restart the application. Examples
can be found in `plugins/CommunityExtensions`.
