/**
 * Created by raniys on 5/24/17.
 */

import _ from 'lodash';

function component () {
    let element = document.createElement('div');

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());