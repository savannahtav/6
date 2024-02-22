const fs = require('fs');
const path = require('path');

// Function to copy a file
function copyFile(sourcePath, destinationPath) {
    try {
        // Resolve source and destination paths to ensure they're absolute paths
        const source = path.resolve(sourcePath);
        const destination = path.resolve(destinationPath);
        
        // Check if the source file exists
        if (!fs.existsSync(source)) {
            throw new Error('Source file does not exist');
        }
        
        // Copy the file synchronously
        fs.copyFileSync(source, destination);
        
        console.log('File copied successfully');
    } catch (error) {
        // If there's an error, output an appropriate error message
        console.error('Error:', error.message);
    }
}

// Export the function to be used externally
module.exports = copyFile;
// Extract source and destination paths from command-line arguments
const sourcePath = process.argv[2];
const destinationPath = process.argv[3];

// Call the function with the specified source and destination paths
copyFile(sourcePath, destinationPath);
