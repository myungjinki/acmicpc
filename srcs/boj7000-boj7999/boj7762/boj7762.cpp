#include <iostream>
#include <set>
using namespace std;
int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T;
    cin >> T;
    while (T--){
        int Q;
        cin >> Q;
        multiset<int> save;
        while (Q--){
            char c;
            int n;
            cin >> c >> n;
            if (c == 'I'){
                save.insert(n);
            }
            else if (c == 'D'){
                if (save.empty() == true) continue;
                else if (n == 1) save.erase(--save.end());
                else if (n == -1) save.erase(save.begin());
            }
        }
        if (save.empty() == true)
            cout << "EMPTY\n";
        else
            cout << *(--save.end()) << " " << *save.begin() << "\n";
    }
}