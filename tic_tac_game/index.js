let count = 1;

const user_name = document.getElementById("username");
const boxes = document.querySelectorAll(".box");

const winnerConditions = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [3, 5, 7]
]

let played_user1 = []
let played_user2 = []

let played_user1_count = 0;
let played_user2_count = 0;

boxes.forEach(box => {
    box.addEventListener('click', (event) => {
        console.log(event.target.id);
        console.log(count);
        console.log(user_name.textContent);


        if (count <= 8) {
            if (count % 2 == 0) {
                user_name.textContent = "User_1";
                const oIcon = document.createElement("i");
                oIcon.classList.add("fa-solid", "fa-o", "text-blue-500");
                box.appendChild(oIcon);

                let num = parseInt(event.target.id);
                played_user2.push(num);
                played_user2.sort((a, b) => a - b);

                played_user2_count += 1;
                if (played_user2_count >= 3) {
                    const is_present = winnerConditions.some(subArr =>
                        subArr.every(val => played_user1.includes(val))
                    );

                    if (is_present) {
                        user_name.textContent = "User2 winss!"
                        console.log("Userrr Winss");

                        boxes.forEach(box => box.innerHTML = "");
                        count = 1;
                        // Delay restart by 1 second (1000 ms)
                        setTimeout(() => {
                            restartGame();
                        }, 2000);
                    }
                }

            } else {
                user_name.textContent = "User_2";
                const xIcon = document.createElement("i");
                xIcon.classList.add("fa-solid", "fa-xmark", "text-red-500");
                box.appendChild(xIcon);

                let num = parseInt(event.target.id);
                played_user1.push(num);
                played_user1.sort((a, b) => a - b);

                played_user1_count += 1;
                if (played_user1_count >= 3) {
                    const is_present = winnerConditions.some(subArr =>
                        subArr.every(val => played_user1.includes(val))
                    );

                    if (is_present) {
                        user_name.textContent = "User1 winss!"
                        console.log("Userrr Winss");
                        boxes.forEach(box => box.innerHTML = "");
                        count = 1;
                        // Delay restart by 1 second (1000 ms)
                        setTimeout(() => {
                            restartGame();
                        }, 2000);
                    }
                }
            }
            count += 1;
        } else {
            user_name.textContent = "Tie";
            // Delay restart by 1 second (1000 ms)
            setTimeout(() => {
                restartGame();
            }, 2000);
        }
    })
})


function restartGame() {
    // Clear all boxes
    boxes.forEach(box => box.innerHTML = "");

    // Reset turn counter
    count = 1;

    // Reset played moves
    played_user1 = [];
    played_user2 = [];
    played_user1_count = 0;
    played_user2_count = 0;

    // Reset user display
    user_name.textContent = "User_1";
}
