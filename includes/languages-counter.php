/*

// function countCSSLines($directory) {
//     $totalLines = 0;
//     $cssLines = 0;

//     // Obtener todos los archivos y carpetas en el directorio
//     $files = scandir($directory);

//     foreach ($files as $file) {
//         if ($file != '.' && $file != '..') {
//             $path = $directory . DIRECTORY_SEPARATOR . $file;

//             // Si es un directorio, explorarlo recursivamente
//             if (is_dir($path)) {
//                 $cssLinesSub = countCSSLines($path);
//                 $totalLines += $cssLinesSub['total'];
//                 $cssLines += $cssLinesSub['css'];
//             } elseif (is_file($path)) {
//                 // Si es un archivo, leerlo y contar las líneas de CSS
//                 $fileContent = file_get_contents($path);
//                 $lines = explode("\n", $fileContent);
//                 $totalLines += count($lines);
//                 foreach ($lines as $line) {
//                     // Verificar si la línea contiene código CSS
//                     if (strpos($line, '{') !== false || strpos($line, '}') !== false) {
//                         $cssLines++;
//                     }
//                 }
//             }
//         }
//     }

//     return array('total' => $totalLines, 'css' => $cssLines);
// }
*/
// $projectDirectory = '/ruta/a/tu/proyecto';
// $result = countCSSLines($projectDirectory);
// $totalLines = $result['total'];
// $cssLines = $result['css'];
// $percentage = ($cssLines / $totalLines) * 100;

// echo "Total lines: $totalLines\n";
// echo "CSS lines: $cssLines\n";
// echo "Percentage of CSS: $percentage%\n";
