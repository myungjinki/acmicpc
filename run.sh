#!/bin/bash

# Function to create directory and files
create_directory() {
    local number=$1
    mkdir -p "./src/$number"
    cd "./src/$number" || exit
    printf "# Link\n\nhttps://www.acmicpc.net/problem/$number\n\n# Python\n\n# JavaScript\n\n# C\n\n# C++\n\n# Java\n" > README.md
    touch main.c main.cpp Main"$number".java app.js main.py
    mkdir -p "input"
    touch "input/1.txt"
    echo "Directory 'src/$number' created with main.c, main.cpp, Main.java, app.js, main.py, README.md, and input/1.txt inside."
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

# Function to run JavaScript with input files
run_js() {
    local number=$1
    cd "./src/$number" || exit
    
    # Check if app.js exists
    if [ ! -f "app.js" ]; then
        echo "Error: app.js not found in src/$number"
        exit 1
    fi
    
    # Find all input files
    input_files=(input/*.txt)
    
    # Check if there are any input files
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi
    
    # Run JavaScript with all input files
    cat "${input_files[@]}" | node app.js
}

# Function to run C with input files
run_c() {
    local number=$1
    cd "./src/$number" || exit
    
    # Check if main.c exists
    if [ ! -f "main.c" ]; then
        echo "Error: main.c not found in src/$number"
        exit 1
    fi
    
    # Compile C file
    clang -o main main.c
    
    # Find all input files
    input_files=(input/*.txt)
    
    # Check if there are any input files
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi
    
    # Run compiled C program with all input files
    cat "${input_files[@]}" | ./main
}

# Function to run C++ with input files
run_cpp() {
    local number=$1
    cd "./src/$number" || exit
    
    # Check if main.cpp exists
    if [ ! -f "main.cpp" ]; then
        echo "Error: main.cpp not found in src/$number"
        exit 1
    fi
    
    # Compile C++ file
    clang++ -o main main.cpp
    
    # Find all input files
    input_files=(input/*.txt)
    
    # Check if there are any input files
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi
    
    # Run compiled C++ program with all input files
    cat "${input_files[@]}" | ./main
}

# Main script logic
if [ $# -ne 2 ]; then
    echo "Usage: $0 [make|python|js|c|cpp] <number>"
    exit 1
fi

case $1 in
    make)
        create_directory "$2"
        ;;
    python)
        run_python "$2"
        ;;
    js)
        run_js "$2"
        ;;
    c)
        run_c "$2"
        ;;
    cpp)
        run_cpp "$2"
        ;;
    *)
        echo "Invalid command. Use 'make', 'python', 'js', 'c', or 'cpp'."
        exit 1
        ;;
esac
