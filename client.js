console.log('Start of JS');

$(readyNow);

function readyNow() {
    console.log('JQuery is ready!');

    let employees = [];

    let costs = [];

    // let cost = 0;

    // for (const salary of costs) {
    //     cost += salary;
    // }

    $('.submitButton').on('click', submitEmployee)

    function submitEmployee() {
        let employee = {
            firstName: $('.firstName').val(),
            lastName: $('.lastName').val(),
            idNumber: $('.idNumber').val(),
            jobTitle: $('.jobTitle').val(),
            annualSalary: $('.annualSalary').val()
        };
        // let firstName = $('.firstName').val();
        // let lastName = $('.lastName').val();
        // let idNumber = $('.idNumber').val();
        // let jobTitle = $('.jobTitle').val();
        // let annualSalary = $('.annualSalary').val();

        employees.push(employee)

        console.log(employees)

        $('.tbody').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>
        `);

        $('.input').val('');
        $('.cost').empty();


        costs.push(Number(employee.annualSalary))

        let cost = 0;

        for (const salary of costs) {
            cost += salary;
        }

        $('.cost').append(`<h1>${cost}</h1>`)

        if(cost > 20000) {
            $('.cost').attr('class', 'red');
        }

        $('.deleteButton').on('click', removeEmployee)

        function removeEmployee() {
            $(this).closest('tr').remove();
            
        }
    }
}



console.log('End of JS');