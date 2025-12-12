module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@domain': './src/domain',
            '@application': './src/application',
            '@infrastructure': './src/infrastructure',
            '@presentation': './src/presentation',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
