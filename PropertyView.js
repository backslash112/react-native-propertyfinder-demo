'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Image,
	View,
	Text,
	Component
} = React;

var styles = StyleSheet.create({
	// container
	container: {
		marginTop: 65
	},

	// heading
	heading: {
		backgroundColor: '#f8f8f8'
	},

	// separator
	separator: {
		height: 1,
		backgroundColor: '#dddddd'
	},

	// image
	image: {
		width: 400,
		height: 300
	},

	// price
	price: {
		fontSize: 25,
		fontWeight: 'bold',
		margin: 5,
		color: '#48bbec'
	},

	// title
	title: {
		fontSize: 20,
		margin: 5,
		color: '#656565'
	},

	// description
	description: {
		fontSize: 18,
		margin: 5,
		color: '#656565'
	}
});


class PropertyView extends Component {
	render() {
		var property = this.props.property;
		var stats = property.bedroom_number + 'bed' + property.property_type;
		if (property.bedroom_number) {
			stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1 ? 'bathrooms' : 'bathroom');
		}
		var price = property.price_formatted.split(' ')[0];

		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: property.img_url}} />
				<View style={styles.heading}>
					<Text style={styles.price}>£{price}</Text>
					<Text style={styles.title}>{property.title}</Text>
					<View />
				</View>
				<Text style={styles.description}>{stats}</Text>
				<Text style={styles.description}>{property.summary}</Text>
			</View>
			);
	}
}
module.exports = PropertyView;		