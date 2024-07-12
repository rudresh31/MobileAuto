import { Before, After } from '@cucumber/cucumber';

Before({ tags: "@only" }, (scenario) =>  {
  // Code to run before each scenario
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});

After({ tags: "@only" }, (scenario) => {
  // Code to run after each scenario
  console.log(`Finished scenario: ${scenario.pickle.name}`);
});