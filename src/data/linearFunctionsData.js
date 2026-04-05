export const linearLessons = [
  {
    id: "diagnostic-test",
    title: "0. Diagnostic: Linear Scan",
    icon: "Target",
    content: `
# Initial Diagnostic Test
This is where we see if you have the foundations. No formulas provided. No help. Just you and the coordinates.

### Rules:
1. Complete all 5 questions.
2. Time is ticking.
3. Errors in slope calculation will not be tolerated.
    `,
    examples: [
      {
        question: "Find the slope between (2, 5) and (4, 11).",
        steps: [
          "Formula: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.",
          "Calculation: $\\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$."
        ],
        answer: "3"
      },
      {
        question: "A line passes through (0, 4) and has a slope of -2. Write its equation.",
        steps: [
          "The point (0, 4) is the y-intercept ($b = 4$).",
          "Equation: $y = -2x + 4$."
        ],
        answer: "y = -2x + 4"
      }
    ],
    quiz: [
      {
        id: "diag-1",
        text: "What is the slope of the line $y = 5x - 7$?",
        type: "input",
        correctAnswer: "5",
        explanation: "In $y = mx + b$, $m$ is the slope."
      },
      {
        id: "diag-2",
        text: "Find the y-intercept of the line $3x + 2y = 12$.",
        type: "input",
        correctAnswer: "6",
        explanation: "Set $x=0$, then $2y = 12 \\rightarrow y = 6$."
      },
      {
        id: "diag-3",
        text: "A line passes through (1, 2) and (3, 10). What is the slope?",
        type: "input",
        correctAnswer: "4",
        explanation: "$(10-2)/(3-1) = 8/2 = 4$."
      },
      {
        id: "diag-4",
        text: "A phone plan costs $20 per month plus $0.10 per text. If $y$ is total cost and $x$ is texts, what is the equation?",
        type: "input",
        correctAnswer: "y = 0.1x + 20",
        explanation: "Fixed cost is $20$ (intercept), rate is $0.1$ (slope)."
      },
      {
        id: "diag-5",
        text: "If $f(x) = -3x + 1$, what is $f(-2)$?",
        type: "input",
        correctAnswer: "7",
        explanation: "$-3(-2) + 1 = 6 + 1 = 7$."
      }
    ]
  },
  {
    id: "core-concept",
    title: "1. Core Concept: Constant Change",
    icon: "Activity",
    content: `
# What Makes it Linear?
A linear function is defined by one thing: a **constant rate of change**. No matter where you are on the line, if you move over by 1 unit, you move up (or down) by a fixed amount $m$.

### The Blueprint:
$y = mx + b$

- **$m$ (Slope)**: The rate of change. How much $y$ changes for every 1 unit of $x$.
- **$b$ (y-intercept)**: The starting value. Where the line crosses the y-axis ($x=0$).

### SAT Translation:
When you see words like "rate", "each", "per", or "constant increase", think **SLOPE**.
When you see words like "initial fee", "starting value", or "deposit", think **INTERCEPT**.
    `,
    examples: [
      {
        question: "Is $y = 2x^2 + 1$ linear?",
        steps: [
          "The rate of change is not constant because of the $x^2$.",
          "Linear functions must have $x$ to the first power."
        ],
        answer: "No"
      },
      {
        question: "A candle is 10 inches long and burns at a rate of 0.5 inches per hour. Identify m and b.",
        steps: [
          "Initial length is 10, so $b = 10$.",
          "Burning means length is decreasing, so $m = -0.5$."
        ],
        answer: "m = -0.5, b = 10"
      },
      {
        question: "What is the slope of $x = 5$?",
        steps: [
          "This is a vertical line.",
          "Vertical lines have an undefined slope because the change in $x$ is zero."
        ],
        answer: "Undefined"
      }
    ],
    quiz: [
      {
        id: "cc-1",
        text: "In the equation $y = 10 - 2x$, what is the slope?",
        type: "input",
        correctAnswer: "-2",
        explanation: "The coefficient of $x$ is $-2$."
      },
      {
        id: "cc-2",
        text: "Identify the y-intercept of $y = 4x$.",
        type: "input",
        correctAnswer: "0",
        explanation: "No constant term means it passes through the origin."
      },
      {
        id: "cc-3",
        text: "Which word indicates slope in a word problem?",
        type: "multiple-choice",
        options: ["Initial", "Beginning", "Per", "Total"],
        correctAnswer: "Per",
        explanation: "'Per' signifies a rate."
      },
      {
        id: "cc-4",
        text: "Is a horizontal line's slope positive, negative, or zero?",
        type: "multiple-choice",
        options: ["Positive", "Negative", "Zero", "Undefined"],
        correctAnswer: "Zero",
        explanation: "Change in y is zero."
      },
      {
        id: "cc-5",
        text: "If $y$ increases by 3 every time $x$ increases by 1, what is $m$?",
        type: "input",
        correctAnswer: "3",
        explanation: "Slope is change in y / change in x."
      }
    ]
  },
  {
    id: "slope-calc",
    title: "2. Slope: The Ratio of Change",
    icon: "TrendingUp",
    content: `
# Calculating Steepness
The slope $m$ is the "rise over run".

$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

### Elite Tip: 
Order matters. If you start with $(y_2)$ on top, you MUST start with $(x_2)$ on bottom. Swap them, and you get the wrong sign.

- **Positive Slope**: Slants UP to the right.
- **Negative Slope**: Slants DOWN to the right.
- **Zero Slope**: Horizontal line.
- **Undefined Slope**: Vertical line ($x$ doesn't change).
    `,
    examples: [
      {
        question: "Find the slope between (-1, -4) and (2, 5).",
        steps: [
          "Rise: $5 - (-4) = 9$.",
          "Run: $2 - (-1) = 3$.",
          "Slope: $9 / 3 = 3$."
        ],
        answer: "3"
      },
      {
        question: "If a line's slope is 0, what does its equation look like?",
        steps: [
          "If $m=0$, standard form is $y = 0x + b$.",
          "Simplified: $y = b$."
        ],
        answer: "y = constant"
      },
      {
        question: "A line goes down 3 for every 2 it goes right. Slope?",
        steps: [
          "Down means negative: $-3$.",
          "Right means positive: $2$.",
          "Ratio: $-3/2$."
        ],
        answer: "-1.5"
      }
    ],
    quiz: [
      {
        id: "sc-1",
        text: "Calculate slope between (0,0) and (5,10).",
        type: "input",
        correctAnswer: "2",
        explanation: "10/5 = 2."
      },
      {
        id: "sc-2",
        text: "Calculate slope between (1, 5) and (4, 5).",
        type: "input",
        correctAnswer: "0",
        explanation: "Change in y is 0."
      },
      {
        id: "sc-3",
        text: "Calculate slope between (2, 3) and (2, 10).",
        type: "multiple-choice",
        options: ["0", "7", "0.5", "Undefined"],
        correctAnswer: "Undefined",
        explanation: "Change in x is 0 (division by zero)."
      },
      {
        id: "sc-4",
        text: "If slope is -3/4, does the line rise or fall as x increases?",
        type: "multiple-choice",
        options: ["Rise", "Fall", "Stay flat"],
        correctAnswer: "Fall",
        explanation: "Negative slope means downward trend."
      },
      {
        id: "sc-5",
        text: "Find slope for $(1, -2)$ and $(3, -6)$.",
        type: "input",
        correctAnswer: "-2",
        explanation: "(-6 - -2) / (3 - 1) = -4 / 2 = -2."
      }
    ]
  },
  {
    id: "forms-conversion",
    title: "3. Forms of Equations",
    icon: "RotateCcw",
    content: `
# Three Ways to Write the Same Thing
You must be comfortable moving between these three forms instantly.

1. **Slope-Intercept**: $y = mx + b$
   - Best for graphing and identifying intercepts.
2. **Point-Slope**: $y - y_1 = m(x - x_1)$
   - Best for writing an equation when you have a point and a slope.
3. **Standard Form**: $Ax + By = C$
   - Best for finding x and y intercepts quickly by setting one variable to zero.

### Quick Intercept Shortcut (Standard Form):
- x-intercept = $C/A$ (set $y=0$)
- y-intercept = $C/B$ (set $x=0$)
- Slope = $-A/B$
    `,
    examples: [
      {
        question: "Convert $y - 3 = 2(x + 1)$ to slope-intercept form.",
        steps: [
          "Distribute: $y - 3 = 2x + 2$.",
          "Add 3: $y = 2x + 5$."
        ],
        answer: "y = 2x + 5"
      },
      {
        question: "Find the slope of $4x + 2y = 10$.",
        steps: [
          "Solve for y: $2y = -4x + 10$.",
          "Divide by 2: $y = -2x + 5$.",
          "Slope is -2."
        ],
        answer: "-2"
      },
      {
        question: "Write eq in Standard Form for line with x-int 4 and y-int 2.",
        steps: [
          "Use intercept form: $x/a + y/b = 1 \\rightarrow x/4 + y/2 = 1$.",
          "Multiply by 4: $x + 2y = 4$."
        ],
        answer: "x + 2y = 4"
      }
    ],
    quiz: [
      {
        id: "fc-1",
        text: "Find the y-intercept of $5x - y = 10$.",
        type: "input",
        correctAnswer: "-10",
        explanation: "Set $x=0$, $-y = 10 \\rightarrow y = -10$."
      },
      {
        id: "fc-2",
        text: "What is the slope of $x + y = 5$?",
        type: "input",
        correctAnswer: "-1",
        explanation: "$y = -x + 5$."
      },
      {
        id: "fc-3",
        text: "Convert $y = 3/4x + 2$ to Standard Form (no fractions).",
        type: "input",
        correctAnswer: "3x - 4y = -8",
        explanation: "$4y = 3x + 8 \\rightarrow 3x - 4y = -8$."
      },
      {
        id: "fc-4",
        text: "Point-slope form for a line through (2, 5) with $m=3$?",
        type: "multiple-choice",
        options: ["y-5 = 3(x-2)", "y+5 = 3(x+2)", "y-2 = 3(x-5)", "y = 3x + 5"],
        correctAnswer: "y-5 = 3(x-2)",
        explanation: "Formula use."
      },
      {
        id: "fc-5",
        text: "The x-intercept of $2x + 5y = 20$ is...",
        type: "input",
        correctAnswer: "10",
        explanation: "$2x = 20 \\rightarrow x = 10$."
      }
    ]
  },
  {
    id: "table-data",
    title: "4. Tables to Equations",
    icon: "Table",
    content: `
# Extracting the Pattern
To find an equation from a table, you need two things: **Slope** and **Intercept**.

### Step 1: Find Slope
Pick any two points from the table and use the slope formula. 
Confirm the rate is constant (Linear Check).

### Step 2: Find the y-intercept
- If the table shows $x = 0$, that's your $b$.
- Otherwise, use one point and the slope in $y = mx + b$ to solve for $b$.
    `,
    examples: [
      {
        question: "x: [1, 2, 3], y: [5, 8, 11]. Find eq.",
        steps: [
          "m = (8-5)/(2-1) = 3.",
          "Check: (11-8)/(3-2) = 3. Constant.",
          "Use (1, 5): $5 = 3(1) + b \\rightarrow b = 2$.",
          "Eq: $y = 3x + 2$."
        ],
        answer: "y = 3x + 2"
      },
      {
        question: "A table has (x:0, y:10) and (x:5, y:0). Slope?",
        steps: [
          "Rise: $0 - 10 = -10$.",
          "Run: $5 - 0 = 5$.",
          "Slope: $-10 / 5 = -2$."
        ],
        answer: "-2"
      }
    ],
    quiz: [
      {
        id: "td-1",
        text: "x: [10, 20], y: [50, 70]. Slope?",
        type: "input",
        correctAnswer: "2",
        explanation: "(70-50)/(20-10) = 20/10 = 2."
      },
      {
        id: "td-2",
        text: "If x increases by 2 and y increases by 10, what is the slope?",
        type: "input",
        correctAnswer: "5",
        explanation: "10 / 2 = 5."
      },
      {
        id: "td-3",
        text: "A table shows (2, 5) and (4, 10). Is this linear? (Assume constant rate)",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Any two points can form a line."
      },
      {
        id: "td-4",
        text: "If y decreases by 4 for every 1 increase in x, slope is...",
        type: "input",
        correctAnswer: "-4",
        explanation: "Standard rate."
      },
      {
        id: "td-5",
        text: "Table: (1, 10), (2, 20), (3, 30). What is y when x=0?",
        type: "input",
        correctAnswer: "0",
        explanation: "Rate is 10. $10 - (1 * 10) = 0$."
      }
    ]
  },
  {
    id: "word-problems",
    title: "5. Real-World Modeling",
    icon: "Brain",
    content: `
# Contextual Analysis
SAT word problems often hide linear equations in stories.

### Structure:
**Total Cost = (Rate per unit) $\\times$ (Number of units) + (Starting Cost)**

### Key Tactics:
1. Identify the **independent variable** (usually time $t$ or quantity $q$).
2. Locate the **one-time fee** (y-intercept).
3. Locate the **recurring rate** (slope).
    `,
    examples: [
      {
        question: "A plumber charges a $50 house call fee plus $80 per hour. Equation for cost C after h hours?",
        steps: [
          "Fixed: 50. Rate: 80.",
          "$C = 80h + 50$."
        ],
        answer: "C = 80h + 50"
      },
      {
        question: "In the equation $C = 2x + 10$, what does the '10' represent in a context of shipping?",
        steps: [
          "It's the value when $x=0$.",
          "Likely a base shipping fee before per-pound charges."
        ],
        answer: "Base fee / Flat fee"
      }
    ],
    quiz: [
      {
        id: "wp-1",
        text: "Car rental: $30/day + $0.20/mile. Cost for 1 day and m miles?",
        type: "input",
        correctAnswer: "0.2m + 30",
        explanation: "0.2 is the per-mile rate."
      },
      {
        id: "wp-2",
        text: "A 5-gallon bucket leaks 0.1 gallons per minute. gallons (G) after t minutes?",
        type: "input",
        correctAnswer: "5 - 0.1t",
        explanation: "Starts at 5, decreases by 0.1 each minute."
      },
      {
        id: "wp-3",
        text: "At a fruit stand, apples are $2 each. If you have $20, equation for remaining money?",
        type: "input",
        correctAnswer: "20 - 2x",
        explanation: "Budget minus cost."
      },
      {
        id: "wp-4",
        text: "If $f(x)$ is the height of a plant in cm after $x$ days, what does $f(0) = 15$ mean?",
        type: "multiple-choice",
        options: ["Grows 15cm a day", "Started at 15cm", "Grows 15cm total", "Dies in 15 days"],
        correctAnswer: "Started at 15cm",
        explanation: "Intercept is the initial value."
      },
      {
        id: "wp-5",
        text: "A gym charges $x per month. Total cost for 12 months is $480. What is x?",
        type: "input",
        correctAnswer: "40",
        explanation: "$12x = 480 \\rightarrow x = 40$. No fixed fee mentioned."
      }
    ]
  },
  {
    id: "function-notation",
    title: "6. Function Notation",
    icon: "Calculator",
    content: `
# Understanding f(x)
$f(x)$ is just another name for $y$. 
If $y = 3x + 1$, we can write $f(x) = 3x + 1$.

### Why use it?
It allows us to specify inputs easily:
- $f(2)$ means "The value of $y$ when $x$ is 2."
- $f(x) = 10$ means "Find the value of $x$ that makes $y$ equal to 10."

### SAT Twist:
They might give you $f(x)$ and $g(x)$ and ask you to compare them, or find $f(g(2))$.
    `,
    examples: [
      {
        question: "If $f(x) = 10x - 5$, find $f(3)$.",
        steps: [
          "Plug in 3 for $x$.",
          "$10(3) - 5 = 25$."
        ],
        answer: "25"
      },
      {
        question: "If $g(x) = 2x + 1$, for what $x$ is $g(x) = 11$?",
        steps: [
          "Set equation equal to 11.",
          "$2x + 1 = 11 \\rightarrow 2x = 10 \\rightarrow x = 5$."
        ],
        answer: "5"
      }
    ],
    quiz: [
      {
        id: "fn-1",
        text: "If $f(x) = 5 - x$, calculate $f(10)$.",
        type: "input",
        correctAnswer: "-5",
        explanation: "5 - 10 = -5."
      },
      {
        id: "fn-2",
        text: "If $h(x) = 2x$, find $h(h(3))$.",
        type: "input",
        correctAnswer: "12",
        explanation: "$h(3) = 6$. $h(6) = 12$."
      },
      {
        id: "fn-3",
        text: "If $f(2) = 10$ and $f(x)$ is linear with $m=3$, what is $f(0)$?",
        type: "input",
        correctAnswer: "4",
        explanation: "$10 = 3(2) + b \\rightarrow b = 4$."
      },
      {
        id: "fn-4",
        text: "Find x if $f(x) = 3x$ and $f(x) = 21$.",
        type: "input",
        correctAnswer: "7",
        explanation: "$3x = 21 \\rightarrow x = 7$."
      },
      {
        id: "fn-5",
        text: "True or False: $f(x)$ always represents a straight line.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Function notation can be used for any function type."
      }
    ]
  },
  {
    id: "mixed-mastery",
    title: "7. Mixed SAT Mastery",
    icon: "Zap",
    content: `
# Elite Performance Phase
Time to put it all together. You'll be switching between forms, interpreting contexts, and calculating rates under pressure.

### The Strategy:
- Look for the **rate**.
- Look for the **start**.
- Verify your **signs**.
    `,
    examples: [
      {
        question: "A line passes through (1, 5) and is parallel to $y = 3x - 10$. Find eq.",
        steps: [
          "Parallel means same slope ($m=3$).",
          "Eq: $y - 5 = 3(x - 1) \\rightarrow y = 3x + 2$."
        ],
        answer: "y = 3x + 2"
      },
      {
        question: "Line L has x-int 5 and y-int 10. Perpendicular slope?",
        steps: [
          "Slope: $(10-0)/(0-5) = -2$.",
          "Perpendicular means negative reciprocal: $+0.5$."
        ],
        answer: "0.5"
      },
      {
        question: "For a linear function, $f(1) = 2$ and $f(3) = 10$. What is $f(0)$?",
        steps: [
          "m = (10-2)/(3-1) = 4.",
          "Backtracking: $2 - (1 * 4) = -2$."
        ],
        answer: "-2"
      }
    ],
    quiz: [
      {
        id: "mm-1",
        text: "Find the slope perpendicular to $y = -1/2x + 5$.",
        type: "input",
        correctAnswer: "2",
        explanation: "Negative reciprocal."
      },
      {
        id: "mm-2",
        text: "A line contains (2, 8) and (2, 20). Slope?",
        type: "multiple-choice",
        options: ["12", "0", "6", "Undefined"],
        correctAnswer: "Undefined",
        explanation: "Vertical line."
      },
      {
        id: "mm-3",
        text: "The cost to rent a tent is $T = 15h + 10$. How much for 3 hours?",
        type: "input",
        correctAnswer: "55",
        explanation: "$15(3) + 10 = 55$."
      },
      {
        id: "mm-4",
        text: "Is $y = 2x + 1$ parallel to $4x - 2y = 10$?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Rearrange: $2y = 4x - 10 \\rightarrow y = 2x - 5$. Same slope."
      },
      {
        id: "mm-5",
        text: "At what point do $y = 2x$ and $y = x + 5$ intersect?",
        type: "multiple-choice",
        options: ["(5, 5)", "(5, 10)", "(0, 5)", "(10, 5)"],
        correctAnswer: "(5, 10)",
        explanation: "$2x = x + 5 \\rightarrow x = 5$. Then $y = 10$."
      }
    ]
  }
];
