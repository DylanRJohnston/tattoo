import { storiesOf } from '@storybook/react';
import { Altar } from './Altar';
import React from 'react';
import { svg } from '../../../../decorators/svg';

storiesOf('sigils|Altar', module)
  .addDecorator(svg(100, 66.66))
  .add('default', () => <Altar />)