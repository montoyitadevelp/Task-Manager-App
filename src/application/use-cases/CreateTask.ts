import { ITaskRepository } from '@domain/repositories/ITaskRepository';
import { Task } from '@domain/entities/Task';
import { TaskService } from '@domain/services/TaskService';

export const createTaskUseCase = async (
  repository: ITaskRepository,
  description: string
): Promise<Task> => {
  if (!TaskService.validateTaskDescription(description)) {
    throw new Error('Invalid task description: must not be empty');
  }

  const task = TaskService.createTask(description);

  try {
    return await repository.create(task);
  } catch (error) {
    throw new Error(`Failed to create task: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
