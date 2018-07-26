const getReducer = (state = [], action)=>{

    if(action.type === 'GET_ITEMDATA'){
        console.log('in get data reducer, action.payload: ', action.payload);
        return action.payload;
    } return [state];
}
     
export default getReducer;