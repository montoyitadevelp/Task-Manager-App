import React from 'react';
import { Pressable, View, Text } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onToggle }) => {
  return (
    <Pressable onPress={onToggle}>
      <View
        className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
          checked
            ? 'bg-blue-500 border-blue-500'
            : 'border-gray-300'
        }`}
      >
        {checked && (
          <Text className="text-white text-xs font-bold">✓</Text>
        )}
      </View>
    </Pressable>
  );
};
