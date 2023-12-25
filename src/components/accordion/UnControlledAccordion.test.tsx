import { reducerUnControlledAccordion, stateType } from "./reducerUnControlledAccordion"

test("collapsed should be true", () => {
   const state: stateType = {
      collapsed: false
   }

   const newState = reducerUnControlledAccordion(state, { type: "TOGGLE" })

   expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {
   const state: stateType = {
      collapsed: true
   }

   const newState = reducerUnControlledAccordion(state, { type: "TOGGLE" })

   expect(newState.collapsed).toBe(false)
})
test("collapsed should return state", () => {
   const state: stateType = {
      collapsed: true
   }

   expect(  reducerUnControlledAccordion(state, { type: "FAKE" }) ).toBe(state);
})