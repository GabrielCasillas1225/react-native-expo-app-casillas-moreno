import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function TodoListScreen() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
    if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask('');
    }
    };

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Tareas</Text>
        <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={task}
        onChangeText={(text) => setTask(text)}
        />
        <Button title="Agregar Tarea" onPress={addTask} />
        <Text style={styles.subtitle}>Tareas:</Text>
        <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    },

    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    },

    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    },

    subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    },
    
    task: {
    fontSize: 16,
    marginBottom: 8,
    },

});
