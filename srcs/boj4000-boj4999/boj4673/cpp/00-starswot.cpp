#include <iostream>
#include <vector>
using namespace std;
int d(int n)
{
    int ret = n + n % 10;
    while (n / 10)
    {
        n /= 10;
        ret += n % 10;
    }
    return ret;
}

int main()
{
    vector<int> v(10100);

    for (int i = 0; i < 10000; i++)
        v[d(i)]++;
    for (int i = 0; i < 10000; i++)
    {
        if (v[i] == 0)
            cout << i << "\n";
    }
}