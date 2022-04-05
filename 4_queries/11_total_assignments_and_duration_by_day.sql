SELECT day, count(id) AS num_of_assignmnets, sum(duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;