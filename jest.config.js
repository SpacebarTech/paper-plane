module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    // I think we're going to adopt the barrel pattern, in
    // which we will put the tests right next to each
    // component. Why? Look at this glob vs. the long
    // gibberish glob above... 👆🏼
    'src/**/*.spec.ts',
  ],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  }
}
