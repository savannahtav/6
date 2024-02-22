const fs = require('fs');
const path = require('path');

// Function to rename/move a file
function renameFile(sourcePath, destinationPath) {
    try {
        // Resolve source and destination paths to ensure they're absolute paths
        const source = path.resolve(sourcePath);
        const destination = path.resolve(destinationPath);
        
        // Check if the source file exists
        if (!fs.existsSync(source)) {
            throw new Error('Source file does not exist');
        }
        fs.renameSync(source, destination);
        console.log('File renamed/moved successfully');
    } catch (error) {
        console.error('Error:', error.message);
    }
}
module.exports = renameFile;

const sourcePath = process.argv[2];
const destinationPath = process.argv[3];

renameFile(sourcePath, destinationPath);
