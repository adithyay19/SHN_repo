function validation()
{
    
    const emails = ["abc@gmail.com", "xyz@gmail.com", "pqr@gmail.com"];
    const l = emails.length;
    var checkMail=false
    let usr = document.getElementById('email').value;
    let pass = document.getElementById("password").value;
    
    for (let i = 0; i < l; i++)
    {
        if (usr === emails[i])
        {
            checkMail = true;
        }
    }

    if (!checkMail)
    {
        alert("Invalid credentials"); 
    }

    if (pass.length < 8)
    {
        alert("Password should have atleast 8 characters!");  
    }
    /*if (usr === 'adithya842@gmail.com')
    {
        alert("Alert successful");
        }*/
}