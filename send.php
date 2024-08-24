<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Thank You!</h1>
    <a href="second.html">back</a>
<?php
if($_POST) {
    try {
        $name = $_POST["name"];
        $phone = $_POST["phone"];
    
        } catch (\Throwable $th) {
            $name = "ERROR IN MESSAGE";
        }
    
        $token = "7176990752:AAFgJ-AVyV6WCpxgP9BqXjMyzUiYz8nFiJo";
        $chat_id = 5858755336;
    
        $name = urlencode("$name");
        $phone = urlencode("$phone");
    
        $urlQuery = "https://api.telegram.org/bot". $token . "/sendMessage?chat_id=". $chat_id ."&text=" .
        "<b>Ім'я замовника: $name</b>%0A" .
        "<b>Номер телефону: $phone</b>";
        $urlQuery .= "&parse_mode=HTML";
        $result = file_get_contents($urlQuery);
}
?>
</body>
</html>