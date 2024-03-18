import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about',
  exposes: {
    './Module': 'apps/about/src/remote-entry.ts',
  },
};

export default config;
