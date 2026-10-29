// ===================================
// 1. WELCOME BUTTON
// ===================================

const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {
    welcomeMessage.textContent = "Welcome! Thanks for visiting my website!";
});


// ===================================
// 2. COUNTER
// ===================================

let count = 0;

const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("count");

countButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});


// ===================================
// 3. AGE CHECKER
// ===================================

const ageInput = document.getElementById("ageInput");
const checkAgeButton = document.getElementById("checkAgeButton");
const ageResult = document.getElementById("ageResult");

checkAgeButton.addEventListener("click", function () {
    const age = Number(ageInput.value);

    if (ageInput.value.trim() === "") {
        ageResult.textContent = "Please enter your age.";
    } else if (age < 0) {
        ageResult.textContent = "Please enter a valid age.";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult!";
    } else {
        ageResult.textContent = "You are under 18.";
    }
});


// ===================================
// 4. LOOPS
// ===================================

const hobbies = [
    "Learning programming",
    "Listening to music",
    "Playing football",
    "Exploring technology",
    "Building websites"
];

const showHobbiesButton = document.getElementById("showHobbiesButton");
const hobbyList = document.getElementById("hobbyList");

showHobbiesButton.addEventListener("click", function () {
    hobbyList.innerHTML = "";

    for (let i = 0; i < hobbies.length; i++) {
        const listItem = document.createElement("li");

        listItem.textContent = hobbies[i];

        hobbyList.appendChild(listItem);
    }
});


// ===================================
// 5. FUNCTIONS
// ===================================

function addNumbers(a, b) {
    return a + b;
}

const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const calculateButton = document.getElementById("calculateButton");
const calculationResult = document.getElementById("calculationResult");

calculateButton.addEventListener("click", function () {
    if (
        firstNumber.value.trim() === "" ||
        secondNumber.value.trim() === ""
    ) {
        calculationResult.textContent = "Please enter both numbers.";
        return;
    }

    const number1 = Number(firstNumber.value);
    const number2 = Number(secondNumber.value);

    const answer = addNumbers(number1, number2);

    calculationResult.textContent = "The answer is: " + answer;
});


// ===================================
// 6. ARRAYS
// ===================================

const myHobbies = [
    "Football",
    "Music",
    "Programming",
    "Reading"
];

const arrayHobbyList = document.getElementById("arrayHobbyList");
const newHobby = document.getElementById("newHobby");
const addHobbyButton = document.getElementById("addHobbyButton");
const hobbyMessage = document.getElementById("hobbyMessage");

function displayHobbies() {
    arrayHobbyList.innerHTML = "";

    for (let i = 0; i < myHobbies.length; i++) {
        const item = document.createElement("li");

        item.textContent = myHobbies[i];

        arrayHobbyList.appendChild(item);
    }
}

displayHobbies();

addHobbyButton.addEventListener("click", function () {
    const hobby = newHobby.value.trim();

    if (hobby === "") {
        hobbyMessage.textContent = "Please enter a hobby.";
        return;
    }

    myHobbies.push(hobby);

    displayHobbies();

    hobbyMessage.textContent = "Hobby added successfully!";

    newHobby.value = "";
});


// ===================================
// 7. OBJECTS
// ===================================

const myProfile = {
    name: "Nahom",
    age: 20,
    country: "Ethiopia",
    hobby: "Web Development",
    skill: "JavaScript"
};

const showProfileButton = document.getElementById("showProfileButton");
const profileResult = document.getElementById("profileResult");

showProfileButton.addEventListener("click", function () {
    profileResult.innerHTML = `
        <p><strong>Name:</strong> ${myProfile.name}</p>
        <p><strong>Age:</strong> ${myProfile.age}</p>
        <p><strong>Country:</strong> ${myProfile.country}</p>
        <p><strong>Hobby:</strong> ${myProfile.hobby}</p>
        <p><strong>Skill:</strong> ${myProfile.skill}</p>
    `;
});


// ===================================
// 8. TO-DO LIST - DOM MANIPULATION
// ===================================

// Load saved tasks from the browser (or start with an empty list)
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const taskMessage = document.getElementById("taskMessage");


// Function to display all tasks
function displayTasks() {

    // Clear the old list
    taskList.innerHTML = "";

    // Go through every task
    for (let i = 0; i < tasks.length; i++) {

        // Create a list item
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        if (tasks[i].completed) {
            listItem.classList.add("completed");
        }

        // Create task text
        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = tasks[i].text;

        // Create buttons container
        const actions = document.createElement("div");
        actions.className = "task-actions";

        // Create complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = tasks[i].completed
            ? "Undo"
            : "Complete";

        // Complete or undo a task
        completeButton.addEventListener("click", function () {
            tasks[i].completed = !tasks[i].completed;
            displayTasks();
        });

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        // Delete a task
        deleteButton.addEventListener("click", function () {
            tasks.splice(i, 1);
            displayTasks();
            taskMessage.textContent = "Task deleted.";
        });

        // Add buttons to the container
        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);

        // Add text and buttons to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(actions);

        // Add the task to the webpage
        taskList.appendChild(listItem);
    }

    // Update the total task count
    taskCount.textContent = tasks.length;

    // Save tasks in the browser
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show saved tasks when the page loads
displayTasks();


// Add a new task
addTaskButton.addEventListener("click", function () {

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        taskMessage.textContent = "Please enter a task.";
        return;
    }

    // Add task to the array
    tasks.push({
        text: taskName,
        completed: false
    });

    // Clear the input
    taskInput.value = "";

    taskMessage.textContent = "Task added successfully!";

    // Update the webpage
    displayTasks();
});


// Allow Enter key to add a task
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});


// ===================================
// 9. CHARACTER COUNTER
// ===================================

const messageInput = document.getElementById("messageInput");
const characterCount = document.getElementById("characterCount");

messageInput.addEventListener("input", function () {
    characterCount.textContent = messageInput.value.length;
});


// ===================================
// 10. CONTACT FORM
// ===================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Thanks! This demo form doesn't send messages yet.";

    contactForm.reset();
});


// ===================================
// WEBSITE READY
// ===================================

console.log("My website is working!");
