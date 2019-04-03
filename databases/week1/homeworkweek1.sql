select * from task;

select count(title) from task;

select count(title) from task  where due_date is  null;

select * from status;

select task.title, status.name from 
task join status on task.status_id = status.id and status.name like '%done';

select task.title, status.name from 
task join status on task.status_id = status.id and status.name not like '%done'; 

select title,created from task order by created desc;

select title,created from task
 order by created desc
 limit 1;
 
 select title,description from task;
 
 select title,due_date from task where 
 title like '%database%' || description like '%database%';
 
 select task.title,status.name from task join status ;
 
 select task.title,status.name from task join status on task.status_id=status.id;
 
 select status.name,count(status.name) from 
 task join status on status.id = task.status_id 
 group by status.name;

 select status.name,count(status.name) from 
 task join status on status.id = task.status_id 
 group by status.name
 order by count(status.name) desc;
