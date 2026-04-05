export const lessons = [
  {
    id: "diagnostic-test",
    title: "0. Diagnostic: The Performance Scan",
    icon: "Target",
    content: `
# Initial Diagnostic Test
No explanations. No formulas. Show me what you know right now. If you fail these, you aren't ready for the SAT yet.

### Rule:
1. Attempt all 5 questions.
2. If you don't know, guess based on logic.
3. Speed matters.
    `,
    examples: [
      {
        question: "Convert 0.005 to a percentage.",
        steps: ["Testing your conversion speed."],
        answer: "0.5%"
      },
      {
        question: "A price increases by 20%, then decreases by 20%. Is the final price higher, lower, or the same as the original?",
        steps: ["Testing your trap recognition."],
        answer: "Lower (by 4%)"
      },
      {
        question: "After a 25% discount, a shirt costs $30. Find the original price.",
        steps: ["Testing reverse thinking."],
        answer: "$40"
      }
    ],
    quiz: [
      {
        id: "diag-1",
        text: "What is 150% of 20?",
        type: "input",
        correctAnswer: "30",
        explanation: "1.5 * 20 = 30. Standard calculation."
      },
      {
        id: "diag-2",
        text: "If a population grows from 100 to 150, what was the percentage increase?",
        type: "input",
        correctAnswer: "50",
        explanation: "(150-100)/100 = 0.50 = 50%. Always divide by the original."
      },
      {
        id: "diag-3",
        text: "A jacket costs $108 after an 8% sales tax. What was the price before tax?",
        type: "input",
        correctAnswer: "100",
        explanation: "x * 1.08 = 108. x = 100. Never subtract tax from the final total."
      },
      {
        id: "diag-4",
        text: "Convert 3/8 to a percentage.",
        type: "input",
        correctAnswer: "37.5",
        explanation: "3/8 = 0.375 = 37.5%. Common SAT fraction."
      },
      {
        id: "diag-5",
        text: "x is 40% of 50, and y is 50% of 40. Which is larger?",
        type: "multiple-choice",
        options: ["x", "y", "They are equal", "Cannot be determined"],
        correctAnswer: "They are equal",
        explanation: "0.4 * 50 = 20; 0.5 * 40 = 20. Percentages are commutative."
      }
    ]
  },
  {
    id: "core-concept",
    title: "1. Core Concept: Percent as 'Per 100'",
    icon: "BookOpen",
    content: `
# Percent Mastery
The word **percent** literally means "per 100." 
$7\\% = \\frac{7}{100} = 0.07$.

### Universal Translation
On the SAT, you turn English to Math instantly:
- **"is"** $\\rightarrow =$
- **"of"** $\\rightarrow \\times$
- **"what"** $\\rightarrow x$

### Speed Drills: The 10% Rule
Never use a calculator for simple chunks:
- 10% of 450? Move decimal: 45.
- 5% of 450? Half of 10%: 22.5.
- 1% of 450? Move decimal twice: 4.5.
    `,
    examples: [
      {
        question: "Convert 0.2% to a decimal.",
        steps: [
          "Percent to decimal means divide by 100.",
          "Move decimal two places left: 0.002."
        ],
        answer: "0.002"
      },
      {
        question: "Express 7/20 as a percentage.",
        steps: [
          "Make denominator 100: multiply by 5.",
          "35/100 = 35%."
        ],
        answer: "35%"
      },
      {
        question: "Find 15% of 80 without a calculator.",
        steps: [
          "10% is 8.",
          "5% is half of 10%, which is 4.",
          "8 + 4 = 12."
        ],
        answer: "12"
      }
    ],
    commonMistakes: [
      "Confusing 0.5% with 0.5 (which is 50%).",
      "Using subtraction for 'of' instead of multiplication."
    ],
    quiz: [
      {
        id: "cc-1",
        text: "Express 0.045 as a percentage.",
        type: "input",
        correctAnswer: "4.5",
        explanation: "Multiply by 100: 4.5%."
      },
      {
        id: "cc-2",
        text: "What is 1% of 1,200?",
        type: "input",
        correctAnswer: "12",
        explanation: "Move decimal twice: 12."
      },
      {
        id: "cc-3",
        text: "3/5 is what percentage?",
        type: "input",
        correctAnswer: "60",
        explanation: "3/5 = 0.6 = 60%."
      },
      {
        id: "cc-4",
        text: "Which is larger: 0.8 or 8%?",
        type: "multiple-choice",
        options: ["0.8", "8%", "Equal"],
        correctAnswer: "0.8",
        explanation: "0.8 is 80%. 8% is 0.08."
      },
      {
        id: "cc-5",
        text: "Calculate 20% of 45 in 5 seconds.",
        type: "input",
        correctAnswer: "9",
        explanation: "10% is 4.5. 20% is double: 9."
      }
    ]
  },
  {
    id: "part-whole",
    title: "2. The Trio: Percent, Part, Whole",
    icon: "Layers",
    content: `
# Solving for Any Variable
Use the base formula: $\\text{Part} = \\text{Percent} \\times \\text{Whole}$

### The Three Forms:
1. **Find Part:** $0.20 \\times 50 = 10$
2. **Find Percent:** $\\frac{10}{50} = 0.20$ (20%)
3. **Find Whole:** $\\frac{10}{0.20} = 50$

### Warning:
Identify the **WHOLE** first. It is the base value that the percentage acts upon.
    `,
    examples: [
      {
        question: "30 is what percent of 120?",
        steps: [
          "Equation: $30 = x \\times 120$.",
          "Solve: $x = 30/120 = 1/4 = 25\\%$."
        ],
        answer: "25%"
      },
      {
        question: "15% of what number is 45?",
        steps: [
          "Equation: $0.15 \\times x = 45$.",
          "Solve: $x = 45 / 0.15 = 300$."
        ],
        answer: "300"
      },
      {
        question: "In a class of 40, 60% are boys. How many girls?",
        steps: [
          "If 60% are boys, 40% are girls.",
          "Part = $0.40 \\times 40 = 16$."
        ],
        answer: "16"
      }
    ],
    quiz: [
      {
        id: "pw-1",
        text: "80 is what percent of 200?",
        type: "input",
        correctAnswer: "40",
        explanation: "80/200 = 0.40 = 40%."
      },
      {
        id: "pw-2",
        text: "What is 250% of 20?",
        type: "input",
        correctAnswer: "50",
        explanation: "2.5 * 20 = 50."
      },
      {
        id: "pw-3",
        text: "If 12 is 30% of x, find x.",
        type: "input",
        correctAnswer: "40",
        explanation: "12 / 0.3 = 40."
      },
      {
        id: "pw-4",
        text: "In a box of 500 pencils, 5% are broken. How many are NOT broken?",
        type: "input",
        correctAnswer: "475",
        explanation: "95% of 500 = 0.95 * 500 = 475."
      },
      {
        id: "pw-5",
        text: "If x is 20% of 80, what is 50% of x?",
        type: "input",
        correctAnswer: "8",
        explanation: "x = 16. Half of 16 is 8."
      }
    ]
  },
  {
    id: "growth-decay",
    title: "3. Growth & Decay: Multiplier Thinking",
    icon: "TrendingUp",
    content: `
# The Multiplier Method
Stop adding or subtracting percentages in two steps. Use a single multiplier.

### Translation:
- **Increase by 20%**: Multiply by **1.20** ($1 + 0.20$)
- **Decrease by 20%**: Multiply by **0.80** ($1 - 0.20$)
- **Increase by 5%**: Multiply by **1.05**
- **Decrease by 5%**: Multiply by **0.95**

### Critical Logic:
The multiplier represents what you have **at the end**.
    `,
    examples: [
      {
        question: "A $60 item is increased by 15%. New price?",
        steps: [
          "Multiplier = 1.15.",
          "$60 \\times 1.15 = 69$."
        ],
        answer: "$69"
      },
      {
        question: "A population of 400 drops by 30%. New population?",
        steps: [
          "Multiplier = 0.70.",
          "$400 \\times 0.70 = 280$."
        ],
        answer: "280"
      },
      {
        question: "A salary of S increases by 8%. Express the new salary algebraically.",
        steps: [
          "100% + 8% = 108%.",
          "Multiplier = 1.08.",
          "Result = 1.08S"
        ],
        answer: "1.08S"
      }
    ],
    quiz: [
      {
        id: "gd-1",
        text: "What is the multiplier for an 8.5% increase?",
        type: "input",
        correctAnswer: "1.085",
        explanation: "1 + 0.085 = 1.085."
      },
      {
        id: "gd-2",
        text: "What is the multiplier for a 12% decrease?",
        type: "input",
        correctAnswer: "0.88",
        explanation: "1 - 0.12 = 0.88."
      },
      {
        id: "gd-3",
        text: "A $200 tablet is on sale for 20% off. Find the sale price.",
        type: "input",
        correctAnswer: "160",
        explanation: "200 * 0.8 = 160."
      },
      {
        id: "gd-4",
        text: "A price increased by 150%. What is the multiplier?",
        type: "input",
        correctAnswer: "2.5",
        explanation: "1 + 1.5 = 2.5."
      },
      {
        id: "gd-5",
        text: "An item decreases by 100%. What is its final value?",
        type: "input",
        correctAnswer: "0",
        explanation: "1 - 1 = 0."
      }
    ]
  },
  {
    id: "percent-change",
    title: "4. Percent Change: The Base Trap",
    icon: "Activity",
    content: `
# Formula for Change
$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$$

### The Golden Rule:
**ALWAYS** divide by the **Original (Old)** value.

### Trap Recognition:
If a value goes from 20 to 25, that is a 25% increase.
If a value goes from 25 to 20, that is a 20% decrease.
The base ($20$ vs $25$) changes the result entirely.
    `,
    examples: [
      {
        question: "Stock went from $40 to $50. Percent change?",
        steps: [
          "Change = 10.",
          "Base = 40 (Old).",
          "10/40 = 0.25 = 25%."
        ],
        answer: "25% increase"
      },
      {
        question: "A town population drops from 500 to 400. Percent change?",
        steps: [
          "Change = -100.",
          "Base = 500 (Old).",
          "-100/500 = -0.20 = 20% decrease."
        ],
        answer: "20% decrease"
      },
      {
        question: "If y is 20% more than x, then x is what percent of y?",
        steps: [
          "Let x = 100. Then y = 120.",
          "x/y = 100/120 = 5/6.",
          "5/6 is about 83.3%."
        ],
        answer: "83.3%"
      }
    ],
    quiz: [
      {
        id: "pch-1",
        text: "A value increases from 50 to 80. Percent increase?",
        type: "input",
        correctAnswer: "60",
        explanation: "(80-50)/50 = 30/50 = 60%."
      },
      {
        id: "pch-2",
        text: "A value decreases from 80 to 50. Percent decrease?",
        type: "input",
        correctAnswer: "37.5",
        explanation: "(80-50)/80 = 30/80 = 3/8 = 37.5%."
      },
      {
        id: "pch-3",
        text: "If revenue grows from $200k to $201k, what is the percent change?",
        type: "input",
        correctAnswer: "0.5",
        explanation: "1/200 = 0.005 = 0.5%."
      },
      {
        id: "pch-4",
        text: "If x decreases by 10% to become y, then y is what percent of x?",
        type: "input",
        correctAnswer: "90",
        explanation: "y = 0.9x. So y is 90% of x."
      },
      {
        id: "pch-5",
        text: "If y is 25% larger than x, then x is what percent smaller than y?",
        type: "input",
        correctAnswer: "20",
        explanation: "If x=100, y=125. (125-100)/125 = 25/125 = 20%."
      }
    ]
  },
  {
    id: "successive-changes",
    title: "5. Successive Changes: Chain Your Multipliers",
    icon: "Layers",
    content: `
# Multi-Step Changes
Never add percentages together.
If an item increases by 10% then increases by 10% again, the total increase is **NOT 20%**.

### The Method:
Multiply the multipliers together.
$(1.10) \\times (1.10) = 1.21$ $\\rightarrow$ **21% total increase.**

### Recognition Trap:
$+X\\%$ then $-X\\%$ *always* results in a net decrease.
$1.20 \\times 0.80 = 0.96$ (A 4% loss).
    `,
    examples: [
      {
        question: "An item is discounted 20%, then another 10% off the sale price. Total discount?",
        steps: [
          "Multiplier 1: 0.80.",
          "Multiplier 2: 0.90.",
          "$0.80 \\times 0.90 = 0.72$.",
          "100% - 72% = 28% total discount."
        ],
        answer: "28%"
      },
      {
        question: "A price increases 50% one year, then decreases 50% the next. Final value relation?",
        steps: [
          "$1.50 \\times 0.50 = 0.75$.",
          "You are left with 75% of the original."
        ],
        answer: "25% decrease"
      },
      {
        question: "Population doubles (100% increase) then triples (200% increase). Total percent increase?",
        steps: [
          "Multiplier 1: 2.",
          "Multiplier 2: 3.",
          "$2 \\times 3 = 6$.",
          "Multiplier 6 is a 500% increase."
        ],
        answer: "500% increase"
      }
    ],
    quiz: [
      {
        id: "suc-1",
        text: "What is the net change of +10% followed by -10%?",
        type: "multiple-choice",
        options: ["Same", "+1%", "-1%", "0%"],
        correctAnswer: "-1%",
        explanation: "1.1 * 0.9 = 0.99. A 1% decrease."
      },
      {
        id: "suc-2",
        text: "Two successive 20% increases result in what total increase?",
        type: "input",
        correctAnswer: "44",
        explanation: "1.2 * 1.2 = 1.44 = 44% increase."
      },
      {
        id: "suc-3",
        text: "If y is increased by 100% twice, what is the total multiplier?",
        type: "input",
        correctAnswer: "4",
        explanation: "2 * 2 = 4."
      },
      {
        id: "suc-4",
        text: "Discount 30% then 20%. Final percentage of original price?",
        type: "input",
        correctAnswer: "56",
        explanation: "0.7 * 0.8 = 0.56 = 56%."
      },
      {
        id: "suc-5",
        text: "Increase 10%, Decrease 10%, Increase 10%. Net multiplier?",
        type: "input",
        correctAnswer: "1.089",
        explanation: "1.1 * 0.9 * 1.1 = 1.089."
      }
    ]
  },
  {
    id: "word-problems",
    title: "6. Word Problems: Real-World Scenarios",
    icon: "Shield",
    content: `
# Context is King
On the SAT, percentages appear in taxes, interest, and populations. 

### Key Contextual Skills:
- **Discounts:** $1 - \\text{rate}$.
- **Tax/Tip:** $1 + \\text{rate}$.
- **Profit:** $\\text{Revenue} - \\text{Expenses}$.

Watch for units and timeframes. 'Annual increase' over 3 years means 3 successive changes.
    `,
    examples: [
      {
        question: "A $20 meal has an 8% tax and you leave a 15% tip on the pre-tax bill. Total cost?",
        steps: [
          "Tax = $0.08 \\times 20 = 1.60$.",
          "Tip = $0.15 \\times 20 = 3.00$.",
          "Total = $20 + 1.60 + 3.00 = 24.60$."
        ],
        answer: "$24.60"
      },
      {
        question: "A laptop costs $800. It is on sale for 10% off. Tax is 5% on the sale price. Final cost?",
        steps: [
          "Sale price = $800 \\times 0.90 = 720$.",
          "Final price = $720 \\times 1.05 = 756$."
        ],
        answer: "$756"
      },
      {
        question: "A store buys a shirt for $C and sells it for a 150% markup. Selling price in terms of C?",
        steps: [
          "Markup of 150% means add 150% to original.",
          "Multiplier = 1 + 1.5 = 2.5.",
          "Price = 2.5C"
        ],
        answer: "2.5C"
      }
    ],
    quiz: [
      {
        id: "wp-1",
        text: "Final price of a $50 book with 6% tax?",
        type: "input",
        correctAnswer: "53",
        explanation: "50 * 1.06 = 53."
      },
      {
        id: "wp-2",
        text: "A $1,000 computer is discounted 20%. Tax of 10% is added. Final cost?",
        type: "input",
        correctAnswer: "880",
        explanation: "1000 * 0.8 * 1.1 = 880."
      },
      {
        id: "wp-3",
        text: "If you buy 3 shirts at $20 each and get the 4th free, what is the effective percentage discount on all 4?",
        type: "input",
        correctAnswer: "25",
        explanation: "You get 4 for price of 3. Savings is 1 out of 4. 25%."
      },
      {
        id: "wp-4",
        text: "Population grows 2% per year for 2 years. Initial 10,000. Final?",
        type: "input",
        correctAnswer: "10404",
        explanation: "10000 * 1.02 * 1.02 = 10404."
      },
      {
        id: "wp-5",
        text: "A bank charges 10% interest but you pay a 2% fee on the initial loan. If loan is $1000, total cost for one year?",
        type: "input",
        correctAnswer: "1120",
        explanation: "100 interest + 20 fee + 1000 loan? Wait, total cost *added*? Context matters. Usually means total repayment: 1000*1.1 + 20 = 1120."
      }
    ]
  },
  {
    id: "reverse-percent",
    title: "7. Reverse Percent: Backward Thinking",
    icon: "RotateCcw",
    content: `
# Finding the Original
The most common mistake is subtracting the percentage from the **result**. 
**DON'T DO IT.**

### The Correct Logic:
Use the equation $x \\times \\text{Multiplier} = \\text{Final}$.
Divide the final by the multiplier to find $x$.

### Logic Check:
If a value increased by 10% to reach 110.
$x \\times 1.10 = 110$.
$x = 100$.
(If you subtracted 10% of 110, you'd get 99. WRONG.)
    `,
    examples: [
      {
        question: "After a 20% discount, a dress costs $48. Original price?",
        steps: [
          "Multiplier for 20% discount = 0.80.",
          "$x \\times 0.80 = 48$.",
          "$x = 48 / 0.80 = 60$."
        ],
        answer: "$60"
      },
      {
        question: "A population grew by 5% and is now 441. Start population?",
        steps: [
          "Multiplier = 1.05.",
          "$x \\times 1.05 = 441$.",
          "$x = 441 / 1.05 = 420$."
        ],
        answer: "420"
      },
      {
        question: "A price increased by 100% and is now $50. Start?",
        steps: [
          "100% increase means multiplier = 2.",
          "$2x = 50 \\rightarrow x = 25$."
        ],
        answer: "$25"
      }
    ],
    quiz: [
      {
        id: "rev-1",
        text: "After 10% tax, price is $11. Pre-tax price?",
        type: "input",
        correctAnswer: "10",
        explanation: "11 / 1.1 = 10."
      },
      {
        id: "rev-2",
        text: "You lost 25% of your money and have $75 left. How much did you start with?",
        type: "input",
        correctAnswer: "100",
        explanation: "75 / 0.75 = 100."
      },
      {
        id: "rev-3",
        text: "If x increased by 50% results in 60, find x.",
        type: "input",
        correctAnswer: "40",
        explanation: "60 / 1.5 = 40."
      },
      {
        id: "rev-4",
        text: "A number decreased by 40% is 120. Find the number.",
        type: "input",
        correctAnswer: "200",
        explanation: "120 / 0.6 = 200."
      },
      {
        id: "rev-5",
        text: "After a 25% markup, an item is $100. Cost to the store?",
        type: "input",
        correctAnswer: "80",
        explanation: "100 / 1.25 = 80."
      }
    ]
  },
  {
    id: "percent-vs-abs",
    title: "8. Percent vs. Absolute Change",
    icon: "Activity",
    content: `
# Percent vs. Value
Do not confuse **percentage points** with **percent change**.

If an interest rate goes from 4% to 6%:
- It increased by **2 percentage points**.
- It increased by **50%** relative to the original rate. $(\\frac{6-4}{4} = 0.50)$.

SAT loves to ask for one when you expect the other.
    `,
    examples: [
      {
        question: "Weight went from 10kg to 12kg. Absolute change vs Percent change?",
        steps: [
          "Absolute = 2kg.",
          "Percent = 2/10 = 20%."
        ],
        answer: "Abs: 2, Percent: 20%"
      },
      {
        question: "A 5% tax is increased to 7%. What is the percent increase in the tax rate?",
        steps: [
          "Change = 2 points.",
          "Old = 5.",
          "2/5 = 40% increase."
        ],
        answer: "40% increase"
      },
      {
        question: "Price rises from $100 to $110. How much more percentage points is this compared to a $100 to $105 rise?",
        steps: [
          "Case A: 10% increase.",
          "Case B: 5% increase.",
          "Difference: 5 percentage points."
        ],
        answer: "5%"
      }
    ],
    quiz: [
      {
        id: "pva-1",
        text: "From 100 to 110, what is the absolute change?",
        type: "input",
        correctAnswer: "10",
        explanation: "110 - 100 = 10."
      },
      {
        id: "pva-2",
        text: "If a 10% rate increases by 1 percentage point, what is the new rate?",
        type: "input",
        correctAnswer: "11",
        explanation: "10 + 1 = 11%."
      },
      {
        id: "pva-3",
        text: "If a 10% rate increases by 10%, what is the new rate?",
        type: "input",
        correctAnswer: "11",
        explanation: "10 * 1.1 = 11%."
      },
      {
        id: "pva-4",
        text: "Is 10 to 20 a larger percent change than 100 to 150?",
        type: "multiple-choice",
        options: ["Yes (100% vs 50%)", "No", "Equal"],
        correctAnswer: "Yes (100% vs 50%)",
        explanation: "10 to 20 is doubling (100%). 100 to 150 is 50%."
      },
      {
        id: "pva-5",
        text: "If you have $50 and someone gives you $50, what was the percent increase?",
        type: "input",
        correctAnswer: "100",
        explanation: "50/50 = 100%."
      }
    ]
  },
  {
    id: "mixed-mastery",
    title: "9. Mixed SAT Mastery: High Pressure",
    icon: "Target",
    content: `
# The Final Boss
This combines algebra, ratios, and percentages in multi-step word problems. No more simple drills. Solve fast.

### Strategic Recall:
1. Always define your **multiplier**.
2. Always identify the correct **base (old value)**.
3. Turn **English to Algebra** first.
    `,
    examples: [
      {
        question: "x is 20% of y, and y is 30% of z. What percent of z is x?",
        steps: [
          "$x = 0.2y$.",
          "$y = 0.3z$.",
          "Substitute: $x = 0.2(0.3z) = 0.06z$.",
          "$0.06 = 6\\%$."
        ],
        answer: "6%"
      },
      {
        question: "Price P increases by 10%, then decreases by x%, returning to P. Find x.",
        steps: [
          "$P \\times 1.10 \\times (1 - x) = P$.",
          "$1.10(1 - x) = 1$.",
          "$1 - x = 1 / 1.1 = 10/11$.",
          "$x = 1 - 10/11 = 1/11 \\approx 9.09\\%$."
        ],
        answer: "9.09"
      },
      {
        question: "A company's revenue from A is 40% of total. Revenue from B is 60%. If A grows by 10% and B shrinks by 10%, what is net change?",
        steps: [
          "Let Total = 100. A = 40, B = 60.",
          "New A = $40 \\times 1.1 = 44$.",
          "New B = $60 \\times 0.9 = 54$.",
          "New Total = $44 + 54 = 98$.",
          "Net change = 2% decrease."
        ],
        answer: "-2%"
      }
    ],
    quiz: [
      {
        id: "mm-1",
        text: "If 40% of x is 20% of y, what is x in terms of y?",
        type: "multiple-choice",
        options: ["x = 0.5y", "x = 2y", "x = y", "x = 0.8y"],
        correctAnswer: "x = 0.5y",
        explanation: "0.4x = 0.2y -> x = 0.2/0.4 * y = 0.5y."
      },
      {
        id: "mm-2",
        text: "A population increases by 20% then triples. Total final population relative to start?",
        type: "input",
        correctAnswer: "3.6",
        explanation: "1.2 * 3 = 3.6 times."
      },
      {
        id: "mm-3",
        text: "If y is 20% larger than x, then x is what percent of y?",
        type: "input",
        correctAnswer: "83.33",
        explanation: "1/1.2 = 0.8333."
      },
      {
        id: "mm-4",
        text: "If 10% of a number is subtracted from itself, the result is 18. Find the number.",
        type: "input",
        correctAnswer: "20",
        explanation: "0.9x = 18 -> x = 20."
      },
      {
        id: "mm-5",
        text: "A machine part is usually $100. It is discounted by 25%, and then a 20% member discount is applied. Final cost?",
        type: "input",
        correctAnswer: "60",
        explanation: "100 * 0.75 * 0.8 = 60."
      }
    ]
  }
];
