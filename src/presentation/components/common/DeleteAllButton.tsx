import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';

interface DeleteAllButtonProps extends PressableProps {
  text: string;
}

const TrashIcon = () => (
  <View className="w-4 h-4 items-center justify-center">
    <View className="w-2 h-1 bg-red-600 absolute top-0" />
    <View className="w-3 h-3 border-2 border-red-600 rounded-b-sm" />
  </View>
);

export const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({ text, ...props }) => {
  return (
    <Pressable {...props} className="flex-row items-center gap-2 bg-red-50 active:bg-red-100 px-3 py-2 rounded-full">
      <TrashIcon />
      <Text className="text-sm font-semibold text-red-600">
        {text}
      </Text>
    </Pressable>
  );
};
