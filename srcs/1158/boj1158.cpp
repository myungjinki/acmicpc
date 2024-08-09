#include <iostream>
#include <queue>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N, K;
    cin >> N >> K;
    queue<int> myqueue;
    for (int i = 1; i <= N; i++)
        myqueue.push(i);
    int cnt = 1;
    cout << "<";
    while (!myqueue.empty())
    {
        if (cnt % K == 0)
        {
            cout << myqueue.front();
            myqueue.pop();
            if (!myqueue.empty())
                cout << ", ";
        }
        else
        {
            myqueue.push(myqueue.front());
            myqueue.pop();
        }
        cnt++;
    }
    cout << ">";
    return 0;
}
