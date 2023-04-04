const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/__tests__/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/**/*.{spec,test}.(ts|tsx)"],
  collectCoverageFrom: [
    "!<rootDir>/__tests__/**/*.(ts|tsx)",
    "<rootDir>/components/**/*.(ts|tsx)",
    "<rootDir>/src/**/*.(ts|tsx)",
    "<rootDir>/pages/**/*.(ts|tsx)",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
