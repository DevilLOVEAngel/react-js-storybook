module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-events",
    "@storybook/addon-notes/register-panel",
    "@storybook/addon-storysource",
  ],
};
