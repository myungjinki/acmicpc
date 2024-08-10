#!/bin/bash

# Function to create directory and files
create_directory() {
    local number=$1
    local languages=("c" "cpp" "cs" "java" "js" "py" "rs")
    local extensions=("c" "cpp" "cs" "java" "js" "py" "rs")
    local filenames=("main.c" "main.cpp" "Program.cs" "Main$number.java" "app.js" "main.py" "main.rs")

    mkdir -p "./src/$number/input"
    cd "./src/$number" || exit

    printf "# Link\n\nhttps://www.acmicpc.net/problem/$number\n" > README.md
    for lang in "${languages[@]}"; do
        printf "\n# %s\n\n" "$(echo $lang | tr '[:lower:]' '[:upper:]')" >> README.md
    done

    for i in "${!extensions[@]}"; do
        if [ "${extensions[$i]}" == "cs" ]; then
            dotnet new console -n "Program" -o . > /dev/null
        else
            touch "${filenames[$i]}"
        fi
    done

    touch "input/1.txt"
    echo "Directory 'src/$number' created with main files, README.md, and input/1.txt inside."
}

# Function to navigate to the problem directory
navigate_to_dir() {
    local number=$1
    cd "./src/$number" || { echo "Error: Directory src/$number not found"; exit 1; }
}

# Function to run a program with input files
run_program() {
    local number=$1
    local cmd=$2
    local source_file=$3
    local binary=$4

    navigate_to_dir "$number"

    # Check if the source file exists
    if [ ! -f "$source_file" ]; then
        echo "Error: $source_file not found in src/$number"
        exit 1
    fi

    # Find input files
    input_files=(input/*.txt)
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi

    # Compile if necessary
    if [ -n "$cmd" ]; then
        $cmd "$source_file" -o "$binary" || { echo "Error: Compilation failed"; exit 1; }
    fi

    # Run the program with all input files
    cat "${input_files[@]}" | ./$binary
}

# Function to handle running interpreted languages (Python, JS)
run_interpreter() {
    local number=$1
    local interpreter=$2
    local source_file=$3

    navigate_to_dir "$number"

    # Check if the source file exists
    if [ ! -f "$source_file" ]; then
        echo "Error: $source_file not found in src/$number"
        exit 1
    fi

    # Find input files
    input_files=(input/*.txt)
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi

    # Run the interpreter with all input files
    cat "${input_files[@]}" | $interpreter "$source_file"
}

# Function to run C# project using dotnet
run_dotnet() {
    local number=$1

    navigate_to_dir "$number"

    # Check if the project exists
    if [ ! -f "Program.csproj" ]; then
        echo "Error: Program.csproj not found in src/$number"
        exit 1
    fi

    # Find input files
    input_files=(input/*.txt)
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi

    # Run the dotnet project with all input files
    cat "${input_files[@]}" | dotnet run
}

# Function to compile and run Java code
run_java() {
    local number=$1

    navigate_to_dir "$number"

    # Compile the Java file
    javac "Main$number.java" || { echo "Error: Compilation failed"; exit 1; }

    # Find input files
    input_files=(input/*.txt)
    if [ ${#input_files[@]} -eq 0 ]; then
        echo "No input files found in src/$number/input/"
        exit 1
    fi

    # Run the Java class with all input files
    java "Main$number" < "${input_files[@]}"
}

# Main script logic
if [ $# -ne 2 ]; then
    echo "Usage: $0 <number> [make|py|js|c|cpp|cs|java|rs]"
    exit 1
fi

number=$1
command=$2

case $command in
    make)
        create_directory "$number"
        ;;
    py)
        run_interpreter "$number" "python" "main.py"
        ;;
    js)
        run_interpreter "$number" "node" "app.js"
        ;;
    c)
        run_program "$number" "clang" "main.c" "main"
        ;;
    cpp)
        run_program "$number" "clang++" "main.cpp" "main"
        ;;
    cs)
        run_dotnet "$number"
        ;;
    java)
        run_java "$number"
        ;;
    rs)
        run_program "$number" "rustc" "main.rs" "main"
        ;;
    *)
        echo "Invalid command. Use 'make', 'py', 'js', 'c', 'cpp', 'cs', 'java', or 'rs'."
        exit 1
        ;;
esac
