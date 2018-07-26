import { put, takeEvery,call } from 'redux-saga/effects';
import axios from 'axios';

function* getData(action){
    console.log('in getDataSaga')
    try {
        const getDataResponse = yield call(axios.get, `https://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics/api/?results` );
        console.log(getDataResponse.data)
        yield put({
            type: 'GET_ITEMDATA',
            payload: getDataResponse.data
            // payload: getDataResponse.data.product.available_to_promise_network.product_id,
            // payload: getDataResponse.data.product.item.product_description.title

        })
    } catch (error) {
        console.log('ERROR in getDataSaga', error);
    }
}
function* getDataSaga() {
    yield takeEvery('GET_ITEM', getData);
}
 export default getDataSaga;