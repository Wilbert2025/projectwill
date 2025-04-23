
function convert() {
    const selects = document.querySelectorAll("#unitType");
    const fromUnit = selects[0].value;
    const toUnit = selects[1].value;
    const value = parseFloat(document.getElementById("valueInput").value);
  
    document.getElementById("formulaDisplay").textContent = ""; // Clear formula
  
    if (!fromUnit || !toUnit || isNaN(value)) {
      alert("Please select both units and enter a value.");
      return;
    }
  
    const toMeters = {
      mm: v => v / 1000,
      cm: v => v / 100,
      m: v => v,
      km: v => v * 1000,
      inches: v => v * 0.0254,
      ft: v => v * 0.3048,
      yd: v => v * 0.9144
    };
  
    const fromMeters = {
      mm: v => v * 1000,
      cm: v => v * 100,
      m: v => v,
      km: v => v / 1000,
      inches: v => v / 0.0254,
      ft: v => v / 0.3048,
      yd: v => v / 0.9144
    };
  
    const meters = toMeters[fromUnit](value);
    const result = fromMeters[toUnit](meters);
  
    document.getElementById("result").textContent = result.toFixed(6);
  }
  
  function showFormula() {
    const selects = document.querySelectorAll("#unitType");
    const fromUnit = selects[0].value;
    const toUnit = selects[1].value;
  
    if (!fromUnit || !toUnit) {
      alert("Please select both units.");
      return;
    }
  
    const formulas = {
      mm: {
        cm: "mm ÷ 10",
        m: "mm ÷ 1000",
        km: "mm ÷ 1,000,000",
        inches: "mm ÷ 25.4",
        ft: "mm ÷ 304.8",
        yd: "mm ÷ 914.4"
      },
      cm: {
        mm: "cm × 10",
        m: "cm ÷ 100",
        km: "cm ÷ 100000",
        inches: "cm ÷ 2.54",
        ft: "cm ÷ 30.48",
        yd: "cm ÷ 91.44"
      },
      m: {
        mm: "m × 1000",
        cm: "m × 100",
        km: "m ÷ 1000",
        inches: "m ÷ 0.0254",
        ft: "m ÷ 0.3048",
        yd: "m ÷ 0.9144"
      },
      km: {
        mm: "km × 1,000,000",
        cm: "km × 100000",
        m: "km × 1000",
        inches: "km ÷ 0.0000254",
        ft: "km ÷ 0.0003048",
        yd: "km ÷ 0.0009144"
      },
      inches: {
        mm: "inches × 25.4",
        cm: "inches × 2.54",
        m: "inches × 0.0254",
        km: "inches × 0.0000254",
        ft: "inches ÷ 12",
        yd: "inches ÷ 36"
      },
      ft: {
        mm: "ft × 304.8",
        cm: "ft × 30.48",
        m: "ft × 0.3048",
        km: "ft × 0.0003048",
        inches: "ft × 12",
        yd: "ft ÷ 3"
      },
      yd: {
        mm: "yd × 914.4",
        cm: "yd × 91.44",
        m: "yd × 0.9144",
        km: "yd × 0.0009144",
        inches: "yd × 36",
        ft: "yd × 3"
      }
    };
  
    const formula = formulas[fromUnit]?.[toUnit];
    document.getElementById("formulaDisplay").textContent = formula
      ? `Formula: ${formula}`
      : "Formula not available for selected units.";
  }
  
  function clearFormula() {
    document.getElementById("formulaDisplay").textContent = "";
  }
  
