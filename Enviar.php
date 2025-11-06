<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Tu dirección de correo Gmail o tu dirección de dominio
    $destinatario = "samuelfcampo@gmail.com";  // El correo que recibirá el mensaje
    $asunto = "Nuevo mensaje desde el formulario de contacto";
    $cuerpo = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";

    // Encabezados del correo
    // Usar un correo válido como remitente, como tu propio correo o un correo verificado en tu servidor
    $headers = "From: samuelfcampo@gmail.com";  // Aquí pones tu correo de contacto o uno verificado

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>