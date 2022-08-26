#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main()
{
    string s;
    cin >> s;

    for (string::iterator it = s.begin(); it != s.end(); it++)
    {
        if (*it >= 'a' && *it <= 'z')
            *it -= 'a' - 'A';
    }
    
    int flag[256];
    for (int i = 0; i < 256; i++)
        flag[i] = 0;

    for (string::iterator it = s.begin(); it != s.end(); it++)
    {
        flag[(int)*it]++;
    }

    int max = 0;
    int index = 0;
    for (int i = 'A'; i <= 'Z'; i++)
    {
        if (max < flag[i])
        {
            max = flag[i];
            index = i;
        }
    }
    flag[index] = 0;
    for (int i = 'A'; i <= 'Z'; i++)
    {
        if (flag[i] == max)
        {
            cout << '?';
            return 0;
        }
    }
    cout << (char)index;
}