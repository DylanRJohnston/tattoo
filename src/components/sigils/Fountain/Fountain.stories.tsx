import { storiesOf } from '@storybook/react';
import { Fountain } from './Fountain';
import React from 'react';
import { svg } from '../../../../decorators/svg';

storiesOf('sigils|Fountain', module)
  .addDecorator(svg(100, 50))
  .add('default', () => <Fountain />)