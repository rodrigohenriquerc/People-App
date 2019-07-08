import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
	const { people, onPressItem } = props;

	return (
		<FlatList
			data={people}
			renderItem={({ item }) => (
				<PeopleListItem
					person={item}
					navigateToPersonScreen={onPressItem}
				/>
			)}
			style={styles.container}
			keyExtractor={item => item.login.uuid}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff'
	}
});


export default PeopleList;