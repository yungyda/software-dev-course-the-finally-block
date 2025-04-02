/*
Objective
This activity will help students:
  Identify and explain JavaScript's standard exceptions through practical examples.
  Implement finally blocks to manage resources and ensure consistent execution of cleanup tasks,
  regardless of program errors.



Scenario
You’ve been hired to create a system that simulates file processing for a virtual library.
The system must:
  Validate user input (file names and data) to ensure correct processing.
  Simulate file processing, including reading and writing operations.
  Ensure all resources (e.g., file handles) are closed, regardless of whether the operations succeed or fail.



Instructions
  Step 1: Debug Standard Exceptions The starter code contains deliberate errors related to standard exceptions.
  Your first task is to run the code, observe the errors, and correct them.
  
  Step 2: Add Input Validation and Throw Custom Exceptions Add validation to check for:
    Missing file names (ReferenceError).
    File data that is not a string (TypeError).
    Invalid file operations (e.g., attempting to process a file with invalid data).
  
  Step 3: Implement a finally Block Use a finally block to simulate closing the file handle or releasing resources,
  ensuring this happens even if an exception is thrown.
  
  Step 4: Test Your Solution Test the program with different types of inputs to trigger exceptions
  and confirm the finally block executes consistently.
*/



// Starter Code
function processFile(fileName, fileData) {
    try {
        // Simulate processing
        if (!fileName) {
            throw new ReferenceError("File name is missing.");
        }
        if (typeof fileData !== "string") {
            throw new TypeError("File data must be a string.");
        }
        if (fileData.trim() === "") {
            throw new Error("File data cannot be empty.");
        }
        console.log(`Processing file: ${fileName}`);
        console.log(`File content: ${fileData}`);
    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    } finally {
        console.log("Closing file handle...");
    }
}

// Test Cases
processFile(); // Should throw a ReferenceError
processFile("myFile.txt", 42); // Should throw a TypeError
processFile("myFile.txt", ""); // Should throw a generic Error
processFile("myFile.txt", "Hello, world!"); // Should process successfully
