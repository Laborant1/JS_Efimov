<?php
    $mail = $_POST['mail'];
    $im = $_POST['im'];
    $mess = $_POST['text'];
    
    $link = mysqli_connect('localhost', 'a0664994_ajax', 'h4suMHQl', 'a0664994_ajax') or die('Ошибка! База данных не найдена!');
    $query = "INSERT INTO `zap` (`id`, `im`, `mail`, `mess`) VALUES (NULL, '".$im."', '".$mail."', '".$mess."')";
    mysqli_query($link, 'SET NAMES utf8mb4'); 
    $result = mysqli_query($link, $query) or die("Ошибка! Не удалось отправить отзыв!");
    echo "Отправка выполнена успешно!";
?>