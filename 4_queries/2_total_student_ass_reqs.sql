SELECT count(assistance_requests.id) AS total_assistances, name
FROM students INNER JOIN assistance_requests ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;