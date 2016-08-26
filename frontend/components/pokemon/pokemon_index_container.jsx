import {connect} from 'react-redux';
import PokemonIndex from './pokemon_index.jsx';



const mapStateToProps = ({pokemon}) => ({
  pokemon
});



export default connect(mapStateToProps)(PokemonIndex);
