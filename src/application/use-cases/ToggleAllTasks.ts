import { ITaskRepository } from '@domain/repositories/ITaskRepository';
import { Task } from '@domain/entities/Task';

export const toggleAllTasksUseCase = async (
  repository: ITaskRepository,
  markAsCompleted: boolean
): Promise<Task[]> => {
  try {
    const tasks = await repository.getAll();

    const updatedTasks = await Promise.all(
      tasks.map(async (task) => {
        if (task.isCompleted !== markAsCompleted) {
          const updatedTask = {
            ...task,
            isCompleted: markAsCompleted,
            completedAt: markAsCompleted ? new Date() : undefined,
          };
          return await repository.update(updatedTask);
        }
        return task;
      })
    );

    return updatedTasks;
  } catch (error) {
    throw new Error(`Failed to toggle all tasks: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
