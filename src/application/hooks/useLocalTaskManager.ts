import { useState, useCallback, useEffect, useMemo } from 'react';
import { Task } from '../../domain/entities/Task';
import { InMemoryTaskRepository } from '../../infrastructure/repositories/InMemoryTaskRepository';
import { createTaskUseCase } from '../use-cases/CreateTask';
import { toggleTaskCompletionUseCase } from '../use-cases/ToggleTaskCompletion';
import { deleteTaskUseCase } from '../use-cases/DeleteTask';
import { getAllTasksUseCase } from '../use-cases/GetAllTasks';
import { toggleAllTasksUseCase } from '../use-cases/ToggleAllTasks';
import { deleteAllTasksUseCase } from '../use-cases/DeleteAllTasks';

export const useLocalTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const repository = useMemo(
    () => InMemoryTaskRepository.getInstance(),
    []
  );

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedTasks = await getAllTasksUseCase(repository);
      setTasks(fetchedTasks);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load tasks';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const addTask = useCallback(async (description: string) => {
    setLoading(true);
    setError(null);
    try {
      const newTask = await createTaskUseCase(repository, description);
      setTasks(prevTasks => [...prevTasks, newTask]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to add task';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  const toggleTask = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const updatedTask = await toggleTaskCompletionUseCase(repository, id);
      setTasks(prevTasks =>
        prevTasks.map(task => (task.id === id ? updatedTask : task))
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to toggle task';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  const deleteTask = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteTaskUseCase(repository, id);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete task';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  const toggleAllTasks = useCallback(async (markAsCompleted: boolean) => {
    setLoading(true);
    setError(null);
    try {
      const updatedTasks = await toggleAllTasksUseCase(repository, markAsCompleted);
      setTasks(updatedTasks);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to toggle all tasks';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  const deleteAllTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await deleteAllTasksUseCase(repository);
      setTasks([]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete all tasks';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [repository]);

  return {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    deleteTask,
    toggleAllTasks,
    deleteAllTasks,
    refresh: loadTasks,
  };
};