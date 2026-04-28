<?php
$conn = new mysqli("localhost", "root", "", "student_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    $sql = "INSERT INTO students (name, email, age)
            VALUES ('$name', '$email', '$age')";

    if ($conn->query($sql) === TRUE) {
        echo "<h3>Registration Successful</h3>";
    } else {
        echo "Error: " . $conn->error;
    }
}

$result = $conn->query("SELECT * FROM students");

echo "<h2>Student Records</h2>";
echo "<table border='1'>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
</tr>";

while($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['name']}</td>
            <td>{$row['email']}</td>
            <td>{$row['age']}</td>
          </tr>";
}

echo "</table>";

$conn->close();
?>  