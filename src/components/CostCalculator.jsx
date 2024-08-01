import React, { useState, useEffect } from "react";

const CostCalculator = ({
  formula,
  currency = "₪",
  currencyPosition = "before",
  thousandthSeparator = ",",
  decimalSeparator = ".",
  updateHidden,
}) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    calculate();
  }, [formula]); // Run calculate function whenever formula changes

  const calculate = () => {
    const sumArray = formula.split("+");
    let multArray;
    let totalSum = 0;
    let mult = 1;

    sumArray.forEach((item) => {
      multArray = item.split("*");
      if (multArray.length > 1) {
        mult = 1;
        multArray.forEach((multItem) => {
          const value = document.getElementById(multItem)?.value;
          mult *= !isNaN(value)
            ? parseFloat(value)
            : !isNaN(multItem)
            ? parseFloat(multItem)
            : 0;
        });
        totalSum += mult;
      } else {
        const value = document.getElementById(item)?.value;
        totalSum += !isNaN(parseFloat(value))
          ? parseFloat(value)
          : !isNaN(parseFloat(item))
          ? parseFloat(item)
          : 0;
      }
    });

    setSum(totalSum);
    updateHiddenField(totalSum);
  };

  const updateHiddenField = (totalSum) => {
    const regex = new RegExp(`\\d(?=(\\d{3})+\\${decimalSeparator})`, "g");
    const formattedSum = totalSum
      .toFixed(2)
      .replace(".", decimalSeparator)
      .replace(regex, `$&${thousandthSeparator}`);

    if (updateHidden) {
      updateHidden.value = `${currency}${formattedSum}`;
    }
  };

  const formattedSum = sum
    .toFixed(2)
    .replace(".", decimalSeparator)
    .replace(
      new RegExp(`\\d(?=(\\d{3})+\\${decimalSeparator})`, "g"),
      `$&${thousandthSeparator}`
    );

  return (
    <span className="cost-calculator-price">
      {currencyPosition === "before" && (
        <span className="currency">{currency}</span>
      )}
      <span>{formattedSum}</span>
      {currencyPosition === "after" && (
        <span className="currency">{currency}</span>
      )}
    </span>
  );
};

export default CostCalculator;
