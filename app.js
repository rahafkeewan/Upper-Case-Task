let mystudents = ["ahmad","anas","ali",["widad","layan","esraa"]]; 

for(let Student of mystudents)
{
    if (Array.isArray(Student))
    {
        for (let GirlStudent of Student)
        {
            console.log(GirlStudent.toUpperCase());
        }
    }
    else 
    {
        console.log(Student.toUpperCase());
    }
}
