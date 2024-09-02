        let num = 6;

        // Dynamic message with the 'num' variable
        const count =
        `<h2>I'm happy to let you know <br> that I have +${num} jobs completed and I'm a team player.</h2>`;

        // Insert the dynamic message into the element with ID 'project'
        document.getElementById("project").innerHTML = count;





        function startCountdown(duration) {
            let timer = duration, minutes, seconds;
            const countdownElement = document.getElementById('countdown');

            const interval = setInterval(() => {
                minutes = Math.floor(timer / 60);
                seconds = timer % 60;

                // Format the output
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;

                countdownElement.textContent = minutes + ':' + seconds;

                if (--timer < 0) {
                    clearInterval(interval);
                    countdownElement.textContent = "Time's up!";
                }
            }, 1000);
        }

        // Start the countdown with a fixed time (e.g., 5 minutes)
        const countdownDuration = 60 * 5; // 5 minutes in seconds
        startCountdown(countdownDuration);
 
