/*<!--
HTML:
Your buttons should have data-content attribute. The value of this attribute 
should be the same as name of the corresponding sub-object in your resources. 
Example:
<button data-content="chrome">Google Chrome</button>
-->*/

// JavaScript:
let button = document.querySelectorAll(".button");
let para = [
    
    "<figure><img src=\"./img/solar.jpg\" alt=\"head\"><p>Solar capture modules are relatively easy to maintain, which, along with the continuing, sharp reduction in cost of photovoltaic cells, explains the present favorable outlook for solar technology. Solar plants also do not emit polluting gases and are silent.Another advantage of energy borne from the Sun is its ability to generate local wealth, by lessening energy dependence on abroad. While it is certain that solar energy – like wind – is intermittent and directly depends on the weather and day-night cycles, rapid advances in electricity storage technologies are reducing this dependency and will lead to the increasing share of solar in the energy system</p></figure>",
    
     "<figure><img src=\"./img/hydro.jpg\" alt=\"head\"><p>The most common type of hydroelectric power plant uses a dam on a river to store water in a reservoir. Water released from the reservoir flows through a turbine, spinning it, which in turn activates a generator to produce electricity. But hydroelectric power doesn't necessarily require a large dam. Some hydroelectric power plants just use a small canal to channel the river water through a turbine.Another type of hydroelectric power plant - called a pumped storage plant - can even store power. The power is sent from a power grid into the electric generators. The generators then spin the turbines backward, which causes the turbines to pump water from a river or lower reservoir to an upper reservoir, where the power is stored. To use the power, the water is released from the upper reservoir back down into the river or lower reservoir. This spins the turbines forward, activating the generators to produce electricity.</p></figure>",
    
     "<figure><img src=\"./img/wind.jpg\" alt=\"head\"><p>Wind energy is a free, renewable resource, so no matter how much is used today, there will still be the same supply in the future. Wind energy is also a source of clean, non-polluting, electricity. Unlike conventional power plants, wind plants emit no air pollutants or greenhouse gases. According to the U.S. Department of Energy, in 1990, California's wind power plants offset the emission of more than 2.5 billion pounds of carbon dioxide, and 15 million pounds of other pollutants that would have otherwise been produced. It would take a forest of 90 million to 175 million trees to provide the same air quality.</p></figure>"

    
];

let container = document.querySelector(".container");


    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/solar.jpg",
           "./img/head.jpg",
           "./img/wind.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    container.innerHTML = para[0];
    /* 
    Get all buttons in an HTMLCollection */
    function handleClick(ev) {
        console.log(ev.target.innerHTML);

    if (ev.target.innerHTML === "Solar Energy"){
        
        container.innerHTML = para[0];
        
    }
     if (ev.target.innerHTML === "Hydro Energy"){
         
        container.innerHTML = para[1];
    
    }

     if (ev.target.innerHTML === "Wind Energy"){
         
        container.innerHTML = para[2];
    }


     ev.target.parentNode.setAttribute("class","active");
}

    for(let b = 0; b < button.length; b++) {
        button[b].addEventListener("click", handleClick, false);
    
   }
     // Closing and invoking closure  