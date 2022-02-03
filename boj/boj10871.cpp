#include <iostream>

using namespace std;

int N, X, A[10005];
int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    cin >> N >> X;
    for (int i = 0; i < N; i++)
        cin >> A[i];
    for (int i = 0; i < N; i++)
    {
        if (A[i] < X)
            cout << A[i] << " ";
    }
}
