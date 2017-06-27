CREATE TABLE todolist (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
details TEXT NULL,
priority INTEGER NOT NULL DEFAULT 1,
created_at TIMESTAMP NOT NULL,
completed_at TIMESTAMP NULL,
);

INSERT INTO todolist (title, details, priority, created_at) VALUES
  ('Buy milk', 'Sale at Kroger on the west side, so go there instead of Target.', 1, '2017-06-27'),
  ('Call Mom', 'Ask about plans for holidays this year. Where are J and A going to be?', 3, '2017-06-27'),
  ('Shop for birthday present for Gabe and Jax', 'Ask Mom about ideas for the boys.', 2, '2017-06-27');

INSERT INTO todolist (title, priority, created_at) VALUES
    ('Wash car', 3, 2017-06-27);

INSERT INTO todolist (title, details, priority, created_at, completed_at) VALUES ('Work on TIY project', 'Ask Jon about todo list project and submit update.', 1, 2017-06-23, 2017-06-26);

SELECT * FROM todolist WHERE completed_at IS NULL;
SELECT * FROM todolist WHERE priority > 1;

UPDATE todolist SET completed_at='2017-06-27' WHERE id=2;

DELETE FROM todolist WHERE completed_at IS NOT NULL;
