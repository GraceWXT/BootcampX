const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
pool.query(`
SELECT DISTINCT teachers.name, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teachers.name;
`, [cohortName])
.then(res => {
  res.rows.forEach(teacher => {
    console.log(`${cohortName}: ${teacher.name}`);
  })
})
.catch(err => console.error('query error', err.stack));