import { Config } from '@stencil/core';
import { getDocsGenerator } from './scripts/docs-generator';

export const config: Config = {
  namespace: 'docs-custom-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-custom',
      generator: getDocsGenerator('../dist/docs.json')
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
