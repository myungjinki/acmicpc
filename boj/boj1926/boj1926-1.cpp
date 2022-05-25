#include <iostream>
#include <queue>
#include <utility>
#include <algorithm>

using namespace std;

#define X first
#define Y second

bool vis[502][502];
int board[502][502];

int dx[4] = {0, 1, 0, -1};
int dy[4] = {1, 0, -1, 0};

int n, m;

int main(void)
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> board[i][j];
        }
    }

    queue<pair<int, int> > Q;

    int cnt = 0;
    int max_depth = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (board[i][j] == 0 || vis[i][j] == 1)
                continue;

            vis[i][j] = 1;
            Q.push(make_pair(i,j));            
            cnt++;
            int depth = 0;           
            while (!Q.empty())
            {
                pair<int, int> cur = Q.front();
                Q.pop();
                for (int dir = 0; dir < 4; dir++)
                {
                    int nx = cur.X + dx[dir];
                    int ny = cur.Y + dy[dir];

                    if (nx < 0 || nx > n || ny < 0 || ny > m)
                        continue;
                    if (board[nx][ny] == 0 || vis[nx][ny] == 1)
                        continue;
                    
                    vis[nx][ny] = 1;
                    Q.push(make_pair(nx, ny));
                }
                depth++;
            }
            max_depth = max(depth, max_depth);
        }
    }
    cout << cnt << "\n" << max_depth;
    return 0;
}