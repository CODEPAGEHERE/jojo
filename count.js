        let num = 2;

        // Dynamic message with the 'num' variable
        const count =
        `<h2>I'm happy to let you know <br> that I have done +${num} Projects Sucessfully <br> I'm a team player.</h2>`;

        // Insert the dynamic message into the element with ID 'project'

        document.getElementById("project").innerHTML = count;

    

        const date = new Date();

        const elements = document.getElementsByClassName("CurrentDate");
        const currentYear = date.getFullYear();
        
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = currentYear;
        }
        
       