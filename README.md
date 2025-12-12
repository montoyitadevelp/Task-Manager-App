# TaskManagerApp 📝

[![React Native](https://img.shields.io/badge/React_Native-0.81.5-blue?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0.27-blue?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.2.1-informational?logo=tailwindcss&logoColor=white)](https://www.nativewind.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.2-teal?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A simple and efficient task management application built with React Native and Expo.

## ✨ Features

-   ✅ **Create Tasks:** Quickly add new tasks to your to-do list.
-   🔄 **Toggle Tasks:** Mark tasks as complete or incomplete.
-   🗑️ **Delete Tasks:** Remove tasks you no longer need.
-   🧹 **Clear All Tasks:** A quick way to clear your entire task list.
-   🎨 **Clean UI:** A minimalist and user-friendly interface.

## 🏛️ Architecture

This project follows the principles of **Domain-Driven Design (DDD)**, organizing the code into a layered architecture. This separation of concerns makes the application more scalable, maintainable, and testable.

The project is divided into the following layers:

-   **`presentation`**: The UI layer, built with React Native. It is responsible for displaying the user interface and handling user input. It interacts with the `application` layer to perform business logic.

-   **`application`**: This layer contains the application's use cases and orchestrates the domain layer to perform specific tasks. It acts as a bridge between the `presentation` and `domain` layers.

-   **`domain`**: The core of the application, containing the business logic, entities, and repository interfaces. This layer is independent of any external frameworks or technologies.

-   **`infrastructure`**: This layer provides the implementation for the interfaces defined in the `domain` layer. For example, it includes the `InMemoryTaskRepository`, which is a concrete implementation of the `ITaskRepository` interface. This layer is responsible for data storage, network requests, and other external services.

Here is a visual representation of the architecture:

```
+---------------------+
|    Presentation     | (UI Components, Screens)
+---------------------+
          |
          v
+---------------------+
|     Application     | (Use Cases, Hooks)
+---------------------+
          |
          v
+---------------------+
|       Domain        | (Entities, Repositories)
+---------------------+
          |
          v
+---------------------+
|   Infrastructure    | (Database, APIs)
+---------------------+
```

This architecture ensures that the business logic (`domain`) is decoupled from the UI (`presentation`) and the data storage (`infrastructure`), allowing for greater flexibility and easier maintenance.


## 🚀 Getting Started

### ✅ Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or newer) and npm (or yarn).
-   [Expo CLI](https://docs.expo.dev/get-started/installation/): `npm install -g expo-cli`.
-   For local development with emulators:
    -   [Android Studio](https://developer.android.com/studio) for Android.
    -   [Xcode](https://developer.apple.com/xcode/) for iOS (macOS only).

### 📦 Installation

1.  Navigate to the project directory.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### 🏃 Running the App

You can run the application in several ways:

#### 📱 Using Expo Go on a Physical Device (Recommended for quick start)

1.  Install the **Expo Go** app on your [iOS](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) device.
2.  Start the development server:
    ```bash
    npm start
    ```
3.  Scan the QR code shown in the terminal with your device's camera or the Expo Go app.

#### 🖥️ Using a Local Emulator/Simulator

This method is for running the app in a virtual device on your computer.

-   **On Android Emulator:**
    1.  Make sure you have an Android Virtual Device (AVD) set up in Android Studio.
    2.  Run the following command:
        ```bash
        npm run android
        ```

-   **On iOS Simulator (macOS only):**
    1.  Make sure you have Xcode and its Command Line Tools installed.
    2.  Run the following command:
        ```bash
        npm run ios
        ```
        
## 📚 Third-Party Libraries

This project is built with the help of these amazing libraries:

-   **[Expo](https://expo.dev/):** A framework and a platform for universal React applications.
-   **[React Native](https://reactnative.dev/):** A framework for building native apps using React.
-   **[NativeWind](https://www.nativewind.dev/):** Enables using Tailwind CSS for styling in React Native.
-   **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/):** Used for creating smooth animations. (Note: The usage of this library was removed due to some issues, but it is still listed as a dependency).
-   **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context):** Handles safe area insets for different devices.
-   **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript for more robust code.
-   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
