var CourseApi='http://localhost:3000/course'
function start (){
    GetCourses(RenderCourse);
    HandleCreateForm();
}
start();


function GetCourses(callback){
    fetch(CourseApi)
        .then(function(reponse){
            return reponse.json();
        })
        .then(callback);
}
function RenderCourse(courses){
    var htmls=courses.map(function(course){
        return `<li class="course-item-${course.id}">
            <h2> 
                ${course.title}
            </h2>
            <p>
                 ${course.content}
            </p>
            <button onclick="HandleDeleteForm( ${course.id})"> xoa </button>
            <button onclick="HandlePutForm( ${course.id})"> sua </button>
        </li>`
    })
    var html=htmls.join(' ')
    var ListCourse=document.getElementById('list-cousre');
    ListCourse.innerHTML=html;
}

function CreateCourse(data, callback){
    var option={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(CourseApi,option)
        .then(function(reponse){
            return reponse.json();
        })
        .then(callback);


}


function HandleCreateForm(){
    var createBtn=document.getElementById('create');
    createBtn.onclick = function(){
        var Name=document.querySelector('input[name="name"]').value;
        var Dereption=document.querySelector('input[name="dereption"]').value;
        var data = {
            title: Name,
            content: Dereption
        }
        CreateCourse(data,function (){
            GetCourses(RenderCourse);
        });
    }
}
function HandleDeleteForm(id){
    var option={
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(CourseApi +"/"+ id,option)
        .then(function(reponse){
            return reponse.json();
        })
        .then(function(){
            var Course=document.querySelector('.course-item-'+ id);
            if(Course){
                Course.remove();
            }
            
        });
}
function PutCourse(id,data, callback){
    var option={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(CourseApi,option)
        .then(function(reponse){
            return reponse.json();
        })
        .then(callback);


}
function HandlePutForm(id){
    var Course=document.querySelector('.course-item-'+ id);
    // console.log(Course);
    var Name=document.querySelector('input[name="name"]');
    Name.value=Course.querySelector('h2').innerText;

    var Dereption=document.querySelector('input[name="dereption"]');
    Dereption.value=Course.querySelector('p').innerText;

    document.querySelector('#create').id='update'
    document.querySelector('#update').innerHTML='Update'
    var updateBtn=document.querySelector('#update');
    updateBtn.onclick = function(){
        var Name=document.querySelector('input[name="name"]');
        var Dereption=document.querySelector('input[name="dereption"]');
        var data = {
            title: Name,
            content: Dereption
        }
        PutCourse(data,function (){
            GetCourses(RenderCourse);
        });
    }
}