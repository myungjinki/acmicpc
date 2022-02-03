#include <iostream>
#include <string>

using namespace std;

int arr[26];

int main(void)
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string str;
    cin >> str;
    for (int i = 0; i < str.size(); i++){
        arr[str[i] - 'a']++;
    }
    for (int i = 0; i < 26; i++){
        cout << arr[i] << " ";
    }
}