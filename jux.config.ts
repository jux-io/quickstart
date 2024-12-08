import { defineConfig } from '@juxio/cli';

import { core, dark, light } from '@/jux/tokens';

export default defineConfig({
  /* Whether to apply preflight styles */
  preflight: true,

  /* A list of glob file patterns to watch for styling configurations */
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  globalCss: {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
  },

  /* The core tokens */
  core_tokens: core,

  definitions_directory: './src/jux/types',

  // builtInFonts: {
  //   google: ['Inter', 'Poppins', 'BioRhyme'],
  // },

  /* The tokens and themes for the design system */
  themes: {
    light,
    dark,
  },
});
