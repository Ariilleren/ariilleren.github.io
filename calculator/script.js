function calc() {
    k = parseInt(document.getElementById("number").value);
    for (i=0; i<k; i++) {
        kkk = document.createElement("h2");
        kkk.innerHTML = "zzz";
        console.log(k, i);
    }
    inputs = document.getElementById("inputs");
    inputs.appendChild(kkk);
}