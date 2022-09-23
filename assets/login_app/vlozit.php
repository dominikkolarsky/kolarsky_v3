<?php
// pripojeni k databazi:
include 'mysqli_connection.php';
Connection();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vložit otazku | Anket</title>

    <link rel="stylesheet" href="app.css">
</head>

<body>
    <!-- logika vlozeni -->
    <?php
    // vlozeni
    echo 'aaa' . $_POST['vstup_otazka'];
    if (!empty($_POST['vstup_otazka'])) {

        $query_vlozit = "INSERT INTO otazky (otazka_text) VALUES ('" . addslashes($_POST["vstup_otazka"]) . "')";

        // pokud vse probehlo, vypis:
        if (mysqli_query($con, $query_vlozit)) {
            echo "<p>Otázka byla vložena do databáze.</p>";
        }

    } else {
        echo "<p>(...Všechny položky formuláře musí být vyplňené!)</p>";
    }
    ?>

    <!-- logika vyber a prehled -->
    <?php
    // vyber otazek z databaze
    $query_prehled = "SELECT * FROM otazky";
    $prehled = mysqli_query($con, $query_prehled);

    // kontrola
    global $prehled;
    if (!($prehled)) {
        die("...Nepovedlo se vybrat otázky.");
    } else {
        // echo "vybral si je.";
    }
    ?>

    <!-- logika zobrazeni -->
    <?php
    while ($otazka = mysqli_fetch_array($prehled)) {
    ?>
        <div class="otazka">
            <h3><?php echo $otazka["otazka_text"]; ?></h3>
            <a href="otazka.php?id=<?php echo $otazka["otazka_id"]; ?>">Detail</a>

        </div>

    <?php
    }
    ?>


    <form action="vlozit.php" method="POST">

        <textarea name="vstup_otazka" placeholder="Vložte sem anketní otázku..."></textarea><br>
        <input type="submit" name="submit" value="Vlož otázku">

    </form>


</body>

</html>