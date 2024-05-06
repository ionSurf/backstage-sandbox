import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { timeSaverPlugin, TimeSaverPage } from '../src/plugin';

createDevApp()
  .registerPlugin(timeSaverPlugin)
  .addPage({
    element: <TimeSaverPage />,
    title: 'Root Page',
    path: '/time-saver',
  })
  .render();
