#include <iostream>
using namespace std;
void swap(int &num)
{
    int a = num / 100;
    int b = num / 10 % 10;
    int c = num % 10;

    num = c * 100 + b * 10 + a;    
}

int main()
{
    int a, b;
    cin >> a >> b;
    swap(a);
    swap(b);
    if (a > b)
    { cout << a; }
    else
    { cout << b; }
}