import "../src/index.css";

// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: "#root",
    // sets the execution mode for the addon
    manual: false,
  },
};
