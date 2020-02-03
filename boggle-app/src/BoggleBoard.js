import {RandomGrid} from './BoilerPlate';
import NestedGrid from './Board.js';

export default function Board() {
    var gridRandom = RandomGrid();
    return NestedGrid(gridRandom);
};
