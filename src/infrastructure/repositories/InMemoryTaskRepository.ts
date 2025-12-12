import { ITaskRepository } from '@domain/repositories/ITaskRepository';
import { Task } from '@domain/entities/Task';

export class InMemoryTaskRepository implements ITaskRepository {
  private static instance: InMemoryTaskRepository;
  private tasks: Map<string, Task> = new Map();

  private constructor() {}

  public static getInstance(): InMemoryTaskRepository {
    if (!InMemoryTaskRepository.instance) {
      InMemoryTaskRepository.instance = new InMemoryTaskRepository();
    }
    return InMemoryTaskRepository.instance;
  }

  async getAll(): Promise<Task[]> {
    return Array.from(this.tasks.values());
  }

  async getById(id: string): Promise<Task | null> {
    return this.tasks.get(id) || null;
  }

  async create(task: Task): Promise<Task> {
    this.tasks.set(task.id, task);
    return task;
  }

  async update(task: Task): Promise<Task> {
    if (!this.tasks.has(task.id)) {
      throw new Error(`Task with id ${task.id} not found`);
    }
    this.tasks.set(task.id, task);
    return task;
  }

  async delete(id: string): Promise<void> {
    this.tasks.delete(id);
  }

  async deleteAll(): Promise<void> {
    this.tasks.clear();
  }
}
