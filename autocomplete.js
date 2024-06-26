let possibleCars = [
    'BMW XM',
    'Mercedes GTR',
    'Porsche 911',
    'Porsche 911 GT3RS',
    'Honda Civic',
    'Subaru BRZ',
    'Subaru Impreza',
    'Nissan GTR R34',
    'Nissan GTR R35',
    'Ford Mustang',
    'Chevrolet Camaro',
    'BMW 3 Series',
    'Toyota Camry',
    'Mercedes-Benz E-Class',
    'Audi A4',
    'Wolkswagen Golf',
    'Nissan Altima', 
    'Hyundai Sonata',
    'Kia Optima',
    'Mazda Rx7',
    'Tesla Model S',
    'Jaguar F-Type',
    'Jeep Wrangler',
    'Volvo XC90', 
    'Lamborghini Aventador SVJ',
    'McLaren 720s',
    'McLaren Senna',
    'McLaren P1',
    'Toyota Sprinter Trueno',
    'Toyota Supra',
    'Mitsubishi Ecplise',
    'Mitsubishi Lancer',
    'Audi R8',
    'Fiat Uno',
    'BMW E36',
    'Bugatti Chiron',
    'Ferrari 488 Spider',
    'Porsche Carrera GT',
    'Lexus LFA',
    'Audi RS6',
    'Ferrari F40'
];

const autoComplete = document.querySelector(".auto-complete");
const inputName = document.getElementById("input-name");

inputName.onkeyup = function() {
    let result = [];
    let input = inputName.value;
    if(input.length) {
        result = possibleCars.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML= '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputName.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

window.selectInput = selectInput;