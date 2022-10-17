#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
  int x, y;
  vector<int> sum;
  while (1)
  {
    cin >> x >> y;
    if (cin.eof()) break ;
    sum.push_back(x + y);
  }
  vector<int>::iterator iter;
  for (iter = sum.begin(); iter != sum.end(); iter++) {
    cout << *iter << "\n";
  }
}