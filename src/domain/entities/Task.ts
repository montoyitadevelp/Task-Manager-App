export interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  completedAt?: Date;
}
