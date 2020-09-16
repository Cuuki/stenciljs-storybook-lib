import { html } from 'lit-html';
import { storiesOf } from '@storybook/web-components';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';

import readme from './readme.md';

storiesOf('My Button', module)
  .addDecorator(withActions('buttonClicked'))
  .addDecorator(withKnobs)
  .add(
    'Default', () => {
      const label = text('label', 'Label');
      const clickHandler = () => {
        console.log('Clicked');
      };

      return html`
        <my-button
          label="${label}"
          buttonClicked="${clickHandler}"
        />
      `;
    },
    {
      notes: readme,

    },
  );
