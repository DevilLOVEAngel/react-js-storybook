import * as TaskListStories from "../../components/TaskList/TaskList.stories";

import { InboxScreen } from "./InboxScreen";
import { Provider } from "react-redux";
import React from "react";
import { action } from "@storybook/addon-actions";

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: InboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "Screen/InboxScreen",
};

const Template = (args) => <InboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
