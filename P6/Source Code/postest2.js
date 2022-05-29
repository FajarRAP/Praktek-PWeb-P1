function kalkulator() {
    var bil1 = parseFloat(document.nama_form.bilangan1.value);
    var bil2 = parseFloat(document.nama_form.bilangan2.value);
    var operator = prompt("Operator :");
    var hasil;
    if (operator == "+") {
        hasil = bil1 + bil2;
        alert(bil1 + " + " + bil2 + " = " + hasil);
    } else if (operator == "-") {
        hasil = bil1 - bil2;
        alert(bil1 + " - " + bil2 + " = " + hasil);
    } else if (operator == "*") {
        hasil = bil1 * bil2;
        alert(bil1 + " x " + bil2 + " = " + hasil);
    } else if (operator == "/") {
        hasil = bil1 / bil2;
        alert(bil1 + " : " + bil2 + " = " + hasil);
    } else if (operator == "%") {
        hasil = bil1 % bil2;
        alert(bil1 + " % " + bil2 + " = " + hasil);
    } else {
        alert("Operator tidak valid");
    }
}

/* 
    menambah variable operator untuk menjadikannya sebagai percabangan, kemudian nanti operatornya akan sesuai apa yang diinputkan pada variable operator. Prompt adalah perinah untuk mengisi sebuah inputan, if/else if/else adalah percabangan, alert adalah notifikasi yang akan muncul pada browser
*/