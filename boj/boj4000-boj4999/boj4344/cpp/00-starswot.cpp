#include <iostream>
#include <vector>
using namespace std;
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.precision(3);

    int C;
    cin >> C;

    int N;
    vector<int> v;
    double sum;
    double average;
    double count;
    for (int i = 0; i < C; i++)
    {
        cin >> N;
        v.clear();
        v.reserve(N);
        sum = 0;
        count = 0;
        for (int j = 0; j < N; j++)
        {
            cin >> v[j];
            sum += v[j];
        }
        average = sum / N;
        for (int j = 0; j < N; j++)
        {
            if (v[j] > average)
                count++;
        }
        cout << fixed << count * 100 / N << "%\n";
    }
}