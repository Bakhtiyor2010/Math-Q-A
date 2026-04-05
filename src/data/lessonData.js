export const lessons = [
  {
    id: "basic-concepts",
    title: "1. Foundations of Percentages",
    icon: "BookOpen",
    content: `
# Mastering English to Math Translation

Percentages are simply a way of expressing a part of a whole, usually represented out of 100. The word "percent" literally means "per hundred."

The easiest way to solve any basic percentage problem is word-for-word translation. You translate the sentence into an equation using these simple building blocks:
- **What** translates to **$x$** (our unknown variable)
- **is** translates to **$=$** (equals)
- **of** translates to **$\\times$** (multiply)
- **percent** translates to **$\\div 100$** (or the decimal equivalent)

For example, "What is 40% of 150?" translates directly to $x = 0.40 \\times 150$, which is $60$. If a question asks "What percent of 120 is 30?", you translate it to $(x/100) \\times 120 = 30$. 

On the SAT, you'll also see multiple percentages combined. If a question asks for "10% of 20% of 1,000," chain the multiplication together: $0.10 \\times 0.20 \\times 1,000 = 20$. Always remember that percentages ARE numbers. If you need 400% of something, you are simply multiplying by 4.
    `,
    examples: [
      {
        question: "What is 40% of 150?",
        steps: [
          "Translate to math: x = (40 / 100) * 150",
          "Simplify: x = 0.4 * 150",
          "Multiply: x = 60"
        ],
        answer: "60"
      },
      {
        question: "30 is what percent of 120?",
        steps: [
          "Translate to math: 30 = (x / 100) * 120",
          "Isolate x: 30 / 120 = x / 100",
          "Simplify: 0.25 = x / 100",
          "Multiply by 100: x = 25"
        ],
        answer: "25%"
      },
      {
        question: "15% of what number is 45?",
        steps: [
          "Translate: 0.15 * x = 45",
          "Solve: x = 45 / 0.15",
          "Calculate: x = 300"
        ],
        answer: "300"
      },
      {
        question: "What is 150% of 20?",
        steps: [
          "Translate: x = 1.50 * 20",
          "Multiply: x = 30"
        ],
        answer: "30"
      },
      {
        question: "If 1/4 of a class is 25%, how many in total if 5 students are 1/4?",
        steps: [
          "25% means 1/4.",
          "Eq: (1/4) * total = 5",
          "total = 20"
        ],
        answer: "20"
      }
    ],
    commonMistakes: [
      "Using the number 20 when you mean 0.20. Percentages ARE decimals!",
      "Confusing 'of' with 'addition'. Of always means Multiply."
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
    title: "2. Percentage Growth & Decay",
    icon: "TrendingUp",
    content: `
# Mastering Percentage Changes

An increase of 10% means you now have 110% of the original, while a decrease of 10% means you keep only 90%.

The secret to solving these fast is the **Multiplier Method**. To calculate any new total, add or subtract your percentage from 1 to find the multiplier.
- **Increase by 20%?** Multiplier $= 1.20$.
- **Decrease by 20%?** Multiplier $= 0.80$.

The formula is always: **Original $\\times$ Multiplier $=$ Final**. 

Be wary of successive changes. If a price goes up by 20% and then down by 20%, it does NOT stay the same. You must multiply the two multipliers ($1.20 \\times 0.80 = 0.96$), resulting in a 4% decrease. 
    `,
    examples: [
      {
        question: "A revenue increased from $40,000 to $50,000. What was the percent increase?",
        steps: [
          "Change = 50k - 40k = 10k",
          "Divide by OLD (40k): 10 / 40 = 0.25",
          "Percent = 25%"
        ],
        answer: "25%"
      },
      {
        question: "A $50 shirt is discounted by 20%. New price?",
        steps: [
          "Multiplier: 0.80",
          "50 * 0.80 = 40"
        ],
        answer: "40"
      },
      {
        question: "A population grows by 10% twice in a row. Total increase?",
        steps: [
          "Multiplier 1: 1.10",
          "Multiplier 2: 1.10",
          "Total: 1.10 * 1.10 = 1.21",
          "Increase = 21%"
        ],
        answer: "21%"
      },
      {
        question: "A price drops from $100 back down to $80. Decrease?",
        steps: [
          "Change = 20",
          "Old = 100",
          "20/100 = 20%"
        ],
        answer: "20%"
      },
      {
        question: "A car worth $10k drops by 15% each year. After 2 years?",
        steps: [
          "Multiplier = 0.85",
          "10,000 * 0.85 * 0.85 = 7,225"
        ],
        answer: "$7,225"
      }
    ],
    commonMistakes: [
      "Dividing by the 'New' value instead of the 'Old' (original) value.",
      "Thinking +20% then -20% is back to normal."
    ],
    quiz: [
      {
        id: "q3-1",
        text: "A vintage car was bought for $15,000 and sold for $21,000. What is the percent increase in its value?",
        type: "multiple-choice",
        options: ["20%", "30%", "40%", "60%"],
        correctAnswer: "40%",
        explanation: "(21,000 - 15,000) / 15,000 = 6,000 / 15,000 = 0.40, which is 40%."
      },
      {
        id: "q3-2",
        text: "If a laptop priced at $800 is discounted by 15%, what is the sale price (in dollars)?",
        type: "input",
        correctAnswer: "680",
        explanation: "Multiplier is 1 - 0.15 = 0.85. 800 * 0.85 = 680."
      },
      {
        id: "q3-3",
        text: "The price of a book dropped from $25 to $20. What was the percent decrease?",
        type: "multiple-choice",
        options: ["5%", "20%", "25%", "80%"],
        correctAnswer: "20%",
        explanation: "(25 - 20) / 25 = 5 / 25 = 0.2, which is 20%."
      },
      {
        id: "q3-4",
        text: "A town population grows by 10% each year. If it starts at 1,000, what is it after 2 years?",
        type: "input",
        correctAnswer: "1210",
        explanation: "1,000 * 1.1 * 1.1 = 1,210."
      },
      {
        id: "q3-5",
        text: "If x increases by 50% and then decreases by 50%, what is the final value relative to x?",
        type: "multiple-choice",
        options: ["Same", "25% decrease", "50% decrease", "100% same"],
        correctAnswer: "25% decrease",
        explanation: "1.5 * 0.5 = 0.75. That is a 25% decrease from 1."
      }
    ]
  },
  {
    id: "reverse-percentages",
    title: "3. Mastery of Reverse Calculations",
    icon: "RotateCcw",
    content: `
# Mastering the Reverse Calculation

When the SAT gives you the **final** result but the **start** is unknown, you are working with a reverse percentage problem. 

The easiest and fastest way to solve these is to stick to your equation: **Original $\\\\times$ Multiplier $=$ Final**. Since the original is unknown, use $x$. For instance, if a jacket costs 84 after an 8% tax, the equation is $x \\times 1.08 = 84$. Divide 84 by 1.08 to find the original price.

Never subtract or add the percentage to the final value directly. If a value increased by 10% to reach 110, simply subtracting 10% from 110 leaves you with 99, not the correct original of 100. By using a multiplier and solving for $x$, you ensure you are always calculating based on the **original** base, which is how the SAT calculates all percentage shifts.
    `,
    examples: [
      {
        question: "After a 15% tip, a bill is $46. What was the start bill?",
        steps: [
          "Tip multiplier = 1.15",
          "Eq: x * 1.15 = 46",
          "Solve: x = 46 / 1.15 = 40"
        ],
        answer: "$40"
      },
      {
        question: "A group is 40% girls. If there are 12 girls, total group?",
        steps: [
          "Eq: 0.40 * x = 12",
          "x = 12 / 0.40 = 30"
        ],
        answer: "30"
      },
      {
        question: "After a 10% raise, salary is $66,000. Start?",
        steps: [
          "Multiplier = 1.10",
          "Eq: x * 1.10 = 66,000",
          "x = 60,000"
        ],
        answer: "$60,000"
      },
      {
        question: "If a pool is 60% full and has 600 gallons. Capacity?",
        steps: [
          "0.60 * x = 600",
          "x = 1,000"
        ],
        answer: "1,000"
      },
      {
        question: "A store is 20% off. Sale price is $80. Start price?",
        steps: [
          "Multiplier = 0.80",
          "x * 0.80 = 80",
          "x = 100"
        ],
        answer: "100"
      }
    ],
    commonMistakes: [
      "Multiplying the FINAL value by the percent.",
      "Using the wrong multiplier."
    ],
    quiz: [
      {
        id: "q5-1",
        text: "After losing 20% of its weight, a block of ice weighs 40 pounds. What was its original weight?",
        type: "multiple-choice",
        options: ["48", "50", "60", "80"],
        correctAnswer: "50",
        explanation: "Multiplier is 0.80. x * 0.80 = 40. x = 40 / 0.80 = 50."
      },
      {
        id: "q5-2",
        text: "A jacket costs $108 after an 8% sales tax. What was the price before tax?",
        type: "input",
        correctAnswer: "100",
        explanation: "x * 1.08 = 108. x = 100."
      },
      {
        id: "q5-3",
        text: "If a 20% discount saves you $10, what was the original price?",
        type: "input",
        correctAnswer: "50",
        explanation: "0.20 * x = 10. x = 50."
      },
      {
        id: "q5-4",
        text: "After a 25% increase, a population is 500. Original?",
        type: "input",
        correctAnswer: "400",
        explanation: "x * 1.25 = 500. x = 400."
      },
      {
        id: "q5-5",
        text: "A car is worth $8,000 after 20% depreciation. Original value?",
        type: "input",
        correctAnswer: "10000",
        explanation: "x * 0.80 = 8,000. x = 10,000."
      }
    ]
  }
];
