
export type stateType = {
   collapsed:boolean
}

export const reducerUnControlledAccordion = (state: stateType, action: any):stateType => {
   switch (action.type) {
      case "TOGGLE": {
         return {...state,collapsed:!state.collapsed}
      }
      default: return state
   }
}