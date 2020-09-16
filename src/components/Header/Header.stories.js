import Header from "./Header";
import React from "react";

export default {
  title: "Component/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "User name",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
