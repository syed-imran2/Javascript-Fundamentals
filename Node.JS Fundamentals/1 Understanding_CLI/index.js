const fs = require("fs");  // Import the File System module

const input = process.argv;   // Get all arguments from the command line
const command = input[2];     // This will be 'add' or 'list'
const noteText = input[3];    // This will be the actual note text (only for 'add')

if (command === "add") {
  const note = {
    id: Date.now(),           // Generate a unique ID using timestamp
    text: noteText,           // Store the user-provided note
  };

  let notes = [];

  // Check if notes.json already exists
  if (fs.existsSync("notes.json")) {
    const data = fs.readFileSync("notes.json", "utf8");  // Read file as string
    notes = JSON.parse(data);  // Convert string → JS object (array of notes)
  }

  notes.push(note);  // Add the new note to the array

  // Save the updated notes back to notes.json
  fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));  // Save to file (formatted)

  console.log("✅ Note added!");
}

else if (command === "list") {
  if (fs.existsSync("notes.json")) {
    const data = fs.readFileSync("notes.json", "utf8");  // Read notes.json as text
    const notes = JSON.parse(data);                      // Parse to array

    if (notes.length === 0) {
      console.log("📭 No notes found.");
    } else {
      console.log("🗒️ Your Notes:");
      notes.forEach(note => {
        console.log(`- [${note.id}] ${note.text}`);
      });
    }
  } else {
    console.log("❌ notes.json not found. No notes to show.");
  }
}

else if (command === "remove") {
  const idToRemove = parseInt(input[3]);  // Convert ID from string to number

  if (fs.existsSync("notes.json")) {
    let notes = JSON.parse(fs.readFileSync("notes.json", "utf8"));

    const newNotes = notes.filter(note => note.id !== idToRemove);

    if (newNotes.length === notes.length) {
      console.log(`⚠️ No note found with ID: ${idToRemove}`);
    } else {
      fs.writeFileSync("notes.json", JSON.stringify(newNotes, null, 2));
      console.log(`🗑️ Note with ID ${idToRemove} removed.`);
    }
  } else {
    console.log("❌ notes.json not found.");
  }
}

else if (command === "edit") {
  const idToEdit = parseInt(input[3]);
  const newText = input[4];

  if (!newText) {
    console.log("⚠️ Please provide new text for the note.");
    return;
  }

  if (fs.existsSync("notes.json")) {
    let notes = JSON.parse(fs.readFileSync("notes.json", "utf8"));
    const index = notes.findIndex(note => note.id === idToEdit);

    if (index === -1) {
      console.log(`⚠️ No note found with ID: ${idToEdit}`);
    } else {
      notes[index].text = newText;
      fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2));
      console.log(`✏️ Note with ID ${idToEdit} updated.`);
    }
  } else {
    console.log("❌ notes.json not found.");
  }
}

else {
  console.log("❓ Unknown command. Use 'add' or 'list'.");
}
