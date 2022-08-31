import path from 'path';
import storybook from '@storybook/react/standalone';

storybook({
  port: 7520,
  mode: 'static',
  configDir: path.join(__dirname, '../configuration/storybook'),
  outputDir: path.join(__dirname, '../storybook-static'),
});
