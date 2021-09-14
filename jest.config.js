module.exports = {
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  modulePathIgnorePatterns: ['/lib/'],
  moduleNameMapper: {
    'vue-composition-toolset': '<rootDir>/src/index.ts',
  },
  collectCoverage: true,
  testEnvironment: 'jsdom',
}
