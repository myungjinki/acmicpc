#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main()
{
    vector<int> v(10);
    for (int i = 0; i < 10; i++)
    {
        cin >> v[i];
        v[i] %= 42;
    }
    sort(v.begin(), v.end());
    std::vector<int>::iterator it = unique(v.begin(), v.end());
    v.resize(distance(v.begin(), it));
    cout << v.size();
}
