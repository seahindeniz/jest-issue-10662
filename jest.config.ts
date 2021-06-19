import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  roots: ['./src'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  // https://regex101.com/r/tiSozd/1
  testRegex: '\\.(test|spec)\\.tsx?$',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
