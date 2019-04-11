# 3. Find all the tasks that are marked as done (this way is not recommended)
select task.id, task.title, task.status_id, status.name
from task join status
where task.status_id = status.id && status.name like "done%";

#instead write like  this
select task.id, task.title, task.status_id, status.name
from task join status on  task.status_id = status.id 
where status.name like "done%";

select status.name, count(task.id)
from task join status on task.status_id ==status.id;
# this does not work without group by because we have 3 statuses and it cannot understand which status to assign this number
#so do group by
select status.name, count(task.id)
from task join status on task.status_id = status.id
group by status.name;


