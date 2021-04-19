This repo demonstrates an issue with integrating the `@cypress/snapshot` npm package into cypress component tests.

Notable files:
- `cypress/plugins/index.ts`
- `cypress/support/commands.ts`
- `src/App.spec.tsx`

Running `App.spec.tsx` (`npm run cypress`) results in an infinite cycle of the test reloading after passing:

![](reloading.gif?raw=true "GIF")
