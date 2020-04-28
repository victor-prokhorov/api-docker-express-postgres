https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
express express-locallibrary-tutorial --no-view -css
DEBUG=express-locallibrary-tutorial:* npm start
set -o vi
yarn global add nodemon

docker ps --all

docker run --name postgres-locallibrary -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine

sudo lsof -i tcp:5432
sudo kill PID

docker start postgres-locallibrary

docker exec -it postgres-locallibrary sh

psql -U postgres


postgres=# alter database templatedatabase is_template false;
ALTER DATABASE
postgres=# drop database templatedatabase;
DROP DATABASE

postgres=# CREATE DATABASE postgres_locallibrary;
CREATE DATABASE

postgres=# \c postgres_locallibrary
You are now connected to database "postgres_locallibrary" as user "postgres".

CREATE TABLE users(user_id SERIAL PRIMARY KEY, description VARCHAR(255));

\dt

https://www.w3.org/Provider/Style/URI










