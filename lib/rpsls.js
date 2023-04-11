// main, where exported RPS and RPSLS function(s) are

const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"];
const rpsOptions = ["rock", "paper", "scissors"];

// Math.floor(Math.random()*(choices.length-1))

const RULES = { // total possible outcomes 
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie', 
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'lizard': 'win',
        'spock': 'lose'
    },
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    }
};

export function rpslsGame(choice) {
    // const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (choice === undefined) // if not given
        return {player: rpslsOptions[Math.floor(Math.random()*(5))] // choose random index then random value
    };
  
    choice = choice.toLowerCase();
    if (!rpslsOptions.includes(choice)) { // test if out of range
        console.error(choice + ' is out of range.');
        console.log(
        `
        Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
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
        process.exit(1);
    }

    var oppChoice = rpslsOptions[Math.floor(Math.random()*(5))]; // opponent choice
    return {player: choice, opponent: oppChoice, result: RULES[choice][oppChoice]}
}

export function rpsGame(choice) {
    // const options = ['rock', 'paper', 'scissors'];
    if (choice === undefined)
        return {player: rpsOptions[Math.floor(Math.random()*(3))]
    };
  
    choice = choice.toLowerCase();
    if (!rpsOptions.includes(choice)) {
      console.error(choice + ' is out of range. ');
      console.log(
        `
        Rules for Rock Paper Scissors:
      - Scissors CUTS Paper
      - Paper COVERS Rock
      - Rock CRUSHES Scissors
        `
      );
      process.exit(1);
    }
    
    var oppChoice = rpsOptions[Math.floor(Math.random()*(3))];
    return {player: choice, opponent: oppChoice, result: RULES[choice][oppChoice]}
  }
  