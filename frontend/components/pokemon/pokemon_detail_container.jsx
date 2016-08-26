import {connect} from 'react-redux';
import {PokemonDetail} from './pokemon_detail';
import {selectToys} from '../../util/toy_selector';



const mapStateToProps = (state) => ({
  toys: selectToys(state),
  details: state.details
});



export default connect(mapStateToProps)(PokemonDetail);
