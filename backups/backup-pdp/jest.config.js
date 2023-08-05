/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    "ts-jest": {
      tsconfig: `<rootDir>/tsconfig-jest.json`
    }
  }
};
