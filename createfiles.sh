#!/bin/bash

# Prompt the user for the number of task files
read -p "Enter the number of task files to create: " num_files

# Validate the input (must be a positive integer)
if ! [[ "$num_files" =~ ^[0-9]+$ ]]; then
  echo "Invalid input. Please enter a positive integer."
  exit 1
fi

# Loop through numbers from 1 to n and create the HTML files
for i in $(seq 1 "$num_files"); do
  cat <<EOF > "Task${i}.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task $i</title>
</head>
<body>
    <script>
    </script>
</body>
</html>
EOF
  echo "Created task${i}.html"
done

echo "All $num_files task files have been successfully created!"
