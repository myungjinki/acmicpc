#include <iostream>
using namespace std;

int arr[10];
int A, B, C, res;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cin >> A >> B >> C;
    res = A * B * C;
    while (res)
    {
        arr[res % 10]++;
        res /= 10;
    }
    for (int i = 0; i < 10; i++) cout << arr[i] << "\n";
    return 0;
}
