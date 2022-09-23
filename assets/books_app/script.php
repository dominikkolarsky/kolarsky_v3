<?php
$conn_server = "a046um.forpsi.com";
$conn_user   = "f159473";
$conn_pass   = "5FHRsA5H";
$database    = "f159473";


//mysqli - od PHP verze 7
echo "<br>mysqli:<br>";
$mysqli=new mysqli ($conn_server,$conn_user,$conn_pass,$database);
if ($mysqli->connect_errno) {
  printf ("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}
else echo "Pripojeno, server " . $mysqli->server_info;
