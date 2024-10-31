import {add} from "./solutions.js"

describe('Example Test', function () {
    it('should init without errors', async function () {
      const x = add("hello")
  
      expect(x).toBe("hi")
    })
  })
  