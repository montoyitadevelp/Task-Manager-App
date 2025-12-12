import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Task } from '@domain/entities/Task';
import { Checkbox } from '../common/Checkbox';
import { Button } from '../common/Button';
import { ConfirmModal } from '../common/ConfirmModal';

interface TaskListItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export const TaskListItem: React.FC<TaskListItemProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleToggle = () => {
    onToggle();
  };

  const handleDeletePress = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    onDelete();
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <View className={`flex-row items-center px-6 py-4 border-b border-gray-100`}>
        <Pressable
          onPress={handleToggle}
          className="flex-row items-center flex-1 mr-3"
        >
          <Checkbox checked={task.isCompleted} />

          <View className="flex-1 ml-4">
            <Text
              numberOfLines={2}
              className={`text-base leading-5 ${
                task.isCompleted
                  ? 'line-through text-gray-400'
                  : 'text-gray-900'
              }`}
            >
              {task.description}
            </Text>
            <Text className="text-xs text-gray-400 mt-1">
              {task.createdAt.toLocaleDateString()}
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={handleDeletePress}
          className="bg-red-500 active:bg-red-600 px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold text-xs">Delete</Text>
        </Pressable>
      </View>

      <ConfirmModal
        visible={showDeleteModal}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};
