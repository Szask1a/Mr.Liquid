<?php

$servername="localhost";
$dbusername="root";
$dbpwd="";
$dbname="mr_liquid_user_db";

$conn=mysqli_connect($servername,$dbusername,$dbpwd,$dbname);

if(!$conn)
{
	die("connection failued: ".mysqli_connect_error());
}?>