export const lessons = [
  {
    id: "basic-concepts",
    title: "1. Basic Concepts",
    icon: "BookOpen",
    content: `
# What is a Percentage?

The word **percent** literally means "per hundred" (from the Latin *per centum*). When we say 50%, we mean 50 out of 100. 

A percentage is just a fraction with a denominator of 100, or a decimal.

### Conversions You Must Know
To master SAT math, you must fluently jump between fractions, decimals, and percents:
- **Percent to Decimal**: Divide by 100 (move the decimal point 2 places left). *Example: 45% = 0.45*
- **Decimal to Percent**: Multiply by 100 (move the decimal point 2 places right). *Example: 0.08 = 8%*
- **Fraction to Percent**: Convert the fraction to a decimal, then multiply by 100. *Example: 3/4 = 0.75 = 75%*

### Direct Translation
A very common technique for basic SAT percent problems is translating English words into Math symbols:
- **"What"** translates to a variable (e.g., $x$)
- **"is"** translates to an equals sign ($=$)
- **"%"** or **"percent"** translates to dividing by 100
- **"of"** translates to multiplication ($\\times$)

**Example Translator:**
"What is 20% of 80?" 
Translates to: $x = \\frac{20}{100} \\times 80$
    `,
    examples: [
      {
        question: "What is 40% of 150?",
        steps: [
          "Translate to math: x = (40 / 100) * 150",
          "Simplify the fraction or decimal: x = 0.4 * 150",
          "Multiply: x = 60"
        ],
        answer: "60"
      },
      {
        question: "30 is what percent of 120?",
        steps: [
          "Translate to math: 30 = (x / 100) * 120",
          "Isolate x: 30 / 120 = x / 100",
          "Simplify the left side: 0.25 = x / 100",
          "Multiply by 100: x = 25"
        ],
        answer: "25%"
      },
      {
        question: "15% of what number is 45?",
        steps: [
          "Translate to math: 0.15 * x = 45",
          "Divide by 0.15: x = 45 / 0.15",
          "Calculate: x = 300"
        ],
        answer: "300"
      }
    ],
    commonMistakes: [
      "Forgetting to convert the percentage to a decimal before multiplying (e.g., using 20 instead of 0.20 when taking 20% of a number).",
      "Misinterpreting the word 'of'. Remember that 'of' always indicates multiplication."
    ],
    quiz: [
      {
        id: "q1",
        text: "What is 75% of 200?",
        type: "multiple-choice",
        options: ["125", "150", "175", "100"],
        correctAnswer: "150",
        explanation: "75% is 0.75. 0.75 * 200 = 150."
      },
      {
        id: "q2",
        text: "40 is 80% of what number?",
        type: "input",
        correctAnswer: "50",
        explanation: "40 = 0.80 * x. Divide 40 by 0.80 to get 50."
      },
      {
        id: "q3",
        text: "12 is 30% of what number?",
        type: "input",
        correctAnswer: "40",
        explanation: "12 = 0.30 * x. Divide 12 by 0.30 to get 40."
      },
      {
        id: "q4",
        text: "What is 150% of 40?",
        type: "multiple-choice",
        options: ["20", "40", "60", "80"],
        correctAnswer: "60",
        explanation: "150% is 1.5. 1.5 * 40 = 60."
      },
      {
        id: "q5",
        text: "In a group of 80 people, 48 are students. What percent of the group are students?",
        type: "input",
        correctAnswer: "60",
        explanation: "48 / 80 = 0.60. 0.60 * 100 = 60%. (Input the number 60)."
      }
    ]
  },
  {
    id: "percent-change",
    title: "2. Percent Change",
    icon: "TrendingUp",
    content: `
# Percent Increase and Decrease

One of the most frequently tested topics on the SAT. 

### The Multiplier Method
When a value increases or decreases by a percent, you can find the new value in ONE step by using a **multiplier**.

**Percent Increase Formula:**
New Value = Original Value $\\times$ $(1 + \\frac{\\text{Percent}}{100})$
*Example: A \\$50 shirt is marked up by 20%.*
New Price = \\$50 $\\times$ (1 + 0.20) = \\$50 $\\times$ 1.20 = \\$60.

**Percent Decrease Formula:**
New Value = Original Value $\\times$ $(1 - \\frac{\\text{Percent}}{100})$
*Example: A \\$50 shirt is discounted by 20%.*
New Price = \\$50 $\\times$ (1 - 0.20) = \\$50 $\\times$ 0.80 = \\$40.

> **Crucial SAT Tip:** An increase of 30% is a multiplier of 1.30. A decrease of 30% is a multiplier of 0.70. Memorize this translation!

> **The Golden Formula:**
> $$\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100$$
> (Or think of it as $\\frac{\\text{Difference}}{\\text{Original}} \\times 100$)
    `,
    examples: [
      {
        question: "A company's revenue increased from $40,000 to $50,000. What was the percent increase?",
        steps: [
          "Use the formula: (New - Old) / Old * 100",
          "Difference = 50,000 - 40,000 = 10,000",
          "Divide by Old (40,000): 10,000 / 40,000 = 0.25",
          "Multiply by 100: 25%"
        ],
        answer: "25%"
      },
      {
        question: "The population of a town was 12,000. It decreased by 15%. What is the new population?",
        steps: [
          "Find the multiplier for a 15% decrease: 1 - 0.15 = 0.85",
          "Multiply the original value by the multiplier: 12,000 * 0.85",
          "Calculate: 10,200"
        ],
        answer: "10,200"
      },
      {
        question: "A stock price dropped from $80 to $64. What is the percent decrease?",
        steps: [
          "Use the formula: |New - Old| / Old",
          "Difference = |64 - 80| = 16",
          "Divide by Old (80): 16 / 80 = 0.20",
          "Multiply by 100: 20%"
        ],
        answer: "20%"
      }
    ],
    commonMistakes: [
      "Using the 'New' value in the denominator instead of the 'Old' (Original) value when finding percent change.",
      "Thinking a 20% increase followed by a 20% decrease returns you to the original amount. (It doesn't! 100 -> 120 -> 96)"
    ],
    quiz: [
      {
        id: "q3",
        text: "A vintage car was bought for $15,000 and sold for $21,000. What is the percent increase in its value?",
        type: "multiple-choice",
        options: ["20%", "30%", "40%", "60%"],
        correctAnswer: "40%",
        explanation: "(21,000 - 15,000) / 15,000 = 6,000 / 15,000 = 0.40, which is 40%."
      },
      {
        id: "q4",
        text: "If a laptop priced at $800 is discounted by 15%, what is the sale price (in dollars)?",
        type: "input",
        correctAnswer: "680",
        explanation: "Multiplier is 1 - 0.15 = 0.85. 800 * 0.85 = 680."
      },
      {
        id: "q5",
        text: "The price of a book dropped from $25 to $20. What was the percent decrease?",
        type: "multiple-choice",
        options: ["5%", "20%", "25%", "80%"],
        correctAnswer: "20%",
        explanation: "(25 - 20) / 25 = 5 / 25 = 0.2, which is 20%."
      },
      {
        id: "q6",
        text: "A population increases from 2,000 to 2,500. What is the percent increase?",
        type: "input",
        correctAnswer: "25",
        explanation: "(2,500 - 2,000) / 2,000 = 500 / 2,000 = 0.25, which is 25%."
      },
      {
        id: "q7",
        text: "A bank account starts with $400 and earns 5% interest. What is the new balance?",
        type: "input",
        correctAnswer: "420",
        explanation: "Multiplier is 1.05. 400 * 1.05 = 420."
      }
    ]
  },
  {
    id: "reverse-percentages",
    title: "3. Reverse Percentages",
    icon: "RotateCcw",
    content: `
# Finding the Original Value

This is where the multiplier method truly shines and where many students struggle on the SAT. 

Often, a problem will give you the **final** value *after* a percent increase or decrease has occurred, and ask you to find the **original** value.

**Do NOT just apply the percent to the final value.** 
For example, if a shirt is \\$80 after a 20% discount, the original price is NOT \\$80 + 20% of \\$80. 

> **The Golden Equation:**
> $$\text{Original} \times \text{Multiplier} = \text{Final}$$

If we don't know the Original, we make it $x$:
$$x \times \text{Multiplier} = \text{Final}$$
$$x = \frac{\text{Final}}{\text{Multiplier}}$$

**Example:**
A pair of shoes costs \\$63 after a 30% discount. What was the original price?
1. The multiplier for a 30% discount is $1 - 0.30 = 0.70$.
2. Set up the equation: $x \\times 0.70 = 63$
3. Solve for $x$: $x = 63 / 0.70 = 90$

The original price was \\$90.
    `,
    examples: [
      {
        question: "After a 15% tip is added, a restaurant bill comes to \\$46. What was the bill before the tip?",
        steps: [
          "The multiplier for a 15% increase (tip) is 1.15",
          "Set up the equation: x * 1.15 = 46",
          "Divide by 1.15: x = 46 / 1.15",
          "Calculate: x = 40"
        ],
        answer: "\\$40"
      },
      {
        question: "A store is having a clearance sale where everything is 40% off. If a jacket costs \\$54 on sale, what was its original price?",
        steps: [
          "The multiplier for a 40% discount is 1 - 0.40 = 0.60",
          "Set up the equation: x * 0.60 = 54",
          "Divide by 0.60: x = 54 / 0.60",
          "Calculate: x = 90"
        ],
        answer: "\\$90"
      },
      {
        question: "An employee's salary after a 5% raise is \\$63,000. What was their salary before the raise?",
        steps: [
          "The multiplier for a 5% raise is 1.05",
          "Set up equation: x * 1.05 = 63,000",
          "Divide: x = 63,000 / 1.05",
          "Calculate: x = 60,000"
        ],
        answer: "\\$60,000"
      }
    ],
    commonMistakes: [
      "Adding the percentage to the new value instead of dividing by the multiplier. (e.g., answering $63 + 30% of $63 for the shoes).",
      "Using the wrong multiplier for single digit percentages (e.g., using 1.5 for a 5% raise instead of 1.05)."
    ],
    quiz: [
      {
        id: "q5",
        text: "After losing 20% of its weight, a block of ice weighs 40 pounds. What was its original weight?",
        type: "multiple-choice",
        options: ["48", "50", "60", "80"],
        correctAnswer: "50",
        explanation: "Multiplier is 0.80. x * 0.80 = 40. x = 40 / 0.80 = 50."
      },
      {
        id: "q6",
        text: "A gaming console costs $324 including an 8% sales tax. What is the price before tax (in dollars)?",
        type: "input",
        correctAnswer: "300",
        explanation: "Multiplier is 1.08. x * 1.08 = 324. x = 324 / 1.08 = 300."
      },
      {
        id: "q7",
        text: "A shirt is $42 after a 30% discount. What was the original price?",
        type: "input",
        correctAnswer: "60",
        explanation: "Multiplier is 0.70. x * 0.70 = 42. x = 42 / 0.70 = 60."
      },
      {
        id: "q8",
        text: "A number increases by 25% to reach 100. What was the number?",
        type: "multiple-choice",
        options: ["75", "80", "125", "25"],
        correctAnswer: "80",
        explanation: "Multiplier is 1.25. x * 1.25 = 100. x = 100 / 1.25 = 80."
      },
      {
        id: "q9",
        text: "A pool is 60% full after 300 gallons were added to an empty pool. What is the total capacity?",
        type: "input",
        correctAnswer: "500",
        explanation: "0.60 * x = 300. x = 300 / 0.60 = 500."
      }
    ]
  },
  {
    id: "compound-percentages",
    title: "4. Compound Percentages",
    icon: "Layers",
    content: `
# Compound / Successive Changes

What happens when multiple percent changes occur in a row? 

**The most common SAT trap:** Students simply add or subtract the percentages. 
*If a price goes up by 20% then down by 20%, you do not end up back at the starting price!*

### The Chained Multiplier Method
When combining multiple percentage expansions, simply chain the multipliers together.

**Final Value = Original Value $\\times$ Multiplier$_1$ $\\times$ Multiplier$_2$ $\\times$ ...**

**Example:**
A $100 stock increases by 20%, then decreases by 20%.
- Increase 20% multiplier: $1.20$
- Decrease 20% multiplier: $0.80$
- Calculation: $100 \\times 1.20 \\times 0.80 = 100 \\times 0.96 = 96$

The final price is $96, which is an overall 4% decrease!

### Exponential Growth/Decay
If a value increases or decreases by the *same* percent $t$ times, you can use an exponent:
**Final = Original $\times$ $(\text{Multiplier})^t$**

*Example: A population of 500 bacteria increases by 10% every hour. How many bacteria after 4 hours?*
$500 \times (1.10)^4$
    `,
    examples: [
      {
        question: "A store marks up a \$50 item by 40%, and then puts it on sale for 25% off. What is the final price?",
        steps: [
          "Markup multiplier: 1.40",
          "Discount multiplier: 0.75",
          "Chain them: 50 * 1.40 * 0.75",
          "50 * 1.40 = 70",
          "70 * 0.75 = 52.50"
        ],
        answer: "\$52.50"
      },
      {
        question: "A car depreciates by 15% each year. If it currently costs \$20,000, what will be its value in 3 years? (Round to nearest dollar)",
        steps: [
          "Depreciation multiplier: 1 - 0.15 = 0.85",
          "It happens 3 times, so use an exponent: 20,000 * (0.85)^3",
          "0.85^3 = ~0.614125",
          "20,000 * 0.614125 = 12,282.50"
        ],
        answer: "\$12,283"
      },
      {
        question: "Variables x and y are positive. If x is increased by 50% and y is decreased by 20%, by what percent does the product x*y increase?",
        steps: [
          "New x = 1.50x",
          "New y = 0.80y",
          "New product = (1.50x) * (0.80y) = 1.20(xy)",
          "Multiplier of 1.20 means a 20% increase."
        ],
        answer: "20%"
      }
    ],
    commonMistakes: [
      "Adding or subtracting percents directly (e.g., thinking +30% then -20% is a net +10%).",
      "Applying the second multiplier to the original value instead of the updated value."
    ],
    quiz: [
      {
        id: "q7",
        text: "A town's population grows by 10% in 2020, and then by 20% in 2021. What is the total percent increase from the original?",
        type: "multiple-choice",
        options: ["30%", "31%", "32%", "132%"],
        correctAnswer: "32%",
        explanation: "1.10 * 1.20 = 1.32. A multiplier of 1.32 is a 32% increase."
      },
      {
        id: "q8",
        text: "If a rectangle's length is increased by 25% and its width is decreased by 20%, what is the percent change in its area?",
        type: "multiple-choice",
        options: ["+5%", "0% (No change)", "-5%", "+10%"],
        correctAnswer: "0% (No change)",
        explanation: "1.25 * 0.80 = 1.00. The area multiplier is 1, meaning it stays exactly the same (0% change)!"
      },
      {
        id: "q9",
        text: "A price increases by 10%, then decreases by 10%. What is the net percent change?",
        type: "multiple-choice",
        options: ["0%", "1% increase", "1% decrease", "2% decrease"],
        correctAnswer: "1% decrease",
        explanation: "1.10 * 0.90 = 0.99. A 0.99 multiplier is a 1% decrease."
      },
      {
        id: "q10",
        text: "An account grows by 40% in year 1, then drops by 50% in year 2. What is the final value relative to the start?",
        type: "multiple-choice",
        options: ["-10%", "-30%", "+10%", "-40%"],
        correctAnswer: "-30%",
        explanation: "1.40 * 0.50 = 0.70. A multiplier of 0.70 means a 30% decrease (-30%)."
      },
      {
        id: "q11",
        text: "A value increases by 20% twice in a row. What is the total percent increase?",
        type: "input",
        correctAnswer: "44",
        explanation: "1.20 * 1.20 = 1.44. This is a 44% increase."
      }
    ]
  }
];
