/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
    // Step 2: Input Validation
    
    // Check if fileName is provided
    if (!fileName) {
      throw new Error("File name is missing");
    }
    
    // Check if fileData is a string
    if (typeof fileData !== 'string') {
      throw new TypeError("File data must be a string");
    }
    
    // Check if fileData is not empty
    if (fileData.trim() === "") {
      throw new Error("File data cannot be empty");
    }

    // Simulate file processing
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    // Simulate file reading/writing operations (just a placeholder)
    console.log("Simulating file read/write operation...");
    
  } catch (err) {
    // Step 2: Handle errors with descriptive messages
    console.error(`Error: ${err.message}`);
  } finally {
    // Step 3: Ensure resources are released, even if errors occur
    console.log("Closing file resources...");
  }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ Error: File name is missing
processFile("myFile.txt", 42); // ❌ Error: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
