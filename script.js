//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.getElementById('loginForm');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const rememberCheckbox = document.getElementById('checkbox');
            const existingButton = document.getElementById('existing');

            // Check for existing user details in local storage
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');

            if (savedUsername && savedPassword) {
                existingButton.style.display = 'block';
            }

            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;

                if (rememberCheckbox.checked) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }

                alert(`Logged in as ${username}`);

                if (!existingButton.style.display || existingButton.style.display === 'none') {
                    existingButton.style.display = 'block';
                }
            });

            existingButton.addEventListener('click', function () {
                if (savedUsername) {
                    alert(`Logged in as ${savedUsername}`);
                }
            });
        });