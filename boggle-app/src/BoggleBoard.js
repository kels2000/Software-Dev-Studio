import {RandomGrid} from './BoilerPlate';
import NestedGrid from './Board.js';

export default function BoggleBoard() {
    var gridRandom = RandomGrid();
    return NestedGrid(gridRandom);
    }
    
