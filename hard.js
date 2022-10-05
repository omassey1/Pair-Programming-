let matchParanthesis = (input) => {
    
    let braces = "{}[]()"
    let stack = [] 
    for(let brakt of input) {
    
      let braktsIndex = braces.indexOf(brakt)
     
      if(braktsIndex % 2 === 0) {
        stack.push(braktsIndex + 1)
      } else { 
        if(stack.pop() !== braktsIndex) {
          return false; 
        }
      }
    }
    return stack.length === 0
  }
  
  
  console.log(matchParanthesis('{}'))
  console.log(matchParanthesis('{]'))


