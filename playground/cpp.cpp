#include <string>
#include <iostream>

int main() {
  char array[10] = {0};
  std::string N;
  std::cin >> N;

  int i;
  for (std::string::iterator iter = N.begin(); iter < N.end(); iter++) {
    i = *iter - '0';
    if (i == 9) {
      i = 6;
    }
    if (i >= 0 && i <= 9) {
      array[i]++;
    }
  }
  array[6] = (array[6] + 1) / 2;

  int max = 0;
  for (int i = 0; i < 10; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  std::cout << max;
  return (0);
}