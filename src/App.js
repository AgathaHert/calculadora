import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };
  const handleClear = () => {
    setCurrentNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = +firstNumber + +currentNumber;
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperation(" ");
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = +firstNumber - +currentNumber;
      setCurrentNumber(String(sub));
      setFirstNumber("0");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("÷");
    } else {
      const div = +firstNumber / +currentNumber;
      setCurrentNumber(String(div));
      setFirstNumber("0");
    }
  };

  const handleMulNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("×");
    } else {
      const mul = +firstNumber * +currentNumber;
      setCurrentNumber(String(mul));
      setFirstNumber("0");
    }
  };
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "×":
          handleMulNumbers();
          break;
        case "÷":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };

  const handleBackspace = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
          <Button label="÷" onClick={handleDivNumbers} />
          <Button label="×" onClick={handleMulNumbers} />
          <Button label="c" onClick={handleClear} />
          <Button label="←" onClick={handleBackspace} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
