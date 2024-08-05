N = int(input())
students = list(map(int, input().split()))

check_id = 1

stack = []
for student in students:
    if student != check_id:
        stack.append(student)
    else:
        check_id += 1
    while len(stack) != 0 and stack[-1] == check_id:
        stack.pop()
        check_id += 1

if len(stack) == 0:
    print("Nice")
else:
    print("Sad")
