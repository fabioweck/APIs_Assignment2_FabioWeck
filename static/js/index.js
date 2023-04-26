
window.onload = displayStaff(); //loads the page with rendered table

async function displayStaff()
{
    const staff = fetch('./static/staff.json');

    await staff; //waits until fetch data from JSON file

    staff.then(response=>response.json())
    .then((data)=>{

       console.log(data.staff);

       let output = `<table>
       
       <th>UserID</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Staff ID</th>
       <th>Job</th>
       <th>Salary</th>
       <th>Region</th>
       <th>E-mail</th>
       <th>Phone</th>`;

       for(let i = 0; i < data.staff.length; i++) //loop iterates through an array of objects to deliver their content
       {
            
            output += '<tr>'; //renders objects through table rows
            
            output +=  
            `<td>${data.staff[i].userId}</td>
            <td>${data.staff[i].firstName}</td>
            <td>${data.staff[i].lastName}</td>
            <td>${data.staff[i].staffID}</td>
            <td>${data.staff[i].jobTitleName}</td>
            <td>${data.staff[i].salary}</td>
            <td>${data.staff[i].region}</td>
            <td>${data.staff[i].emailAddress}</td>
            <td>${data.staff[i].phoneNumber}</td>`;

            output += '</tr>';
            
       }

    document.getElementById('displayStaff').innerHTML += output; //render is delivered to div in HTML file

    })
}

async function displayByName()
{

    let name = document.getElementById('name').value; //collects name from input field

    const staff = fetch('http://localhost:3051/filterName?firstName=' + name);

    await staff; //waits until data is fetched

    staff.then(response=>response.json())
    .then((data)=>{

       let output = '<table><th>UserID</th><th>First Name</th><th>Last Name</th><th>Staff ID</th><th>Job</th><th>Salary</th><th>Region</th><th>E-mail</th>';

       for(let i = 0; i< data.length; i++) //loop iterates through an array of objects to deliver their content
       {
            
            output += '<tr>'; //renders objects through table rows
            
            output += 
            `<td>${data[i].userId}</td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].staffID}</td>
            <td>${data[i].jobTitleName}</td>
            <td>${data[i].salary}</td>
            <td>${data[i].region}</td>
            <td>${data[i].emailAddress}</td>`;

            output += '</tr>';
            
       }

       document.getElementById('displayStaff').innerHTML = output; //render is delivered to div in HTML file     

    })

}

async function displayByID()
{ 

    let id = document.getElementById('staffid').value; //collects ID from input field

    const staff = fetch('http://localhost:3051/filterID?staffID=' + id);

    await staff; //waits until data is fetched

    staff.then(response=>response.json())
    .then((data)=>{

       let output = '<table><th>UserID</th><th>First Name</th><th>Last Name</th><th>Staff ID</th><th>Job</th><th>Salary</th><th>Region</th><th>E-mail</th>';

       for(let i = 0; i< data.length; i++) //loop iterates through an array of objects to deliver their content
       {
            
            output += '<tr>'; //renders objects through table rows
            
            output += 
            `<td>${data[i].userId}</td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].staffID}</td>
            <td>${data[i].jobTitleName}</td>
            <td>${data[i].salary}</td>
            <td>${data[i].region}</td>
            <td>${data[i].emailAddress}</td>`;

            output += '</tr>';
            
       }

       document.getElementById('displayStaff').innerHTML = output; //render is delivered to div in HTML file    

    })

}

async function displayBySalary()
{ 

    let salary = document.getElementById('salary').value; //collects salary from input field

    const staff = fetch('http://localhost:3051/filterSalary?salary=' + salary);

    await staff; //waits until data is fetched

    staff.then(response=>response.json())
    .then((data)=>{

       let output = '<table><th>UserID</th><th>First Name</th><th>Last Name</th><th>Staff ID</th><th>Job</th><th>Salary</th><th>Region</th><th>E-mail</th>';

       for(let i = 0; i< data.length; i++) //loop iterates through an array of objects to deliver their content
       {
            
            output += '<tr>'; //renders objects through table rows
            
            output += 
            `<td>${data[i].userId}</td>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].staffID}</td>
            <td>${data[i].jobTitleName}</td>
            <td>${data[i].salary}</td>
            <td>${data[i].region}</td>
            <td>${data[i].emailAddress}</td>`;

            output += '</tr>';
            
       }

       document.getElementById('displayStaff').innerHTML = output; //render is delivered to div in HTML file    

    })
}


