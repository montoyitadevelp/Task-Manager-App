import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalTaskManager } from '../../application/hooks/useLocalTaskManager';
import { CheckAllButton } from '../components/common/CheckAllButton';
import { DeleteAllButton } from '../components/common/DeleteAllButton';
import { ConfirmModal } from '../components/common/ConfirmModal';
import { TaskInput } from '../components/TaskInput/TaskInput';
import { TaskList } from '../components/TaskList/TaskList';

export const TaskListScreen: React.FC = () => {
  const { tasks, addTask, toggleTask, deleteTask, toggleAllTasks, deleteAllTasks } = useLocalTaskManager();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const completedCount = tasks.filter(t => t.isCompleted).length;
  const allCompleted = tasks.length > 0 && completedCount === tasks.length;

  const handleToggleAll = () => {
    toggleAllTasks(!allCompleted);
  };

  const handleDeleteAll = () => {
    deleteAllTasks();
    setIsDeleteModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <View className="px-6 pt-6 pb-4">
        <Text className="text-3xl font-bold text-gray-900 mb-1">
          Tasks
        </Text>
        <View className="flex-row items-center gap-2">
          <View className="bg-blue-50 px-3 py-1 rounded-full">
            <Text className="text-xs font-semibold text-blue-600">
              {tasks.length} total
            </Text>
          </View>
          {completedCount > 0 && (
            <View className="bg-green-50 px-3 py-1 rounded-full">
              <Text className="text-xs font-semibold text-green-600">
                {completedCount} done
              </Text>
            </View>
          )}
        </View>
      </View>

      <TaskInput onAddTask={addTask} />

      {tasks.length > 0 && (
        <View className="px-6 pb-3 flex-row justify-start gap-2">
          <CheckAllButton
            onPress={handleToggleAll}
            allCompleted={allCompleted}
            text={allCompleted ? 'Mark all as undone' : 'Mark all as done'}
          />
          <DeleteAllButton
            onPress={() => setIsDeleteModalVisible(true)}
            text="Delete all"
          />
        </View>
      )}

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />

      <ConfirmModal
        visible={isDeleteModalVisible}
        onConfirm={handleDeleteAll}
        onCancel={() => setIsDeleteModalVisible(false)}
        title="Delete all tasks"
        message="Are you sure you want to delete all tasks?"
        confirmText="Delete"
        cancelText="Cancel"
      />
    </SafeAreaView>
  );
};
