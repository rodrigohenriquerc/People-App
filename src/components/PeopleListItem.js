import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirstLetter } from '../util';

const PeopleListItem = (props) => {
	const { person, navigateToPersonScreen } = props;
	const { title, first, last } = person.name;
	const { thumbnail } = person.picture
	return (
		<TouchableOpacity onPress={() => navigateToPersonScreen({ person })}>
			<View style={styles.line}>
				<Image
					source={{ uri: thumbnail }}
					style={styles.avatar}
				/>
				<Text style={styles.lineText}>{`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,
		borderRadius: 50,
		marginRight: 10
	},
	lineText: {
		fontSize: 20,
		flex: 7

	}
});

export default PeopleListItem;