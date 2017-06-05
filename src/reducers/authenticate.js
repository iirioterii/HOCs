/**
 * Created by yuriyreva on 05.06.17.
 */
import {CHANGE_AUTH} from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
    }

    return state;
}