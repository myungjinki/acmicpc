#include <iostream>
#include <stack>

using namespace std;

int main(void)
{
    int K;
    cin >> K;
    stack<int> mystack;
    while (K--)
    {
        int num;
        cin >> num;
        if (num == 0)
        {
            if (mystack.empty()) continue;
            mystack.pop();
        }
        else
            mystack.push(num);
    }
    int sum = 0;
    while (!mystack.empty())
    {
        sum += mystack.top();
        mystack.pop();
    }
    cout << sum;
    return 0;
}
