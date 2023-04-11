#!/usr/bin/env node

import minimist from "minimist";
import { rpslsGame } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2)); // processing arguments


if ("h" in args || "help" in args) { // if you see a h or help
    console.log(
        `
        Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
            -h, --help        display this help message and exit
            -r, --rules       display the rules and exit
        Examples:
            node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
            node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}
        `
    );
    process.exit(0);
}

if ("r" in args || "rules" in args) { // if you see an r or rules
    console.log(
        `
        Rules for the Lizard-Spock Espansion of Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors
        `
    );
    process.exit(0);
}


var playerChoice = args._[0];
console.log(JSON.stringify(rpslsGame(playerChoice)));
process.exit(0);