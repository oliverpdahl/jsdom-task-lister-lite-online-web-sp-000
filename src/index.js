document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", function(event) {
    console.log(event.textContent)
    // const description = document.getElementById("new-task-description");
    // const text = description.innerText;
    // description.innerText = ''
    // const li = document.createElement('li')
    // li.innerText = text
    // document.getElementById('tasks').appendChild(li)
    event.preventDefault();
  });
});
