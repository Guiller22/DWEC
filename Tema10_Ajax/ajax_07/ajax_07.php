<?php
	$servername = "localhost";
	$dbName = "dwec_temperaturas";
	$username = "profesor";
	$password = "profesor";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


		foreach($conn->query("select * from temperaturas order by provincia") as $fila) {
			$registro = new stdClass();

			$registro->codigo = $fila["codigo"];
			$registro->provincia = $fila["provincia"];
			$registro->temperatura = $fila["temperatura"];
			$registro->estado = $fila["estado"];

			$temperaturas[] = $registro;
		}
		echo json_encode($temperaturas);
	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>