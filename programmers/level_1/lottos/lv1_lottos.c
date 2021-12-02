#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// lottos_len�� �迭 lottos�� �����Դϴ�.
// win_nums_len�� �迭 win_nums�� �����Դϴ�.
int* solution(int lottos[], size_t lottos_len, int win_nums[], size_t win_nums_len) {
    // return ���� malloc �� ���� �Ҵ��� ������ּ���. �Ҵ� ���̴� ��Ȳ�� �°� �������ּ���.
    int* answer = (int*)malloc(sizeof(int) * 2);
    int zeroCnt = 0;
    int ansMin = 0;
    int ansMax = 0;
    
    if (lottos_len != 6 || win_nums_len != 6)
    {
        free(answer);
        return NULL;
    }
        
    bool check_num[46] = { 0, };
    for (int i = 0; i < lottos_len; i++)
    {
        if (check_num[lottos[i]] == false)
            check_num[lottos[i]] = true;
        if (lottos[i] == 0)
            zeroCnt++;
    }
    for (int i = 0; i < win_nums_len; i++)
    {
        if (check_num[win_nums[i]] == true)
            ansMin++;
    }
    ansMax = ansMin + zeroCnt;
    
    if (ansMax == 0)
        answer[0] = 6;
    else
        answer[0] = 7 - ansMax;
    if (ansMin == 0 || ansMin == 1)
        answer[1] = 6;
    else
        answer[1] = 7 - ansMin;
    return answer;
}