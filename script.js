// DOM Selection
const input = document.querySelector("input");
const button = document.querySelector("button");
const orderedList = document.querySelector("ol");

// Event Handling
button.addEventListener("click", function () {

    // Get input value
    const taskText = input.value;

    // Prevent empty task
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Dynamic Element Creation
    const listItem = document.createElement("li");

    // Set innerText
    listItem.innerText = taskText;

    // Apply Styling
    listItem.style.cursor = "pointer";
    listItem.style.padding = "8px";
    listItem.style.margin = "5px";
    listItem.style.backgroundColor = "#f0f0f0";
    listItem.style.borderRadius = "5px";

    // Add class
    listItem.setAttribute("class", "task-item");

    // Append to ordered list
    orderedList.append(listItem);

    // Remove task when clicked
    listItem.addEventListener("click", function () {
        listItem.remove();
    });

    // Clear input field
    input.value = "";
});
