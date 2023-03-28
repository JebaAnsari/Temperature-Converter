const temperatureconverter = () =>{
    const inputTemp = document.getElementById('cels').value ;
    const tempSelected = document.getElementById('select');
    const valueTemp = select.options[tempSelected.selectedIndex].value;
    const celToFah = (cel)=>{
        let f = ((cel*9/5)+32).toFixed(1);
        return f;
    }

    const FahTocel=(fer) =>{
        let c = ((fer-32)*5/9).toFixed(1);
        return c;
    }
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = FahTocel(inputTemp) + "&#176; Celsius";
    }
    }
