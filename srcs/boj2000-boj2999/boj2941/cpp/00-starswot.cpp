#include <iostream>
#include <string>
using namespace std;
int main()
{
    string s;
    cin >> s;
    int num = 0;
    for (string::iterator it = s.begin(); it != s.end(); it++)
    {
        num++;
        if (it != s.end() - 1 && *it == 'c' && *(it + 1) == '=')
        { it++; }
        else if (it != s.end() - 1 && *it == 'c' && *(it + 1) == '-')
        { it++; }
        else if (it != s.end() - 2 && *it == 'd' && *(it + 1) == 'z' && *(it + 2) == '=')
        { it += 2; }
        else if (it != s.end() - 1 && *it == 'd' && *(it + 1) == '-')
        { it++; }
        else if (it != s.end() - 1 && *it == 'l' && *(it + 1) == 'j')
        { it++; }
        else if (it != s.end() - 1 && *it == 'n' && *(it + 1) == 'j')
        { it++; }
        else if (it != s.end() - 1 && *it == 's' && *(it + 1) == '=')
        { it++; }
        else if (it != s.end() - 1 && *it == 'z' && *(it + 1) == '=')
        { it++; }
    }
    cout << num;
}