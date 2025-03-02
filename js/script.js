//JSNACK 1

const automobili = [
{   marca: "Ford", modello: "Mustang", alimentazione: "Benzina"}, 
{   marca: "BMW", modello: "X3", alimentazione: "Diesel",}, 
{   marca: "Ferrari", modello: "Spider", alimentazione: "Benzina",},
{   marca: "Dacia", modello: "Bigster", alimentazione: "GPL",}, 
{   marca: "Volkswagen", modello: "Polo TGI", alimentazione: "Benzina",},
{   marca: "Cupra", modello: "Tavascan", alimentazione: "Elettrico",},
{   marca: "DR", modello: "6.0", alimentazione: "Diesel",}, 
{   marca: "Skoda", modello: "Octavia", alimentazione: "Metano",}, 
{   marca: "Tesla", modello: "Model Y", alimentazione: "Elettrico",},
{   marca: "Evo", modello: "7", alimentazione: "Diesel"}]

const autoBenzina = [];
const autoDiesel = [];

for (let i = 0; i < automobili.length; i++) {
    const curAuto = automobili [i];
    const alimentazioneAuto = curAuto.alimentazione;
    
     if (alimentazioneAuto === "Benzina") {
        autoBenzina.push(curAuto);
    } else if (alimentazioneAuto === "Diesel") {
        autoDiesel.push(curAuto);
    } else {
      console.log(curAuto);
    }
}

console.log(autoBenzina, autoDiesel);

//JSNACK 2