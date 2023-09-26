import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function TodoListScreen() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [editedText, setEditedText] = useState('');

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const editTask = (index) => {
        if (editedText.trim() !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[index] = editedText;
            setTasks(updatedTasks);
            setEditingTask(null);
            setEditedText('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
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
                renderItem={({ item, index }) => (
                    <View style={styles.taskContainer}>
                        <View style={styles.taskTextContainer}>
                            {editingTask === index ? (
                                <TextInput
                                    style={styles.editInput}
                                    value={editedText}
                                    onChangeText={(text) => setEditedText(text)}
                                />
                            ) : (
                                <Text style={styles.task}>{item}</Text>
                            )}
                        </View>
                        <View style={styles.buttonContainer}>
                            {editingTask === index ? (
                                <Button title="Guardar" onPress={() => editTask(index)} />
                            ) : (
                                <>
                                    <Button title="Editar" onPress={() => setEditingTask(index)} />
                                    <Button title="Eliminar" onPress={() => deleteTask(index)} />
                                </>
                            )}
                        </View>
                    </View>
                )}
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

    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },

    taskTextContainer: {
        flex: 1,
    },

    task: {
        fontSize: 16,
        marginBottom: 8,
    },

    editInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },

    buttonContainer: {
        flexDirection: 'row',
    },
});
