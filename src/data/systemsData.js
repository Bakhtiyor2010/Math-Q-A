import { Shield, Target, Swords, Users, Calculator, Activity, Zap, Move, Table, Layers, Target as TargetIcon, Brain, LineChart } from 'lucide-react';

export const systemsLessons = [
  {
    id: "core-concept",
    title: "1. Core Concept: Intersection as Solution",
    icon: "Target",
    content: `
# What is a System?

A **system** of equations is just two or more equations working together. 
The **solution** $(x, y)$ is the point where **both** equations are true.

### Geometrically
- The solution is the **intersection point**.
- If two lines never cross (parallel), there is **no solution**.
- If two lines are identical, there are **infinitely many solutions**.

### The Standard Form
Most SAT systems appear in the form:
$$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$$
    `,
    examples: [
      {
        question: "Is (2, 5) a solution to the system: $x + y = 7$ and $2x - y = -1$?",
        steps: [
          "Check first equation: $2 + 5 = 7$. True.",
          "Check second equation: $2(2) - 5 = 4 - 5 = -1$. True.",
          "Since it works for both, it is the solution."
        ],
        answer: "Yes"
      },
      {
        question: "How many solutions are there for the system $y = 3x + 5$ and $y = 3x - 10$?",
        steps: [
          "Identify the slopes. Both are $3$.",
          "Identify the y-intercepts. $5$ and $-10$.",
          "Since they have the same slope but different intercepts, the lines are parallel."
        ],
        answer: "No Solution (0)"
      },
      {
        question: "The graph of two linear equations is the same line. How many solutions exist?",
        steps: [
          "Every point on the line satisfies both equations.",
          "Therefore, there are infinitely many solutions."
        ],
        answer: "Infinitely many"
      }
    ],
    commonMistakes: [
      "Assuming a solution for one equation works for the system without checking the second.",
      "Thinking parallel lines have one solution at the far ends."
    ],
    quiz: [
      {
        id: "core-1",
        text: "What does the point (x, y) represent in a system of equations?",
        type: "multiple-choice",
        options: ["The average of the lines", "The intersection of the lines", "The y-intercept", "The slope"],
        correctAnswer: "The intersection of the lines",
        explanation: "The solution to a system is where the lines cross."
      },
      {
        id: "core-2",
        text: "If two lines have different slopes, they must have how many solutions?",
        type: "input",
        correctAnswer: "1",
        explanation: "Different slopes mean they will cross exactly once."
      },
      {
        id: "core-3",
        text: "System: $x + y = 10, y = 2x$. Find the solution.",
        type: "input",
        correctAnswer: "(3.33, 6.67)",
        explanation: "Sub $y=2x$ into first: $x+2x=10 \\Rightarrow 3x=10 \\Rightarrow x=3.33$."
      },
      {
        id: "core-4",
        text: "Which of the following describes parallel lines?",
        type: "multiple-choice",
        options: ["One solution", "No solution", "Infinite solutions", "Negative solutions"],
        correctAnswer: "No solution",
        explanation: "Parallel lines never intersect."
      },
      {
        id: "core-5",
        text: "If a system has infinitely many solutions, the lines are...",
        type: "multiple-choice",
        options: ["Parallel", "Perpendicular", "Identical", "Vertical"],
        correctAnswer: "Identical",
        explanation: "Identical lines touch at every point."
      }
    ]
  },
  {
    id: "solving-methods",
    title: "2. Solving Methods: Sub vs. Elim",
    icon: "Swords",
    content: `
# Choosing Your Weapon

Speed on the SAT comes from picking the **right** method instantly.

### 1. Substitution
**Best when:** One variable is already isolated (e.g., $y = 3x + 1$ or $x = 10 - y$).
**Strategy:** Plug the expression into the other equation.

### 2. Elimination
**Best when:** The equations are 'stacked' in standard form ($Ax + By = C$).
**Strategy:** Multiply one or both equations so that adding them 'squashes' one variable.

### 3. Graphical
**Best when:** You have a calculator or the graph is provided.
**Strategy:** Look for the intersection point.
    `,
    examples: [
      {
        question: "Solve using substitution: $y = 2x$ and $3x + y = 20$.",
        steps: [
          "Replace $y$ with $2x$: $3x + (2x) = 20$.",
          "Combine: $5x = 20 \\Rightarrow x = 4$.",
          "Back-sub: $y = 2(4) = 8$."
        ],
        answer: "(4, 8)"
      },
      {
        question: "Solve using elimination: $x + y = 10$ and $x - y = 4$.",
        steps: [
          "Add the equations: $(x+x) + (y-y) = 14$.",
          "$2x = 14 \\Rightarrow x = 7$.",
          "Back-sub: $7 + y = 10 \\Rightarrow y = 3$."
        ],
        answer: "(7, 3)"
      },
      {
        question: "Choose a method: $4x + 3y = 25$ and $3x + 2y = 18$. How to start?",
        steps: [
          "Equations are stacked, so elimination is likely best.",
          "Multiply Eq1 by 2 and Eq2 by 3 to eliminate y: $8x + 6y = 50$ and $9x + 6y = 54$.",
          "Subtract: $x = 4$."
        ],
        answer: "Elimination"
      }
    ],
    commonMistakes: [
      "Forgetting to multiply the entire equation (both sides!) in elimination.",
      "Incorrectly distributing signs when substituting."
    ],
    quiz: [
      {
        id: "meth-1",
        text: "Which method is easiest for: $y = 3x - 5$ and $4x + 2y = 10$?",
        type: "multiple-choice",
        options: ["Substitution", "Elimination", "Graphing", "Guess and Check"],
        correctAnswer: "Substitution",
        explanation: "y is already isolated."
      },
      {
        id: "meth-2",
        text: "Solve: $x + y = 15$ and $x - y = 5$. Find y.",
        type: "input",
        correctAnswer: "5",
        explanation: "Subtract: $2y = 10 \\Rightarrow y = 5$."
      },
      {
        id: "meth-3",
        text: "To eliminate $x$ in $2x + y = 10$ and $3x - 2y = 5$, what should you multiply the first eq by?",
        type: "multiple-choice",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "LCM of 2 and 3 is 6."
      },
      {
        id: "meth-4",
        text: "Solve: $5x + y = 11$ and $y = x - 1$. Find x.",
        type: "input",
        correctAnswer: "2",
        explanation: "$5x + (x-1) = 11 \\Rightarrow 6x = 12 \\Rightarrow x = 2$."
      },
      {
        id: "meth-5",
        text: "What is the primary goal of the elimination method?",
        type: "multiple-choice",
        options: ["Find a slope", "Isolate y", "Remove one variable", "Cross the x-axis"],
        correctAnswer: "Remove one variable",
        explanation: "We eliminate a variable to solve for the other."
      }
    ]
  },
  {
    id: "special-cases",
    title: "3. Special Cases & Shortcut Ratios",
    icon: "Shield",
    content: `
# Master the Coefficients

You can predict the number of solutions without solving fully by comparing ratios of coefficients for $\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$.

| Condition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Meaning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Solutions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| :--- | :--- | :--- |
| $\\frac{a}{d} \\neq \\frac{b}{e}$ | Different Slopes | **One Solution (1)** |
| $\\frac{a}{d} = \\frac{b}{e} \\neq \\frac{c}{f}$ | Parallel Lines | **No Solutions (0)** |
| $\\frac{a}{d} = \\frac{b}{e} = \\frac{c}{f}$ | Identical Lines | **Infinitely Many** |

**SAT Trick:** If they say it has "no solution," immediately set the $x$ and $y$ coefficients as identical ratios.
    `,
    examples: [
      {
        question: "$kx + 3y = 10$ and $4x + 2y = 5$. For what $k$ is there no solution?",
        steps: [
          "Ratios must be equal: $\\frac{k}{4} = \\frac{3}{2}$.",
          "Cross multiply: $2k = 12$.",
          "Answer: $k = 6$."
        ],
        answer: "6"
      },
      {
        question: "$2x - 4y = 8$ and $x - 2y = 4$. Number of solutions?",
        steps: [
          "Ratios: $\\frac{2}{1} = 2$, $\\frac{-4}{-2} = 2$, $\\frac{8}{4} = 2$.",
          "Since all are equal, it's the same line."
        ],
        answer: "Infinitely many"
      },
      {
        question: "$ax + 2y = 8$ and $3x + ay = 10$. If there is NO solution, what is $a$?",
        steps: [
          "Ratio: $\\frac{a}{3} = \\frac{2}{a}$.",
          "$a^2 = 6 \\Rightarrow a = \\sqrt{6}$.",
          "Verify the constant ratio: $8/10 \\neq \\sqrt{6}/3$. Correct."
        ],
        answer: "sqrt(6)"
      }
    ],
    commonMistakes: [
      "Forgetting to check the constant ratio ($c/f$) when looking for 'no solution'.",
      "Mixing up the numerator and denominator across the equal sign."
    ],
    quiz: [
      {
        id: "spec-1",
        text: "If $y = 5x + 3$ and $y = 5x + 4$, how many solutions?",
        type: "input",
        correctAnswer: "0",
        explanation: "Same slope, different intercept."
      },
      {
        id: "spec-2",
        text: "For infinite solutions in $2x + 3y = 10$ and $ax + 9y = 30$, what is a?",
        type: "input",
        correctAnswer: "6",
        explanation: "Multiplier is 3 (9/3=3). So $2*3=6$."
      },
      {
        id: "spec-3",
        text: "$4x - 2y = 8$ and $kx + y = 4$ have infinite solutions. What is k?",
        type: "input",
        correctAnswer: "-2",
        explanation: "Constant ratio $8/4=2$. Multiplier $y$ is $-2$ ($-2/1=-2$). So $4/k = -2 \\Rightarrow k = -2$."
      },
      {
        id: "spec-4",
        text: "Which ratio condition implies one unique solution?",
        type: "multiple-choice",
        options: ["a/d = b/e", "a/d != b/e", "a/d = c/f", "b/e = c/f"],
        correctAnswer: "a/d != b/e",
        explanation: "Different slopes guarantee one intersection."
      },
      {
        id: "spec-5",
        text: "Two lines are $y = 1/2x + 5$ and $2x - y = 10$. How many solutions?",
        type: "input",
        correctAnswer: "1",
        explanation: "Slopes are $1/2$ and $2$. Different, so 1."
      }
    ]
  },
  {
    id: "word-problems",
    title: "4. Word Problems: Translation",
    icon: "Users",
    content: `
# Translating to Math

Word problems are the heart of SAT systems. 

### The Template
- **Items Equation:** $x + y = \\text{Total Items}$
- **Value Equation:** $\\text{Rate}_x \\cdot x + \\text{Rate}_y \\cdot y = \\text{Total Value}$

### Common Scenarios
- **Total Price:** Apple cost $\$2$, Banana cost $\$1$. Total $\$10$. $\\Rightarrow 2x + 1y = 10$.
- **Mixtures:** $5\\%$ acid plus $10\\%$ acid. $\\Rightarrow 0.05x + 0.10y = \\text{Total Acid}$.
    `,
    examples: [
      {
        question: "A store sold 200 items (A and B). Total revenue was $\$2500$. If A costs $\$15$ and B costs $\$10$, how many of A were sold?",
        steps: [
          "Eq1: $x + y = 200$.",
          "Eq2: $15x + 10y = 2500$.",
          "Eliminate y: Multiply Eq1 by 10 $\\Rightarrow 10x + 10y = 2000$.",
          "Subtract: $5x = 500 \\Rightarrow x = 100$."
        ],
        answer: "100"
      },
      {
        question: "A rectangle has perimeter 40. The length is 4 more than the width. Find width.",
        steps: [
          "Eq1: $2L + 2W = 40$.",
          "Eq2: $L = W + 4$.",
          "Sub: $2(W+4) + 2W = 40 \\Rightarrow 4W + 8 = 40 \\Rightarrow 4W = 32 \\Rightarrow W = 8$."
        ],
        answer: "8"
      },
      {
        question: "Tickets for a game are $d$ dollars for adults and $c$ dollars for children. If 5 adults and 3 children pay $\$65$, and 2 adults and 2 children pay $\$30$, what is $d$?",
        steps: [
          "Eq1: $5d + 3c = 65$.",
          "Eq2: $2d + 2c = 30$.",
          "Simplify Eq2: $d + c = 15$.",
          "Sub $c = 15-d$ into Eq1: $5d + 3(15-d) = 65 \\Rightarrow 2d + 45 = 65 \\Rightarrow 2d = 20 \\Rightarrow d = 10$."
        ],
        answer: "10"
      }
    ],
    commonMistakes: [
      "Defining variables but then losing track of which is which.",
      "Forgetting to multiply the total count by a rate if needed."
    ],
    quiz: [
      {
        id: "word-1",
        text: "John has 20 coins (nickels and dimes) totaling $\$1.50$. How many dimes does he have?",
        type: "input",
        correctAnswer: "10",
        explanation: "$x+y=20, 0.05x+0.10y=1.50$. $y=10$."
      },
      {
        id: "word-2",
        text: "Equation for: 'A taxi charges $\$3$ base plus $\$2$ per mile. Another charges $\$5$ base plus $\$1.5$ per mile.'",
        type: "multiple-choice",
        options: ["y=3x+2, y=5x+1.5", "y=2x+3, y=1.5x+5", "y=5x+3, y=1.5x+2", "3x+2y=5, 5x+1.5y=3"],
        correctAnswer: "y=2x+3, y=1.5x+5",
        explanation: "Standard linear form."
      },
      {
        id: "word-3",
        text: "In $2x + 3y = 50$, if $x$ represents adult tickets and $y$ child tickets, what does 50 represent?",
        type: "multiple-choice",
        options: ["Total tickets", "Total revenue", "Price of a ticket", "Number of adults"],
        correctAnswer: "Total revenue",
        explanation: "Sum of prices * quantity = total money."
      },
      {
        id: "word-4",
        text: "A mix of 10% and 30% salt solution. Which part of $0.1x + 0.3y = 5$ represents the final amount of salt?",
        type: "input",
        correctAnswer: "5",
        explanation: "The constant represents the total amount of salt in the mix."
      },
      {
        id: "word-5",
        text: "If x is the number of 4-legged dogs and y is the number of 2-legged humans, and there are 20 heads and 60 legs, what is Eq 1?",
        type: "input",
        correctAnswer: "x+y=20",
        explanation: "1 head per creature."
      }
    ]
  },
  {
    id: "linear-nonlinear",
    title: "5. Linear + Nonlinear Systems",
    icon: "Activity",
    content: `
# When Lines Meet Curves

The SAT occasionally asks you to find where a line ($y = mx + b$) meets a parabola ($y = x^2$).

### Method: Substitution
Always sub the linear part into the nonlinear part.
Example: $y = x^2$ and $y = 3x$.
Set them equal: $x^2 = 3x \\Rightarrow x^2 - 3x = 0 \\Rightarrow x(x-3) = 0$.
Solutions: $x=0$ and $x=3$.

**Performance Tip:** Use the discriminant ($b^2 - 4ac$) of the resulting quadratic to find the *number* of solutions without solving.
- $D > 0$: **2 solutions**
- $D = 0$: **1 solution** (tangent)
- $D < 0$: **No solutions**
    `,
    examples: [
      {
        question: "How many solutions for $y = x^2 - 4$ and $y = 3x$?",
        steps: [
          "Sub: $x^2 - 4 = 3x \\Rightarrow x^2 - 3x - 4 = 0$.",
          "Check Discriminant: $b^2 - 4ac = (-3)^2 - 4(1)(-4) = 9 + 16 = 25$.",
          "Since 25 > 0, there are 2 solutions."
        ],
        answer: "2"
      },
      {
        question: "Find the intersection points of $y = x^2$ and $y = 4$.",
        steps: [
          "Sub: $x^2 = 4$.",
          "Solve: $x = 2$ or $x = -2$.",
          "Points: (2, 4) and (-2, 4)."
        ],
        answer: "(2, 4), (-2, 4)"
      },
      {
        question: "For what $k$ does $y = x^2$ and $y = 2x + k$ have exactly one solution?",
        steps: [
          "Sub: $x^2 = 2x + k \\Rightarrow x^2 - 2x - k = 0$.",
          "One solution means $D = 0$.",
          "$(-2)^2 - 4(1)(-k) = 0 \\Rightarrow 4 + 4k = 0 \\Rightarrow k = -1$."
        ],
        answer: "-1"
      }
    ],
    commonMistakes: [
      "Forgetting both values of x in quadratic solutions.",
      "Misidentifying c when the constant k is subtracted."
    ],
    quiz: [
      {
        id: "non-1",
        text: "How many solutions for $y = x^2 + 5$ and $y = 4$?",
        type: "input",
        correctAnswer: "0",
        explanation: "$x^2 = -1$. No real solutions."
      },
      {
        id: "non-2",
        text: "Where does $y = x^2$ cross $y = x$?",
        type: "multiple-choice",
        options: ["(0,0)", "(1,1)", "(0,0) and (1,1)", "(0,0) and (-1,-1)"],
        correctAnswer: "(0,0) and (1,1)",
        explanation: "$x^2-x=0 \\Rightarrow x(x-1)=0$."
      },
      {
        id: "non-3",
        text: "If a line is tangent to a parabola, how many solutions are there?",
        type: "input",
        correctAnswer: "1",
        explanation: "Tangent means touch at one point."
      },
      {
        id: "non-4",
        text: "The discriminant is negative. How many intersections?",
        type: "input",
        correctAnswer: "0",
        explanation: "Negative discriminant means no real roots."
      },
      {
        id: "non-5",
        text: "Intersection of $y=|x|$ and $y=2$.",
        type: "multiple-choice",
        options: ["(2,2)", "(-2,2)", "(2,2) and (-2,2)", "No solution"],
        correctAnswer: "(2,2) and (-2,2)",
        explanation: "Absolute value goes both ways."
      }
    ]
  },
  {
    id: "interpretation",
    title: "6. Interpretation & Units",
    icon: "Brain",
    content: `
# Beyond the Math

The SAT doesn't just want the number; they want to know what it **means**.

### The Meaning of (x, y)
In a real-world system:
- **x** is usually a **Quantity** (Number of items, years, hours).
- **y** is usually a **Value** (Total cost, total weight, total population).

### The Point of Equality
The solution is often the "Break-Even Point". 
If $C$ is cost and $R$ is revenue, the intersection is where profit is zero.
    `,
    examples: [
      {
        question: "$C = 2x + 10$ and $C = 3x + 5$ are cost functions for two printers. What does the solution represent?",
        steps: [
          "The solution $x$ is where costs are identical.",
          "Solve: $2x + 10 = 3x + 5 \\Rightarrow x = 5$.",
          "At 5 months (or copies), both printers cost the same."
        ],
        answer: "The number of units where costs are equal"
      },
      {
        question: "In the system for ticket sales ($a+s=200$, $15a+10s=2500$), what does 2500 represent?",
        steps: [
          "Identify units: 15 is dollars/adult, 10 is dollars/student.",
          "Value * Quantity = Dollars.",
          "2500 is total dollars (revenue)."
        ],
        answer: "Total revenue"
      },
      {
        question: "If the solution to a system of year vs population is (10, 500), what will the population be after 10 years?",
        steps: [
          "y-coord is 500."
        ],
        answer: "500"
      }
    ],
    commonMistakes: [
      "Mixing up x and y values in the final conclusion.",
      "Ignoring units like 'thousands' or 'millions' specified in the prompt."
    ],
    quiz: [
      {
        id: "int-1",
        text: "What does y usually represent in a growth system?",
        type: "multiple-choice",
        options: ["Time", "Growth rate", "Final Amount", "Initial amount"],
        correctAnswer: "Final Amount",
        explanation: "y is the output (total value)."
      },
      {
        id: "int-2",
        text: "Intersection of 'Supply' and 'Demand'. What is this point called in economics?",
        type: "multiple-choice",
        options: ["Max profit", "Equilibrium", "Loss point", "Standard deviation"],
        correctAnswer: "Equilibrium",
        explanation: "Where supply equals demand."
      },
      {
        id: "int-3",
        text: "In $P = 2t + 5$ and $P = 3t + 2$, what is $t$?",
        type: "input",
        correctAnswer: "3",
        explanation: "Solve: $2t+5=3t+2 \\Rightarrow t=3$."
      },
      {
        id: "int-4",
        text: "If $y$ is cost in thousands, and the solution is $y=5$, what is the actual cost?",
        type: "input",
        correctAnswer: "5000",
        explanation: "5 * 1000 = 5000."
      },
      {
        id: "int-5",
        text: "What does the x-intercept of a cost function represent?",
        type: "multiple-choice",
        options: ["Initial cost", "Break-even", "When cost is zero", "Profit"],
        correctAnswer: "When cost is zero",
        explanation: "Definition of x-intercept (y=0)."
      }
    ]
  },
  {
    id: "comparing-systems",
    title: "7. Comparing Systems",
    icon: "Layers",
    content: `
# Analyzing Structure

Often, the SAT gives you two systems and asks you to compare them **without** solving.

### Key Observation
If two systems share an equation, their solutions depend entirely on the difference in the **second** equation.
If System 1 and System 2 both have $x + y = 10$, but System 1 has $2x + y = 15$ and System 2 has $2x + y = 20$, System 2 will obviously have a larger $x$ value.
    `,
    examples: [
      {
        question: "System A: $x+y=10, 2x+y=12$. System B: $x+y=10, 2x+y=14$. Which system has a larger x?",
        steps: [
          "Notice $x+y=10$ is the same.",
          "In System B, $2x+y$ is 2 units larger than System A.",
          "Since $x+y$ is constant, the only way $2x+y$ can increase is if $x$ increases."
        ],
        answer: "System B"
      },
      {
        question: "System 1: $y = 3x - 5$. System 2: $y = 3x - 10$. Which line is higher on the graph?",
        steps: [
          "Both have the same slope (3).",
          "System 1 has a higher y-intercept (-5 vs -10).",
          "Therefore, System 1 is always above System 2."
        ],
        answer: "System 1"
      },
      {
        question: "Compare System X ($x+y=5, x-y=1$) and System Y ($x+y=5, x-y=3$). In which system is 'y' smaller?",
        steps: [
          "In both, $x+y=5$.",
          "In System Y, the gap between $x$ and $y$ ($x-y$) is larger.",
          "For $x+y$ to stay same while $x-y$ grows, $y$ must decrease.",
          "System Y has smaller $y$."
        ],
        answer: "System Y"
      }
    ],
    commonMistakes: [
      "Solving both systems fully is a waste of time. Look for patterns!"
    ],
    quiz: [
      {
        id: "comp-1",
        text: "If $x+y=k$ and $x-y=j$, and we increase $k$, what happens to $x$?",
        type: "multiple-choice",
        options: ["Increases", "Decreases", "Stays same", "Cannot be determined"],
        correctAnswer: "Increases",
        explanation: "$2x = k+j$. If $k$ grows, $x$ grows."
      },
      {
        id: "comp-2",
        text: "System 1: $x+y=10$. System 2: $2x+2y=20$. Are these unique systems?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "They are the same constraint multiplied."
      },
      {
        id: "comp-3",
        text: "If System A is $y=x+2$ and System B is $y=x+4$, will they ever intersect?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Same slope, different intercept (parallel)."
      },
      {
        id: "comp-4",
        text: "System X: $3x+2y=10$. System Y: $3x+2y=12$. Which one has a larger $y$ for the same $x$?",
        type: "multiple-choice",
        options: ["System X", "System Y"],
        correctAnswer: "System Y",
        explanation: "The total sum is larger in Y, so with fixed x, y must be larger."
      },
      {
        id: "comp-5",
        text: "Compare $x+y=1$ and $x+y=100$. Are the lines parallel?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Both have slope -1."
      }
    ]
  },
  {
    id: "shortcuts",
    title: "8. Speed Strategy & Shortcuts",
    icon: "Zap",
    content: `
# The Elite Toolbox

Don't solve for $x$ and $y$ separately unless you have to.

### Shortcut 1: The 'Sum/Difference' trick
If they ask for $x + y$, look for a way to add the equations and get a multiple of $(x + y)$.
Example: $13x + 12y = 30$ and $12x + 13y = 20$.
Add them: $25x + 25y = 50 \\Rightarrow x + y = 2$. Done.

### Shortcut 2: Elimination by Subtraction
If the coefficients of one variable are identical, subtract to kill it immediately.
    `,
    examples: [
      {
        question: "If $10x + 7y = 40$ and $7x + 10y = 28$, what is $x - y$?",
        steps: [
          "Subtract the equations: $(10x - 7x) + (7y - 10y) = 40 - 28$.",
          "$3x - 3y = 12$.",
          "Divide by 3: $x - y = 4$."
        ],
        answer: "4"
      },
      {
        question: "What is $x+y$ if $23x + 17y = 100$ and $17x + 23y = 200$?",
        steps: [
          "Add the equations: $40x + 40y = 300$.",
          "Divide by 40: $x + y = 300/40 = 7.5$."
        ],
        answer: "7.5"
      },
      {
        question: "If $y = 3x + 5$ and you need to find $6x - 2y$, what is the shortcut?",
        steps: [
          "Rearrange: $-3x + y = 5$.",
          "Multiply by -2: $6x - 2y = -10$."
        ],
        answer: "-10"
      }
    ],
    quiz: [
      {
        id: "short-1",
        text: "$4x + 3y = 10, 3x + 4y = 11$. Find $x+y$.",
        type: "input",
        correctAnswer: "3",
        explanation: "$7x+7y=21 \\Rightarrow x+y=3$."
      },
      {
        id: "short-2",
        text: "What is the fastest way to solve $2x+y=10, 2x+y=5$?",
        type: "multiple-choice",
        options: ["Elimination", "Substitution", "Observing same-slope different-intercept", "Graphing"],
        correctAnswer: "Observing same-slope different-intercept",
        explanation: "Immediately see it's No Solution."
      },
      {
        id: "short-3",
        text: "If $x-y=5$ and $x+y=15$, what is $x^2-y^2$?",
        type: "input",
        correctAnswer: "75",
        explanation: "$x^2-y^2 = (x-y)(x+y) = 5 * 15 = 75$."
      },
      {
        id: "short-4",
        text: "Given $2x+3y=10$, what is $4x+6y$?",
        type: "input",
        correctAnswer: "20",
        explanation: "Just double the whole equation."
      },
      {
        id: "short-5",
        text: "If $ax+by=c$ and they ask for $ax+by+10$, what do you do?",
        type: "multiple-choice",
        options: ["Solve for x", "Solve for y", "Add 10 to c", "Divide by a"],
        correctAnswer: "Add 10 to c",
        explanation: "Since $ax+by=c$, then $ax+by+10 = c+10$."
      }
    ]
  }
];
