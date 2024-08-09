#include <iostream>
using namespace std;
int main()
{
    int X;
    cin >> X;
    
    int cnt = 1;
    int x = 1;
    int y = 1;
    int sum;
    while (cnt != X)
    {
        sum = x + y;
        if (sum % 2 == 0 && x == 1)
        { y++; }
        else if (sum % 2 == 1 && y == 1)
        { x++; }
        else if (sum % 2 == 1)
        {
            x++;
            y--;
        }
        else if (sum % 2 == 0)
        {
            x--;
            y++;
        }
        cnt++;
    }
    cout << x << "/" << y;
} 