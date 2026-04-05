export const equationLessons = [
  {
    id: "diagnostic-test",
    title: "0. Diagnostic: Equality Scan",
    icon: "Target",
    content: `
# Initial Diagnostic Test
No steps. No tips. No mercy. Show me if you can balance an equation or if you'll drown in basic algebra.

### Rules:
1. Solve all 5. 
2. Speed is required.
3. One sign error means total failure.
    `,
    examples: [
      {
        question: "Solve for $x$: $3x - 10 = 20$.",
        steps: [
          "Add 10: $3x = 30$.",
          "Divide by 3: $x = 10$."
        ],
        answer: "10"
      },
      {
        question: "Solve $|2x - 5| = 11$.",
        steps: [
          "Case 1: $2x - 5 = 11 \\rightarrow 2x = 16 \\rightarrow x = 8$.",
          "Case 2: $2x - 5 = -11 \\rightarrow 2x = -6 \\rightarrow x = -3$."
        ],
        answer: "-3, 8"
      }
    ],
    quiz: [
      {
        id: "diag-1",
        text: "Solve: $4x + 12 = 0$.",
        type: "input",
        correctAnswer: "-3",
        explanation: "$4x = -12 \\rightarrow x = -3$."
      },
      {
        id: "diag-2",
        text: "Solve: $2(x - 3) = 14$.",
        type: "input",
        correctAnswer: "10",
        explanation: "$x - 3 = 7 \\rightarrow x = 10$."
      },
      {
        id: "diag-3",
        text: "Solve: $x/3 + 5 = 2$.",
        type: "input",
        correctAnswer: "-9",
        explanation: "$x/3 = -3 \\rightarrow x = -9$."
      },
      {
        id: "diag-4",
        text: "A number $n$ increased by 5 is equal to triple the same number. Equation?",
        type: "input",
        correctAnswer: "n+5 = 3n",
        explanation: "Standard translation."
      },
      {
        id: "diag-5",
        text: "Solve: $3x + 10 = 3x + 12$.",
        type: "multiple-choice",
        options: ["x=2", "x=0", "No solution", "Infinitely many"],
        correctAnswer: "No solution",
        explanation: "Subtracting 3x gives $10 = 12$, which is impossible."
      }
    ]
  },
  {
    id: "core-concept",
    title: "1. Core Concept: Balance",
    icon: "Activity",
    content: `
# What is an Equation?
An equation is a statement of **perfect balance**. Whatever you do to one side, you MUST do to the other.

### The Objective:
Isolate the variable. Get $x$ alone.

### Standard Build:
$ax + b = c$

- **$b$**: The constant that needs moving first.
- **$a$**: The coefficient that needs dividing last.

**Think ahead:** Look at the equation for 2 seconds before writing. See the path to isolation.
    `,
    examples: [
      {
        question: "Is $2x + 5$ an equation?",
        steps: [
          "Equations MUST have an equals sign.",
          "This is just an expression."
        ],
        answer: "No"
      },
      {
        question: "Solve $10 = x - 5$.",
        steps: [
          "Add 5 to BOTH sides.",
          "$15 = x$."
        ],
        answer: "15"
      },
      {
        question: "Solve $x/2 = 4$.",
        steps: [
          "Multiply BOTH sides by 2.",
          "$x = 8$."
        ],
        answer: "8"
      }
    ],
    quiz: [
      {
        id: "cc-1",
        text: "In $3x + 5 = 20$, which term should you move first?",
        type: "multiple-choice",
        options: ["3x", "5", "x", "20"],
        correctAnswer: "5",
        explanation: "Always deal with addition/subtraction before multiplication/division."
      },
      {
        id: "cc-2",
        text: "Solve: $x + 10 = 2$.",
        type: "input",
        correctAnswer: "-8",
        explanation: "$2 - 10 = -8$."
      },
      {
        id: "cc-3",
        text: "If $2x = 10$, what is $x$?",
        type: "input",
        correctAnswer: "5",
        explanation: "Divide by 2."
      },
      {
        id: "cc-4",
        text: "True or False: $x = 5$ is an equation.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "It states an equality between a variable and a number."
      },
      {
        id: "cc-5",
        text: "Solve: $15 = 3x$.",
        type: "input",
        correctAnswer: "5",
        explanation: "Divide by 3."
      }
    ]
  },
  {
    id: "multi-step",
    title: "2. Multi-Step: Distribute & Combine",
    icon: "RotateCcw",
    content: `
# Cleaning Up the Mess
Before you isolate, you must simplify. 

### The Protocol:
1. **Distribute**: Get rid of parentheses.
2. **Combine Like Terms**: Merge all $x$'s and all numbers on their respective sides.
3. **Move Variables to One Side**: If $x$ is on both sides, subtract the smaller one.

### Sign Shield:
Distributing a negative is where most students fail. 
$-2(x - 3)$ is $-2x + 6$, NOT $-2x - 6$.
    `,
    examples: [
      {
        question: "Solve $2(x - 4) + 10 = 20$.",
        steps: [
          "Distribute: $2x - 8 + 10 = 20$.",
          "Combine: $2x + 2 = 20$.",
          "Isolate: $2x = 18 \\rightarrow x = 9$."
        ],
        answer: "9"
      },
      {
        question: "Solve $5x + 3 = 2x + 12$.",
        steps: [
          "Move variables: $3x + 3 = 12$.",
          "Subtract 3: $3x = 9$.",
          "Divide: $x = 3$."
        ],
        answer: "x = 3"
      },
      {
        question: "Solve $-(x - 5) = 10$.",
        steps: [
          "Distribute -1: $-x + 5 = 10$.",
          "Subtract 5: $-x = 5$.",
          "Multiply -1: $x = -5$."
        ],
        answer: "x = -5"
      }
    ],
    quiz: [
      {
        id: "ms-1",
        text: "Solve: $3(x + 1) = 15$.",
        type: "input",
        correctAnswer: "4",
        explanation: "$x+1 = 5 \\rightarrow x=4$."
      },
      {
        id: "ms-2",
        text: "Solve: $4x + 2x - 10 = 20$.",
        type: "input",
        correctAnswer: "5",
        explanation: "$6x = 30 \\rightarrow x = 5$."
      },
      {
        id: "ms-3",
        text: "Solve: $2x = x + 10$.",
        type: "input",
        correctAnswer: "10",
        explanation: "Subtract x."
      },
      {
        id: "ms-4",
        text: "Solve: $10 - 2(x + 1) = 4$.",
        type: "input",
        correctAnswer: "2",
        explanation: "$10 - 2x - 2 = 4 \\rightarrow 8 - 2x = 4 \\rightarrow -2x = -4 \\rightarrow x = 2$."
      },
      {
        id: "ms-5",
        text: "Solve: $5x = 2x + 15$.",
        type: "input",
        correctAnswer: "5",
        explanation: "$3x = 15 \\rightarrow x = 5$."
      }
    ]
  },
  {
    id: "special-cases",
    title: "3. Special Cases: Traps",
    icon: "Shield",
    content: `
# No Solution vs. Infinite Solutions
Sometimes the variable disappears. Don't panic. Look at what's left.

### 1. The Contradiction (No Solution)
If you get something impossible like $5 = 10$.
This means no value of $x$ will ever work.

### 2. The Identity (Infinite Solutions)
If you get something always true like $x + 5 = x + 5$ or $0 = 0$.
This means every single number is a solution.

**SAT Trick:** If they say an equation has "no solution," it means the coefficients of $x$ are the same but the constants are different.
    `,
    examples: [
      {
        question: "Solve $2x + 10 = 2x + 20$.",
        steps: [
          "Subtract 2x from both sides.",
          "$10 = 20$. IMPOSSIBLE."
        ],
        answer: "No Solution"
      },
      {
        question: "Solve $3(x + 2) = 3x + 6$.",
        steps: [
          "Distribute: $3x + 6 = 3x + 6$.",
          "Exactly the same on both sides."
        ],
        answer: "Infinite Solutions"
      }
    ],
    quiz: [
      {
        id: "sc-1",
        text: "If $4x + 10 = 4x + k$ has infinitely many solutions, what is k?",
        type: "input",
        correctAnswer: "10",
        explanation: "Both sides must be identical."
      },
      {
        id: "sc-2",
        text: "If $5x - 7 = ax + 10$ has no solution, what is a?",
        type: "input",
        correctAnswer: "5",
        explanation: "Coefficients of x must match to cancel out."
      },
      {
        id: "sc-3",
        text: "True or False: $0 = 0$ means x = 0.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "It means infinitely many solutions."
      },
      {
        id: "sc-4",
        text: "Solve: $x + 1 = x$.",
        type: "multiple-choice",
        options: ["x=0", "x=1", "No solution", "Infinite solution"],
        correctAnswer: "No solution",
        explanation: "$0 = -1$ or $1 = 0$ is impossible."
      },
      {
        id: "sc-5",
        text: "If an equation boils down to $10 = 10$, how many solutions?",
        type: "multiple-choice",
        options: ["None", "One", "Two", "Infinite"],
        correctAnswer: "Infinite",
        explanation: "Identity."
      }
    ]
  },
  {
    id: "fractions",
    title: "4. Fractions: Clear the Denominator",
    icon: "Edit",
    content: `
# Stop Fighting Fractions
The fastest way to solve equations with fractions is to **KILL** the fractions immediately.

### The Strategy:
Multiply the ENTIRE equation by the Least Common Multiple (LCM) of all denominators. 

**Example**: $x/2 + x/3 = 10$.
Multiply everything by 6:
$3x + 2x = 60 \\rightarrow 5x = 60 \\rightarrow x = 12$.

Easy. Fast. Precise.
    `,
    examples: [
      {
        question: "Solve $x/4 - 1 = 2$.",
        steps: [
          "Multiply by 4: $x - 4 = 8$.",
          "Add 4: $x = 12$."
        ],
        answer: "x = 12"
      },
      {
        question: "Solve $2/3x = 10$.",
        steps: [
          "Multiply by 3: $2x = 30$.",
          "Divide by 2: $x = 15$."
        ],
        answer: "x = 15"
      },
      {
        question: "Solve $(x + 5) / 2 = 10$.",
        steps: [
          "Multiply by 2: $x + 5 = 20$.",
          "Subtract 5: $x = 15$."
        ],
        answer: "x = 15"
      }
    ],
    quiz: [
      {
        id: "fr-1",
        text: "Solve: $x/10 = 5$.",
        type: "input",
        correctAnswer: "50",
        explanation: "Multiply by 10."
      },
      {
        id: "fr-2",
        text: "Solve: $2/5x = 8$.",
        type: "input",
        correctAnswer: "20",
        explanation: "$2x = 40 \\rightarrow x = 20$."
      },
      {
        id: "fr-3",
        text: "Solve: $x/2 + x/4 = 6$.",
        type: "input",
        correctAnswer: "8",
        explanation: "Multiply by 4: $2x + x = 24 \\rightarrow 3x = 24 \\rightarrow x = 8$."
      },
      {
        id: "fr-4",
        text: "Solve: $3 = (x - 4) / 5$.",
        type: "input",
        correctAnswer: "19",
        explanation: "$15 = x - 4 \\rightarrow x = 19$."
      },
      {
        id: "fr-5",
        text: "Find x if 2/3 of x is 12.",
        type: "input",
        correctAnswer: "18",
        explanation: "$2x = 36 \\rightarrow x = 18$."
      }
    ]
  },
  {
    id: "abs-val",
    title: "5. Absolute Value: Two Cases",
    icon: "Shield",
    content: `
# The Branching Method
Absolute value is distance. If $|x| = 5$, $x$ could be $5$ steps to the right or $5$ steps to the left.

### The Rule:
1. Isolate the absolute value bars first.
2. Split into two equations: **Standard** and **Negative**.

**Example**: $|x + 2| = 10$.
Case 1: $x + 2 = 10 \\rightarrow x = 8$.
Case 2: $x + 2 = -10 \\rightarrow x = -12$.

**Extraneous Warning:** If you see $|x| = -5$, there is NO solution. Distance cannot be negative.
    `,
    examples: [
      {
        question: "Solve $|x - 4| = 2$.",
        steps: [
          "Case 1: $x - 4 = 2 \\rightarrow x = 6$.",
          "Case 2: $x - 4 = -2 \\rightarrow x = 2$."
        ],
        answer: "2, 6"
      },
      {
        question: "Solve $3|x| = 15$.",
        steps: [
          "Divide by 3: $|x| = 5$.",
          "Result: $x = 5$ or $x = -5$."
        ],
        answer: "-5, 5"
      },
      {
        question: "Solve $|x| + 10 = 5$.",
        steps: [
          "Isolate: $|x| = -5$.",
          "Distance can't be negative."
        ],
        answer: "No Solution"
      }
    ],
    quiz: [
      {
        id: "av-1",
        text: "How many solutions are expected for $|x - 7| = 10$?",
        type: "input",
        correctAnswer: "2",
        explanation: "One for +10, one for -10."
      },
      {
        id: "av-2",
        text: "Solve: $|x| = 0$.",
        type: "input",
        correctAnswer: "0",
        explanation: "Only zero is zero distance from zero."
      },
      {
        id: "av-3",
        text: "Solve: $|x + 1| = 5$. (input one solution)",
        type: "multiple-choice",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4",
        explanation: "$x+1=5 \\rightarrow 4$. (Other is -6)."
      },
      {
        id: "av-4",
        text: "True or False: $|x - 5| = -2$ has no solution.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Absolute value cannot equal a negative number."
      },
      {
        id: "av-5",
        text: "If $|x - 3| = 3$, find the sum of all possible values for x.",
        type: "input",
        correctAnswer: "6",
        explanation: "x-3=3 -> 6; x-3=-3 -> 0. 6+0=6."
      }
    ]
  },
  {
    id: "quadratics",
    title: "6. Quadratics: Factoring & Roots",
    icon: "RotateCcw",
    content: `
# Thinking in Squares
SAT quadratics are usually simple. Look for the factoring patterns.

### Factoring Pattern:
$x^2 + (a+b)x + ab = (x+a)(x+b)$

### The Zero Product Property:
If $(x-5)(x+2) = 0$, then $x=5$ or $x=-2$. 

### The Square Root Method:
If $x^2 = 25$, then $x = \\pm 5$. Don't forget the negative root!
    `,
    examples: [
      {
        question: "Solve $x^2 - 9 = 0$.",
        steps: [
          "$x^2 = 9$.",
          "Take square root: $x = \\pm 3$."
        ],
        answer: "-3, 3"
      },
      {
        question: "Factor $x^2 + 5x + 6$.",
        steps: [
          "Need numbers that multiply to 6 and add to 5.",
          "2 and 3.",
          "Result: $(x+2)(x+3)$."
        ],
        answer: "(x+2)(x+3)"
      },
      {
        question: "Solve $x(x - 10) = 0$.",
        steps: [
          "Either $x = 0$ or $x - 10 = 0$.",
          "Results: 0, 10."
        ],
        answer: "0, 10"
      }
    ],
    quiz: [
      {
        id: "qd-1",
        text: "Solve: $x^2 = 100$.",
        type: "multiple-choice",
        options: ["10", "-10", "10 and -10", "50"],
        correctAnswer: "10 and -10",
        explanation: "Always check the negative root."
      },
      {
        id: "qd-2",
        text: "Find roots for $(x - 5)(x + 5) = 0$.",
        type: "multiple-choice",
        options: ["0", "5, -5", "25", "-25"],
        correctAnswer: "5, -5",
        explanation: "Standard zero product property."
      },
      {
        id: "qd-3",
        text: "Factor $x^2 - 10x + 25$.",
        type: "multiple-choice",
        options: ["(x-5)(x+5)", "(x-5)^2", "(x+5)^2", "(x-10)(x-15)"],
        correctAnswer: "(x-5)^2",
        explanation: "Perfect square trinomial."
      },
      {
        id: "qd-4",
        text: "If $x^2 = 49$, find the largest solution.",
        type: "input",
        correctAnswer: "7",
        explanation: "7 is larger than -7."
      },
      {
        id: "qd-5",
        text: "What are the solutions for $x^2 - x = 0$?",
        type: "multiple-choice",
        options: ["0, 1", "0, -1", "1, -1", "None"],
        correctAnswer: "0, 1",
        explanation: "$x(x-1) = 0$."
      }
    ]
  },
  {
    id: "word-problems",
    title: "7. Equations in Context",
    icon: "Brain",
    content: `
# Translating the Story
Identify the **Variable**, the **Constraint**, and the **Relationship**.

### Translation Guide:
- **"is"** $\\rightarrow =$
- **"sum of"** $\\rightarrow +$
- **"twice"** $\\rightarrow 2x$
- **"decreased by"** $\\rightarrow -$

Always define what $x$ stands for before you write the equation.
    `,
    examples: [
      {
        question: "A service charges $50 per hour plus $10 fee. If total is $110, how many hours?",
        steps: [
          "Eq: $50h + 10 = 110$.",
          "$50h = 100 \\rightarrow h = 2$."
        ],
        answer: "2"
      },
      {
        question: "The sum of three consecutive integers is 33. Find the smallest.",
        steps: [
          "Let them be $x, x+1, x+2$.",
          "$3x + 3 = 33 \\rightarrow 3x = 30 \\rightarrow x = 10$."
        ],
        answer: "10"
      },
      {
        question: "x is 5 less than twice y. Express as equation.",
        steps: [
          "$x = 2y - 5$."
        ],
        answer: "x = 2y - 5"
      }
    ],
    quiz: [
      {
        id: "wp-1",
        text: "Twice a number plus 10 is 40. Find the number.",
        type: "input",
        correctAnswer: "15",
        explanation: "$2x + 10 = 40 \\rightarrow 2x = 30 \\rightarrow 15$."
      },
      {
        id: "wp-2",
        text: "A rental costs $40 flat plus $0.50 per mile. If you spend $60, miles?",
        type: "input",
        correctAnswer: "40",
        explanation: "$0.5m = 20 \\rightarrow m = 40$."
      },
      {
        id: "wp-3",
        text: "John is 5 years older than Mary. Their sum is 25. Mary's age?",
        type: "input",
        correctAnswer: "10",
        explanation: "$m + (m+5) = 25 \\rightarrow 2m = 20 \\rightarrow 10$."
      },
      {
        id: "wp-4",
        text: "If $c$ cups cost $d$ dollars, equation for 1 cup?",
        type: "input",
        correctAnswer: "d/c",
        explanation: "Unit rate."
      },
      {
        id: "wp-5",
        text: "A 100-page book has p pages left to read. You've read 60. Eq?",
        type: "input",
        correctAnswer: "p = 40",
        explanation: "100 - 60 = 40."
      }
    ]
  },
  {
    id: "mixed-mastery",
    title: "8. Mixed SAT Mastery",
    icon: "Zap",
    content: `
# High Pressure Integration
Complexity check. Mixing fractions, absolute values, and word problems. Solve them all accurately and fast.

### Checklist:
1. Is it a special case (No Solution)?
2. Did I clear the fractions?
3. Did I check both paths for absolute value?
    `,
    examples: [
      {
        question: "Solve $x/2 + |x - 5| = 10$. (Test x=10).",
        steps: [
          "$10/2 + |10 - 5| = 5 + 5 = 10$. Correct.",
          "Check other side if needed (usually multiple choice help here)."
        ],
        answer: "10 (Sample)"
      },
      {
        question: "If $f(x) = 2x+3$ and $f(x) = 11$. Find x.",
        steps: [
          "$2x + 3 = 11 \\rightarrow 2x = 8 \\rightarrow x = 4$."
        ],
        answer: "4"
      },
      {
        question: "Solve $y = 3x - 1$ and $y = x + 7$ for x.",
        steps: [
          "$3x - 1 = x + 7 \\rightarrow 2x = 8 \\rightarrow x = 4$."
        ],
        answer: "4"
      }
    ],
    quiz: [
      {
        id: "mm-1",
        text: "Solve: $x/3 + x/2 = 5$.",
        type: "input",
        correctAnswer: "6",
        explanation: "Multiply by 6: $2x + 3x = 30 \\rightarrow 5x = 30 \\rightarrow x = 6$."
      },
      {
        id: "mm-2",
        text: "Solve $|x - 2| = -1$.",
        type: "multiple-choice",
        options: ["1", "3", "No solution", "1, 3"],
        correctAnswer: "No solution",
        explanation: "Absolute value cannot be negative."
      },
      {
        id: "mm-3",
        text: "If $3x = y$ and $y = 12$, find $x$.",
        type: "input",
        correctAnswer: "4",
        explanation: "Direct substitution."
      },
      {
        id: "mm-4",
        text: "Combine: $2(x - 5) = x + 10$. Solve for x.",
        type: "input",
        correctAnswer: "20",
        explanation: "$2x - 10 = x + 10 \\rightarrow x = 20$."
      },
      {
        id: "mm-5",
        text: "If $x^2 - 16 = 0$ and $x > 0$. Find x.",
        type: "input",
        correctAnswer: "4",
        explanation: "Standard quadratic root."
      }
    ]
  }
];
