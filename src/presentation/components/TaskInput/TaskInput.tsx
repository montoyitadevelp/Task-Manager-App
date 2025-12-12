import React, { useState, useCallback } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { TaskService } from '@domain/services/TaskService';

interface TaskInputProps {
  onAddTask: (description: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(() => {
    if (!TaskService.validateTaskDescription(text)) {
      setError('Task description cannot be empty');
      return;
    }

    onAddTask(text);
    setText('');
    setError(null);
  }, [text, onAddTask]);

  const handleChange = useCallback((value: string) => {
    setText(value);
    if (error) setError(null);
  }, [error]);

  return (
    <View className="px-6 pb-4">
      <View className="flex-row items-center gap-2 bg-gray-50 rounded-2xl px-4 py-1">
        <TextInput
          className="flex-1 py-3 text-gray-900 text-base"
          placeholder="What needs to be done?"
          placeholderTextColor="#9CA3AF"
          value={text}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />
        <Pressable
          onPress={handleSubmit}
          className="bg-blue-600 active:bg-blue-700 rounded-xl px-5 py-2.5"
        >
          <Text className="text-white font-semibold text-sm">Add</Text>
        </Pressable>
      </View>
      {error && (
        <Text className="text-red-500 text-xs mt-2 ml-4">{error}</Text>
      )}
    </View>
  );
};
