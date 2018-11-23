<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers:Authorization');
    header("Access-Control-Allow-Methods: GET, POST, DELETE");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Cache-Control,Authorization");

    $a = file_get_contents("http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html");

    $re = json_decode($a,true);

    echo $re;//输出
?>