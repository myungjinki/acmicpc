#!/bin/bash

# Function to create directory and files
create_directory() {
    local number=$1
    mkdir -p "./src/$number"
    cd "./src/$number" || exit
    printf "# Link\n\nhttps://www.acmicpc.net/problem/$number\n\n# Python\n\n# JavaScript\n\n# C\n\n# C++\n\n# Java\n" > README.md
    touch main.c main.cpp Main$number.java app.js main.py
    mkdir -p "input"
    touch "input/1.txt"
    echo "Directory 'src/$number' created with main.c main.cpp, Main.java, app.js, main.py, README.md, and input/1.txt inside."
}

# Function to run Python with input files
run_python() {
    local number=$1
    cd "./src/$number" || exit
    
    # Check if main.py exists
    if [ ! -f "main.py" ]; then
        echo "Error: main.py not found in src/$number"
        exit 1
    fi
    
    # Find all input files
    input_files=(input/*.txt)
    
    # Check if there are any input files
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi
    
    # Run Python with all input files
    cat "${input_files[@]}" | python main.py
}

# Main script logic
if [ $# -ne 2 ]; then
    echo "Usage: $0 [make|python] <number>"
    exit 1
fi

case $1 in
    make)
        create_directory "$2"
        ;;
    python)
        run_python "$2"
        ;;
    *)
        echo "Invalid command. Use 'make' or 'python'."
        exit 1
        ;;
esac