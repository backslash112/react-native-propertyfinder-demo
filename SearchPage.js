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
	},
	// searchInput
	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec',
		borderRadius: 8,
		color: '#48bbec'
	},

	// button
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48bbec',
		borderColor: '#48bbec',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'		
	},

	// buttonText
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	
	// flowRight
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
});

class SearchPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Search for houses to  buy!
				</Text>
				<Text style={styles.description}>
					Serach by place-name, postcode or search near your location.
				</Text>

				<View style={styles.flowRight}>
					<TextInput style={styles.searchInput}
					placeholder='Search via name or postcode' />
					<TouchableHighlight style={styles.button} 
					underlayColor='#99d9f4'>
						<Text style={styles.buttonText}>Go</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight style={styles.button} 
				underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>Location</Text>
				</TouchableHighlight>
			</View>
			);
	}
}

// This exports the SearchPage class, which permits its use in other files.
module.exports = SearchPage;