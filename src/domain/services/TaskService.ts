import { Task } from '../entities/Task';
import { generateId } from '../utils/generateId';

export class TaskService {
  static createTask(description: string): Task {
    return {
      id: generateId(),
      description: description.trim(),
      isCompleted: false,
      createdAt: new Date(),
    };
  }

  static toggleTaskCompletion(task: Task): Task {
    return {
      ...task,
      isCompleted: !task.isCompleted,
      completedAt: !task.isCompleted ? new Date() : undefined,
    };
  }

  static validateTaskDescription(description: string): boolean {
    return description.trim().length > 0;
  }

  static sortTasksByDate(tasks: Task[]): Task[] {
    return [...tasks].sort((a, b) =>
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  static filterCompletedTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isCompleted);
  }

  static filterIncompleteTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => !task.isCompleted);
  }
}
