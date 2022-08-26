#include <iostream>
#include <string>
using namespace std;

int isGroupWord(string s)
{
    int index[256];
    for (int i = 0; i < 256; i++)
    { index[i] = 0; }
    for (int i = 0; i < s.size(); i++)
    {
        index[s[i]]++;
        while (s[i] == s[i + 1])
        { i++; }
    }
    for (int i = 0; i < 256; i++)
    {
        if (index[i] >= 2)
        { return 0; }
    }
    return 1;
}

int main()
{
    int N;
    cin >> N;
    int answer = 0;
    for (int i = 0; i < N; i++)
    {
        string s;
        cin >> s;
        answer += isGroupWord(s);
    }
    cout << answer;
    return 0;
}