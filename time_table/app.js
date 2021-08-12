let current_class = document.getElementById("current_class");
let current_class_btn = document.getElementById("current_class_btn");
let next_class = document.getElementById("next_class");
let next_class_btn = document.getElementById("next_class_btn");
let next_class_time = document.getElementById("next_class_time");
let h2 = document.querySelectorAll("h2");
let hours = document.querySelector("#hours")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")

const schedule = {
    1:{
        9 : {
            subject : "Computer Networking",
            prof : "Jagadeesh Kakarla",
            link : "https://meet.google.com/lookup/f2pwqkufm5",
            duration: 1
        },
        10 : {
            subject : "Operating Systems",
            prof : "Sanjeet Kumar",
            link : "https://meet.google.com/ray-dwtd-ewx",
            duration: 1
        },
        12 : {
            subject : "VLSI Systems Design",
            prof : "Akash Kumar",
            link : "https://meet.google.com/mfg-svnr-bjz?hs=224",
            duration: 1
        },
        14 : {
            subject : "Automata and Compiler Design",
            prof : "Venkatesh Pandiri",
            link : "https://meet.google.com/zau-eabz-cka",
            duration: 1
        }
    },
    2:{
        9 : {
            subject : "Computer Networking",
            prof : "Jagadeesh Kakarla",
            link : "https://meet.google.com/lookup/f2pwqkufm5",
            duration: 1
        },
        11 : {
            subject : "VLSI Systems Design",
            prof : "Akash Kumar",
            link : "https://meet.google.com/mfg-svnr-bjz?hs=224",
            duration: 1
        },
        12 : {
            subject : "Automata and Compiler Design",
            prof : "Venkatesh Pandiri",
            link : "https://meet.google.com/zau-eabz-cka",
            duration: 1
        },
        16 : {
            subject : "Entrepreneurship and management functions",
            prof : "Sudhir Varadarajan",
            link : "https://teams.microsoft.com/_#/school/conversations/General?threadId=19:GkIOfVu3qziLTRCq3xU54M2XD4YRnQhtyxeFzY2kTJs1@thread.tacv2&ctx=channel",
            duration: 2
        },
    },
    3:{
        9 : {
            subject : "Computer Networking",
            prof : "Jagadeesh Kakarla",
            link : "https://meet.google.com/lookup/f2pwqkufm5",
            duration: 1  
        },
        11 : {
            subject : "Sustainable Design",
            prof : "Raghuraman",
            link : "https://meet.google.com/rbv-suvk-jkc",
            duration: 2
        },
        15 : {
            subject : "VLSI Systems Design Practice",
            prof : "Akash Kumar",
            link : "",
            duration: 3
        }
    },
    4:{
        9 : {
            subject : "VLSI Systems Design",
            prof : "Akash Kumar",
            link : "https://meet.google.com/mfg-svnr-bjz?hs=224",
            duration: 1
        },
        10 : {
            subject : "Operating Systems",
            prof : "Sanjeet Kumar",
            link : "https://meet.google.com/ray-dwtd-ewx",
            duration: 1
        },
        11 : {
            subject : "Automata and Compiler Design",
            prof : "Venkatesh Pandiri",
            link : "https://meet.google.com/zau-eabz-cka",
            duration: 1
        },
        15 : {
            subject : "Computer Networking Practice",
            prof : "Jagadeesh Kakarla",
            link : "https://meet.google.com/dfg-zspj-cmd?authuser=0",
            duration: 3
        }
    },
    5:{
        10 : {
            subject : "Operating Systems",
            prof : "Sanjeet Kumar",
            link : "https://meet.google.com/ray-dwtd-ewx",
            duration: 1
        },
        15 : {
            subject : "Operating Systems Practice",
            prof : "Sanjeet Kumar",
            link : "https://meet.google.com/ray-dwtd-ewx",
            duration: 3
        }
    }
}

function find_classes(current_hours,day){
    if(day in schedule){
        if (current_hours in schedule[day]){
            current_class.textContent = `${schedule[day][current_hours].subject}`
            current_class_btn.textContent = "Join";
            current_class_btn.href = `${schedule[day][current_hours].link}`;
        }
        else{
            let class_there = false;
            for(let i=1;i<=2;i++){
                let temp = current_hours-i;
                if(temp in schedule[day]){
                    const current_class_duration = schedule[day][temp].duration;
                    if(i==1 && current_class_duration==1){
                        break;
                    }
                    if(current_class_duration >= i+1){
                        current_class.textContent = `${schedule[day][temp].subject}`;
                        current_class_btn.textContent = "Join"
                        current_class_btn.href = `${schedule[day][temp].link}`;
                        class_there = true;
                        break;
                    }
                }
            }
            if(!class_there){
                current_class.textContent = "No Class now!";
                current_class_btn.style.display = "none";
            }
        }
        let chill = true;
        for(i=current_hours+1;i<=24;i++){
            if(i in schedule[day]){
                if(i>12){
                    next_class_time.textContent = `${i-12}PM`;
                    next_class.textContent = `${schedule[day][i].subject}`;
                    next_class_btn.textContent = "Join";
                    next_class_btn.href = `${schedule[day][i].link}`;
                }
                if(i<12){
                    next_class_time.textContent = `${i}AM`;
                    next_class.textContent = `${schedule[day][i].subject}`;
                    next_class_btn.textContent = "Join";
                    next_class_btn.href = `${schedule[day][i].link}`;
                }
                if(i==12){
                    next_class_time.textContent = `${i}PM`;
                    next_class.textContent = `${schedule[day][i].subject}`;
                    next_class_btn.textContent = "Join";
                    next_class_btn.href = `${schedule[day][i].link}`;
                }
                chill = false;
                break;
            }
        }
        if(chill){
            next_class.textContent = "No classes next, chill!";
            next_class_btn.style.display = "none";
        }
    }
    else{
        current_class.textContent = "No classes today,Enjoy!";
        current_class_btn.style.display = "none";
        next_class_btn.style.display = "none";
        for(let i=0;i<h2.length;i++){
            h2[i].style.display = "none";
        }
    }
}

function show_time(time_split){
    hours.textContent = time_split[0]
    min.textContent = time_split[1]
    sec.textContent = time_split[2]
}


function myTimer() {
  const d = new Date();
  const day = d.getDay();
  const time = d.toLocaleTimeString();
  const time_length = time.length;
  const time_split = (time.slice(0,time_length-3)).split(":");
  show_time(time_split)
  let current_hours = Number(time_split[0]);
  const isMorning = time.slice(time_length-2,time_length) == 'AM';
  if(!isMorning && current_hours!=12){
      current_hours += 12;
  }
  find_classes(current_hours,day);
}

myTimer()
setInterval(myTimer,1000)