<?php

$name = $_GET["name"];
$arr = explode(",", $name);
$length = count($arr);

$txt = '{"name":[';
for ($i = 0; $i < $length - 1; $i++) {
   $txt = $txt . '"' . $arr[$i] . '",';
}
$txt = $txt . '"' . $arr[$length - 1] . '"]}';

$myfile = fopen("ЛР3/content.json", "w");
fwrite($myfile, $txt);
