const ADD = "ADD"
const SUBTRACT = "SUBTRACT"

export function add(counterToUpdate){
  return {
    type: ADD,
    counterToUpdate
  }
}

export function subtract(counterToUpdate){
 return {
    type: SUBTRACT,
    counterToUpdate
  }
}