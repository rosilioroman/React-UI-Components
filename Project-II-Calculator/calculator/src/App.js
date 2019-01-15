import React from 'react';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <ButtonContainer className="clear-row">
        <ActionButton className="clear-btn" text="clear"/>
        <NumberButton buttonStyle="number-button operator-btn" text="/"/>
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton buttonStyle="number-button standard-btn" text="7"/>
        <NumberButton buttonStyle="number-button standard-btn" text="8"/>
        <NumberButton buttonStyle="number-button standard-btn" text="9"/>
        <NumberButton buttonStyle="number-button operator-btn" text="X"/>
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton buttonStyle="number-button standard-btn" text="4"/>
        <NumberButton buttonStyle="number-button standard-btn" text="5"/>
        <NumberButton buttonStyle="number-button standard-btn" text="6"/>
        <NumberButton buttonStyle="number-button operator-btn" text="-"/>
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton buttonStyle="number-button standard-btn" text="1"/>
        <NumberButton buttonStyle="number-button standard-btn" text="2"/>
        <NumberButton buttonStyle="number-button standard-btn" text="3"/>
        <NumberButton buttonStyle="number-button operator-btn" text="+"/>
      </ButtonContainer>
      <ButtonContainer className="zero-row">
        <ActionButton className="zero-btn" text="0"/>
        <NumberButton buttonStyle="number-button operator-btn" text="="/>
      </ButtonContainer> 
    </div>
  );
};

export default App;

// <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>