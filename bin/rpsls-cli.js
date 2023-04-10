// runs node-rpsls
import rpsls from "../lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2)); // processing arguments


if ("h" in args || "help" in args) {
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

if ("r" in args || "rules" in args) {
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

if (args._.length > 1) {
    console.error("Arguments out of range.");
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
} else if (args._.length === 0) {
        console.log(JSON.stringify(rpsls.rpslsDefault()));
    } else {
        let playerChoice = args._[0].toLowerCase();

        if (rpsls.rpslsChoices.includes(playerChoice)) {
            console.log(JSON.stringify(rpsls.rpsls(playerChoice)));
        } else {
            console.error(
                `
                Invalid argument.
                Acceptable arguments: rock | paper | scissors | lizard | spock
                `
            );
            console.log(
                `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
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
        }
    }