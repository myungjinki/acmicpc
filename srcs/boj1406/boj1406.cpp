#include <iostream>
#include <list>
#include <string>

using namespace std;


int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    string str;
    cin >> str;

    list<char> mylist(str.begin(), str.end());
    list<char>::iterator it = mylist.end();
    
    int M;
    cin >> M;
    while (M--)
    {
        char command;
        cin >> command;
        if (command == 'L')
        {
            if (it == mylist.begin()) continue;
            it--;
        }
        else if (command == 'D')
        {
            if (it == mylist.end()) continue;
            it++;
        }
        else if (command == 'B')
        {
            if (it == mylist.begin()) continue;
            list<char>::iterator temp = it;
            temp--;
            mylist.erase(temp);
        }
        else if (command == 'P')
        {
            char letter;
            cin >> letter;
            mylist.insert(it, letter);
        }
    }
    for (it = mylist.begin(); it != mylist.end(); it++)
        cout << *it;
    return 0;
}
