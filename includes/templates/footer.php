
</main>
<!-- Footer -->
<footer class="footer">
    <form class="form" id="contact-form">
        <h2 class="subtitle">Contact Form</h2>
        <input type="text" name="Name" placeholder="Name" id="client-name" required>
        
        <input type="email" name="Email"
        placeholder="Email" id="email" required>

        <textarea name="Message" placeholder="Message" id="message" rows="5" cols="30" required></textarea>
        <button type="submit" id="send-button" class=""> Send <span class="sent-check">✓</span></button>
    </form>
</footer>

<!-- scripts -->
<script src="./js/header.js"></script>
<script src="./js/dark-mode.js"></script>
<script src="./js/form.js"></script>
<script src="./js/clipboard.js"></script>

<?php    
    if (basename($_SERVER['PHP_SELF']) === 'index.php') {        
        echo '<script src="./js/questions.js"></script>';
        echo '<script src="./js/memory-game.js"></script>';
    }
?>

</body>
</html>