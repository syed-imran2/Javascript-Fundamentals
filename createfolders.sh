#!/bin/bash

# Ask the user for the folder name
read -p "Enter the folder name: " FOLDER_NAME

# Create the folder if it doesn't exist
mkdir -p "$FOLDER_NAME"

# Check if create_html_files.sh exists in the current directory
if [[ -f "createfiles.sh" ]]; then
    # Copy (not move) the script into the new folder
    cp createfiles.sh "$FOLDER_NAME/"
    echo "Copied createfiles.sh to $FOLDER_NAME/"
    # Move into the newly created directory
    cd "$FOLDER_NAME" #|| { echo "Error: Failed to move into $FOLDER_NAME"; exit 1; }
    echo "Now inside $FOLDER_NAME/"
    pwd  # Show the current directory
else
    echo "Error: create_html_files.sh not found in the current directory!"
fi
echo "Task completed!"
