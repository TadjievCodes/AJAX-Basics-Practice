var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        console.log(employees);
        var statusHTMl = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTMl += '<li class="in">';
            } else {
                statusHTMl += '<li class="out">';
            }
            statusHTMl += employees[i].name;
            statusHTMl += '</li>';
        }

        statusHTMl += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTMl;
    }
};

xhr.open('GET', 'data/employees.json');
xhr.send();