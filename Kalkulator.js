$(function () {

    let input1;
    let input2;
    let operasiSelected = null;

    $(".tombol-angka").click(function(){
        let angka = $(this).text();
        // alert("Hallo jQuery! Kamu menekan angka " + angka);

        // cek jika sudah ada selecte operasi
        if(operasiSelected == null){
        // operaasi masih kosong --> isi input1
        let angkaSebelumnya = $("#input1").text();
        if (angkaSebelumnya == "...") angkaSebelumnya = "";
        input1 = angkaSebelumnya + angka;
        $("#input1").text(input1);
        }else{
            // sudah ada operasi selected
        let angkaSebelumnya = $("#input2").text();
        if (angkaSebelumnya == "...") angkaSebelumnya = "";
        input2 = angkaSebelumnya + angka;
        $("#input2").text(input2);
    
        }
    });

    $(".tombol-operasi").click(function() {
        let operasiSebelumnya = $("#operasi-selected").text();
        let newOperasi = $(this).text();
        if (operasiSelected == null) {
            // operasi baru
            $("#operasi-selected").text(newOperasi)
            operasiSelected = newOperasi;
        } else {
            // input1 diisi dengan hasil
            $("#input1").text($("#hasil").text());

            // input2 dikosongkan
            $("#input2").text("...");

            // replace operasi
            $("#operasi-selected").text(newOperasi)
            operasiSelected = newOperasi;
        }
    });

    $(".tombol-plus-minus").click(function() {
        // Cek apakah operasi sudah dipilih atau belum
        if (operasiSelected == null) {
            // Operasi belum dipilih, kita mengubah tanda input1
            input1 = parseFloat($("#input1").text());
            if (!isNaN(input1)) {
                input1 = -input1; // Mengubah tanda input1
                $("#input1").text(input1); // Tampilkan kembali input1 dengan tanda yang diubah
            }
        } else {
            // Operasi sudah dipilih, kita mengubah tanda input2
            input2 = parseFloat($("#input2").text());
            if (!isNaN(input2)) {
                input2 = -input2; // Mengubah tanda input2
                $("#input2").text(input2); // Tampilkan kembali input2 dengan tanda yang diubah
            }
        }
    });
    
    $(".tombol-clear").click(function(){
        // Mengatur ulang semua variabel
        input1 = "";
        input2 = "";
        operasiSelected = null;
    
        // Membersihkan tampilan pada layar kalkulator
        $("#input1").text("");      // Mengosongkan input1
        $("#input2").text("");      // Mengosongkan input2
        $("#operasi-selected").text(""); // Menghapus operasi yang dipilih
        $("#hasil").text("Hasil");          // Menghapus hasil perhitungan
    });


    $("#btn-hitung").click(function(){
        input1 = parseFloat($("#input1").text());
        input2 = parseFloat($("#input2").text());
        let hasil;

        if(operasiSelected == "+") {
            hasil = input1 + input2;
        } else if(operasiSelected == "-") {
            hasil = input1 - input2;
        } else if(operasiSelected == "x") {
            hasil = input1 * input2;
        } else if(operasiSelected == "/") {
            hasil = input1 / input2;
        } else if(operasiSelected == "%") {
            hasil = input1 % input2;
        } else if(operasiSelected == "!") {
            hasil = factorial(input1);
        } else if(operasiSelected == "^") {
            hasil = input1 ** input2;
        } else {
            alert(`belum ada handle untuk operasi ${operasiSelected}`);
        }
        $("#hasil").text(hasil);

        function factorial(n) {
            if (n === 0 || n === 1) {
              return 1;
            } else {
              return n * factorial(n - 1);
            }
          }

    })
});

