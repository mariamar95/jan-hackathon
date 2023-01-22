document.querySelector('#form').onsubmit = () =>{
    const base = document.querySelector('#currency-from').value;
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
        .then((response) => response.json())
        .then((data) => {
            const amount = document.querySelector("#amount").value;
            const currencyTo = document.querySelector("#currency-to").value;
            const rate = data.rates[currencyTo];
            function convert(){
                return amount * rate;
            }
            document.querySelector(".display-result").innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(2)}`;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
        return false;
}