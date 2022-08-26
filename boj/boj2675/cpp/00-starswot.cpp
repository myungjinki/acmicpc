#include <iostream>
#include <string>
using namespace std;
int main()
{
    int P;
    cin >> P;
    
    int N;
    string S;
    for (int i = 0; i < P; i++)
    {
        cin >> N >> S;
        for (int j = 0; j < S.length(); j++)
        {
            for (int k = 0; k < N; k++)
            {
                cout << S[j];
            }
        }
        cout << "\n";
    }
}