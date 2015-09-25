'use strict';

var React = require('react-native');

var styles = React.StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	}
});

// Yes, This is a JavaScript class!
class PropertyFinderApp extends React.Component {
	render() {
		// return React.createElement(React.Text, {style: styles.text}, "Hello World!");
		return <React.Text style={styles.text}>Hello World!! (Again)</React.Text>;
	}
}

React.AppRegistry.registerComponent('PropertyFinder', function() {
	return PropertyFinderApp
});