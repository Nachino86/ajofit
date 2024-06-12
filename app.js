const ingredientes = [
                        {
                            nombre: 'Cebolla',
                            calorias: 40, 
                            pesomed: 160
                        },  {
                            nombre: 'Pimiento Verde',
                            calorias: 20, 
                            pesomed: 120
                        },  {
                            nombre: 'Cebolla Dulce',
                            calorias: 32, 
                            pesomed: 200
                        },  {
                            nombre: 'Cebolla Roja',
                            calorias: 44, 
                            pesomed: 150
                        },  {
                            nombre: 'Pimiento Rojo',
                            calorias: 31, 
                            pesomed: 120
                        },  {
                            nombre: 'Champiñón',
                            calorias: 31, 
                            pesomed: 20
                        },  {
                            nombre: 'Pechuga de pollo',
                            calorias: 165, 
                            pesomed: 174
                        },  {
                            nombre: 'Muslo de pollo',
                            calorias: 177, 
                            pesomed: 116
                        },  {
                            nombre: 'Diente de ajo',
                            calorias: 149, 
                            pesomed: 10
                        },  {
                            nombre: 'Calabaza',
                            calorias: 26, 
                            pesomed: 5600
                        },  {
                            nombre: 'Calabacín',
                            calorias: 17, 
                            pesomed: 200
                        },  {
                            nombre: 'Queso azul',
                            calorias: 369, 
                            pesomed: 150
                        },  {
                            nombre: 'Queso en lonchas',
                            calorias: 358, 
                            pesomed: 19
                        },  {
                            nombre: 'Queso parmesano',
                            calorias: 431, 
                            pesomed: 150
                        },  {
                            nombre: 'Aceite de oliva',
                            calorias: 884, 
                            pesomed: 13
                        },  {
                            nombre: 'Harina de trigo',
                            calorias: 364, 
                            pesomed: 100
                        },  {
                            nombre: 'Tomate',
                            calorias: 19, 
                            pesomed: 123
                        },  {
                            nombre: 'Tomate triturado',
                            calorias: 82, 
                            pesomed: 14
                        },  {
                            nombre: 'Pan de molde',
                            calorias: 266, 
                            pesomed: 35
                        },  {
                            nombre: 'Lechuga',
                            calorias: 15, 
                            pesomed: 300
                        },  {
                            nombre: 'Huevo',
                            calorias: 155, 
                            pesomed: 50
                        },  {
                            nombre: 'Mantequilla',
                            calorias: 717, 
                            pesomed: 15
                        },  {
                            nombre: 'Salmón',
                            calorias: 208, 
                            pesomed: 180
                        },  {
                            nombre: 'Bacalao',
                            calorias: 82, 
                            pesomed: 180
                        },  {
                            nombre: 'Dorada',
                            calorias: 72, 
                            pesomed: 300
                        },  {
                            nombre: 'Gambas',
                            calorias: 99, 
                            pesomed: 15
                        },  {
                            nombre: 'Vinagre',
                            calorias: 18, 
                            pesomed: 14
                        },  {
                            nombre: 'Garbanzos',
                            calorias: 360, 
                            pesomed:100
                        },  {
                            nombre: 'Lentejas',
                            calorias: 166, 
                            pesomed:100
                        },  {
                            nombre: 'Judías pintas',
                            calorias: 333, 
                            pesomed: 100
                        },  {
                            nombre: 'Arroz blanco',
                            calorias: 115, 
                            pesomed: 180
                        },  {
                            nombre: 'Macarrones',
                            calorias: 131, 
                            pesomed:100
                        },  {
                            nombre: 'Espaguetis',
                            calorias: 131, 
                            pesomed:100
                        },  {
                            nombre: 'Aguacate',
                            calorias: 160, 
                            pesomed:145
                        },  {
                            nombre: 'Vino blanco',
                            calorias: 82, 
                            pesomed: 175
                        },  {
                            nombre: 'Azúcar',
                            calorias: 387, 
                            pesomed:4
                        }, {
                            nombre: 'Patata',
                            calorias: 73, 
                            pesomed:220
                        }, {
                            nombre: 'Alcachofa',
                            calorias: 47, 
                            pesomed:128
                        }, {
                            nombre: 'Jamón de York',
                            calorias: 121, 
                            pesomed:16.8
                        }   

]



const lista = document.getElementById('lista');
const busqueda = document.getElementById('bppal');

const inglist = [];
ingredientes.forEach(element => {
    inglist.push(element.nombre);

});

