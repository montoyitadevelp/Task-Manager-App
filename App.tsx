import './global.css';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { TaskListScreen } from './src/presentation/screens/TaskListScreen';

export default function App() {
  return (
    <SafeAreaProvider>
        <TaskListScreen />
        <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
