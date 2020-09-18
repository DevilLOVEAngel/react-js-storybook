import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import React from 'react';
import { StoryLinkWrapper } from '../StoryLinkWrapper';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

const CustomButton = styled.button`
  border: 1px solid green;
  background: lightgreen;
  color: rebeccapurple;
  padding: 1em;
  font-size: 1.2em;
`;

function ButtonWrapper(props) {
  return <CustomButton onClick={action('button action click')} {...props} />;
}

export default {
  title: 'Component/Button',
  component: Button,
};

export const allSmallButtons = () => (
  <div>
    <Button appearance="primary" size="small">
      Primary
    </Button>

    <Button appearance="secondary" size="small" style={{ marginLeft: '3rem' }}>
      Secondary
    </Button>

    <Button appearance="tertiary" size="small" style={{ marginLeft: '3rem' }}>
      Tertiary
    </Button>

    <Button appearance="outline" size="small" style={{ marginLeft: '3rem' }}>
      Outline
    </Button>

    <Button
      appearance="primary"
      isDisabled
      size="small"
      style={{ marginLeft: '3rem' }}
    >
      Disabled
    </Button>

    <Button
      appearance="primaryOutline"
      size="small"
      style={{ marginLeft: '3rem' }}
    >
      Outline primary
    </Button>

    <Button
      appearance="secondaryOutline"
      size="small"
      style={{ marginLeft: '3rem' }}
    >
      Outline secondary
    </Button>

    <Button
      appearance="outline"
      size="small"
      containsIcon
      style={{ marginLeft: '3rem' }}
    >
      <Icon icon="link" aria-label="Link" />
    </Button>

    <Button appearance="outline" size="small" style={{ marginLeft: '3rem' }}>
      <Icon icon="link" />
      Link
    </Button>
  </div>
);
allSmallButtons.story = {
  name: 'All Small',
};

export const allMediumButtons = () => (
  <div>
    <Button appearance="primary" style={{ marginLeft: '3rem' }}>
      Primary
    </Button>

    <Button appearance="secondary" style={{ marginLeft: '3rem' }}>
      Secondary
    </Button>

    <Button appearance="tertiary" style={{ marginLeft: '3rem' }}>
      Tertiary
    </Button>

    <Button appearance="outline" style={{ marginLeft: '3rem' }}>
      Outline
    </Button>

    <Button appearance="primaryOutline" style={{ marginLeft: '3rem' }}>
      Outline primary
    </Button>

    <Button appearance="secondaryOutline" style={{ marginLeft: '3rem' }}>
      Outline secondary
    </Button>

    <Button appearance="primary" isDisabled style={{ marginLeft: '3rem' }}>
      Disabled
    </Button>

    <Button appearance="outline" containsIcon style={{ marginLeft: '3rem' }}>
      <Icon icon="link" aria-label="Link" />
    </Button>

    <Button appearance="outline" style={{ marginLeft: '3rem' }}>
      <Icon icon="link" />
      Link
    </Button>
  </div>
);
allMediumButtons.story = {
  name: 'All Medium',
};

export const allLargeButtons = () => (
  <div>
    <Button appearance="primary" size="large" style={{ marginLeft: '3rem' }}>
      Primary
    </Button>

    <Button appearance="secondary" size="large" style={{ marginLeft: '3rem' }}>
      Secondary
    </Button>

    <Button appearance="tertiary" size="large" style={{ marginLeft: '3rem' }}>
      Tertiary
    </Button>

    <Button appearance="outline" size="large" style={{ marginLeft: '3rem' }}>
      Outline
    </Button>

    <Button
      appearance="primaryOutline"
      size="large"
      style={{ marginLeft: '3rem' }}
    >
      Outline primary
    </Button>

    <Button
      appearance="secondaryOutline"
      size="large"
      style={{ marginLeft: '3rem' }}
    >
      Outline secondary
    </Button>

    <Button
      appearance="primary"
      isDisabled
      size="large"
      style={{ marginLeft: '3rem' }}
    >
      Disabled
    </Button>

    <Button
      appearance="outline"
      size="large"
      containsIcon
      style={{ marginLeft: '3rem' }}
    >
      <Icon icon="link" aria-label="Link" />
    </Button>

    <Button appearance="outline" size="large" style={{ marginLeft: '3rem' }}>
      <Icon icon="link" />
      Link
    </Button>
  </div>
);
allLargeButtons.story = {
  name: 'All Large',
};

export const allLoadingButtons = () => (
  <div>
    <Button appearance="primary" isLoading style={{ marginLeft: '5rem' }}>
      Primary
    </Button>
    <Button appearance="secondary" isLoading style={{ marginLeft: '5rem' }}>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading style={{ marginLeft: '5rem' }}>
      Tertiary
    </Button>
    <Button appearance="outline" isLoading style={{ marginLeft: '5rem' }}>
      Outline
    </Button>
    <Button
      appearance="outline"
      isLoading
      loadingText="Custom..."
      style={{ marginLeft: '5rem' }}
    >
      Outline
    </Button>
  </div>
);
allLoadingButtons.story = {
  name: 'Loading',
};

export const buttonWrapper = () => (
  <div>
    <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
  </div>
);
buttonWrapper.story = {
  name: 'Button Wrapper',
};

export const anchorWrapper = () => (
  <div>
    <StoryLinkWrapper to="http://storybook.js.org">
      Original Link Wrapper
    </StoryLinkWrapper>
  </div>
);
anchorWrapper.story = {
  name: 'Anchor Wrapper',
};
