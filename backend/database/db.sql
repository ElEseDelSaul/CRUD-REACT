CREATE DATABASE blogs;
use blogs;
CREATE TABLE blog(
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
     title VARCHAR(100) NOT NULL,
      content VARCHAR(200) NOT NULL,
       createdAt DATE,
        updatedAt DATE );

ALTER TABLE blog MODIFY createdAt Date; 
ALTER TABLE blog MODIFY updatedAt Date;


INSERT INTO blog (id, title, content) VALUES
(1, 'Título 1', 'Contenido de mi primer post'),
(2, 'Título 2', 'Contenido de mi segundo post'),
(3, 'Título 3', 'Contenido de mi tercer post'),
(4, 'Título 4', 'Contenido de mi cuarto post'),
(5, 'Título 5', 'Contenido de mi quinto post'),
(6, 'Título 6', 'Contenido de mi sexto post');