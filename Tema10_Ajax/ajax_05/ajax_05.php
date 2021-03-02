<?php
	$servername = "localhost";
	$dbName = "dwec_biblioteca";
	$username = "root";
	$password = "toor";

	try {
		$conn = new PDO("mysql:host=$servername;dbname=$dbName;charset=utf8", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		if(isset($_GET["editorial"])) {
			$editorial = $_GET["editorial"];
			foreach($conn->query("SELECT * FROM libros where editorial ='" . $editorial . "'") as $fila) {
				//NO --> echo "<option value='".$fila["Id"]."'>".$fila["titulo"]."</option>";

				$libro = new stdClass();

				$libro->isbn = $fila["Id"];
				$libro->titulo = $fila["titulo"];

				$listaLibros[] = $libro;
			}
			echo json_encode($listaLibros);
		} else {
			foreach($conn->query("SELECT distinct editorial FROM libros order by editorial") as $fila) {
				//NO --> echo "<option>".$fila["editorial"]."</option>";

				$editorial = new stdClass();

				$listaEditoriales[] = $fila["editorial"];
			}
			echo json_encode($listaEditoriales);
		}

	} catch(PDOException $e) {
		echo "Fallo la conexión: " . $e->getMessage();
	}
?>