import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';

export default class PersonScreen extends React.Component {

	render() {

		const { person } = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<Image
					source={{ uri: person.picture.large }}
					style={styles.avatar}
				/>
				<View style={styles.containerDetails}>
					<Line label='Email:' content={person.email} />
					<Line label='Estado:' content={person.location.state} />
					<Line label='Telefone:' content={person.phone} />
					<Line label='Celular:' content={person.cell} />
					<Line label='Nacionalidade:' content={person.nat} />
					<Line label='Trabalho:' content={person.job} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	avatar: {
		aspectRatio: 1
	},
	containerDetails: {
		backgroundColor: '#e2f9ff',
		marginTop: 20,
		elevation: 1
	}
});