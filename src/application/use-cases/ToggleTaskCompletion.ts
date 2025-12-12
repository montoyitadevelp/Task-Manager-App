import { ITaskRepository } from '@domain/repositories/ITaskRepository';
import { Task } from '@domain/entities/Task';
import { TaskService } from '@domain/services/TaskService';

export const toggleTaskCompletionUseCase = async (
  repository: ITaskRepository,
  id: string
): Promise<Task> => {
  const task = await repository.getById(id);

  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }

  const updatedTask = TaskService.toggleTaskCompletion(task);

  try {
    return await repository.update(updatedTask);
  } catch (error) {
    throw new Error(`Failed to toggle task completion: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
