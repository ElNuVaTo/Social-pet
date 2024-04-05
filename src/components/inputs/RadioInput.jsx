import React from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  border-radius: 5px;

  display: flex;
  width: max-content;
  .mydict {
    display: flex;
    margin-top: auto;
    justify-content: center;
  }

  input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input[type="radio"]:checked + label span {
    box-shadow: 0 0 0 0.0625em rgb(74, 222, 128);
    background-color: rgb(74, 222, 128);
    z-index: 1;
  }

  label span {
    display: block;
    cursor: pointer;
    background-color: #fff;
    padding: 5px 8px;
    position: relative;
    box-shadow: 0 0 0 0.0625em #ababab;
    color: #000000;
    text-align: center;
    transition: background-color 0.5s ease;
    font-size: 13px;
    user-select: none;
  }

  .mydict label.first-label span {
    border-radius: 5px 0 0 5px;
  }

  .mydict label:last-child span {
    border-radius: 0 5px 5px 0;
  }
`;

const RadioInput = ({ options, name }) => {
  return (
    <RadioContainer>
      <div className="mydict">
        {options.map((option, index) => (
          <React.Fragment key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
            />
            <label
              htmlFor={option.value}
              className={index === 0 ? "first-label" : ""}
            >
              <span>{option.label}</span>
            </label>
          </React.Fragment>
        ))}
      </div>
    </RadioContainer>
  );
};

export default RadioInput;
