import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run child:serve',
        production: 'nx run child:serve:production',
      },
      ciWebServerCommand: 'nx run child:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
