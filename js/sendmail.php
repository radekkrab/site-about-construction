<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php'
    require 'phpmailer/src/PHPMailer.php'
    require_once 'phpmailer/src/SMTP.php'

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;

    $mail->Host = 'ssl://smtp.mail.ru';
    $mail->Port = 465;
    $mail->Username = 'radxxx7@mail.ru';
    $mail->Password = 'OPen4me1@';

    $mail->setFrom('radxxx7@mail.ru', 'Ремонт и строительство');
    $mail->setAddress('radxxx7@mail.ru');
    $mail->Subject = 'Заявка с сайта'

    $_POST = json_decode(file_get_contents("php://input"), true);
    $body = $_POST

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' = $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>






