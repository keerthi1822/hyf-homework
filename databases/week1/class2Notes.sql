select * from user_task;

select * from user;

 select user.name,task.title
from user join user_task on (user.id = user_task.user_id) join task on (user_task.task_id = task.id)
where user.name like '%Pavel%';

explain select user.name,task.title
from user join user_task on (user.id = user_task.user_id) join task on (user_task.task_id = task.id)
where user.name like '%Pavel%';

select user.name, task.title, status.name 
from user 
	join user_task on user.id=user_task.user_id
    join task on task.id = user_task.task_id
    join status on status.id = task.status_id
where task.title like '%database%' or task.description like '%database%';

select * from task;


