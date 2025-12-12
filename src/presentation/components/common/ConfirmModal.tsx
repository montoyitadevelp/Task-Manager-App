import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onCancel}
    >
      <Pressable
        className="flex-1 bg-black/60 items-center justify-center px-6"
        onPress={onCancel}
      >
        <Pressable
          className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl"
          onPress={(e) => e.stopPropagation()}
        >
          <View className="w-14 h-14 bg-red-50 rounded-full items-center justify-center mb-4">
            <Text className="text-2xl">⚠️</Text>
          </View>

          <Text className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </Text>
          <Text className="text-base text-gray-600 mb-8 leading-5">
            {message}
          </Text>

          <View className="flex-row gap-3">
            <Pressable
              className="flex-1 bg-gray-100 active:bg-gray-200 py-4 rounded-xl items-center justify-center"
              onPress={onCancel}
            >
              <Text className="text-gray-700 font-bold text-base">
                {cancelText}
              </Text>
            </Pressable>

            <Pressable
              className="flex-1 bg-red-500 active:bg-red-600 py-4 rounded-xl items-center justify-center"
              onPress={onConfirm}
            >
              <Text className="text-white font-bold text-base">
                {confirmText}
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
