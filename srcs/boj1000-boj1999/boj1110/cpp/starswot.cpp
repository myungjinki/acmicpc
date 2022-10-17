#include <iostream>
using namespace std;
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int N;
    cin >> N;

    int count = 1;
    int A = N;
    int B = A / 10 + A % 10;
    A = (N % 10) * 10 + B % 10;
    while (N != A)
    {
        count++;
        B = A / 10 + A % 10;
        A = (A % 10) * 10 + B % 10;
    }
    cout << count;
}
