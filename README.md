![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

[Live Site](https://dan-morriss-moments-09a1658577b2.herokuapp.com/)

[React Bootstrap](https://react-bootstrap-v4.netlify.app/)

[Adding CSS modules stylesheet](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

[Using CSS modules to style react components](https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87)

[React router Docs](https://v5.reactrouter.com/web/guides/quick-start)

[Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

[Destructuring rules](https://zaiste.net/posts/javascript-destructuring-assignment-default-values/)

[Inline if with logical && operator](https://legacy.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)

[Web API URL's](https://developer.mozilla.org/en-US/docs/Web/API/URL)

[Create object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)

[Revoke object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL_static)

[Form data class](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

Welcome,

This is the Code Institute student template for React apps on the Codeanywhere IDE. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.  
DO NOT use this template if you are using the Gitpod IDE. Use the following command instead:  
`npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **31st August, 2023**

## Codeanywhere Reminders

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---

Happy coding!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the required npm packages.

### `npm start`

Runs the app in the development mode.\
Open port 3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

`npm install`

DON'T DO THIS...
`npm audit fix --force`

`npm install react-bootstrap@1.6.3 bootstrap@4.6.0`

`npm install react-router-dom@5.3.0`

`npm install axios`

option shift f > format document

command shipt p > command pallet > Format document

command shipt p > command pallet > detect indentation from content

Tutor support

I am working through the moments PP5 Advanced Frontend walkthrough after completing the drf-api backend. I am getting an 'uncaught runtime error' when I try to sign up a new user or log in an existing user. The information is geting sent to the database (so I can create a new user), but then the error displays. When I look at the console in dev tools I see AxiosError, so must have a setting in the drf-api repo wrong? After a bit more digging in the devtools I found that its missing a CORS header so request was blocked.

I went through all the lessons up to the same point to see if I missed anything and couldn't find any differences so I checked all of my code against the source code repo using DiffChecker and there are no differences. I have gone back into the drf-api codebase and added to the allowed hosts list thinking the api might be preventing the request. As the moments code is the same I assume that the issue is a dependency that I don't have, a missing config var in heroku or something in the drf-api settings.py, but don't know where else to look. I have tried using slack, but none on there has been able to help.

Code Anywhere

CLIENT_ORIGIN_DEV: https://3000-danmorriss-moments-gxkf8i6mub.us2.codeanyapp.com

https://3000-danmorriss-moments-gxkf8i6mub.us2.codeanyapp.com
