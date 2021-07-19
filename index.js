import { decrementar, incrementar } from './contador.js';
import store from './store.js'

const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const counterDiv = document.querySelector('#counter');

const render = () =>{
    const { contador } = store.getState();
    counterDiv.innerHTML = contador;
}
render();

store.subscribe(render)

incrementButton.addEventListener('click', ()=>{
    return store.dispatch(incrementar());
})

decrementButton.addEventListener('click', ()=>{
    return store.dispatch(decrementar());
})