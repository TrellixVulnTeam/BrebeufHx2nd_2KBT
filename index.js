
// When checking match
// Must be connected

$(document).ready(()=>{

    axios.post("/validate",{}).then( // Check if valid session
        (response)=> { //Check if logged in
        
        if (response.status == 200) { // OK status
            $('#disconnectButton').show();
        } else {
            $('#disconnectButton').hide();
        }
    },
    (error) => { $('#disconnectButton').hide(); });

    $('#disconnectButton').on('click', function() { // Disconnected button pressed event
        axios.post("/users/removeToken",{}).then((response)=> {// Check if valid session
            console.log(response);
            alert(response.data.message);
            location.reload();
        });
    });

    var user;
    axios.post("/users/profile", ()=>{}).then((response) => {
        user = response.data.user;
    });
    $('#match').on('click', function() {
        axios.post("/users/match", { // Send match http post request to server
            user:user
        }).then((response)=> { // Server response event
            console.log(response);
        });
    })
})