busqueda.onkeyup = function(){
    let resultado = [];
    let entrada = busqueda.value;
    
    if(entrada !== ''){
        resultado = inglist.filter((palabra)=>{
            return palabra.toLowerCase().includes(entrada.toLowerCase());
        });
        };
        mostrar(resultado);
    }

    function mostrar(resultado){
        const contenido = resultado.map((list)=>{
            return "<li class='ibusc' onclick='pasoATabla(this)' id='"+list+"'>"+list+"</li>";
        });

        const listacontenido = [];
        for(i=0; i<3; i++) {
             listacontenido.push(contenido[i]);
        }
        
        lista.innerHTML = "<ul class='ubusc'>" + listacontenido.join(' ') + "</ul>";
        
    }

    let j = 0; //Variable para llevar la cuenta de clicks ingredientes
    let tabla = document.getElementById("pizarra")
    const seleccion = [];
    const compra = [];
    
    function pasoATabla(list) {
        let seleccion = list.innerHTML;
        let contador = j++;
        let tabla, entrada, mensajito, cabecera;
            if(contador == 0) {
                tabla = document.getElementById("pizarra")
                entrada = document.createElement("tr")
                cabecera = document.createElement("tr")
                cabecera.innerHTML = "<th colspan='3'>Lista de Ingredientes</th><th></th><th></th><th></th>"
                tabla.appendChild(cabecera)
                mensajito = "<td class='ing' id='"+contador+"'>" + seleccion + "</td>" + "<td><input type='number' class='cant' value='0' min='0' max='10' step='0.5' ></td>" + "<td><select class='unidad'><option id='uds' value='unidades'> unidad </option><option value='peso'>gramos</option> </select> </td>" + "<td><img src='img/trash.png' alt='papelera' class='papelera'></td>"
                entrada.innerHTML = mensajito
                tabla.appendChild(entrada)
                compra.push(seleccion)
            } else {
                tabla = document.getElementById("pizarra")
                entrada = document.createElement("tr")
                mensajito = "<td class='ing' id='"+contador+"'>"+ seleccion + "</td>" + "<td><input type='number' class='cant' value='0' min='0' max='10' step='0.5' ></td>" + "<td><select class='unidad'><option id='uds' value='unidades'> unidad </option><option value='peso'>gramos</option> </select> </td>" + "<td><img src='img/trash.png' alt='papelera' class='papelera'></td>"
                entrada.innerHTML = mensajito
                tabla.appendChild(entrada)
                compra.push(seleccion)        
            }
         }

         let trash = document.getElementById('pizarra');
         let abuelo = '';
         trash.addEventListener("click", function(e){
            if(e.target.className === 'papelera'){
                abuelo = e.target.parentElement;
                abuelo.parentElement.remove();
            }
         });
         document.getElementById("pizarra").addEventListener("click", magnitud)

         function magnitud() {
            let cant = document.querySelectorAll(".cant")
            let unidad = document.querySelectorAll(".unidad")
    
            for(let i=0 ; i < cant.length ; i++) {
                if (unidad[i].value === "peso") {
                    cant[i].setAttribute("max", "3000")
                    cant[i].setAttribute("step", "50")
                    cant[i].setAttribute("option", "peso")
                    
                }
    
                if (cant[i].value > 1 && unidad[i].value === "unidades") {
                    unidad[i].innerHTML = "<td><select class='unidad'> <option id ='uds' value='unidades'> unidades </option> <option value='peso'> gramos </option> </select> </td>"
                    
                } else if (cant[i].value <= 1 && unidad[i].value === "unidades") {
                unidad[i].innerHTML = "<td><select class='unidad'> <option id ='uds' value='unidades'> unidad </option> <option value='peso'> gramos </option> </select> </td>"
    
            }
    
         }
        }

         function calcular() {
            const arring = [];
            const arrcant = [];
            const arruni = []; 
            const arrCal = [];
            const arrPes = [];
            const arrVal = [];
            let valor = 0;
            let whatever = '';
            const arrSms = [];
    
            let ing = document.querySelectorAll(".ing");
            ing.forEach(item => arring.push(item.textContent));
            let cant = document.querySelectorAll(".cant");
            cant.forEach(item => arrcant.push(item.value));
            let uni = document.querySelectorAll(".unidad");
            uni.forEach(item => arruni.push(item.value));

            for(k = 0; k < arring.length ; k++) {
                
            arrCal.push(ingredientes.find(findCal).calorias);
            arrPes.push(ingredientes.find(findPes).pesomed);

            if(uni[k].value === "peso") {
                valor = 0;
                valor = (arrcant[k]* 0.01) * arrCal[k];
                arrVal.push(valor);

            } else if (uni[k].className === "unidad") {
               valor = 0;
               valor = ((arrCal[k] * 0.01) * (arrPes[k])) *  arrcant[k];
               arrVal.push(valor);

            } else {
                valor = 0;
                valor = uni[k].className;
                console.log("Ha ocurrido un error" + valor);

            }


            function findCal(cal) {
                return cal.nombre === arring[k];
            }
            function findPes(pes) {
                return pes.nombre === arring[k];
            }
        }

        const initialValue = 0;
        const sumWithInitial = arrVal.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
        );



        for(l = 0; l < uni.length; l++) {


            if(arruni[l] === "peso") {
                whatever = " gramos ";

            } else if (arruni[l] === "unidades" && arrcant[l] > 1) {
                whatever = " unidades ";
            } else {
                whatever = " unidad ";
            }
            arrSms.push("Tiene " + arrcant[l] + whatever + " de " + arring[l] + ". Esto aporta  " +arrVal[l] + " calorias a la receta" );

        let sms1 = "<h3> La receta introducida aporta " + sumWithInitial + " calorias</h3><br><br>";
        let sms2 = "Consta de " + uni.length + " ingredientes: <br>";
        let sms3 = "<br>";
        let sms4 = "";
        for(m = 0 ; m < arrSms.length ; m++) {
            sms4 += sms3.concat(arrSms[m]);
        }
        
        document.getElementById("resultado").innerHTML = sms1 + sms2 + sms4;

           


         }




        }
