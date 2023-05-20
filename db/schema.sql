CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);


CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    salary DECIMAL,
    department_id INTEGER
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);