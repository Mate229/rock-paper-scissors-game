        console.log("Hello World")

        function getComputerChoice() {
            let x = Math.random()
            if (x <= 0.33) {
                return "rock";
            } else if (x <= 0.66) {
                return "paper";
            } else {
                return "scissors"
            }
        }

        let userScore, computerScore;
        userScore = 0;
        computerScore = 0;

        const result = document.querySelector(".result");

        const score = document.createElement("div");
        score.textContent = `Your score: ${userScore} vs Computer score: ${computerScore}`;

        const winner = document.createElement("div");

        const body = document.querySelector("body");
        body.append(score, winner);

        function playRound(userChoice) {
             computerChoice = getComputerChoice();

            if (userChoice === computerChoice) {
                result.textContent = "It's a Draw";
                userScore = userScore;
                computerScore = computerScore;
            } else if (userChoice === "rock") {
                if (computerChoice === "paper") {
                    result.textContent = "You loose! Paper beats Rock";
                    computerScore++;
                } else {
                    result.textContent = "You win! Rock beats Scissors";
                    userScore++;
                }
            } else if (userChoice === "paper") {
                if (computerChoice === "rock") {
                    result.textContent = "You win! Paper beats Rock";
                    userScore++;
                } else {
                    result.textContent = "You loose! Scissors beats Paper";
                    computerScore++;
                }
            } else {
                if (computerChoice === "paper") {
                    result.textContent = "You win! Scissors beats Paper";
                    userScore++;
                } else {
                    result.textContent = "You loose! Rock beats Scissors";
                    computerScore++;
                }
            };

            score.textContent = `Your score: ${userScore} vs Computer score: ${computerScore}`;
            if (userScore === 5) {
                winner.textContent = "You Win!";
                winner.style.cssText = "color: green";
            } else if (computerScore === 5) {
                winner.textContent = "Game Over. You Loose!";
                winner.style.cssText = "color: red";
            }
        }

        const paper = document.querySelector(".paper");
        const rock = document.querySelector(".rock");
        const scissors = document.querySelector(".scissors");

        paper.addEventListener("click", () => playRound("paper"));
        rock.addEventListener("click", () => playRound("rock"));
        scissors.addEventListener("click", () => playRound("scissors"));
