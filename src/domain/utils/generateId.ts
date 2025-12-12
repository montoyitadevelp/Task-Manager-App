let counter = 0;

/**
 * Generates a unique ID based on timestamp and counter
 * Format: timestamp-counter
 */
export const generateId = (): string => {
  const timestamp = Date.now();
  counter = (counter + 1) % 10000;
  return `${timestamp}-${counter}`;
};
