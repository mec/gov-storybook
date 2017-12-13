import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import StartButton from '../components/start-button';
import Button from '../components/button';
import Notice from '../components/notice';
import Data from '../components/data';
import PhaseBanner from '../components/phase-banner';
import Text from '../components/forms/text';
import Area from '../components/forms/area';

const withInfoOptions = {
  inline: true,
  source: true
};

storiesOf('Phase banner', module)
  .add('in Alpha', () => <PhaseBanner phase="alpha" />)
  .add('in Beta', () => <PhaseBanner phase="beta" />);

storiesOf('Buttons', module)
  .add('Start button', () => <StartButton text={'Start now'}  onClick={action('clicked')}/>)
  .add('Button', () => <Button text={'Save and continue'}  onClick={action('clicked')}/>)
  .add(
    'Default button',
    withInfo(withInfoOptions)(() => <Button text={'Save and continue'} onClick={action('clicked')}/>));

storiesOf('Data').add('Visualisation', () => (
  <Data value={'24'} text={'Ministerial departments'} />
));

storiesOf('Notices', module).add('Notice', () => (
  <Notice type={'Warning'} text={'You can be fined up to £5,000 if you don’t register.'} />
));

storiesOf('Forms', module)
  .add('Text field', () => <Text />)
  .add('Text field with hint', () => (
    <Text
      labelText={'National Insurance number'}
      hint={
        "It's on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      }
    />
  ))
  .add('Text area', () => <Area />);
