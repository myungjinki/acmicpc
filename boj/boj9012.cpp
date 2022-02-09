#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T;
    cin >> T;
    while (T--)
    {
        string str;
        cin >> str;
        stack<char> mystack;
        bool isValid = true;
        for (int i = 0; i < str.size(); i++)
        {
            if (str[i] == '(')
                mystack.push(str[i]);
            else if (str[i] == ')')
            {
                if (mystack.empty() || mystack.top() != '(')
                {
                    isValid = false;
                    break ;
                }
                mystack.pop();
            }
        }
        if (!mystack.empty())
            isValid = false;
        if (isValid)
            cout << "YES" << "\n";
        else
            cout << "NO" << "\n";
    }
    return 0;
}