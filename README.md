# Six Degree Of Seperation

![](https://media.giphy.com/media/6iF22N9JZnMTx7VJgq/giphy.gif)

It is said that all people on average are six, or fewer, social connections away from each other. This React Web App helps you find the degree of separation between any two people.

Think of it as selecting two users on Facebook and trying to see how these two people are connected.

For example, if you have the following relationships added into your system...
1. Sameer is a Friend of Aayushi
2. Aayushi is a Friend of Bhaskar
3. Sameer is a Friend of Kamalnath Sharma
4. Kamalnath Sharma is a Friend of Shanti Kumar Saha
5. Shanti Kumar Saha is a Friend of Bhaskar

If you select two people, let’s say Sameer and Bhaskar, the application show the degree of separation as follows.
1. Sameer > Aayushi > Bhaskar
2. Sameet > Kamalnath Sharma > Shanti Kumar Saha > Bhaskar

### Requirements

This skeleton requires **Node** to install and run. To install, follow the instructions for your operating system at [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

Alternatively the official Node docker image can be used. Instructions can be found on the [official Node docker image site](https://github.com/nodejs/docker-node/blob/master/README.md#how-to-use-this-image).

### Installation

_All the following notes assume you are at the command prompt for your chosen environment._

1.  Confirm Node is installed and configured correctly, the following command should return the relevant version number.

        > node --version

2.  Clone the project from GitHub

3.  Install all the necessary project dependencies by running

        > npm install

### Running and Building the Application

Scripts for running, testing, and building the application are provided as part of the standard configuration. These are run using NPM and listed in the scripts section of the package.json file.

From the project directory, you can run any of the following:

- `> npm start`

  Runs the app in the development mode at [http://localhost:3000](http://localhost:3000). The app will recompile and restart if you make any edits to the source files. Any linting errors will also be shown in the console.

- `> npm test`

  Launches the test runner in the interactive watch mode. See the [testing](#testing) section for more information.

- `> npm build`

  Builds the app for production to the `build` folder. The build is minified and any JSX is transpiled to JavaScript. Your app is ready to be deployed!


