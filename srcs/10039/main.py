from sys import stdin
from statistics import mean

scores = [int(line.strip()) for line in stdin.readlines()]
scores = list(map(lambda x: x if x > 40 else 40, scores))
print(mean(scores))
