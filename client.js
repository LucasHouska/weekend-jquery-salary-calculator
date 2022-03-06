console.log('Start of JS');

$(readyNow);

function readyNow() {
    console.log('JQuery is ready!');

    $('.submitButton').on('click', submitEmployee)

    let employees = [];

    let costs = [];

    let globalCost = cost;


    function submitEmployee() {
        let employee = {
            firstName: $('.firstName').val(),
            lastName: $('.lastName').val(),
            idNumber: $('.idNumber').val(),
            jobTitle: $('.jobTitle').val(),
            annualSalary: $('.annualSalary').val()
        };

        employees.push(employee)

        console.log(employees)

        $('.tbody').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td class="salary">${employee.annualSalary}</td>
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
            $(".cost").attr("id", "red");
        }




        $('.deleteButton').on('click', removeEmployee)

        function removeEmployee() {
            let costRemoved = $(this).closest('tr').children('.salary').text()

            cost = cost - costRemoved

            costs.pop(costRemoved);

            $('.cost').empty();

            $('.cost').append(`<h1>${cost}</h1>`)

            $(this).closest('tr').remove();

            if(cost <= 20000) {
                $(".cost").removeAttr("id", "red");
            }

            check();
        }
        check();
    }
}



console.log('End of JS');