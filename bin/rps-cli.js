#!/usr/bin/env node

import { rpsGame } from "../lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2)); // processing arguments

if ("h" in args || "help" in args) { // if arg is h or help
    console.log(
    `
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
    Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}
    `
    );
    process.exit(0);
}

if ("r" in args || "rules" in args) { // if arg is r or rules
    console.log(
    `
    Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors
    `
    );
    process.exit(0);
}

let playerChoice = args._[0].toLowerCase();
console.log(JSON.stringify(rpsGame(playerChoice)));
process.exit(0);