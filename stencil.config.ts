import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stenciljs-storybook-lib',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@cuuki/stenciljs-storybook-lib',
      proxiesFile: '../@cuuki\/stenciljs-storybook-lib-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
