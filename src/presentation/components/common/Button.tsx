import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  children: string;
  variant?: 'primary' | 'danger' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClass = 'px-4 py-2 rounded-lg items-center justify-center';

  const variantClass = {
    primary: 'bg-blue-500 active:bg-blue-600',
    danger: 'bg-red-500 active:bg-red-600',
    ghost: 'bg-transparent active:bg-gray-100',
  }[variant];

  const textClass = {
    primary: 'text-white font-semibold text-sm',
    danger: 'text-white font-semibold text-xs',
    ghost: 'text-gray-700 text-sm',
  }[variant];

  return (
    <Pressable
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      <Text className={textClass}>{children}</Text>
    </Pressable>
  );
};
