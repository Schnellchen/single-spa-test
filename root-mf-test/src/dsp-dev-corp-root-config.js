import { registerApplication, start } from "single-spa";
registerApplication({
  name: "@dsp-dev-corp/mf-test",
  app: () => System.import("@dsp-dev-corp/mf-test"),
  activeWhen: ["/mf-test"]
});
start({
  urlRerouteOnly: true,
});