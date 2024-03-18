import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'child',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
