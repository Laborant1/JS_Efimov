<?php
    $mass_news = [];
    
    $link = mysqli_connect('localhost', 'a0664994_ajax', 'h4suMHQl', 'a0664994_ajax') or die('Ошибка! База данных не найдена!');
    
    $query = 'SELECT * FROM zap';
    mysqli_query($link, 'SET NAMES utf8mb4'); 
    $result = mysqli_query($link, $query) or die("Ошибка! Таблица не найдена!");
    while ($row = $result->fetch_assoc()) {
        $mass_news[] = $row;
    }
    echo json_encode($mass_news, JSON_UNESCAPED_UNICODE);
?>