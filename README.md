# Web Application Developer Challenge

Create a React web application which consumes the public Star Wars API ([SWAPI](https://swapi.dev)). The web application helps the user to get an overview over all available Star Wars resources like planets, people, star ships and so on.

The source code must be uploaded to a public GitHub repository.

This Challenge is divided into four different use-cases:

**Use Case 1:** User Login

**Use Case 2:** Star Wars resources overview

**Use Case 3:** Resource search

**Use Case 4:** Resource detail page

## Technical Requirements

| Requirements                        | Description                                            |
| ----------------------------------- | ------------------------------------------------------ |
| JavaScript Library (main framework) | [React](https://reactjs.org)                           |
| UI library                          | [Material-UI (MUI)](https://mui.com)                   |
| Language                            | JavaScript (Bonus: TypeScript)                         |
| Supported screen sizes              | Minimum screen size 320 x 568 (iPhone SE)              |
| Sourcecode repository               | Public GitHub repository                               |
| API                                 | Star Wars API ([https://swapi.dev](https://swapi.dev)) |

## Use Cases

### Use Case 1: As a user I can login to the Star Wars web application

Show a login Screen to the user. After a successful login, the user gets redirected to the Star Wars Resources overview (use case 2). Show an error message if the login was not successful.

To keep this task as simple as possible, just implement a local user authentication. and do not consume any external authentication providers like Auth0.

Bonus: The user can refresh the page without being logged out.

### Use Case 2: As a user I can see an overview over all Star Wars resources

Show a an overview over all Star Wars resources like people, films, star ships and so on. The user can filter between the different resources.

### Use Case 3: As a user I can search for a specific resource

Add a search input to search for a Star Wars resource.

### Use Case 4: As a user I can navigate to a resource detail page

When a user clicks on a Star Wars resource, he gets redirected to a detail page.

## Website (hosted)

**Link:** [https://web-app-developer-challenge-gabrielepace.vercel.app](https://web-app-developer-challenge-gabrielepace.vercel.app) (hosted on Vercel)

The own implemented [Login API](https://web-app-challenge-gpace-login.herokuapp.com/login) is hosted on Heroku.


## Remarks

On the Login page, is it possible to insert any username resp. password, because it is not specified in the Use Case 1 to restrict it to a specific created user. Last but not least the app is not connect to a database, so any username resp. password works.

After the Login, if the user e.g., closes the Tab on the web browser and opens a new one, the user remains signed in. Bonus in Use Case 1 is satisfied.

All the listed Use Cases were implemented and the technical requirements were also satisfied. As frontend language it was used JavaScript (instead of TypeScript).

The web app can be used in mobile devices (See supported screen sizes in Technical Requirements) as well for Desktop devices (workstations, laptops, etc.).

The web app can be viewed on a mobile OS like iOS and Android. A mobile web browser installed on the smartphone (e.g., Chrome, Firefox or Safari) is required.

## Screenshots

Screenshots of the web app from the iPhone SE (using Safari) with iOS 15:


## Local installation

### Requirements

- [Node.js](https://nodejs.org/en) v16 LTS
- NPM (included in Node.js)
- [Yarn] (https://yarnpkg.com)

It is possible to install in OS like Windows, macOS and Linux distributions e.g. Ubuntu.

### Available Scripts

### `yarn install`

Installs all the app dependencies resp. libraries.

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### Installation Guide

1. After that the Requirements are satisfied, download this GitHub Repository (click on the download button).
2. Extract the *.zip file and open a CLI (Terminal) inside the extracted folder. You can use `cd /path/` (path of the downloaded folder).
3. Run `yarn install` and finally `yarn start`. IMPORTANT: do not close the Terminal, otherwise the app process will close.
4. Open a web browser and go to [http://localhost:3000](http://localhost:3000).

To close the app, go to the Terminal were the app process is running and type on the keyboard `Ctrl` + `C`.