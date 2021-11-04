# Web Application Developer Challenge

Create a React web application which consumes the public Star Wars API ([SWAPI](https://swapi.dev)). The web application helps the user to get an overview over all available Star Wars resources like planets, people, star ships and so on.

The source code must be uploaded to a public GitHub repository.

This Challenge is divided into four different use-cases:

**Use Case 1:** User Login

**Use Case 2:** Start Wars resources overview

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

### Use Case 4: As a user I can navigate to a resource detail page

When a user clicks on a Star Wars resource, he gets redirected to a detail page.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
