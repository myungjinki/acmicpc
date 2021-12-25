# Contents

- Array

# Array Initialization

배열을 초기화 하는 방법에 대해서는 [cppreference](https://en.cppreference.com/w/c/language/array_initialization)에 자세히 나와있습니다.

### Array를 0으로 초기화하는 방법 - 1

```
  char array[10];

  for (int i = 0; i < 10; i++) {
    array[i] = 0;
  }
```

### Array를 0으로 초기화하는 방법 - 2

```
  char array[10] = {0};
```

### Array를 0으로 초기화하는 방법 - 3

```
  char array[10] = {};
```

위 방법은 C에서는 사용할 수 없습니다.
