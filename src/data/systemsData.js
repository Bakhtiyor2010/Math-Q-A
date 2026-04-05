import { Shield, Target, Swords, Users } from 'lucide-react';

export const systemsLessons = [
  {
    id: "strategies-solving",
    title: "1. Solving Systems of Equations",
    icon: "Shield",
    content: `
# Mastering Systems of Equations

A "system" of equations is simply two or more equations that work together. Your goal is to find the single point $(x, y)$ where both equations are true at the same time. Think of two lines on a graph; where they cross is the solution to the system. 

To solve these without graphing, we use two reliable tools: **Substitution** and **Elimination**.

### Substitution: The Power of Swapping
Substitution is the most powerful tool when one equation already isolates a variable, such as $y = 3x$ or $x = y + 1$. 

In this case, anywhere you see that variable in the second equation, you "swap" it for its equivalent. For example, if your equations are $y = 2x$ and $3x + y = 10$, you replace $y$ in the second equation with $(2x)$:
$$3x + (2x) = 10 \Rightarrow 5x = 10 \Rightarrow x = 2$$
Once you find $x$, plug it back into the first equation to find $y = 4$.

### Elimination: The Power of Squashing
Elimination is best when equations are "lined up" in the same order (like $x + y$ on the left, numbers on the right). 

By adding the equations together, you can squash one variable entirely. For instance:
$x + y = 10$
$x - y = 4$
Adding them results in $(x+x) + (y-y) = 10+4 \Rightarrow 2x = 14 \Rightarrow x = 7$.

### Handling Complex Systems
On the SAT, variables won't always eliminate easily. If the coefficients don't match, you can multiply an entire equation by a number so they do. If you have $2x + y = 10$ and $4x - y = 5$, the $y$ terms already have the same number with opposite signs, so they squash immediately. But if you had $x + y = 10$ and $2x - y = 5$, you can still simply add them. 

If you had $x + y = 10$ and $2x + 2y = 20$, notice that one is just a multiple of the other.

### The Professional Shortcut
The SAT often asks for specific values like $x + y$ or $x - y$. Instead of solving for $x$ and $y$ individually, try adding or subtracting the two entire equations first. 
For example, if $15x + 12y = 30$ and $12x + 15y = 24$, adding them gives $27x + 27y = 54$, which simplifies to $x + y = 2$ by dividing everything by 27. This shortcut can save you critical seconds on the test.

When attacking word problems, remember that the "total items" usually creates an equation like $x + y = \text{Total}$, while the "total value or cost" creates $(\text{price } A \cdot x) + (\text{price } B \cdot y) = \text{Total Cost}$.
    `,
    examples: [
      {
        question: "Solve for (x, y):\nx + y = 10\n2x - y = 5",
        steps: [
            "Lined up? Yes! Use elimination.",
            "Add the equations: (x + 2x) and (y + -y) and (10 + 5)",
            "3x = 15",
            "x = 5",
            "Plug x=5 into first: 5 + y = 10, so y = 5."
        ],
        answer: "(5, 5)"
      },
      {
        question: "Solve for y: y = 2x and 3x + y = 20",
        steps: [
          "Substitution! Replace y with (2x)",
          "Equation: 3x + (2x) = 20",
          "Combine: 5x = 20",
          "x = 4",
          "Finish: y = 2(4) = 8"
        ],
        answer: "8"
      },
      {
        question: "If 4x + 3y = 25 and 3x + 4y = 24, what is x + y?",
        steps: [
          "Shortcut! Add both equations.",
          "Eq: (4x+3x) + (3y+4y) = 25 + 24",
          "7x + 7y = 49",
          "Divide by 7: x + y = 7"
        ],
        answer: "7"
      },
      {
        question: "Solve for x: x - 2y = 8 and 2x + 2y = 10",
        steps: [
          "Lined up! Add them.",
          "(x + 2x) + (-2y + 2y) = 8 + 10",
          "3x = 18",
          "x = 6"
        ],
        answer: "6"
      },
      {
        question: "Solve for y: 5x + y = 15 and x = 2",
        steps: [
          "Plug in x = 2.",
          "5(2) + y = 15",
          "10 + y = 15",
          "y = 5"
        ],
        answer: "5"
      }
    ],
    commonMistakes: [
      "Multiplying only the left side of the equation. You must multiply EVERY number in the row!",
      "Losing a negative sign when subtracting."
    ],
    quiz: [
      {
        id: "q1",
        text: "In the system 3x + 2y = 12 and 5x - y = 7, which value of y satisfies both equations?",
        type: "multiple-choice",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "Substitute y=3: 5x-3=7 -> 5x=10 -> x=2. Then check in first: 3(2)+2(3) = 6+6=12. Correct!"
      },
      {
        id: "q1-2",
        text: "If 2x + 3y = 10 and 3x + 2y = 15, what is the value of x + y?",
        type: "input",
        correctAnswer: "5",
        explanation: "Add the equations: (2x+3x) + (3y+2y) = 10 + 15 => 5x + 5y = 25. Divide by 5: x + y = 5. You didn't even need to find x or y!"
      },
      {
        id: "q1-3",
        text: "Solve for y: 2x + y = 10 and x = 4.",
        type: "input",
        correctAnswer: "2",
        explanation: "Substitute x=4 into 2x+y=10: 2(4) + y = 10 => 8 + y = 10 => y = 2."
      },
      {
        id: "q1-4",
        text: "In the system x + 2y = 8 and 3x - 2y = 4, what is the value of x?",
        type: "multiple-choice",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        explanation: "Add the equations: (x + 2y) + (3x - 2y) = 8 + 4 => 4x = 12 => x = 3."
      },
      {
        id: "q1-5",
        text: "Solve for x: 5x + 3y = 15 and y = 0.",
        type: "input",
        correctAnswer: "3",
        explanation: "Substitute y=0: 5x + 3(0) = 15 => 5x = 15 => x = 3."
      }
    ]
  },
  {
    id: "solutions-cases",
    title: "2. Special Solution Cases",
    icon: "Target",
    content: `
# Special Solution Cases

Identifying when a system has no answer, one answer, or millions of answers is critical for high-scoring students.

Think of two lines on a coordinate plane:
1. **One Solution**: The lines have different slopes and cross at exactly one point ($x, y$).
2. **No Solution**: The lines are parallel. They have the same slope but different starting points ($y$-intercepts), so they never cross.
3. **Infinite Solutions**: They are the exact same line, sitting right on top of each other.

### The Shortcut Ratio Method
You can identify these cases instantly by looking at the coefficients of two equations in standard form:
Eq 1: $Ax + By = C$
Eq 2: $Dx + Ey = F$

Calculate the multipliers for each part by dividing the numbers: $\\frac{A}{D}$ (for $x$), $\\frac{B}{E}$ (for $y$), and $\\frac{C}{F}$ (for the constant).

- **No Solution**: If the $x$ multiplier and $y$ multiplier are exactly equal, but they DO NOT equal the constant multiplier. ($\\frac{A}{D} = \\frac{B}{E} \\neq \\frac{C}{F}$).
- **Infinitely Many Solutions**: If all three multipliers are exactly equal. ($\\frac{A}{D} = \\frac{B}{E} = \\frac{C}{F}$).
- **Exactly One Solution**: If the $x$ multiplier is not equal to the $y$ multiplier. ($\\frac{A}{D} \\neq \\frac{B}{E}$).

The SAT often hides these by doubling or tripling one of the equations. For instance, in the system $2x + 3y = 10$ and $4x + 6y = 20$, the second equation is just the first multiplied by 2. Since everything matches perfectly, there are infinitely many solutions. If the constant was $21$ instead of $20$, there would be no solution.
    `,
    examples: [
      {
        question: "For what value of k will the system 2x + 3y = 10 and 4x + ky = 20 have infinitely many solutions?",
        steps: [
            "Look at Equation 1 (2, 3, 10).",
            "Look at Equation 2 (4, k, 20).",
            "To get from 2 to 4, we multiplied by 2.",
            "To get from 10 to 20, we multiplied by 2.",
            "So, to get from 3 to k, we MUST multiply by 2.",
            "k = 3 * 2 = 6."
        ],
        answer: "6"
      },
      {
        question: "How many solutions for y = 5x + 3 and y = 5x - 7?",
        steps: [
          "Check slopes (A/D): Both are 5.",
          "Check constants (C/F): One is 3, one is -7.",
          "Lines are parallel with different starts. No solution!"
        ],
        answer: "0"
      },
      {
        question: "For what value of a if ax + 2y = 8 and 3x + y = 4 have infinite solutions?",
        steps: [
          "Look at the y-coefficients: (2 / 1) = 2 multiplier.",
          "Look at the constants: (8 / 4) = 2 multiplier.",
          "So, the x ratio must also be 2.",
          "a / 3 = 2 => a = 6"
        ],
        answer: "6"
      },
      {
        question: "If 2x - 4y = 8 and x - 2y = k have no solution, what can k NOT be?",
        steps: [
          "Look at Eq 1: 2, -4, 8.",
          "Eq 2 is divided by 2 to get 1, -2.",
          "To have 'No Solution', the constant 8 must NOT be divided by 2 into k.",
          "So k cannot be 4. If k = 4, it would be infinite solutions."
        ],
        answer: "4"
      },
      {
        question: "How many points do x + y = 3 and x + y = 5 have in common?",
        steps: [
          "Slopes are the same (1 and 1).",
          "Constants are different (3 and 5).",
          "Lines never cross. No solutions."
        ],
        answer: "0"
      }
    ],
    commonMistakes: [
      "Assuming same slopes means infinite. If the y-intercepts are different, it's No Solution!",
      "Forgetting to put both equations in the same order before comparing."
    ],
    quiz: [
      {
        id: "q2",
        text: "The system of equations y = 5x + 3 and y = ax + b has no solution. Which of the following MUST be true about a and b?",
        type: "multiple-choice",
        options: ["a = 5 and b = 3", "a = 5 and b ≠ 3", "a ≠ 5 and b = 3", "a ≠ 5 and b ≠ 3"],
        correctAnswer: "a = 5 and b ≠ 3",
        explanation: "No solution means parallel lines (same slope a=5, different y-intercept b≠3)."
      },
      {
        id: "q2-2",
        text: "How many solutions does the system 2x + 4y = 10 and x + 2y = 5 have?",
        type: "multiple-choice",
        options: ["None", "One", "Infinitely many", "Two"],
        correctAnswer: "Infinitely many",
        explanation: "Divide the first equation by 2: (2x/2 + 4y/2 = 10/2) => x + 2y = 5. It's the exact same line!"
      },
      {
        id: "q2-3",
        text: "For what value of m will the system y = 4x + 1 and y = mx + 5 have no solution?",
        type: "input",
        correctAnswer: "4",
        explanation: "No solution means the lines are parallel. Slopes must be equal, so m = 4."
      },
      {
        id: "q2-4",
        text: "If Ax + 3y = 6 and 2x + y = 2 have infinitely many solutions, what is A?",
        type: "input",
        correctAnswer: "6",
        explanation: "The second equation constants are 2, 1, 2. The first are A, 3, 6. Notice 3 = 1*3 and 6 = 2*3. So A must be 2*3 = 6."
      },
      {
        id: "q2-5",
        text: "How many points do the graphs of y = 3x - 4 and y = -3x + 4 have in common?",
        type: "multiple-choice",
        options: ["0", "1", "2", "Infinite"],
        correctAnswer: "1",
        explanation: "The slopes are 3 and -3. Since the slopes are different, the lines MUST cross at exactly one point."
      }
    ]
  }
];
