#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    
    int N;
    cin >> N;
    
    vector<double> v(N);
    for (int i = 0; i < N; i++)
        cin >> v[i];
    
    vector<double>::iterator it = max_element(v.begin(), v.end());
    double max = *it;
    double sum = 0;
    for (int i = 0; i < N; i++)
    {
        v[i] = v[i] / max * 100;
        sum += v[i];
    }

    cout << sum / N;
}
