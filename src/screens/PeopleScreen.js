import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeopleScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [],
			loading: false,
			error: false
		}
	}

	componentDidMount() {
		this.setState({
			loading: true
		});
		axios
			.get('https://randomuser.me/api/?nat=br&results=150')
			.then(response => {
				const { results } = response.data
				this.setState({
					people: results,
					loading: false
				});
			}).catch(error => {
				this.setState({
					error: true,
					loading: false
				});
			});
	}

	renderScreen() {
		if (this.state.loading) {
			return <ActivityIndicator color='#6ca2f7' size='large' />
		}
		if (this.state.error) {
			return <Text style={styles.errorMessage}>Ops... algo deu errado!</Text>
		}
		return (
			<PeopleList
				people={this.state.people}
				onPressItem={(screenParams) => { this.props.navigation.navigate('PersonScreen', screenParams) }}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderScreen()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	errorMessage: {
		textAlign: 'center',
		color: 'red',
		fontSize: 18
	}
});