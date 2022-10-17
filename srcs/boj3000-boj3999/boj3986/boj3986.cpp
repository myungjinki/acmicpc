#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N;
    cin >> N;
    int cnt = 0;
    while (N--)
    {
        string str;
        cin >> str;
        stack<char> mystack;
        for (int i = 0; i < str.size(); i++)
        {
            if (!mystack.empty()&& mystack.top() == str[i])
                mystack.pop();
            else
                mystack.push(str[i]);
        }
        if (mystack.empty())
            cnt++;
    }
    cout << cnt;
}