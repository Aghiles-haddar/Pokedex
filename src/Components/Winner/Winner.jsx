
import React, { useState, useEffect } from "react";
import winner1 from '../../Assets/winner11.png'
import './Winner.css'
import Arrow from '../../Assets/arrow.svg'
import 'animate.css/animate.min.css'; // importer la bibliothèque CSS Animate.css
import hover1 from '../../Assets/hover1.png'
import closeIcon from '../../Assets/closeIcon.svg'


function Winner() {
       

    
    const [pokemonData, setPokemonData] = useState([]);
    const [selectedPokemonId, setSelectedPokemonId] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://localhost:3001/api/pokemon");
        const data = await response.json();
        setPokemonData(data);
      }
      fetchData();
    }, []);
  
    function handleClick(id) {
      setSelectedPokemonId(id);
      setShowOverlay(true);
      console.log(id)
      console.log(selectedPokemonId)
    }
  
    function handleClose() {
      setShowOverlay(false);
    }

    const [searchInput, setSearchInput] = useState("");
    function handleSearchInputChange(event) {
        setSearchInput(event.target.value);
      }
      const filteredPokemonData = pokemonData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      );   

    const [showMenu, setShowMenu] = useState(false);

    const handleTipoClick = () => {
        setShowMenu(!showMenu);
    };
  
    function toggleTipoMenu() {
        var tipoMenu = document.querySelector('.tipo-menu');
        tipoMenu.classList.toggle('active');
      }
      




    return(
        <div className="container-global-winner">
            <div className="container-global-winner-second">
            <div className="winner-title">
                <h1 className="winner-title-h1">800 <span className="winner-span">Pokemons</span> for you to choose your favorite</h1>
            </div>

            <div className="winner-input">
                <input className="winner-input-first"type="text" placeholder="Encuentra tu pokémon..." value={searchInput} onChange={handleSearchInputChange}/>
            </div>

            <div className="winner-menu">

            <div className="tipo-winner">
                <div id="tipo-information" className="tipo-information" onClick={toggleTipoMenu}>    
                    <p className="tipo-title">Tipo</p>
                    <img className="arrow" src={Arrow} alt="" />
                </div>


                <div className="tipo-menu ">
                    <div className="tipo-information-details">
                        <input type="checkbox" />
                        <p className="paragraph-tipo">Fire</p>
                    </div>

                    <div className="tipo-information-details">
                        <input type="checkbox" />
                         <p className="paragraph-tipo">Normal</p>
                    </div>

                    <div className="tipo-information-details">
                        <input type="checkbox" />
                        <p className="paragraph-tipo">Electric</p>
                    </div>

                    <div className="tipo-information-details">
                        <input type="checkbox" />
                        <p className="paragraph-tipo">Water</p>
                    </div>
                </div>

            </div>

            <div className="tipo-winner">
                <div className="tipo-information animate__animated animate__bounceIn">
                    <p className="tipo-title">Ataque</p>
                    <img className="arrow" src={Arrow} alt="" />
                </div>


 

            </div>

            <div className="tipo-winner">
                <div className="tipo-information animate__animated animate__bounceIn">
                    <p className="tipo-title">Experiencia</p>
                    <img className="arrow" src={Arrow} alt="" />
                </div>

            </div>

                

            </div>

            <div className="winner-informations">
            {filteredPokemonData.length > 0 ? (
            filteredPokemonData.slice(0, 9).map(pokemon => (
                    <div className="winner-information-details" key={pokemon.id} onClick={() => handleClick(pokemon.id)}>
                    <div className="winner-details-left">
                        <h5 className="winner-h5">{pokemon.name}</h5>
                        <div className="winner-more-details">
                        <div className="winner-more-details-left">
                            <span className="span-details-global">{pokemon.attack}</span>
                            <h6 className="h6-details-global">Attack</h6>
                        </div>
                        <div className="winner-more-details-right">
                            <span className="span-details-global">{pokemon.defense}</span>
                            <h6 className="h6-details-global">Defense</h6>
                        </div>
                        </div>
                        <div className="winner-more-details-information">
                        <p className="winner-more-details-informations-left">Grass</p>
                        <p className="winner-more-details-informations-right">Poisson</p>
                        </div>
                    </div>
                    <div className="winner-details-right">
                        <img src={pokemon.image} alt="" />
                    </div>
                </div>
                ))) : (
                    <p className="message-error-input">Malheureusement dwain a oublié de mettre ce pokemon :(</p>
                )
            
            }
      
            
            </div>

            
            <div className="winner-bowls">
                    <div className="bowls"></div>
                    <div className="bowls"></div>
                    <div className="bowls"></div>
            </div>

            <div className="container-bottom-header-winner-header">
                <h5 className="bottom-first-h5">Make with ❤️ for the PokéSpartans team Platzi Master</h5>
                <h5 className="bottom-second-h5">Ours Teams</h5>
            </div> 


            
        </div>
        
        {/* Overlay */}
      {showOverlay && pokemonData.find(pokemon => pokemon.id === selectedPokemonId) &&(
        <div className="overlay">
            <div className="shadow"></div>
            <img className="closeIcon" src={closeIcon} alt="closeIcon" onClick={handleClose} />
          
            {pokemonData
              .filter((pokemon) => pokemon.id === selectedPokemonId)
              .map((pokemon) => (
                <div className="genie" key={pokemon.id} style={{ background: pokemon.background }}>

                        <div className="overlay-left">
                            <img className="hover-left" src={pokemon.imageoverlay} alt="" />
                        </div>
                  
                        <div className="overlay-right">
                            <div className="overlay-right-title">
                                <span className="overlay-title">{pokemon.name}</span>
                                <span className="overlay-title-second">Generation</span>
                                <span className="overlay-title-third">578</span>
                            </div>

                            <div className="overlay-information">
                                <p className="overlay-information-first">Abilities</p>
                                <p className="overlay-information-second">Overgrow - Chlorophyll</p>
                            </div>

                            <div className="overlay-details">
                                <div className="overlay-details-more">
                                    <p className="overlay-details-first">Healthy Points</p>
                                    <p className="overlay-details-second">1 000 000</p>
                                    <div className="overlay-details-progress-bar"></div>
                                </div>

                                <div className="overlay-details-more">
                                    <p className="overlay-details-first">Healthy Points</p>
                                    <p className="overlay-details-second">1 000 000</p>
                                    <div className="overlay-details-progress-bar-left"></div>
                                </div>
                            </div>

                            <div className="overlay-avantages">

                                <div className="overlay-avantages-card">
                                    <p className="nomber-avanatges">{pokemon.defense}</p>
                                    <span className="details-avanatges">Defense</span>
                                </div>

                                <div className="overlay-avantages-card">
                                    <p className="nomber-avanatges">{pokemon.defense}</p>
                                    <span className="details-avanatges">Attack</span>
                                </div>

                                <div className="overlay-avantages-card">
                                    <p className="nomber-avanatges">{pokemon.spattack}</p>
                                    <span className="details-avanatges">Sp Attack</span>
                                </div>

                                <div className="overlay-avantages-card">
                                    <p className="nomber-avanatges">{pokemon.spdefense}</p>
                                    <span className="details-avanatges">Sp Defense</span>
                                </div>

                            </div>
                        </div>

                </div>
                
              ))}
          </div>
        
      )}

        </div>
    )
}

export default Winner


