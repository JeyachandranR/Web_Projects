

    function validateLoginForm() {
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields for login.");
            return false;
        }

        // Additional validation logic can be added here if needed

        return true;
    }

    function validateRegForm() {
        var username = document.getElementById("regUsername").value;
        var email = document.getElementById("regEmail").value;
        var password = document.getElementById("regPassword").value;

        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields for registration.");
            return false;
        }

        // Additional validation logic can be added here if needed

        return true;
    }