/* eslint-disable import/no-anonymous-default-export */
export default {
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy"
    },
    "testEnvironment": 'jsdom',
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    "transformIgnorePatterns": ["<rootDir>/node_modules/(?!axios)/"],
  };