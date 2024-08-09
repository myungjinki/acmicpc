#include <iostream>
using namespace std;
int main()
{
    int N;
    cin >> N;
    cin.get();

    char c;
    int sum = 0;
    for (int i = 0; i < N; i++)
    {
        c = cin.get();
        sum += c - '0';
    }
    cout << sum;
}
