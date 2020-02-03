import {RandomGrid} from './BoilerPlate';
import NestedGrid from './Board.js';

export default function NewBoard() {
    var myGrid = RandomGrid();
    return NestedGrid(myGrid);
};