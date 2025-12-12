import { ITaskRepository } from '@domain/repositories/ITaskRepository';
import { Task } from '@domain/entities/Task';
import { TaskService } from '@domain/services/TaskService';

export const getAllTasksUseCase = async (
  repository: ITaskRepository
): Promise<Task[]> => {
  try {
    const tasks = await repository.getAll();
    return TaskService.sortTasksByDate(tasks);
  } catch (error) {
    throw new Error(`Failed to get tasks: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
