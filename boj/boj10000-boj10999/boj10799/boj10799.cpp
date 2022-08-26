#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    string str;
    cin >> str;
    stack<char> mystack;
    int cnt = 0;
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] == '(')
        {
            mystack.push('(');
            if (str[i + 1] == '(')
                cnt++;
        }
        else if (str[i] == ')')
        {
            mystack.pop();
            if (str[i - 1] == '(')
                cnt += mystack.size();
        }
    }
    cout << cnt;
    return 0;
}
