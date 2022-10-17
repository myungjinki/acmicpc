#include <iostream>
#include <list>
#include <string>

using namespace std;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int L;
    cin >> L;
    while (L--)
    {
        string str;
        cin >> str;
        list<char> mylist;
        list<char>::iterator it = mylist.begin();

        for (int i = 0; i < str.size(); i++)
        {
            if (str[i] == '<')
            {
                if (it == mylist.begin()) continue;
                it--;
            }
            else if (str[i] == '>')
            {
                if (it == mylist.end()) continue;
                it++;
            }
            else if (str[i] == '-')
            {
                if (mylist.empty()) continue;
                if (it == mylist.begin()) continue;
                list<char>::iterator temp = it;
                temp--;
                mylist.erase(temp);
            }
            else
                mylist.insert(it, str[i]);
        }
        for (it = mylist.begin(); it != mylist.end(); it++)
            cout << *it;
        cout << "\n";
    }
    return 0;
}
