To run:

adb reverse tcp:8081 tcp:8081
react-native start
react-native run-android


To include hover-react-sdk:

from hover-react-sdk dir 
	`npm install  --save-dev`

from react app dir
	`npm install react-native-hover-react-sdk --save`

	1.	add `"react-native-hover-react-sdk": "file:../react-native-hover-react-sdk"` to `package.json`
	2. Open up `android/app/src/main/java/[...]/MainActivity.java`
	  - Add `import com.hover.react.sdk.RNHoverReactSdkPackage;` to the imports at the top of the file
	  - Add `new RNHoverReactSdkPackage()` to the list returned by the `getPackages()` method
	3. Append the following lines to `android/settings.gradle`:
	  	```
	  	include ':react-native-hover-react-sdk'
	  	project(':react-native-hover-react-sdk').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-hover-react-sdk/android')
	  	```
	4. Change the following lines in the project.ext.react array in `android/app/build.gradle`:
	  	```
	  	project.ext.react = [
			entryFile: "index.js"
			entryFile: "index.js",
			bundleAssetName: "index.android.bundle",
			bundleInAlpha: true,
			bundleInBeta: true
		]
	  	``` as well as inside the dependencies:
	  	```
	      implementation project(':react-native-hover-react-sdk')
	  	```

	`react-native link react-native-hover-react-sdk`

run on device:
	`react-native run-android`
