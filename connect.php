<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = "name";
        $email = "email";
        $profession = "profession";
        $experience = "experience";
        $skills = "skills";

        $conn = new mysqli('localhost','root','','table');
        if($conn->connect_error){
            die('Connection Failed : '.$conn->connect_error);
        }else{
            $stmt = $conn->prepare("insert into registration(name,email,profession,experience,skills) values(?,?,?,?,?)");
            $stmt -> bind_param("sssis",$name,$email,$profession,$experience,$skills);
            $stmt -> execute();
            echo "registration successfully...";
            $stmt->close();
            $conn->close();
        }
        
        echo "<h2>Registration Details:</h2>";
        echo "Name: $name <br>";
        echo "Email: $email <br>";
        echo "Profession: $profession <br>";
        echo "Years of Experience: $experience <br>";
        echo "Skills: $skills <br>";
        exit(); 
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Registration</title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    <header>
        <h1>Professional Registration</h1>
    </header>
    <main>
        <form id="registration-form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br>
            <label for="profession">Profession:</label><br>
            <input type="text" id="profession" name="profession" required><br>
            <label for="experience">Years of Experience:</label><br>
            <input type="number" id="experience" name="experience" required><br>
            <label for="skills">Skills:</label><br>
            <textarea id="skills" name="skills" rows="4" required></textarea><br>
            <button type="submit">Register</button>
        </form>
    </main>
    <script src="register.js"></script> 
</body>
</html>
