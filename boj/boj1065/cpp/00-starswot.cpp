#include <iostream>
using namespace std;

int hansu(int n)
{
    if (n > 1000)
    { return 0; }
    if (n < 100)
    { return 1; }

    int a = n / 100;
    int b = n / 10 % 10;
    int c = n % 10;

    if (a - b == b - c)
    { return 1; }

    return 0;
}

int main()
{
    int N;
    cin >> N;

    int count = 0;
    
    for (int i = 1; i <= N; i++)
    { 
        if (hansu(i))
        { count++; }
    }
    cout << count;
}
