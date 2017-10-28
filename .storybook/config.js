import { configure } from '@storybook/react';

import '../src/sass/master.scss';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
