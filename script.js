// Select the needed elements
const heading = document.getElementById("main-heading");
const myButton = document.getElementById("my-button");
const addButton = document.getElementById("add-data");
const myList = document.getElementById("my-list");
const customText = document.getElementById("custom-text");

// 2. Button prints to console
myButton.addEventListener("click", () => {
  console.log("hello world");
  
  // 3. Also changes the H1 text
  heading.textContent = "Moi maailma";
});

// 4 & 5. Add custom text to list
addButton.addEventListener("click", () => {
  const value = customText.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    myList.appendChild(li);
    customText.value = ""; // Clear textarea
  } else {
    alert("Please enter something!");
  }
});
