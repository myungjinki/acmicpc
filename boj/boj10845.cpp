#include <iostream>
#include <queue>
#include <string>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N;
    cin >> N;
    queue<int> myqueue;
    while (N--)
    {
        string str;
        cin >> str;
        if (str == "push")
        {
            int num;
            cin >> num;
            myqueue.push(num);
        }
        else if (str == "pop")
        {
            if (myqueue.empty())
            {
                cout << "-1" << "\n";
                continue;
            }
            cout << myqueue.front() << "\n";
            myqueue.pop();
        }
        else if (str == "size")
        {
            cout << myqueue.size() << "\n";
        }
        else if (str == "empty")
        {
            if (myqueue.empty())
                cout << "1" << "\n";
            else
                cout << "0" << "\n";
        }
        else if (str == "front")
        {
            if (myqueue.empty())
            {
                cout << "-1" << "\n";
                continue;
            }
            cout << myqueue.front() << "\n";
        }
        else if (str == "back")
        {
            if (myqueue.empty())
            {
                cout << "-1" << "\n";
                continue;
            }
            cout << myqueue.back() << "\n";
        }
    }
    return 0;
}