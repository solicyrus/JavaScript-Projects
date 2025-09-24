//Creates an object to keep track of values
const calculator = {
    //This will display 0 on the calculator screen.
    Display_Value: '0',
    //This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //This checks wether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    //This will hold the operatoe, we set it to null for now.
    operator: null,
};

//This modifies values rach time a button is clicked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = calculator;
    //This checks if the Wait_Second_Operand is true and sets Display_Value
    //to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        calculator.Display_Value = digit;
        calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Display_Value if the current value is 0
        //otherwise it adds onto it.
        calculator.Display_Value = Display_Value === '0'? digit : Display_Value + digit;
    }
}

//This section handles decimel points.
function Input_Decimel(dot) {
    //This ensures that accidental chickinf if the dicimal point doesn't
    //cause bugs in the operation.
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not a decimal point
        //we want to add a decimal point.
        calculator.Display_Value += dot;
    }
}


//This section handels operators
function handels_Operator (Next_Operator) {
    const {First_Operand, Display_Value, operator} = calculator;
    //when an operator key is pressed we convert the current number
    //displayed on the screen to a number and then store the result in
    //calculator. First_Operand if it doesn't already exist.
    const value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator an exists from the function.
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = Next_Operator;
        return;
    } 
    if (First_Operand == null) {
        calculator.First_Operand = value_of_Input;
    } else if (operator) {//Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exists, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is exexcuted.
        let result = Perform_Calculation[operator](Value_Now, value_of_Input);
        //Here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed (9);
        //This will remove any trailing 0's
        result = (result *1). toString();
        calculator.Display_Value = parseFloat(result);
        calculator.First_Operand = parseFloat(result);
    }
    calculator.Wait_Second_Operand = true;
    calculator.operator = Next_Operator;
 }

 const Perform_Calculation = {
    '/': (First_Operand, Second_operand) => First_Operand / Second_operand,
    '*': (First_Operand, Second_operand) => First_Operand * Second_operand,
    '+': (First_Operand, Second_operand) => First_Operand + Second_operand,
    '-': (First_Operand, Second_operand) => First_Operand - Second_operand,
    '=': (First_Operand, Second_operand) => Second_operand
 };
 function calculator_Reset () {
    calculator.Display_Value = '0';
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.operator = null;
 }
 //This function updates the calculator screen with the contents of Display_Value
 function Update_Display() {
    //Makes use of the calculator-screen class to target the 
    //input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.Display_Value;
 }

 Update_Display();
 //This section monitors button clicks
 const keys = document.querySelector('.calculator-keys');
 keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element
    //that was clicked.
    const { target } = event;
    //If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handels_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
 })


