/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text, View, Button, NativeModules, NativeEventEmitter } from 'react-native';
import EventEmitter from 'EventEmitter';

const RNHoverReactSdk = NativeModules.RNHoverReactSdk;

type Props = {};
export default class App extends Component<Props> {
	state = { permsGranted: false, gotSMSResponse: false }

	async onTUpdate(data) {
		RNHoverReactSdk.showToast("received t update for uuid: " + data.uuid);
		this.setState({ gotSMSResponse: true })
	}

	componentWillMount() {
		RNHoverReactSdk.showToast("registering listener");
		const transactionEmitter = new NativeEventEmitter(RNHoverReactSdk)
		const subscription = transactionEmitter.addListener(
			"transaction_update", (data) => this.onTUpdate(data));
	}



// , function(e: Event) {
// RNHoverReactSdk.showToast("got an event");
// this.setState({ gotSMSResponse: true });
// });


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

	async makeRequest() {
		try {
			var response = await RNHoverReactSdk.makeRequest("4255ec9a");
			RNHoverReactSdk.showToast(response);
		} catch (e) {
			RNHoverReactSdk.showToast(e.message);
		}
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
				<Button
					onPress={this.makeRequest.bind(this)}
					title="Check Balance"
					color="#EB7D23"
					accessibilityLabel="Check Balance Button"
				/>
				{this.state.gotSMSResponse ? <Text style={styles.granted}>Received SMS</Text> : null}
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
