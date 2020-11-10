import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	SafeAreaView,
	Button,
	ScrollView,
} from 'react-native';
import Todo from './components/Todo';

const App = () => {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);

	console.log(input, '<<< input');
	console.log(todos, '<<< todos');

	const addTodo = () => {
		setTodos([input, ...todos]);
		setInput('');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.titleText}>Time Tracker</Text>
			</View>
			<ScrollView>
				{todos.map((todo) => (
					<Todo key={todo} title={todo} />
				))}
			</ScrollView>
			<TextInput
				style={styles.todoInput}
				value={input}
				onChangeText={(text) => setInput(text)}
			/>
			<Button title='Add To Do' onPress={addTodo} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	todoInput: {
		height: 40,
		borderColor: 'red',
		borderWidth: 0.5,
		marginVertical: 10,
		marginHorizontal: 20,
	},
});

export default App;
