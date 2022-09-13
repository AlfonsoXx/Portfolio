PROGRAM <Register>:
User clicks on Register Button
Enter Email.
Press Tab or the Enter key.
    IF(at submission first Name empty)
        THEN display the message in prompt " First Name cannot be empty".
        ELSE continue.
    END;   
Press Tab or the Enter key.  

Enter email.
Press Tab or the Enter key.
    IF(at submission email empty)
        THEN display the message in prompt "email cannot be empty".
        ELSE IF(email !empty but does not contain @).
            THEN display the message in prompt "email doesn't seem correct".
        ELSE continue.    
    END; 
Press Tab or the Enter key.
        
Enter password.
Press tab or Enter key.
    IF( at submission password does not contain a letter and a number)
        THEN display the message in prompt "Password must have at least a letter and a number".
        ELSE continue.
    END;   
Press Tab or the Enter key.

Click submit. 
END;
