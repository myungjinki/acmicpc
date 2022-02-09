#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    while (1)
    {
        string str;
        bool isValid = true;
        getline(cin, str);
        if (str == ".")
            break ;
        stack<char> mystack;
        for (int i = 0; i < str.size(); i++)
        {
            if (str[i] == '(' || str[i] == '[')
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
            else if (str[i] == ']')
            {
                if (mystack.empty() || mystack.top() != '[')
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
            cout << "yes" << "\n";
        else
            cout << "no" << "\n";
    }
    return 0;
}
