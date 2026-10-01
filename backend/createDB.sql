create database demo_isip_32;
use  demo_isip_32;

create table users(
id_user int primary key auto_increment,
login varchar(50) unique,
password varchar(50), 
fio varchar(50), 
phone varchar(50), 
email varchar(50)
);

select * from users;