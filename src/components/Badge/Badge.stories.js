import { Badge } from "./Badge";
import { Icon } from "../Icon/Icon";
import React from "react";

export default {
  title: "Component/Badge",
  component: Badge,
};

export const allBadges = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative" style={{ marginLeft: "1rem" }}>
      Negative
    </Badge>
    <Badge status="neutral" style={{ marginLeft: "1rem" }}>
      Neutral
    </Badge>
    <Badge status="error" style={{ marginLeft: "1rem" }}>
      Error
    </Badge>
    <Badge status="warning" style={{ marginLeft: "1rem" }}>
      Warning
    </Badge>
    <Badge status="positive" style={{ marginLeft: "1rem" }}>
      <Icon icon="facehappy" inline />
      with icon
    </Badge>
  </div>
);

allBadges.story = {
  name: "All Badges",
};

export const positive = () => <Badge status="positive">Positive</Badge>;
export const negative = () => <Badge status="negative">Negative</Badge>;
export const warning = () => <Badge status="warning">Warning</Badge>;
export const neutral = () => <Badge status="neutral">Neutral</Badge>;
export const error = () => <Badge status="error">Error</Badge>;

export const withIcon = () => (
  <Badge status="warning">
    <Icon icon="check" inline />
    with icon
  </Badge>
);

withIcon.story = {
  name: "With Icon",
};
