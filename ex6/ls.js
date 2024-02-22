const fs = require('fs');
const path = require('path');

// Function to list files in a directory
function listFiles(directory) {
    try {
        // Resolve the directory path to ensure it's an absolute path
        const dirPath = path.resolve(directory);
        
        // Read the contents of the directory
        const files = fs.readdirSync(dirPath);
        
        // Sort the files alphabetically using localeCompare
        files.sort((a, b) => a.localeCompare(b));
        
        // Output the files separated by spaces
        console.log(files.join(' '));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = listFiles;

const directory = process.argv[2] || '.'; // Use current directory if no argument provided
listFiles(directory);
