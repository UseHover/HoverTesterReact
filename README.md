This is a sample app for testing the [Hover React Native Bridge](https://github.com/UseHover/hover-react-sdk). See the README in that project for including the Hover React SDK in your React Native app.

To get started with this app use this guide https://facebook.github.io/react-native/docs/getting-started.html. Once everything is set up you can test on a real device by running the following:

```
react-native start
adb reverse tcp:8081 tcp:8081
react-native run-android
```

The reverse command should only be neccessary if you are attempting to run on a real device from within android studio.
