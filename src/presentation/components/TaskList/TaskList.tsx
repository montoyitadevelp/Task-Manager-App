import React from 'react';
import { FlatList } from 'react-native';
import { Task } from '@domain/entities/Task';
import { TaskListItem } from './TaskListItem';
import { EmptyState } from '../common/EmptyState';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskListItem
          task={item}
          onToggle={() => onToggleTask(item.id)}
          onDelete={() => onDeleteTask(item.id)}
        />
      )}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
    />
  );
};
