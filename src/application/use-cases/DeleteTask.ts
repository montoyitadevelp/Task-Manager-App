import { ITaskRepository } from '@domain/repositories/ITaskRepository';

export const deleteTaskUseCase = async (
  repository: ITaskRepository,
  id: string
): Promise<void> => {
  try {
    await repository.delete(id);
  } catch (error) {
    throw new Error(`Failed to delete task: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
