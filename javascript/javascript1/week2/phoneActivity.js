
let activities = [];
let totalMinutes = 0;
let i = 0;
let phoneUsageLimit = 50;
//pushing elements function in to  activities  array
function addActivity(date, activity, durationInMinutes) {
    //limited usage alert
    if (totalMinutes >= phoneUsageLimit) {
        console.log("You have reached your limit, no more smartphoning for you!")

    }
    //adding activites to array if you havn't reach limited minutes
    else {
        totalMinutes += durationInMinutes;
        i++;
        return activities.push({ datekey: date, activitykey: activity, duration: durationInMinutes });
    }
}

//function to show status
function showStatus(activities) {
    //condition to check if activities array has elements
    if (activities.length == 0) {
        return "Add some activities before calling showStatus"
    }
    //returning number of activities
    return "You have added " + i + " activities. They amount to " + totalMinutes + " min."
}
//calling fuction addActivity to add activities
addActivity('14/4-12', 'facebook', 15);
addActivity('14/4-12', 'Twitter', 35);
addActivity('14/4-12', 'News', 25);
// log out your activities
console.log("Your activities : ")
console.log(activities);
//calling  function showstatus and log status   
console.log(showStatus(activities));

