#include <vector>

long long sum(std::vector<int> &a)
{
    long long sum = 0;
    for (auto it = a.begin(); it != a.end(); it++)
    {
        sum += *it;
    }
    return sum;
}