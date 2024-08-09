#include <iostream>
#include <string>

int main(){
  std::string S;
  int array[26];

  for (int i = 0; i < 26; i++) {
    array[i] = 0;
  }

  std::cin >> S;
  for (std::string::iterator iter = S.begin(); iter < S.end(); iter++) {
    array[*iter - 'a']++;
  }

  for (int i = 0; i < 26; i++) {
    std::cout << array[i] << " ";
  }
}