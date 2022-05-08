#include "iostream"
#include "vector"
#include "queue"

using namespace std;

string solution(int n, vector<vector<int> > arr){
    queue<pair<int, int> > q;
    q.push(make_pair(0,0)); // 큐에 시작점 추가

    while (!q.empty()){
        // 큐에서 하나 꺼냄
        auto now = q.front();
        q.pop();
        int x = now.first, y = now.second;
        int step = arr[x][y];

        if(step == -1)
            return "HaruHaru"; // 정답에 도달하면 끝!
        if(step == 0)
            continue; // 이동칸수가 0이면 그냥 넘긴다 (막다른거라)

        // 위쪽, 오른쪽 방향에서 가능한거 다 큐에 넣기
        if(x + step < n)
            q.push(make_pair(x+step, y));
        if(y + step < n)
            q.push(make_pair(x, y+step));
    }

    return "Hing"; // 도착 못하는 경우

}

int main(){
    int n;
    cin >> n;
    vector<vector<int> > arr(n);
    
    for(auto &now: arr){
        for(int i = 0; i < n; i++){
            int temp;
            cin >> temp;
            now.push_back(temp);
        }
    }
    
    cout << solution(n, arr);
    return 0;
}