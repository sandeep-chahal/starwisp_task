CREATE DATABASE starwisp_task_1;
USE starwisp_task_1;
CREATE TABLE user_id(
		user_id varchar(100),
        password varchar(16)
);
CREATE TABLE uni_details(
			uid int primary key auto_increment,
        uni_name varchar(100),
        reg_date date,
        exp_date date,
        img_url varchar(100),
        num_of_students int,
        email varchar(50),
        web_url varchar(50),
        contact_num int
);

INSERT INTO user_id (user_id,password) VALUES ("john","pwdpwdpwd1"),("alex","pwdpwdpwd1"),("jim","pwdpwdpwd1"),("david","pwdpwdpwd1"),("lucy","pwdpwdpwd1");
