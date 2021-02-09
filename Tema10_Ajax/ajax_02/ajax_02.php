<?php
	$servername = "localhost:5000";
	$dbName = "dwec_biblioteca";
	$username = "root";
	$password = "";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		/*$libro = new stdClass();
		$libros = array();*/


		foreach($conn->query("SELECT titulo FROM libros ") as $fila) {
			echo $fila["titulo"]."<br />";
		}

	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>