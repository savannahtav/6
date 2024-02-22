// Function to echo the arguments to standard output
function echoArgs(args) {
    // Join all arguments with a space separator
    const output = args.join(" ");
    // Write the output to standard output
    process.stdout.write(output + "\n");
}

// Export the function to be used externally
module.exports = echoArgs;

echoArgs(process.argv.slice(2));
