<?php
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    
    $body = "Nombre: " . $nombre . "<br>Correo: " . $correo . "<br>Teléfono: " . $telefono . "<br>Mensaje: " . $mensaje;

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'manzmetalurgica@gmail.com';                     // SMTP username
        $mail->Password   = 'elcano8254';                               // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('manzmetalurgica@gmail.com', 'MANZ.com.ar');
        $mail->addAddress('manzmetalurgica@gmail.com');     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Consulta web de: ' . $nombre;
        $mail->CharSet = 'UTF-8';
        $mail->Body    = $body;

        $mail->send();
        echo '<script>
            alert("El mensaje se envió correctamente");
            window.history.go(-1);
            </script>';
    } catch (Exception $e) {
        echo "Ha ocurrido un error al intentar enviar su consulta. Error: {$mail->ErrorInfo}";
    }

?>