<?php
	$servername = "localhost";
	$dbName = "dwec_biblioteca";
	$username = "root";
	$password = "toor";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		foreach($conn->query("SELECT * FROM libros ") as $fila) {
			$titulos = new stdClass();
			$listaTitulos[] = $fila["titulo"];
		}
		echo json_encode($listaTitulos);

	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>