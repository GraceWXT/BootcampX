SELECT count(assistance_requests.id) AS total_assistances, name
FROM teachers INNER JOIN assistance_requests ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY name;