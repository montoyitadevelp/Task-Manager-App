import React from 'react';
import { View, Text } from 'react-native';

export const EmptyState: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center px-12 py-20">
      <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-6">
        <Text className="text-4xl">📝</Text>
      </View>
      <Text className="text-gray-900 text-xl font-bold mb-2">
        No tasks yet
      </Text>
      <Text className="text-gray-500 text-center text-sm leading-5">
        Start adding tasks to organize your day and boost your productivity
      </Text>
    </View>
  );
};
