import path from 'path';
import storybook from '@storybook/react/standalone';

storybook({
  port: 6007,
  mode: 'dev',
  configDir: path.join(__dirname, '../configuration/storybook'),
  staticDir: [path.join(__dirname, '../storybook-static')],
  previewUrl: 'http://localhost:6007/iframe.html',
});
