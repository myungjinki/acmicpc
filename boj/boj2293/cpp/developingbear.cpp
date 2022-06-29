#include <iostream>
using namespace std;
int dp[10000 + 1];
int cost[100 + 1];
int n, k;

int main(void){
 
    cin >> n >> k;
    for (int i = 1; i <= n; i++) 
        cin >> cost[i];

   // 2원을 만들어야되는데 2원짜리 동전이 있는 경우  j - cost[i] = 0이된다.
   // 따라서 dp[0]을 1로 초기화 시켜주어야함.
    dp[0] = 1;  
   
    for (int i = 1; i <= n; i++) { // 동전의 수만큼
        for (int j = cost[i]; j <= k; j++) { // j 는 cost[i]로 초기화 되어야함.
            if (j-cost[i] >= 0) dp[j] += dp[j - cost[i]];
        }
    }

    cout << dp[k] << '\n';
    return 0;
}
