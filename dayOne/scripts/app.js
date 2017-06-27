var employeesList=[
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500

    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList(){
    var myTable='<table class="table table-striped" id="ceva"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary </th><th></th><th></th></tr>';
    for(var i in employeesList){
        myTable += ' <tr><td>' +employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td><button onclick="vizualizare('+i+')">Vizualizare</button></td><td><button onclick="stergere('+i+')">Stergere</button></td></tr>';
    }
    myTable += '<tr><th>'+getMaxAppearences()+'</th><th>'+findUniques()+'</th><th></th><th>'+averageSal()+'</th></tr>';
    myTable += '</table>';
    myTable += '<p><button onclick="showConvSal()">Convert salary</button></p>';
    var container = document.getElementById('listcontainer');
    container.innerHTML=myTable;
}

function showConvSal() {

    var myTable='<table class="table table-striped" id="ceva"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary </th><th>Coverted in Euro</th><th></th><th></th></tr>';

        for(var i in employeesList){
            myTable += ' <tr><td>' +employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td>'+convertSal(employeesList[i].salary)+'</td><td><button onclick="vizualizare('+i+')">Vizualizare</button></td><td><button onclick="stergere('+i+')">Stergere</button></td></tr>';
        }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML=myTable;
  }

function vizualizare(x) {
   alert("First name: "+ employeesList[x].firstName+" Last name: "+ employeesList[x].lastName+" Phone: "+ employeesList[x].phone+" Salary: "+ employeesList[x].salary);
}

function stergere(x){
    employeesList.splice(x,1);
    showList();
}

function getMaxAppearences(){
    var x = [];
    for (var i in employeesList)
        x[i] = employeesList[i].firstName;

    x.sort();

    var k=1;
    var maxim=0;
    //var current=1;
    for (var i in x)
        if(x[i] === x[i+1]) {
            k=k+1;
            if(maxim<=k){
            maxim = k;
            nume = x[i];}
        }
        else k=1;
    return name;

}

function findUniques(){
    var x = [];
    for (var i in employeesList)
        x[i] = employeesList[i].lastName;

    x.sort();
    var k = 0;
    for (var i in x)
        if(x[i] !== x[i+1])
           k=k+1;
    return k;
}

function getNumber(){
    var v = [];
    for(var i in employeesList)
        v[i]=employeesList[i].phone;
    for(var i in v)
        if (i < v.length)
            var str = v[i].charAt()
    for (var i = 0; i<10; i++){
        v[i]=0;
    }
    for (var i in employeesList){

    }
}

function averageSal(){
    var sal=0;
    for(var i in employeesList)
    {
        sal+=employeesList[i].salary;
    }
   return sal/employeesList.length;

}

function sortby(){
    tabel = document.getElementById("ceva");

    var v =[];
    for (var i in employeesList)
        v[i] = employeesList[i].firstName;
    if(document.getElementById("sortby").value === 1)
        bubbleSort(v);
    showList();
}

function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function convertSal(salary){
    return euroVal = salary/4.5;
}

var Employee = function (firstName, lastName, phone, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee (firstName, lastName, phone, salary));
    showList();
}

function calculateSalary(){
    var sal=0;
    for (var i in employeesList)
        sal+=parseInt(employeesList[i].salary);
    var container = document.getElementById('totalSalary');
    container.innerHTML=sal;

}

function count_obj(employeesList){
    var i = 0;
    for(var key in employeesList){
        ++i;
    }

    return i;
}

function deleteLastEmployee(){
    if (count_obj()===0)
        employeesList.pop();
    showList();
    calculateSalary();
}