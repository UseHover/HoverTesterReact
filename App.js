/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native';
import RNHoverReactSdk from './hover';

type Props = {};
export default class App extends Component<Props> {
	state = { permsGranted: false }

	async getPerm() {
		try {
			var response = await RNHoverReactSdk.getPermission();
			this.setState({ permsGranted: true });
		} catch (e) {
			this.setState({ permsGranted: false });
		}
	}

	async checkPermState() {
		var hasPs = await RNHoverReactSdk.hasAllPermissions();
		this.setState({ permsGranted: hasPs });
		return hasPs;
	}

	render() {
		this.checkPermState();
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Hello World</Text>
				<Button id="get-perm-btn"
					onPress={this.getPerm.bind(this)}
					title="Get Permission"
					color="#841584"
					accessibilityLabel="Get Permission"
				/>
				{this.state.permsGranted ? <Text style={styles.granted}>Permissions Granted</Text> : <Text style={styles.granted}>Permissions not granted</Text>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	granted: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	}
});
