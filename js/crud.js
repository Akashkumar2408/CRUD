
 function  sub(){
    let name=document.getElementById("p1");
    let email=document.getElementById("p2");
    let phone=document.getElementById("p3");
    let birth=document.getElementById("p4");
    let appointment=document.getElementById("p5");
    let color=document.getElementById("p6");
    let pay=document.getElementById("p7");
    let age=document.getElementById("p8");
    let role=document.getElementById("p9");  


    // all id
    const validationConditions = [
        { id: 'p1', regex: /^[a-zA-Z]+$/ },
        { id: 'p2', regex: /^[0-9]+$/ },
        ,
    ]



// store the input value in local storage
localStorage.setItem('myname', name.value);
localStorage.setItem('email', email.value);
localStorage.setItem('phone', phone.value);
localStorage.setItem('birt-date', birth.value);
localStorage.setItem('appointment', appointment.value);
localStorage.setItem('color', color.value);
localStorage.setItem('pay', pay.value);
localStorage.setItem('age', age.value);
localStorage.setItem('role', role.value);

}