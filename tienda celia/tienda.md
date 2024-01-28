<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .navbar {
            display: flex;
            justify-content: space-around;
            background-color: #333;
            padding: 10px;
        }

        .nav-item {
            color: white;
            text-decoration: none;
            padding: 10px;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            z-index: 1;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s;
        }

        .dropdown:hover .dropdown-content {
            visibility: visible;
            opacity: 1;
        }

        .dropdown-item {
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            color: #333;
        }

        .dropdown-item:hover {
            background-color: #ddd;
        }
    </style>
</head>
<body>

    <!-- HTML -->
    <div class="navbar">
        <a href="#" class="nav-item">Opción 1</a>
        <div class="dropdown">
            <a href="#" class="nav-item">Opción Desplegable</a>
            <div class="dropdown-content">
                <a href="#" class="dropdown-item">Opción 1</a>
                <a href="#" class="dropdown-item">Opción 2</a>
                <a href="#" class="dropdown-item">Opción 3</a>
                <a href="#" class="dropdown-item">Opción 4</a>
                <a href="#" class="dropdown-item">Opción 5</a>
                <a href="#" class="dropdown-item">Opción 6</a>
                <a href="#" class="dropdown-item">Opción 7</a>
            </div>
        </div>
        <a href="#" class="nav-item">Opción 3</a>
    </div>

</body>
</html>
