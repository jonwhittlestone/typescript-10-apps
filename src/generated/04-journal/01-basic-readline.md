# basic-readline

```typescript
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function printHeader(): Promise<void> {
  console.log("------------------------------");
  console.log("        JOURNAL APP         ");
  console.log("------------------------------");
}

async function runEventLoop(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  while (true) {
    console.log("What do you want to do with your journal?");
    const cmd = await rl.question("[L]ist entries, [A]dd an entry, [E]xit: ");

    if (cmd.toUpperCase() === "L") {
      // In a real app, you would implement listing entries here
      console.log("Listing entries...");
    } else if (cmd.toUpperCase() === "A") {
      // In a real app, you would implement adding an entry here
      console.log("Adding an entry...");
    } else if (cmd.toUpperCase() === "E") {
      console.log("Exiting the journal app. Goodbye!");
      rl.close();
      break;
    } else {
      console.log("Invalid command. Please try again.");
    }
  }
}

async function main(): Promise<void> {
  await printHeader();
  await runEventLoop();
}

main();
```
