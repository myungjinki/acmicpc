#include <iostream>
#include <utility>
#include <queue>
#include <algorithm>
#include <string>

using namespace std;

#define X first
#define Y second

int dx[4] = {1, 0, -1, 0};
int dy[4] = {0, 1, 0, -1};
int N, M;
string board[100];
int dist[100][100];

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);

    cin >> N >> M;
    for (int i = 0; i < N; i++)
        cin >> board[i];

    queue<pair<int, int> > Q;
    for (int i = 0; i < N; i++)
        fill(dist[i], dist[i] + M, -1);
    Q.push(make_pair(0, 0));
    dist[0][0] = 0;

    while (!Q.empty())
    {
        pair<int ,int> cur = Q.front();
        Q.pop();

        for (int dir = 0; dir < 4; dir++)
        {
            int nx = cur.X + dx[dir];
            int ny = cur.Y + dy[dir];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (dist[nx][ny] >= 0 || board[nx][ny] != '1') continue;

            dist[nx][ny] = dist[cur.X][cur.Y] + 1;
            Q.push(make_pair(nx, ny));
        }
    }
    cout << dist[N - 1][M - 1] + 1;
}