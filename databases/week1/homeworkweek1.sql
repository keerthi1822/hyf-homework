select * from task;

#Find out how many tasks are in the task table
select count(title) from task;

#Find out how many tasks in the task table do not have a valid due date
select count(title) from task  where due_date is  null;

select * from status;

#Find all the tasks that are  as done
select task.title, status.name from 
task join status on task.status_id = status.id and status.name like '%done';

#Find all the tasks that are not marked as done
select task.title, status.name from 
task join status on task.status_id = status.id and status.name not like '%done'; 

#Get all the tasks, sorted with the most recently created first
select title,created from task order by created desc;

#Get the single most recently created task
select title,created from task
 order by created desc
 limit 1;
 
 
 select title,description from task;
 
 #Get the title and due date of all tasks where the title or description contains database
 select title,due_date from task where 
 title like '%database%' || description like '%database%';
 
 #Get the title and status (as text) of all tasks
 select task.title,status.name from task join status ;
 

 select task.title,status.name from task join status on task.status_id=status.id;
 
#Get the name of each status, along with a count of how many tasks have that status
 select status.name,count(status.name) from 
 task join status on status.id = task.status_id 
 group by status.name;

#Get the names of all statuses, sorted by the status with most tasks first
 select status.name,count(status.name) from 
 task join status on status.id = task.status_id 
 group by status.name
 order by count(status.name) desc;
