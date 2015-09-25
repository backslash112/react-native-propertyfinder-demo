'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
	Component
} = React;

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});

class SearchPage extends Componet {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Search for houses to  buy!
				</Text>
				<Text style={styles.description}>
					Serach by place-name, postcode or search near your location.
				</Text>
			</View>
			);
	}
}

// This exports the SearchPage class, which permits its use in other files.
module.exports = SearchPage;