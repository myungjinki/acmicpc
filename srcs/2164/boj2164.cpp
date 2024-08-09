#include <iostream>
#include <queue>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int N;
    cin >> N;
    queue<int> myqueue;
    for (int i = 1; i <= N;  i++)
        myqueue.push(i);
    while (myqueue.size() != 1)
    {
        myqueue.pop();
        myqueue.push(myqueue.front());
        myqueue.pop();
    }
    cout << myqueue.front();
    return 0;
}
