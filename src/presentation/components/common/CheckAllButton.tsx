import React from 'react';
import { View, Text, Pressable, PressableProps } from 'react-native';

interface CheckAllButtonProps extends PressableProps {
  text: string;
  allCompleted: boolean;
}

const CheckmarkIcon = () => (
  <View className="w-4 h-4 rounded-full border-2 border-purple-600 items-center justify-center">
    <View className="w-1.5 h-2.5 border-r-2 border-b-2 border-purple-600 -rotate-45 transform" />
  </View>
);


export const CheckAllButton: React.FC<CheckAllButtonProps> = ({ text, allCompleted, ...props }) => {
  return (
    <Pressable {...props} className="flex-row items-center gap-2 bg-purple-50 active:bg-purple-100 px-3 py-2 rounded-full">
      <CheckmarkIcon />
      <Text className="text-sm font-semibold text-purple-600">
        {text}
      </Text>
    </Pressable>
  );
};
