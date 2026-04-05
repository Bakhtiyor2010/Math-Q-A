import { TrendingUp, Percent, Calculator, Table, Activity, Zap, Move, Target, LineChart, Edit } from 'lucide-react';

export const exponentialLessons = [
  {
    id: "core-concept",
    title: "1. Core Concept: The Anatomy of Exponential Functions",
    icon: "Calculator",
    content: `
# Understanding $y = a \\cdot b^x$

Exponential functions represent growth or decay at a constant **percentage rate**, rather than a constant amount.

### The Breakdown
- **$a$ is the Initial Value**: What is $y$ when $x = 0$? This is often your starting amount, starting population, or original price.
- **$b$ is the Growth/Decay Factor**: This determines how the value changes.
  - **$b > 1$**: Exponential Growth (e.g., $b = 1.05$ is a $5\\%$ increase).
  - **$0 < b < 1$**: Exponential Decay (e.g., $b = 0.92$ is an $8\\%$ decrease).

**Force Yourself to Think:** If $y = 3(0.5)^x$, does $y$ increase or decrease as $x$ gets larger? Why?
    `,
    examples: [
      {
        question: "In the function $P(t) = 450(1.24)^t$, identify the initial value and the growth factor.",
        steps: [
            "Identify the number outside the base: $450$ is the initial value.",
            "Identify the base: $1.24$ is the growth factor."
        ],
        answer: "Initial Value = 450, Growth Factor = 1.24"
      },
      {
        question: "What is the initial value of $f(x) = 2 \\cdot 3^{x+1}$?",
        steps: [
          "To find the initial value, set $x = 0$.",
          "$f(0) = 2 \\cdot 3^{0+1} = 2 \\cdot 3^1 = 6$."
        ],
        answer: "6"
      },
      {
        question: "A function is given by $g(x) = 10(0.85)^x$. Does this represent growth or decay, and by what percentage?",
        steps: [
          "Base is $0.85$. Since $0.85 < 1$, it is decay.",
          "$1 - 0.85 = 0.15$, which is $15\\%$."
        ],
        answer: "Decay, 15%"
      }
    ],
    commonMistakes: [
      "Assuming 'a' is always the initial value without checking for shifts in the exponent.",
      "Confusing the growth factor (b) with the growth rate (r)."
    ],
    quiz: [
      {
        id: "core-1",
        text: "What is the growth factor in $y = 100(1.08)^x$?",
        type: "input",
        correctAnswer: "1.08",
        explanation: "The growth factor is the base 'b', which is $1.08$."
      },
      {
        id: "core-2",
        text: "Which of the following functions represents exponential decay?",
        type: "multiple-choice",
        options: ["$f(x) = 0.5(2)^x$", "$f(x) = 2(0.5)^x$", "$f(x) = -2(3)^x$", "$f(x) = 5(1)^x$"],
        correctAnswer: "$f(x) = 2(0.5)^x$",
        explanation: "Decay occurs when the base $b$ is between 0 and 1."
      },
      {
        id: "core-3",
        text: "What is the initial value of the function $g(x) = 15(0.8)^x$?",
        type: "input",
        correctAnswer: "15",
        explanation: "The initial value 'a' is $15$."
      },
      {
        id: "core-4",
        text: "If a function is defined as $f(x) = a(b)^x$, what must be true for it to be a growth function?",
        type: "multiple-choice",
        options: ["$b < 1$", "$b > 1$", "$b = 1$", "$b < 0$"],
        correctAnswer: "$b > 1$",
        explanation: "Growth requires the multiplier to be greater than 1."
      },
      {
        id: "core-5",
        text: "In the function $P = 500(1.2)^t$, what does 500 represent?",
        type: "multiple-choice",
        options: ["The growth rate", "The final amount", "The initial amount", "The time passed"],
        correctAnswer: "The initial amount",
        explanation: "500 is the 'a' value, which is the initial value when $t=0$."
      }
    ]
  },
  {
    id: "percent-multiplier",
    title: "2. Percent ↔ Multiplier Mastery",
    icon: "Percent",
    content: `
# Converting Rate to Base

SAT word problems usually give you a **rate (r)**, but you need a **base (b)** for your equation.

### The Conversion Drill
- **Increase by $r\\%$**: $b = 1 + r$
- **Decrease by $r\\%$**: $b = 1 - r$

**Memory Check:** Always convert the percentage to a decimal first.
- $12\\%$ increase $\\rightarrow 1 + 0.12 = 1.12$
- $4\\%$ decrease $\\rightarrow 1 - 0.04 = 0.96$
    `,
    examples: [
      {
        question: "A population grows by $7\\%$ annually. What is the base $b$?",
        steps: [
            "Convert $7\\%$ to decimal: $0.07$.",
            "Growth means add to 1: $1 + 0.07$."
        ],
        answer: "1.07"
      },
      {
        question: "A value depreciates by $30\\%$ each year. What is the base $b$?",
        steps: [
          "Convert $30\\%$ to decimal: $0.30$.",
          "Decay means subtract from 1: $1 - 0.30$."
        ],
        answer: "0.7"
      },
      {
        question: "An investment loses $0.5\\%$ of its value every month. What is the monthly multiplier?",
        steps: [
          "Convert $0.5\\%$ to decimal: $0.005$.",
          "Loss means subtract from 1: $1 - 0.005$."
        ],
        answer: "0.995"
      }
    ],
    commonMistakes: [
      "Forgetting to convert percent to decimal (e.g., using 1.7 for 7% growth instead of 1.07).",
      "Confusing 'by' 20% with 'to' 20%."
    ],
    quiz: [
      {
        id: "pm-1",
        text: "If a quantity increases by $4.5\\%$, what is the multiplier?",
        type: "input",
        correctAnswer: "1.045",
        explanation: "$1 + 0.045 = 1.045$."
      },
      {
        id: "pm-2",
        text: "A $25\\%$ decrease corresponds to which multiplier?",
        type: "input",
        correctAnswer: "0.75",
        explanation: "$1 - 0.25 = 0.75$."
      },
      {
        id: "pm-3",
        text: "What is the multiplier for a $0.5\\%$ increase?",
        type: "input",
        correctAnswer: "1.005",
        explanation: "$1 + 0.005 = 1.005$."
      },
      {
        id: "pm-4",
        text: "A multiplier of $0.95$ represents what percent decrease?",
        type: "input",
        correctAnswer: "5",
        explanation: "$1 - 0.95 = 0.05 = 5\\%$."
      },
      {
        id: "pm-5",
        text: "A growth factor of $2.5$ represents what percentage increase?",
        type: "input",
        correctAnswer: "150",
        explanation: "$2.5 - 1 = 1.5 = 150\\%$."
      }
    ]
  },
  {
    id: "writing-models",
    title: "3. Writing Exponential Models",
    icon: "Edit",
    content: `
# Building Equations from Scenarios

To model a real-world situation, identify:
1. **Initial Amount ($a$)**
2. **Standard Rate ($r$)**
3. **Time Interval ($k$)**

### The Advanced Formula
$$y = a \\cdot b^{\\frac{t}{k}}$$
Where $k$ is how long it takes for one full multiplication to happen.

- **Doubling ($b=2$) every 5 hours**: $y = a \\cdot 2^{\\frac{t}{5}}$
- **Tripling ($b=3$) every 10 years**: $y = a \\cdot 3^{\\frac{t}{10}}$
    `,
    examples: [
      {
        question: "A colony of bacteria starts with $500$ cells and doubles every $3$ hours. Write the equation for $B(t)$ cells after $t$ hours.",
        steps: [
            "Initial value $a = 500$.",
            "Doubling means $b = 2$.",
            "Interval is every $3$ hours, so the exponent is $t/3$."
        ],
        answer: "$B(t) = 500(2)^{t/3}$"
      },
      {
        question: "A radioactive isotope has a half-life of 20 years. If you start with 80 grams, write the equation for the amount $A(t)$ remaining.",
        steps: [
          "Initial amount $a = 80$.",
          "Half-life means $b = 0.5$.",
          "Interval is 20 years, so exponent is $t/20$."
        ],
        answer: "$A(t) = 80(0.5)^{t/20}$"
      },
      {
        question: "A value grows by $15\\%$ every 2 years. Initial value is $V_0$. Equation?",
        steps: [
          "Base $b = 1.15$.",
          "Interval is 2 years, so exponent is $t/2$."
        ],
        answer: "$V(t) = V_0(1.15)^{t/2}$"
      }
    ],
    commonMistakes: [
      "Confusing the frequency (k times per unit) with the interval (every k units).",
      "Multiplying the initial value and the base before applying the exponent."
    ],
    quiz: [
      {
        id: "wm-1",
        text: "A population of $1000$ increases by $10\\%$ every $4$ years. Which model is correct?",
        type: "multiple-choice",
        options: ["$P = 1000(1.10)^{4t}$", "$P = 1000(1.10)^{t/4}$", "$P = 1000(1.4)^{t}$", "$P = 1000(0.9)^{t/4}$"],
        correctAnswer: "$P = 1000(1.10)^{t/4}$",
        explanation: "Growth of $10\\%$ means base $1.10$. 'Every 4 years' means the exponent is $t/4$."
      },
      {
        id: "wm-2",
        text: "A substance starts at $100$g and halves every $8$ hours. Formulate the equation.",
        type: "multiple-choice",
        options: ["$A = 100(0.5)^{8t}$", "$A = 100(0.5)^{t/8}$", "$A = 100(2)^{t/8}$", "$A = 100(0.8)^t$"],
        correctAnswer: "$A = 100(0.5)^{t/8}$",
        explanation: "Halving means $b=0.5$. 'Every 8 hours' means $t/8$."
      },
      {
        id: "wm-3",
        text: "A population triples every $5$ days. If it starts at $40$, what is the equation?",
        type: "input",
        correctAnswer: "40(3)^{t/5}",
        explanation: "Start $40$, base $3$, interval $5$."
      },
      {
        id: "wm-4",
        text: "A value decreases by $20\\%$ every month. Which model represents this?",
        type: "multiple-choice",
        options: ["$V = a(0.2)^t$", "$V = a(0.8)^t$", "$V = a(1.2)^t$", "$V = a(0.8)^{t/12}$"],
        correctAnswer: "$V = a(0.8)^t$",
        explanation: "$1 - 0.20 = 0.80$. Happens every $t$ (month)."
      },
      {
        id: "wm-5",
        text: "If a quantity doubles every $d$ days, what is the exponent for time $t$?",
        type: "input",
        correctAnswer: "t/d",
        explanation: "The time interval goes in the denominator."
      }
    ]
  },
  {
    id: "tables-to-equations",
    title: "4. Tables → Equations",
    icon: "Table",
    content: `
# Extracting the Pattern

When given a table, check if $x$ increases by a constant amount (usually 1). If $y$ changes by a common **ratio**, it is exponential.

### Steps
1. Find the initial value ($y$ when $x=0$).
2. Find the common ratio ($b = \\frac{y_2}{y_1}$).
3. Verify for other entries.
    `,
    examples: [
      {
        question: "Find the function for: (1, 10), (2, 50), (3, 250)",
        steps: [
            "Find ratio: $50/10 = 5$ and $250/50 = 5$. So $b = 5$.",
            "Go back to find $x=0$: if $x=1$ is $10$, then $x=0$ is $10/5 = 2$.",
            "Equation: $y = 2(5)^x$."
        ],
        answer: "$y = 2(5)^x$"
      },
      {
        question: "Given x values of 0, 2, 4 and y values of 4, 16, 64. What is the common ratio per single unit of x?",
        steps: [
          "For change in $x=2$, $y$ multiplies by $4$.",
          "$b^2 = 4 \\rightarrow b = 2$.",
          "Equation: $y = 4(2)^x$."
        ],
        answer: "2"
      },
      {
        question: "Find b for: (1, 12), (2, 6), (3, 3).",
        steps: [
          "Check ratios: $6/12 = 0.5$, $3/6 = 0.5$.",
          "Common ratio $b = 0.5$."
        ],
        answer: "0.5"
      }
    ],
    commonMistakes: [
      "Assuming the table is linear without checking for common ratios.",
      "Forgetting to adjust the ratio if the x-values jump by more than 1."
    ],
    quiz: [
      {
        id: "te-1",
        text: "In a table where $x$ goes $0, 1, 2$ and $y$ goes $12, 18, 27$, what is the common ratio ($b$)?",
        type: "input",
        correctAnswer: "1.5",
        explanation: "$18/12 = 1.5$. $27/18 = 1.5$."
      },
      {
        id: "te-2",
        text: "Given $(0, 4)$ and $(1, 12)$ in an exponential table, what is the initial value?",
        type: "input",
        correctAnswer: "4",
        explanation: "Initial value is $y$ when $x=0$."
      },
      {
        id: "te-3",
        text: "Given $(1, 6)$ and $(2, 18)$, what is the function?",
        type: "multiple-choice",
        options: ["$y = 6(3)^x$", "$y = 2(3)^x$", "$y = 3(2)^x$", "$y = 3x + 3$"],
        correctAnswer: "$y = 2(3)^x$",
        explanation: "Ratio $18/6=3$. If $x=1$ is $6$, $x=0$ is $6/3=2$. So $y=2(3)^x$."
      },
      {
        id: "te-4",
        text: "In a table, if $x$ triples and $y$ doubles, is this relationship exponential?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "A constant multiplier for a given change in $x$ indicates an exponential relationship."
      },
      {
        id: "te-5",
        text: "Find $b$ for: $(2, 25)$ and $(3, 125)$. (x increases by 1)",
        type: "input",
        correctAnswer: "5",
        explanation: "$125/25 = 5$."
      }
    ]
  },
  {
    id: "graph-interpretation",
    title: "5. Graph Interpretation",
    icon: "LineChart",
    content: `
# Visualizing Exponential Curves

- **Intercepts**: The $y$-intercept is the value when $x=0$.
- **Asymptote**: Exponential functions of the form $y=ab^x$ have a horizontal asymptote at $y=0$ (the $x$-axis).
- **Steepness**: A larger $b$ means a steeper growth curve.
    `,
    examples: [
      {
        question: "Does the graph of $y = 5(0.8)^x$ have a positive or negative $y$-intercept?",
        steps: [
          "Plug in $x = 0$. $y = 5(1) = 5$.",
          "Interpreting: Positive."
        ],
        answer: "Positive (5)"
      },
      {
        question: "Identify the y-intercept and asymptote of $y = 2(3)^x - 4$.",
        steps: [
          "Intercept: $x=0 \\rightarrow y = 2(1) - 4 = -2$.",
          "Asymptote: The constant term is $-4$, so $y = -4$."
        ],
        answer: "Intercept: -2, Asymptote: y = -4"
      },
      {
        question: "A graph passes through (0, 3) and (1, 12). What is the equation?",
        steps: [
          "Initial value $a = 3$.",
          "Growth factor $b = 12/3 = 4$.",
          "Equation: $y = 3(4)^x$."
        ],
        answer: "$y = 3(4)^x$"
      }
    ],
    commonMistakes: [
      "Confusing the vertical shift ($k$) with the initial value ($a$).",
      "Thinking the horizontal asymptote is always $y=0$."
    ],
    quiz: [
      {
        id: "gi-1",
        text: "Which function will eventually exceed all others: $f(x)=100x+500$ or $g(x)=2(1.01)^x$?",
        type: "multiple-choice",
        options: ["$f(x)$", "$g(x)$", "They are equal", "Not enough info"],
        correctAnswer: "$g(x)$",
        explanation: "Exponential functions with $b > 1$ will always eventually overtake linear functions."
      },
      {
        id: "gi-2",
        text: "What is the $y$-intercept of the graph $y = 3(4)^x + 2$?",
        type: "input",
        correctAnswer: "5",
        explanation: "$3(4)^0 + 2 = 3(1) + 2 = 5$."
      },
      {
        id: "gi-3",
        text: "As $x$ becomes very large and negative, what value does $y = 2^x$ approach?",
        type: "input",
        correctAnswer: "0",
        explanation: "Exponential functions have a horizontal asymptote at $y=0$."
      },
      {
        id: "gi-4",
        text: "If $b$ increases from 2 to 3 in $y = 5(b)^x$, what happens to the graph?",
        type: "multiple-choice",
        options: ["Vertical shift", "Horizontal shift", "Becomes steeper", "Becomes flatter"],
        correctAnswer: "Becomes steeper",
        explanation: "Larger base means faster growth."
      },
      {
        id: "gi-5",
        text: "Where is the horizontal asymptote for $y = 4(0.5)^x - 3$?",
        type: "input",
        correctAnswer: "-3",
        explanation: "The vertical shift moves the asymptote."
      }
    ]
  },
  {
    id: "exponential-vs-linear",
    title: "6. Exponential vs. Linear",
    icon: "Activity",
    content: `
# The Growth Battle

- **Linear**: Adds a fixed amount (constant rate of change).
- **Exponential**: Multiplies by a fixed amount (constant percentage rate of change).

### Table and Scenario Comparison
In a table, check for a constant difference ($y_{2} - y_{1}$) or a constant ratio ($y_{2} / y_{1}$).

| $x$ | Linear ($+2$) | Exponential ($\\cdot 2$) |
|---|---|---|
| 0 | 1 | 1 |
| 1 | 3 | 2 |
| 2 | 5 | 4 |
| 3 | 7 | 8 |

### The "Overtake" Principle
Exponential functions with $b > 1$ will **always** eventually overtake any linear function.

**Scenario Clues:**
- 'Increases by $\\$500$ each year' $\\rightarrow$ **Linear**
- 'Increases by $5\\%$ each year' $\\rightarrow$ **Exponential**
    `,
    examples: [
      {
        question: "Case A: Start at 100, add 10 daily. Case B: Start at 10, double daily. Which is larger after 10 days?",
        steps: [
          "Case A (Linear): $y = 100 + 10(10) = 200$.",
          "Case B (Exponential): $y = 10(2)^{10} = 10(1024) = 10240$.",
          "Exponential Wins."
        ],
        answer: "Case B"
      },
      {
        question: "Is the sequence 5, 10, 20, 40 linear or exponential?",
        steps: [
          "Differences: 5, 10, 20... not constant.",
          "Ratios: $10/5=2, 20/10=2$... constant ratio.",
          "Exponential."
        ],
        answer: "Exponential"
      },
      {
        question: "A phone plan costs $\\$30$ plus $\\$0.10$ per minute. An investment grows by $10\\%$ annually. Which is linear?",
        steps: [
          "Phone plan: $y = 0.10x + 30$. Constant rate of addition. Linear.",
          "Investment: $y = P(1.10)^t$. Constant percentage multiplication. Exponential."
        ],
        answer: "Phone plan"
      }
    ],
    commonMistakes: [
      "Assuming a fast-growing function is exponential without checking for a constant ratio.",
      "Incorrectly modeling 'percent increase' as linear."
    ],
    quiz: [
      {
        id: "evl-1",
        text: "A bank account increases by $\\$10$ every month. What type of function is this?",
        type: "multiple-choice",
        options: ["Linear", "Exponential", "Quadratic", "None"],
        correctAnswer: "Linear",
        explanation: "Adding a fixed amount is linear."
      },
      {
        id: "evl-2",
        text: "The population of a town grows by $3\\%$ every year. Linear or Exponential?",
        type: "multiple-choice",
        options: ["Linear", "Exponential"],
        correctAnswer: "Exponential",
        explanation: "Constant percentage growth is exponential."
      },
      {
        id: "evl-3",
        text: "A taxi charges $\\$5$ plus $\\$2$ per mile. Linear or Exponential?",
        type: "multiple-choice",
        options: ["Linear", "Exponential"],
        correctAnswer: "Linear",
        explanation: "Adds $\\$2$ for every unit (mile)."
      },
      {
        id: "evl-4",
        text: "Which function type has a constant first difference?",
        type: "multiple-choice",
        options: ["Linear", "Exponential", "Quadratic"],
        correctAnswer: "Linear",
        explanation: "Linear functions have a constant slope (difference)."
      },
      {
        id: "evl-5",
        text: "Which function type has a constant ratio between terms?",
        type: "multiple-choice",
        options: ["Linear", "Exponential", "Quadratic"],
        correctAnswer: "Exponential",
        explanation: "Exponential functions multiply by a common ratio."
      }
    ]
  },
  {
    id: "solving-equations",
    title: "7. Solving Exponential Equations",
    icon: "Zap",
    content: `
# Matching the Bases

To solve for $x$, try to make the bases on both sides identical.

### Example: $8^{x+2} = 4^x$
1. Rewrite $8$ as $2^3$ and $4$ as $2^2$.
2. $(2^3)^{x+2} = (2^2)^x$
3. $2^{3x+6} = 2^{2x}$
4. Set exponents equal: $3x + 6 = 2x \\rightarrow x = -6$.
    `,
    examples: [
      {
        question: "Solve for x: $9^x = 27$",
        steps: [
          "Rewrite: $(3^2)^x = 3^3$.",
          "Multiply exponents: $3^{2x} = 3^3$.",
          "Set equal: $2x = 3 \\rightarrow x = 1.5$."
        ],
        answer: "1.5"
      },
      {
        question: "Solve for x: $4^{x-1} = 8^{x+2}$.",
        steps: [
          "Bases: $(2^2)^{x-1} = (2^3)^{x+2}$.",
          "$2^{2x-2} = 2^{3x+6}$.",
          "$2x-2 = 3x+6 \\rightarrow x = -8$."
        ],
        answer: "-8"
      },
      {
        question: "Solve for x: $5^{2x} = 125$.",
        steps: [
          "$5^{2x} = 5^3$.",
          "$2x = 3 \\rightarrow x = 1.5$."
        ],
        answer: "1.5"
      }
    ],
    commonMistakes: [
      "Multiplying the exponent into the wrong part of the base.",
      "Forgetting to distribute the conversion exponent (e.g., $(2^2)^{x-1}$ becoming $2^{2x-1}$ instead of $2^{2x-2}$)."
    ],
    quiz: [
      {
        id: "se-1",
        text: "Solve for $x$: $9^x = 27$",
        type: "input",
        correctAnswer: "1.5",
        explanation: "$(3^2)^x = 3^3 \\rightarrow 2x = 3 \\rightarrow x = 1.5$"
      },
      {
        id: "se-2",
        text: "Solve for $x$: $2^{x+1} = 16$",
        type: "input",
        correctAnswer: "3",
        explanation: "$2^{x+1} = 2^4 \\rightarrow x+1 = 4 \\rightarrow x=3$."
      },
      {
        id: "se-3",
        text: "Solve for $x$: $5^x = 1/25$",
        type: "input",
        correctAnswer: "-2",
        explanation: "$5^x = 5^{-2} \\rightarrow x = -2$."
      },
      {
        id: "se-4",
        text: "Solve for $x$: $8^x = 4^{x+1}$",
        type: "input",
        correctAnswer: "2",
        explanation: "$(2^3)^x = (2^2)^{x+1} \\rightarrow 3x = 2x+2 \\rightarrow x=2$."
      },
      {
        id: "se-5",
        text: "Solve for $x$: $4^x = 32$",
        type: "input",
        correctAnswer: "2.5",
        explanation: "$(2^2)^x = 2^5 \\rightarrow 2x=5 \\rightarrow x=2.5$."
      }
    ]
  },
  {
    id: "transformations",
    title: "8. Function Transformations",
    icon: "Move",
    content: `
# Shifting and Stretching

Given $y = a \\cdot b^{x-h} + k$:
- **$k$**: Vertical shift (moves asymptote to $y=k$).
- **$h$**: Horizontal shift.
- **$a$**: Vertical stretch/compression.

**SAT Tip:** If they ask for a shift 'in context', think about how the initial value or timing changes.
    `,
    examples: [
      {
        question: "What is the horizontal asymptote of $f(x) = 2(3)^x + 5$?",
        steps: [
          "The exponential term $2(3)^x$ approaches $0$.",
          "The constant term $+5$ remains.",
          "Asymptote is $y=5$."
        ],
        answer: "y = 5"
      },
      {
        question: "How does the graph of $y = 3^x$ change to $y = 3^{x-2} + 1$?",
        steps: [
          "$x - 2$ shifts the graph **Right 2**.",
          "$+ 1$ shifts the graph **Up 1**."
        ],
        answer: "Right 2, Up 1"
      },
      {
        question: "What is the new initial value ($y$-intercept) after shifting $y = 10(2)^x$ up 5 units?",
        steps: [
          "Original initial value is $10$.",
          "Shifting up 5 adds to the entire function: $y = 10(2)^x + 5$.",
          "At $x=0$, $y = 10(1) + 5 = 15$."
        ],
        answer: "15"
      }
    ],
    commonMistakes: [
      "Mixing up the direction of horizontal shifts (x-h shifts RIGHT if h is positive).",
      "Thinking the vertical shift doesn't affect the y-intercept."
    ],
    quiz: [
      {
        id: "tr-1",
        text: "What is the horizontal asymptote of $f(x) = 2(3)^x + 5$?",
        type: "input",
        correctAnswer: "5",
        explanation: "The '$+5$' shifts the asymptote from $y=0$ to $y=5$."
      },
      {
        id: "tr-2",
        text: "In the function $g(x) = 2^{x-3}$, which direction is the shift?",
        type: "multiple-choice",
        options: ["Left 3", "Right 3", "Up 3", "Down 3"],
        correctAnswer: "Right 3",
        explanation: "$x - h$ where $h=3$ is a shift to the right."
      },
      {
        id: "tr-3",
        text: "What does the '-' in $f(x) = -2^x$ do to the graph?",
        type: "multiple-choice",
        options: ["Shift Up", "Shift Down", "Reflect over x-axis", "Reflect over y-axis"],
        correctAnswer: "Reflect over x-axis",
        explanation: "A negative coefficient reflects the graph vertically."
      },
      {
        id: "tr-4",
        text: "If $y = 2^x$ is transformed to $y = 3(2^x)$, what is the new $y$-intercept?",
        type: "input",
        correctAnswer: "3",
        explanation: "$3(2)^0 = 3(1) = 3$."
      },
      {
        id: "tr-5",
        text: "Which transformation makes the graph approach $y = -10$?",
        type: "multiple-choice",
        options: ["$y = 2^x + 10$", "$y = 2^{x-10}$", "$y = 2^x - 10$", "$y = -10(2^x)$"],
        correctAnswer: "$y = 2^x - 10$",
        explanation: "Vertical shift moves the asymptote."
      }
    ]
  },
  {
    id: "word-problems-advanced",
    title: "9. Advanced Word Problems",
    icon: "Target",
    content: `
# The Finish Line

Combine all skills to solve multi-step problems involving finance, population, and physics.

### Compound Interest Formula
$$A = P(1 + r)^t$$
(Usually simple compounding on the SAT, but watch for 'compounded $n$ times').
    `,
    examples: [
      {
        question: "A loan of $\\$2000$ grows at $5\\%$ annual interest. How much is owed after $3$ years? (Round to nearest dollar)",
        steps: [
          "Equation: $A = 2000(1.05)^3$.",
          "$1.05^3 = 1.157625$.",
          "$2000 \\times 1.157625 = 2315.25$."
        ],
        answer: "2315"
      },
      {
        question: "A car worth 20,000 depreciates by 15% each year. Find value after 3 years.",
        steps: [
          "Multiplier $b = 0.85$.",
          "Value = $20000(0.85)^3$.",
          "$0.85^3 = 0.614125$.",
          "$20000 \\times 0.614125 = 12282.5$."
        ],
        answer: "12283"
      },
      {
        question: "Bacteria doubles every 2 hours. Start with 10. How many after 8 hours?",
        steps: [
          "Equation: $y = 10(2)^{t/2}$.",
          "$t = 8 \\rightarrow y = 10(2)^{8/2} = 10(2)^4$.",
          "$y = 10(16) = 160$."
        ],
        answer: "160"
      }
    ],
    commonMistakes: [
      "Calculating growth/decay for the wrong time period.",
      "Rounding intermediate steps instead of the final answer."
    ],
    quiz: [
      {
        id: "wp-1",
        text: "A loan of $\\$2000$ grows at $5\\%$ annual interest. How much is owed after $3$ years? (Round to nearest dollar)",
        type: "input",
        correctAnswer: "2315",
        explanation: "$2000(1.05)^3 = 2000(1.157625) = 2315.25$"
      },
      {
        id: "wp-2",
        text: "A $500$g substance has a half-life of $8$ hours. How much is left after $24$ hours?",
        type: "input",
        correctAnswer: "62.5",
        explanation: "$500(0.5)^{24/8} = 500(0.5)^3 = 500/8 = 62.5$."
      },
      {
        id: "wp-3",
        text: "A population of $1$ million grows by $2\\%$ annually. What is it after $10$ years? (Nearest thousand)",
        type: "input",
        correctAnswer: "1219000",
        explanation: "$1,000,000(1.02)^{10} \\approx 1,218,994$."
      },
      {
        id: "wp-4",
        text: "A car worth $\\$20,000$ drops $15\\%$ in value each year. What is it worth after $3$ years? (Nearest dollar)",
        type: "input",
        correctAnswer: "12283",
        explanation: "$20,000(0.85)^3 \\approx 12,282.5$."
      },
      {
        id: "wp-5",
        text: "Bacteria triples every hour. If you start with $10$, how many after $4$ hours?",
        type: "input",
        correctAnswer: "810",
        explanation: "$10(3)^4 = 10(81) = 810$."
      }
    ]
  },
  {
    id: "mixed-review",
    title: "10. Mixed SAT Review & Mastery",
    icon: "Target",
    content: `
# Final Performance Drill

This section combines all previous concepts: interpreting coefficients, comparing linear vs. exponential, solving equations, and word problems.

### Key Recall
- **Add amount** $\rightarrow$ Linear
- **Add percent** $\rightarrow$ Exponential
- **$y = a \\cdot b^{t/k}$** $\rightarrow$ $k$ is the interval.
- **Base Matching** $\rightarrow$ $27^x = (3^3)^x$.
    `,
    examples: [
      {
        question: "A population $P$ triples every 12 years. If $P_0$ is the initial population, what is the population after 36 years?",
        steps: [
          "Equation: $P = P_0(3)^{t/12}$.",
          "At $t=36$: $P = P_0(3)^{36/12} = P_0(3)^3$.",
          "$P = 27P_0$."
        ],
        answer: "27 * P_0"
      },
      {
        question: "Is $f(x) = 2x + 10$ or $g(x) = 2(1.1)^x$ larger as $x \\rightarrow \\infty$?",
        steps: [
          "$f(x)$ is linear, $g(x)$ is exponential with $b > 1$.",
          "Exponential functions eventually exceed linear functions."
        ],
        answer: "g(x)"
      },
      {
        question: "Solve for $x$: $16^{x} = 2$.",
        steps: [
          "$(2^4)^x = 2^1$.",
          "$4x = 1 \\rightarrow x = 0.25$."
        ],
        answer: "0.25"
      }
    ],
    commonMistakes: [
      "Mixing up linear and exponential structures in complex word problems.",
      "Misinterpreting a fractional exponent in context."
    ],
    quiz: [
      {
        id: "mr-1",
        text: "Which model represents a 5% weekly increase in price P?",
        type: "multiple-choice",
        options: ["$P = P_0 + 0.05t$", "$P = P_0(1.05)^t$", "$P = P_0(0.95)^t$", "$P = P_0(1.5)^t$"],
        correctAnswer: "$P = P_0(1.05)^t$",
        explanation: "5% increase means multiplier 1.05."
      },
      {
        id: "mr-2",
        text: "A line passes through (0, 10) and (1, 15). A curve passes through (0, 10) and (1, 15). Find the curves equation if it's exponential.",
        type: "multiple-choice",
        options: ["$y = 10(1.5)^x$", "$y = 5x + 10$", "$y = 10(5)^x$", "$y = 15(1.5)^x$"],
        correctAnswer: "$y = 10(1.5)^x$",
        explanation: "a=10, b=15/10=1.5."
      },
      {
        id: "mr-3",
        text: "Solve: $27^{x-1} = 9^{x+4}$.",
        type: "input",
        correctAnswer: "11",
        explanation: "$3^{3x-3} = 3^{2x+8} \\rightarrow 3x-3 = 2x+8 \\rightarrow x=11$."
      },
      {
        id: "mr-4",
        text: "A radioactive sample halves every 5 years. What percent remains after 15 years?",
        type: "input",
        correctAnswer: "12.5",
        explanation: "$(0.5)^{15/5} = (0.5)^3 = 0.125 = 12.5\\%$."
      },
      {
        id: "mr-5",
        text: "If $f(x) = 2(3)^x+1$, what is the $y$-intercept?",
        type: "input",
        correctAnswer: "3",
        explanation: "$2(3)^0 + 1 = 2(1) + 1 = 3$."
      }
    ]
  }
];
