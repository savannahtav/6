const fs = require('fs');
const path = require('path');

// Function to output the contents of a file
function catFile(filePath) {
    try {
        // Resolve the file path to ensure it's an absolute path
        const absolutePath = path.resolve(filePath);
        // Read the contents of the file
        const fileContent = fs.readFileSync(absolutePath, 'utf8');
        process.stdout.write(fileContent);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
module.exports = catFile;
catFile(process.argv[2]);
