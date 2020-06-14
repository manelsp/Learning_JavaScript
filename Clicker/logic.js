    document.body.onload = Timer;
   
    //Constantes
   const capacidadOficina = 50; 
   const capacidadDisco = 1000000;
   const precioMinion = 1;
   const precioOficina = 100;
   const precioDisco = 100;
   const precioFormador = 1000;
   const precioMaquinaCafe = 5; 
   const precioScrum = 1; 
   const precioCtoAmazon = 1; 
   const precioComprarComercial = 1; 
   const precioCampanaMedios = 1;
   const precioComprarAgencia = 1; 
   const precioSistemaCompresion = 1; 

   //variables globales
    var time = 0;
    var incentivosPrecio = 1; 
    var incentivoPrecioMinion = 1;
    var produccionMinions = 1; 
    var dineroPorLinea = 0.10; 
    
    //lineas codigo
    numero = document.getElementById("numero"); 
    numero.innerText = 0; 

    //compresion 
    precioCompresion = document.getElementById("precioCompresion"); 
    precioCompresion.innerText = precioSistemaCompresion + " €"; 

    compresion = document.getElementById("compresion"); 
    compresion.innerText = "No"; 

    //agencia 
    precioAgencia = document.getElementById("precioAgencia"); 
    precioAgencia.innerText = precioComprarAgencia + " €"; 

    agencia = document.getElementById("agencia"); 
    agencia.innerText = "No"; 

    //campaña 
    precioCampana = document.getElementById("precioCampana"); 
    precioCampana.innerText = precioCampanaMedios + " €"; 

    campana = document.getElementById("Campana"); 
    campana.innerText = "No"; 

    //incentivos 
    precioIncentivos = document.getElementById("precicoIncentivos"); 
    precioIncentivos.innerText = incentivosPrecio + " €"; 

    numeroIncentivos = document.getElementById("numeroIncentivos"); 
    numeroIncentivos.innerText = 0; 

    //maquina café
    maquinaCafe = document.getElementById("maquinaCafe"); 
    maquinaCafe.innerText = "No"; 

    precioDeMaquinaCafe = document.getElementById("precioMaquinaCafe");
    precioDeMaquinaCafe.innerText = precioMaquinaCafe + " €";

    //comercial
    comercial = document.getElementById("comercial"); 
    comercial.innerText = "No"; 

    precioComercial = document.getElementById("precioComercial");
    precioComercial.innerText = precioComprarComercial + " €";

    //cto
    cto = document.getElementById("cto"); 
    cto.innerText = "No"; 

    precioCto = document.getElementById("precioCto");
    precioCto.innerText = precioCtoAmazon + " €";

    //scrum 
    asesoriaScrum = document.getElementById("scrum");
    asesoriaScrum.innerText = "No";

    precioAsesoriaScrum = document.getElementById("precioScrum");
    precioAsesoriaScrum.innerText = precioScrum + " €"; 

    //formador
    formador = document.getElementById("formador"); 
    formador.innerText = "No"; 

    precioDeFormador = document.getElementById("precioFormador");
    precioDeFormador.innerText = precioFormador + " €";
    
    //dinero
    dinero = document.getElementById("dinero"); 
    dinero.innerText = 0 + " €"; 

    //minions
    minions = document.getElementById("minions"); 
    minions.innerText = 0;

    precioDeMinion = document.getElementById("precioMinion");
    precioDeMinion.innerText = precioMinion + " €";

    //discos
    discos = document.getElementById("discos"); 
    discos.innerText = 1;
    
    precioDeDisco = document.getElementById("precioDisco");
    precioDeDisco.innerText = precioDisco + " €";
    
    //oficinas
    oficinas = document.getElementById("oficinas"); 
    oficinas.innerText = 1;

    precioDeOficina = document.getElementById("precioOficina");
    precioDeOficina.innerText = precioOficina + " €";

    //incremetarCodigo
    let numeroLineas = document.getElementById("cuadradoLineas");
    numeroLineas.addEventListener("click", incrementarNumero);

    //comprarMinions
    let numeroMinions = document.getElementById("cuadradoMinions");
    numeroMinions.addEventListener("click", comprarMinion);

    //comprarOficinas
    let numeroOficinas = document.getElementById("cuadradoOficina");
    numeroOficinas.addEventListener("click", comprarOficina);

    //comprarDiscos
    let numeroDiscos = document.getElementById("cuadradoDiscos");
    numeroDiscos.addEventListener("click", comprarDisco);

    //comprarFormador
    let ContratarFormador = document.getElementById("cuadradoFormador");
    ContratarFormador.addEventListener("click", comprarFormador);

    //comprarMaquinaCafe
    let comprarMaquinaCafe = document.getElementById("cuadradoMaquinaCafe");
    comprarMaquinaCafe.addEventListener("click", comprarCafe);

    //comprarIncentivoss 
    let comprarIncentivosMinions = document.getElementById("cuadradoIncentivos");
    comprarIncentivosMinions.addEventListener("click", comprarIncentivos);

    //venderLineas
    let venderLineas = document.getElementById("cuadradoDinero");
    venderLineas.addEventListener("click", venderCodigo);

    //comprarScrum
    let comprarScrum = document.getElementById("cuadradoScrum");
    comprarScrum.addEventListener("click", comprarAsesoriaScrum);

    //comprarCto
    let comprarCto = document.getElementById("cuadradoCto");
    comprarCto.addEventListener("click", comprarCtoAmazon);

    //comprarComercial
    let comprarComercial = document.getElementById("cuadradoComercial");
    comprarComercial.addEventListener("click", contratarComercial);

    //comprarCampaña
    let comprarCampana = document.getElementById("cuadradoCampana");
    comprarCampana.addEventListener("click", comprarCampanaMedios);

    //comprarAgencia
    let comprarAgencia = document.getElementById("cuadradoAgencia");
    comprarAgencia.addEventListener("click", comprarNuevaAgencia);

    //comprarSistemaCompresion
    let comprarSistemaCompresion = document.getElementById("cuadradoCompresion");
    comprarSistemaCompresion.addEventListener("click", comprarCompresion);

    function comprarCompresion()
    {
        if (parseFloat(dinero.innerText) >= precioSistemaCompresion && compresion.innerText == "No")
        {
            compresion.innerText = "Si"; 
            capacidadDisco = capacidadDisco * 2;
            dinero.innerText = (parseFloat(dinero.innerText) - precioSistemaCompresion).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }  
    }

    function comprarNuevaAgencia()
    {
        if (parseFloat(dinero.innerText) >= precioComprarAgencia && agencia.innerText == "No")
        {
            agencia.innerText = "Si"; 
            dineroPorLinea = dineroPorLinea * 2;
            dinero.innerText = (parseFloat(dinero.innerText) - precioComprarAgencia).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }    
    }

    function comprarCampanaMedios()
    {
        if (parseFloat(dinero.innerText) >= precioCampanaMedios && campana.innerText == "No")
        {
            campana.innerText = "Si"; 
            dineroPorLinea = dineroPorLinea * 2;
            dinero.innerText = (parseFloat(dinero.innerText) - precioCampanaMedios).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }    
    }

    function contratarComercial()
    {
        if (parseFloat(dinero.innerText) >= precioComprarComercial && comercial.innerText == "No")
        {
            comercial.innerText = "Si";
            dineroPorLinea = dineroPorLinea * 2;
            dinero.innerText = (parseFloat(dinero.innerText) - precioComprarComercial).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }    
    }

    function comprarCtoAmazon() 
    {
        if (parseFloat(dinero.innerText) >= precioCtoAmazon && cto.innerText == "No")
        {
            cto.innerText = "Si";
            produccionMinions = produccionMinions * 50;
            dinero.innerText = (parseFloat(dinero.innerText) - precioCtoAmazon).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }
    }

    function comprarAsesoriaScrum() 
    {
        if (parseFloat(dinero.innerText) >= precioScrum && asesoriaScrum.innerText == "No")
        {
            asesoriaScrum.innerText = "Si";
            produccionMinions = produccionMinions * 4;
            dinero.innerText = (parseFloat(dinero.innerText) - precioScrum).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }
    }

    function venderCodigo()
    {
        dinero.innerText = (parseFloat(dinero.innerText) + parseFloat(numero.innerText) * parseFloat(dineroPorLinea)).toFixed(2) + ' €';
        numero.innerText = 0; 
    }

    function comprarIncentivos() 
    {
        if (parseFloat(dinero.innerText) >= incentivosPrecio)
        {
            if(parseInt(minions.innerText) >= 1)
            {
                numeroIncentivos.innerText = parseInt(numeroIncentivos.innerText)+1;
                dinero.innerText = (parseFloat(dinero.innerText) - incentivosPrecio).toFixed(2) + " €";
                
                incentivoPrecioMinion = incentivoPrecioMinion * 2;
                incentivosPrecio = incentivoPrecioMinion * parseInt(minions.innerText); 
                precioIncentivos.innerText = incentivosPrecio + " €";   

                produccionMinions = produccionMinions * parseInt(numeroIncentivos.innerText) * 10; 

            }
            else
            {
                alert("Compra algun minion!");
            }
        } 
        else 
        {
            alert("Te falta dinero!");
        }
    }

    function comprarCafe(params)
    {
        if (parseFloat(dinero.innerText) >= precioMaquinaCafe && maquinaCafe.innerText == "No")
        {
            maquinaCafe.innerText = "Si";
            produccionMinions = produccionMinions * 2;
            dinero.innerText = (parseFloat(dinero.innerText) - precioMaquinaCafe).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }
    }

    function comprarFormador() 
    {
        if (parseFloat(dinero.innerText) >= precioFormador && formador.innerText == "No")
        {
            formador.innerText = "Si";
            produccionMinions = produccionMinions * 10; 
            dinero.innerText = (parseFloat(dinero.innerText) - precioFormador).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Ya has comprado esta mejora o te falta dinero!");
        }
    }

    function comprarDisco() 
    {
        if (parseFloat(dinero.innerText) >= precioDisco)
        {
            discos.innerText++;
            dinero.innerText = (parseFloat(dinero.innerText) - precioDisco).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Te falta dinero!");
        }
    }

    function comprarOficina() 
    {
        if (parseFloat(dinero.innerText) >= precioOficina)
        {
            oficinas.innerText++;
            dinero.innerText = (parseFloat(dinero.innerText) - precioOficina).toFixed(2) + " €"; 
        } 
        else 
        {
            alert("Te falta dinero!");
        }
    }

    function incrementarNumero () 
    {
        if(parseInt(numero.innerText) < parseInt(discos.innerText) * capacidadDisco)
        {
            numero.innerText++; 
        }
        else
        {
            alert("Compra un nuevo disco!");
        }
    }

    function comprarMinion ()
    {
        let dineroActual = parseFloat(dinero.innerText);

        if (parseInt(minions.innerText) < parseInt(oficinas.innerText)*capacidadOficina) 
        {
            if (dineroActual >= precioMinion)
            {
                dinero.innerText = (parseFloat(dinero.innerText) - precioMinion).toFixed(2) + " €"; 
                minions.innerText++;

                incentivosPrecio = incentivoPrecioMinion * parseInt(minions.innerText);
                precioIncentivos.innerText = incentivosPrecio + " €";
            }
            else
            {
                alert("Te falta dinero!");
            }
        } 
        else 
        {
            alert("Compra mas oficinas!");
        }
        
    }

    function Timer()
    {
        time ++;
        setTimeout("Timer()",1000);   
        

        if(time%10 == 0)
        {
            //produccionMinions = produccionMinions * parseInt(numeroIncentivos.innerText); 

            numero.innerText = parseInt(numero.innerText) + parseInt(minions.innerText) * produccionMinions;
        }
    }
