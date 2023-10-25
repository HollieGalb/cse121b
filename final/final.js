//set base URL
//website
//https://pokeapi.co/
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let pokemonList = null;

const outputId = document.querySelector("#view_pokemon");

//get list of pokemon and save array to a variable
async function createPokemonList(url){
    const response = await fetch(url);
    //convert to JSON 
    const data = await response.json();
    console.log(data);
    //now pokemon array is saved to the global variable
    pokemonList = data.results;
    console.log(pokemonList);
    
    //call function to display array
    displayPokemon(pokemonList)
}

//create function to display pokemon
function displayPokemon(list) {    

    list.forEach(pokemon => {
        const indexNumber = pokemonList.indexOf(pokemon, 0);
        const outPut = `<li>Number:${indexNumber + 1} ${pokemon.name}</li>`;
        

        outputId.innerHTML += outPut;
    });
};

const reset = () => {
    outputId.innerHTML = '';
}

function filterPokemon(){
    reset();
    //get drop down ID
    let dropDownId = document.querySelector("#sortBy").value;

    switch(dropDownId){
        case ("a_b"):
            let ab_list = pokemonList.filter(pokemon => pokemon.name[0] === "a" || pokemon.name[0] === "b" );
            ab_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(ab_list);
        break;
        case ("c_d"):
            let cd_list = pokemonList.filter(pokemon => pokemon.name[0] === "c" || pokemon.name[0] === "d" );
            cd_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(cd_list);
        break;
        case ("e_f"):
            let ef_list = pokemonList.filter(pokemon => pokemon.name[0] === "e" || pokemon.name[0] === "f" );
            ef_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(ef_list);
        break;
        case ("g_h"):
            let gh_list = pokemonList.filter(pokemon => pokemon.name[0] === "g" || pokemon.name[0] === "h" );
            gh_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(gh_list);
        break;
        case ("i_j"):
            let ij_list = pokemonList.filter(pokemon => pokemon.name[0] === "i" || pokemon.name[0] === "j" );
            ij_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(ij_list);
        break;
        case ("k_l"):
            let kl_list = pokemonList.filter(pokemon => pokemon.name[0] === "k" || pokemon.name[0] === "l" );
            kl_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(kl_list);
        break;
        case ("m_n"):
            let mn_list = pokemonList.filter(pokemon => pokemon.name[0] === "m" || pokemon.name[0] === "n" );
            mn_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(mn_list);
        break;
        case ("o_p"):
            let op_list = pokemonList.filter(pokemon => pokemon.name[0] === "o" || pokemon.name[0] === "p" );
            op_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(op_list);
        break;
        case ("q_r"):
            let qr_list = pokemonList.filter(pokemon => pokemon.name[0] === "q" || pokemon.name[0] === "r" );
            qr_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(qr_list);
        break;
        case ("s_t"):
            let st_list = pokemonList.filter(pokemon => pokemon.name[0] === "s" || pokemon.name[0] === "t" );
            st_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(st_list);
        break;
        case ("u_v_w"):
            let uvw_list = pokemonList.filter(pokemon => pokemon.name[0] === "u" || pokemon.name[0] === "v" || pokemon.name[0] === "w" );
            uvw_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(uvw_list);
        break;
        case ("x_y_z"):
            let xyz_list = pokemonList.filter(pokemon => pokemon.name[0] === "x" || pokemon.name[0] === "y" || pokemon.name[0] === "z");
            xyz_list.sort((a,b) => a.name.localeCompare(b.name));

            displayPokemon(xyz_list);
        break;
        default:
            displayPokemon(pokemonList);
        break;
    };
}

createPokemonList(url);
document.querySelector("#sortBy").addEventListener('change', () => filterPokemon(pokemonList));