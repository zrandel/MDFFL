import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import BodyCopy from '../BodyCopy';
import TestBlock from '../../../test/components/TestBlock';
import copy from './copy';

storiesOf('Nebulas|BodyCopy', module)
  .add('default', () => (
    <TestBlock>
      <BodyCopy>
        {text('children', copy, 'BodyCopy')}
      </BodyCopy>
    </TestBlock>
  ))
  .add('inverted', () => (
    <TestBlock color="black">
      <BodyCopy inverted>
        {text('children', copy, 'BodyCopy')}
      </BodyCopy>
    </TestBlock>
  ));
