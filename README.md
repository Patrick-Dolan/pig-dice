# _Pig Dice_

#### By _**Patrick Dolan & Branden Clauson**_

#### _A dice game you can play with multiple people_

## Technologies Used

* _HTML_
* _CSS & Bootstrap_
* _Javascript & jQuery_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _Download or Clone repo to your pc_
* _navigate into pig-dice directory and double click index.html to launch the program_

## Known Bugs

* _No UI_

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_
_dolanp1992@gmail.com_

## License

_MIT_

Copyright (c) _2021_ _Patrick Dolan & Branden Clauson_

## Plan

1. Game object
- store players
- prototpe: track turns
- prototype: check current game against game rules
- prototype: store dice roles for players turn
2. Player object
- tracks score 
- UI logic: turn options
3. Dice Roller Function
- roll dice randomly
4. UI: Score card
- shows user scores
- function to add to list

## Tests 
<br>
describe rollDice()

Test: "It should roll a random number between 1 and 6"
Code:
rollDice()
Expected Output: "1-6"

describe Game.protoype.roll()

Test: "It should 