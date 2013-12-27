<!doctype html>
<html lang="en-US" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">

    <title>page list</title>
   <style>
   a{display:block;text-decoration:none;color :#000;}
   </style>

</head>
<body>
<h1>All pages</h1>
 <?php
foreach (glob("*.html") as $filename) {
    echo '<a href="http://isaev.bl.ee/dev/test/' . $filename . '">' . $filename . '</a>';
    echo "</br>";
}
?>

</body>
</html>