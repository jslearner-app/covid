
import React, { useState } from "react";
import "./Checker.css";
import Button from '@material-ui/core/Button';


export default function Checker() {

    const [state, setState] = useState({
        fever: "",
        cough: "",
        temperature: "",
        tiredness: "",
        sleep: "",
        pains: "",
        throat:"",
        diarrhea:"",
        conjunctivitis:"",
        headache:"",
        taste:"",
        toes:"",
        breath:"",
        pressure:"",
        movement:"",
      });
      const [point, setPoint] = useState(0);
    
      // handle change for all select boxs
      const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => {
          return {
            ...prevState,
    
            // it is important to give names to  our select elements
            [name]: value
          };
        });
      };
    
      function IncreasePoint() {
        if (state.fever === "yes") {
          setPoint((prevState) => prevState + 20);
        }
        if (state.cough === "yes") {
          setPoint((prevState) => prevState + 20);
        } if (state.temperature === "yes") {
          setPoint((prevState) => prevState + 15);
        }if (state.tiredness === "yes") {
          setPoint((prevState) => prevState + 10);
        }if (state.sleep === "<7hrs") {
          setPoint((prevState) => prevState + 10);
        }if (state.pains === "yes") {
          setPoint((prevState) => prevState + 10);
        }if (state.throat === "yes") {
          setPoint((prevState) => prevState + 15);
        }if (state.diarrhea === "yes") {
          setPoint((prevState) => prevState + 15);
        }if (state.conjunctivitis === "yes") {
          setPoint((prevState) => prevState + 10);
        }if (state.headache === "yes") {
          setPoint((prevState) => prevState + 10);
        }if (state.taste === "yes") {
          setPoint((prevState) => prevState + 10);
        }if (state.toes === "yes") {
          setPoint((prevState) => prevState + 15);
        }if (state.breath === "yes") {
          setPoint((prevState) => prevState + 20);
        }if (state.pressure === "yes") {
          setPoint((prevState) => prevState + 20);
        }if (state.movement === "yes") {
          setPoint((prevState) => prevState + 20);
        }
        return point;
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // when you click the submit, it will trigger our function
        IncreasePoint();
      };
      return (
        <div className="container-covid">
        <p className="para">Total: {point} %</p>
          <form onSubmit={handleSubmit}>
            <label>
             <h4>Do you have Cough:</h4> 
              <select className="selectALL" name="cough" value={state.cough} onChange={handleChange}>
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
            <br />
            <br />
            <label>
              <h4>Do you have Fever:</h4>
              <select className="selectALL" name="fever" value={state.fever} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
             <h4>Do you have Temperature:</h4>
              <select className="selectALL" name="temperature" value={state.temperature} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Do you feel Tiredness:</h4>
              <select className="selectALL" name="tiredness" value={state.tiredness} onChange={handleChange}>
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>How many hours do you sleep at night:</h4>
              <select className="selectALL" name="sleep" value={state.sleep} onChange={handleChange}>
              <option value=""></option>
                <option value=">7hrs">More than 7hrs</option>
                <option value="<7hrs">Less than 7hrs</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>How many hours you work per day:</h4>
              <select className="selectALL" name="work " value={state.work} onChange={handleChange}>
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Do you have aches and pains:</h4>
              <select className="selectALL" name="pains" value={state.pains} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
           <h4>Do you have sore throat:</h4> 
              <select className="selectALL" name="throat" value={state.throat} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Do you have diarrhea:</h4>
              <select className="selectALL" name="diarrhea" value={state.diarrhea} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Do you have conjunctivitis:</h4>
              <select className="selectALL" name="conjunctivitis" value={state.conjunctivitis} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Do you have headache:</h4>
              <select className="selectALL" name="headache" value={state.headache} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
           <h4>Do you have loss of taste or smell:</h4> 
              <select className="selectALL" name="taste" value={state.taste} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Do you have a rash on skin, or discolouration of fingers or toes:</h4>
              <select className="selectALL" name="toes" value={state.toes} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Difficulty breathing or shortness of breath:</h4>
              <select className="selectALL" name="breath" value={state.breath} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Chest pain or pressure:</h4>
              <select className="selectALL" name="pressure" value={state.pressure} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <label>
            <h4>Loss of speech or movement:</h4>
              <select className="selectALL" name="movement" value={state.movement} onChange={handleChange}>
              <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
    
            <br />
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit" value="Send">
            Send
            </Button>
            <br />
            <br />
            <br />
          </form>
         
         
        </div>
      );
    }
    
