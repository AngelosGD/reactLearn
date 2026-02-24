import { expect, test } from 'vitest'
import { add } from './math.helper'

test('should add two positive numbers', () =>{
   //! 1-arrange
   const a = 1;
   const b = 5

   //!2-act
   const result = add(a,b)

    expect(result).toBe(a +b )
})