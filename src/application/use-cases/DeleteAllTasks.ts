import { ITaskRepository } from '@domain/repositories/ITaskRepository';

export const deleteAllTasksUseCase = async (
  repository: ITaskRepository
): Promise<void> => {
  try {
    await repository.deleteAll();
  } catch (error) {
    throw new Error(`Failed to delete all tasks: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
