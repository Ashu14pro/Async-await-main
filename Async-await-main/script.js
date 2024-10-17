document.getElementById('fetchButton').addEventListener('click', fetchData);

async function fetchData() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Loading...';

    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        outputDiv.textContent = JSON.stringify(data.posts[0], null, 2); // Display the first post for simplicity
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
}
