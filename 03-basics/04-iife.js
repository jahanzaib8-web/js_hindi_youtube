// Immediately Invoked Function Expressions (IIFE)

(function chai(){
 console.log(`Db connected`)
})();


( (name) => {
    console.log(`bd connected two ${name}`)
} )('JAhanziab')