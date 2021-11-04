# Simple Weather App

This is a simple weather tracking app powered by [react](https://github.com/facebook/create-react-app), [mobx](https://mobx.js.org/README.html) and [OpenWeather API](https://openweathermap.org/current#name) 

![Weather App](/docs/weather-app.png)

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

Builds the app for production to the `build` folder.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn analyze`

Requires a production build made. Opens a UI to analyze bundle size.

### `yarn eslint`

Runs code validation and formatter. Uses eslint configurations for react, prettier and typescript

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Instead of ejecting consider changing default react-scripts configurations with [craco](https://github.com/gsoft-inc/craco) which is already included in this repo. 

To debug craco setup there's a VS code `.vscode/launch.json` file with debug configuration

## Static icons

There's a special script available to download weather icons assets from open weather. Check out `bin/download.sh`.
To make it executable run `sudo chmod +x ./bin/download.sh` on linux and macos

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

OpenWeather API links:
* [Current weather](https://openweathermap.org/current#name)
* [Geocoding](https://openweathermap.org/api/geocoding-api)
* [Icon assets](https://openweathermap.org/weather-conditions)
