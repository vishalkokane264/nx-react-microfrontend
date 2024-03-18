import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'child',

  exposes: {
    './Module': './src/remote-entry.ts',
    './Dashboard': './src/app/dashboard.tsx',
  },
};

export default config;
