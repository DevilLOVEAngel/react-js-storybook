import * as HeaderStories from "../../components/Header/Header.stories";

import { Page } from "./Page";
import React from "react";

export default {
  title: "Screen/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
