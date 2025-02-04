-- 进入数据库
use web193;

-- 创建user表
create table admin_info(
    `uid` int(20) auto_increment primary key not null,
    `uname` varchar(255) not null,
    `upwd` varchar(100) not null
)engine=InnoDB charset=utf8;

-- 插入一条数据
insert into admin_info values (null,'高武杰','1234'),(null,'张磊','2464'),(null,'武子钰','6163');
-- 如果插入数据报错为中文乱码，可以临时使用一下，但下次打开仍需要修改
set names gbk
-- 查看数据是否插入
select * from user;