const fs = require('fs');
const path = require('path');

// Function to create a new empty file
function createFile(filePath) {
    try {
        // Resolve the file path to ensure it's an absolute path
        const absolutePath = path.resolve(filePath);
        
        // Check if the file already exists
        if (fs.existsSync(absolutePath)){
            console.log('File already exists');
            return;
        }
        fs.writeFileSync(absolutePath, '');
        console.log('File created successfully');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = createFile;
const filePath = process.argv[2];
createFile(filePath);
