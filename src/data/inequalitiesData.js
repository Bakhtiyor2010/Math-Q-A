export const inequalityLessons = [
  {
    id: "diagnostic-test",
    title: "0. Diagnostic: Constraint Scan",
    icon: "Target",
    content: `
# Initial Diagnostic Test
No guidance. No reminders. Show me if you can handle constraints or if you'll crack under SAT pressure. 

### Rules:
1. Complete all 5 questions.
2. Speed is a factor.
3. If you fail the negative flip, you fail the test.
    `,
    examples: [
      {
        question: "Solve for $x$: $-3x + 5 > 17$.",
        steps: [
          "Subtract 5: $-3x > 12$.",
          "Divide by -3 and **FLIP**: $x < -4$."
        ],
        answer: "x < -4"
      },
      {
        question: "Solve $|x - 5| < 2$.",
        steps: [
          "Case 1: $x - 5 < 2 \\rightarrow x < 7$.",
          "Case 2: $x - 5 > -2 \\rightarrow x > 3$.",
          "Result: $3 < x < 7$."
        ],
        answer: "3 < x < 7"
      }
    ],
    quiz: [
      {
        id: "diag-1",
        text: "Solve: $2x - 10 \\le 4$.",
        type: "input",
        correctAnswer: "x <= 7",
        explanation: "$2x \\le 14 \\rightarrow x \\le 7$."
      },
      {
        id: "diag-2",
        text: "Solve: $-5x > 20$.",
        type: "input",
        correctAnswer: "x < -4",
        explanation: "Dividing by -5 flips the sign. $x < -4$."
      },
      {
        id: "diag-3",
        text: "Which of the following represents 'at least 10'?",
        type: "multiple-choice",
        options: ["x > 10", "x < 10", "x >= 10", "x <= 10"],
        correctAnswer: "x >= 10",
        explanation: "'At least' means that value or higher."
      },
      {
        id: "diag-4",
        text: "Solve: $|x| > 5$.",
        type: "multiple-choice",
        options: ["-5 < x < 5", "x > 5 or x < -5", "x > 5", "x < -5"],
        correctAnswer: "x > 5 or x < -5",
        explanation: "Absolute value greater than a positive means 'far away' from zero in both directions."
      },
      {
        id: "diag-5",
        text: "Solve: $2(x - 3) < 4x + 2$.",
        type: "input",
        correctAnswer: "x > -4",
        explanation: "$2x - 6 < 4x + 2 \\rightarrow -8 < 2x \\rightarrow -4 < x$ or $x > -4$."
      }
    ]
  },
  {
    id: "core-concept",
    title: "1. Core Concept: Solution Sets",
    icon: "Activity",
    content: `
# Inequalities are Regions, Not Points
An equation like $x = 5$ is a single point. 
An inequality like $x > 5$ is an entire universe of numbers.

### The Symbols:
- **$<$**: Less than (strictly smaller)
- **$>$**: Greater than (strictly larger)
- **$\\le$**: Less than or equal to (at most)
- **$\\ge$**: Greater than or equal to (at least)

### On the Number Line:
- **Open Circle $(\\circ)$**: Used for $<$ or $>$. The boundary is NOT included.
- **Closed Circle $(\\bullet)$**: Used for $\\le$ or $\\ge$. The boundary IS included.
    `,
    examples: [
      {
        question: "Is -5 a solution to $x > -5$?",
        steps: [
          "Check the symbol: It is strictly 'greater than'.",
          "-5 is not greater than -5."
        ],
        answer: "No"
      },
      {
        question: "Graph $x \\le 3$. Where do you shade?",
        steps: [
          "Closed circle at 3 because of the 'or equal to'.",
          "Numbers less than 3 are to the left."
        ],
        answer: "Left of 3"
      },
      {
        question: "Translate: 'The temperature T is no more than 100 degrees.'",
        steps: [
          "'No more than' means 100 is the max.",
          "$T$ must be 100 or smaller."
        ],
        answer: "T <= 100"
      }
    ],
    quiz: [
      {
        id: "cc-1",
        text: "Which symbol corresponds to an open circle on a number line?",
        type: "multiple-choice",
        options: ["<", "<=", ">=", "="],
        correctAnswer: "<",
        explanation: "Strict inequalities use open circles."
      },
      {
        id: "cc-2",
        text: "Is 0 a solution to $x \\ge 0$?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Equal sign is included."
      },
      {
        id: "cc-3",
        text: "Translate: 'At least 50 students are present.'",
        type: "multiple-choice",
        options: ["s > 50", "s < 50", "s >= 50", "s <= 50"],
        correctAnswer: "s >= 50",
        explanation: "'At least' means 50 or more."
      },
      {
        id: "cc-4",
        text: "If $x < 10$, is 10.000001 a potential solution?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "10.000001 is greater than 10."
      },
      {
        id: "cc-5",
        text: "Shading to the right of 5 with an open circle represents which inequality?",
        type: "input",
        correctAnswer: "x > 5",
        explanation: "Right means greater, open means no equal."
      }
    ]
  },
  {
    id: "linear-solving",
    title: "2. Solving: The Negative Rule",
    icon: "Move",
    content: `
# The Golden Rule of Inequalities
Solving an inequality is exactly like solving an equation, **EXCEPT** for one critical rule:

### The Flip:
If you **multiply** or **divide** both sides by a **NEGATIVE** number, you MUST **flip** the direction of the inequality sign.

**Why?** 
$2 < 5$ is true.
Divide by $-1$: $-2 < -5$ is FALSE.
You must flip: $-2 > -5$.
    `,
    examples: [
      {
        question: "Solve $-2x < 10$.",
        steps: [
          "Divide by -2.",
          "**Flip the sign**: $x > -5$."
        ],
        answer: "x > -5"
      },
      {
        question: "Solve $5 - x \\ge 8$.",
        steps: [
          "Subtract 5: $-x \\ge 3$.",
          "Multiply by -1 and **FLIP**: $x \\le -3$."
        ],
        answer: "x <= -3"
      },
      {
        question: "Solve $x/(-3) > 2$.",
        steps: [
          "Multiply by -3.",
          "**Flip the sign**: $x < -6$."
        ],
        answer: "x < -6"
      }
    ],
    quiz: [
      {
        id: "ls-1",
        text: "Solve: $-x > 5$.",
        type: "input",
        correctAnswer: "x < -5",
        explanation: "Multiply by -1 and flip."
      },
      {
        id: "ls-2",
        text: "Solve: $4x + 8 < 20$.",
        type: "input",
        correctAnswer: "x < 3",
        explanation: "$4x < 12 \\rightarrow x < 3$. No flip needed (dividing by positive 4)."
      },
      {
        id: "ls-3",
        text: "Solve: $-3x - 1 \\ge 8$.",
        type: "input",
        correctAnswer: "x <= -3",
        explanation: "$-3x \\ge 9 \\rightarrow x \\le -3$."
      },
      {
        id: "ls-4",
        text: "True or False: Adding a negative number to both sides requires flipping the sign.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Only multiplication/division by negatives requires a flip."
      },
      {
        id: "ls-5",
        text: "Solve: $10 - 2x < 4$.",
        type: "input",
        correctAnswer: "x > 3",
        explanation: "$-2x < -6 \\rightarrow x > 3$."
      }
    ]
  },
  {
    id: "compound",
    title: "3. Compound: AND vs. OR",
    icon: "Layers",
    content: `
# Multiple Conditions
Compound inequalities combine two conditions using **AND** or **OR**.

### 1. AND (In-between)
- **Form**: $a < x < b$
- **Meaning**: $x$ must be greater than $a$ **AND** less than $b$. This is the "overlap" region.

### 2. OR (Split)
- **Form**: $x < a$ or $x > b$
- **Meaning**: $x$ can satisfy **EITHER** condition. The regions usually point away from each other.
    `,
    examples: [
      {
        question: "Solve $-3 < x + 1 < 5$.",
        steps: [
          "Subtract 1 from all three parts.",
          "$-4 < x < 4$."
        ],
        answer: "-4 < x < 4"
      },
      {
        question: "Solve $2x < 10$ or $x - 5 > 5$.",
        steps: [
          "Solve 1: $x < 5$.",
          "Solve 2: $x > 10$.",
          "Result: $x < 5$ or $x > 10$."
        ],
        answer: "x < 5 or x > 10"
      },
      {
        question: "Represent 'x is at least 5 and no more than 15'.",
        steps: [
          "At least 5: $x \\ge 5$.",
          "No more than 15: $x \\le 15$.",
          "Combine: $5 \\le x \\le 15$."
        ],
        answer: "5 <= x <= 15"
      }
    ],
    quiz: [
      {
        id: "cp-1",
        text: "Solve: $1 \\le 2x - 3 \\le 7$.",
        type: "input",
        correctAnswer: "2 <= x <= 5",
        explanation: "$4 \\le 2x \\le 10 \\rightarrow 2 \\le x \\le 5$."
      },
      {
        id: "cp-2",
        text: "Which word represents the 'overlap' of two solution sets?",
        type: "multiple-choice",
        options: ["AND", "OR", "BOTH", "NEITHER"],
        correctAnswer: "AND",
        explanation: "Intersection."
      },
      {
        id: "cp-3",
        text: "Solve: $x + 2 < 0$ or $x - 2 > 0$.",
        type: "input",
        correctAnswer: "x < -2 or x > 2",
        explanation: "Standard split."
      },
      {
        id: "cp-4",
        text: "Is there any solution to $x < 5$ AND $x > 10$?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "No number is both less than 5 and greater than 10."
      },
      {
        id: "cp-5",
        text: "Solve: $-10 < -2x < -4$.",
        type: "input",
        correctAnswer: "2 < x < 5",
        explanation: "Divide by -2 and flip BOTH signs: $5 > x > 2$."
      }
    ]
  },
  {
    id: "abs-val",
    title: "4. Absolute Value Inequalities",
    icon: "Shield",
    content: `
# Distance as Constraint
Remember that $|x|$ is the distance from zero.

### 1. The Sandwich Rule ($<$)
- **If $|x| < a$**: This means $x$ is **CLOSE** to zero.
- **Rule**: $-a < x < a$

### 2. The Split Rule ($>$)
- **If $|x| > a$**: This means $x$ is **FAR** from zero.
- **Rule**: $x < -a$ OR $x > a$

**Elite Strategy:** Always isolate the absolute value bars first before splitting into cases.
    `,
    examples: [
      {
        question: "Solve $|2x - 1| < 5$.",
        steps: [
          "Sandwich: $-5 < 2x - 1 < 5$.",
          "Add 1: $-4 < 2x < 6$.",
          "Divide by 2: $-2 < x < 3$."
        ],
        answer: "-2 < x < 3"
      },
      {
        question: "Solve $|x + 3| \\ge 7$.",
        steps: [
          "Case 1 (far right): $x + 3 \\ge 7 \\rightarrow x \\ge 4$.",
          "Case 2 (far left): $x + 3 \\le -7 \\rightarrow x \\le -10$.",
          "Result: $x \\ge 4$ or $x \\le -10$."
        ],
        answer: "x <= -10 or x >= 4"
      },
      {
        question: "Solve $2|x| + 5 < 11$.",
        steps: [
          "Isolate bars: $2|x| < 6 \\rightarrow |x| < 3$.",
          "Sandwich: $-3 < x < 3$."
        ],
        answer: "-3 < x < 3"
      }
    ],
    quiz: [
      {
        id: "av-1",
        text: "Solve: $|x| < 10$.",
        type: "input",
        correctAnswer: "-10 < x < 10",
        explanation: "Distance from zero is less than 10."
      },
      {
        id: "av-2",
        text: "Solve: $|x - 5| > 2$.",
        type: "input",
        correctAnswer: "x < 3 or x > 7",
        explanation: "$x-5 > 2 \\rightarrow x>7$; $x-5 < -2 \\rightarrow x<3$."
      },
      {
        id: "av-3",
        text: "How many cases do you generally check for absolute value inequalities?",
        type: "input",
        correctAnswer: "2",
        explanation: "Positive and negative distance."
      },
      {
        id: "av-4",
        text: "Solve: $|x| < -5$.",
        type: "multiple-choice",
        options: ["x < 5", "x > -5", "No Solution", "All Real Numbers"],
        correctAnswer: "No Solution",
        explanation: "Absolute value (distance) can never be less than a negative."
      },
      {
        id: "av-5",
        text: "Solve: $|x| + 10 \\ge 5$.",
        type: "multiple-choice",
        options: ["x >= -5", "No Solution", "All Real Numbers", "x <= -5"],
        correctAnswer: "All Real Numbers",
        explanation: "$|x| \\ge -5$. Absolute value is always non-negative, so it is always greater than -5."
      }
    ]
  },
  {
    id: "both-sides",
    title: "5. Variables on Both Sides",
    icon: "Activity",
    content: `
# Maintaining Balance
Isolate the variable on one side and the numbers on the other. 

### Elite Tip: 
If you can, move the variable to the side where the coefficient is **LARGER** (more positive). This helps you avoid dividing by a negative and forgetting to flip the sign.

**Example**: $3x + 10 > 5x$
Instead of $-2x > -10$, use $10 > 2x \\rightarrow 5 > x$.
    `,
    examples: [
      {
        question: "Solve $7x - 5 < 4x + 10$.",
        steps: [
          "Subtract $4x$: $3x - 5 < 10$.",
          "Add 5: $3x < 15$.",
          "Divide by 3: $x < 5$."
        ],
        answer: "x < 5"
      },
      {
        question: "Solve $2(x - 4) \\ge 5x + 1$.",
        steps: [
          "Distribute: $2x - 8 \\ge 5x + 1$.",
          "Subtract $2x$: $-8 \\ge 3x + 1$.",
          "Subtract 1: $-9 \\ge 3x$.",
          "Divide: $-3 \\ge x$ or $x \\le -3$."
        ],
        answer: "x <= -3"
      },
      {
        question: "Solve $x/2 + 5 > x - 2$.",
        steps: [
          "Subtract $x/2$: $5 > x/2 - 2$.",
          "Add 2: $7 > x/2$.",
          "Multiply: $14 > x$ or $x < 14$."
        ],
        answer: "x < 14"
      }
    ],
    quiz: [
      {
        id: "bs-1",
        text: "Solve: $3x < x + 10$.",
        type: "input",
        correctAnswer: "x < 5",
        explanation: "$2x < 10 \\rightarrow x < 5$."
      },
      {
        id: "bs-2",
        text: "Solve: $5x - 7 \\ge 2x + 8$.",
        type: "input",
        correctAnswer: "x >= 5",
        explanation: "$3x \\ge 15 \\rightarrow x \\ge 5$."
      },
      {
        id: "bs-3",
        text: "Solve: $10 - x < 2x + 1$.",
        type: "input",
        correctAnswer: "x > 3",
        explanation: "$9 < 3x \\rightarrow 3 < x$."
      },
      {
        id: "bs-4",
        text: "Solve: $-2x + 4 > -4x + 10$.",
        type: "input",
        correctAnswer: "x > 3",
        explanation: "$2x > 6 \\rightarrow x > 3$."
      },
      {
        id: "bs-5",
        text: "True or False: $x < 5$ is the same as $5 > x$.",
        type: "multiple-choice",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Sign direction is consistent relative to the terms."
      }
    ]
  },
  {
    id: "word-problems",
    title: "6. Word Problems: Translation",
    icon: "Brain",
    content: `
# SAT Translation Dictionary
- **"At least" / "Minimum"** $\\rightarrow \\ge$
- **"At most" / "Maximum" / "No more than"** $\\rightarrow \\le$
- **"Greater than" / "More than"** $\\rightarrow >$
- **"Fewer than" / "Less than"** $\\rightarrow <$

### Strategy:
1. Identify the variable ($x$).
2. Identify the budget or limit ($B$).
3. Build the relationship.
    `,
    examples: [
      {
        question: "John has $50. He buys a shirt for $20 and some socks for $5 each. How many socks can he buy?",
        steps: [
          "Constraint: Total cost must be **no more than** 50.",
          "Eq: $20 + 5x \\le 50$.",
          "$5x \\le 30 \\rightarrow x \\le 6$."
        ],
        answer: "x <= 6"
      },
      {
        question: "A elevator has a limit of 1000 lbs. If 3 people weigh 500 lbs total, and you carry boxes weighing 40 lbs each. Max boxes?",
        steps: [
          "Eq: $500 + 40b \\le 1000$.",
          "$40b \\le 500 \\rightarrow b \\le 12.5$.",
          "Since you can't have half a box, 12 is the max."
        ],
        answer: "12"
      },
      {
        question: "You need to score at least an 80 Average across two tests. First test was 75. What do you need on the second?",
        steps: [
          "$\\\\frac{75 + x}{2} \\ge 80$.",
          "$75 + x \\ge 160 \\rightarrow x \\ge 85$."
        ],
        answer: "x >= 85"
      }
    ],
    quiz: [
      {
        id: "wp-1",
        text: "You have $100 and spend $x$. You want at least $20 remaining. Formula?",
        type: "multiple-choice",
        options: ["100 - x > 20", "100 - x >= 20", "100 + x <= 20", "x - 100 >= 20"],
        correctAnswer: "100 - x >= 20",
        explanation: "At least means >=."
      },
      {
        id: "wp-2",
        text: "Maximum weight is 200. Already have 50. Add x lbs. Constraint?",
        type: "input",
        correctAnswer: "50+x <= 200",
        explanation: "Maximum is <="
      },
      {
        id: "wp-3",
        text: "A stadium holds 50,000. It is 40% full. How many more people can enter?",
        type: "input",
        correctAnswer: "30000",
        explanation: "50,000 * 0.6 = 30,000."
      },
      {
        id: "wp-4",
        text: "A rental car costs $40 plus $0.50 per mile. Your budget is $100. Max miles?",
        type: "input",
        correctAnswer: "120",
        explanation: "$40 + 0.5m \\le 100 \\rightarrow 0.5m \\le 60 \\rightarrow m \\le 120$."
      },
      {
        id: "wp-5",
        text: "Which inequality represents 'A number x increased by 5 is no more than 15'?",
        type: "input",
        correctAnswer: "x+5 <= 15",
        explanation: "No more than is <="
      }
    ]
  },
  {
    id: "systems",
    title: "7. Systems of Inequalities",
    icon: "Layers",
    content: `
# Overlapping Regions
In a system of inequalities, a solution must satisfy **EVERY** inequality in the system.

### Visualizing:
- The solution set is the region where the shaded areas overlap.
- If the regions don't overlap, there is **no solution**.

### Checking Points:
To see if $(x, y)$ is a solution, plug it into all equations. It must result in TRUE for all of them.
    `,
    examples: [
      {
        question: "Is (2, 2) a solution to $x + y > 3$ and $y < x + 1$?",
        steps: [
          "Check 1: $2 + 2 > 3$. 4 > 3. True.",
          "Check 2: $2 < 2 + 1$. 2 < 3. True.",
          "Both are true."
        ],
        answer: "Yes"
      },
      {
        question: "System: $y > 2$ and $y < 0$. Solutions?",
        steps: [
          "No number can be both greater than 2 and less than 0."
        ],
        answer: "No solution"
      },
      {
        question: "Find a solution for $x > 5$ and $y > x$.",
        steps: [
          "Pick x = 6. Then y must be greater than 6. Pick 7.",
          "Try (6, 7). 6 > 5 (True); 7 > 6 (True)."
        ],
        answer: "(6, 7) (Many possible)"
      }
    ],
    quiz: [
      {
        id: "si-1",
        text: "A solution to a system of inequalities must satisfy how many of the inequalities?",
        type: "multiple-choice",
        options: ["At least one", "Exactly one", "All of them", "None of them"],
        correctAnswer: "All of them",
        explanation: "Definition of system solution."
      },
      {
        id: "si-2",
        text: "Is (0,0) a solution to $y > x + 1$ and $y < 5$?",
        type: "multiple-choice",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "$0 > 1$ is False."
      },
      {
        id: "si-3",
        text: "In a graph, the solution set is where shading...",
        type: "multiple-choice",
        options: ["Starts", "Ends", "Overlaps", "Disappears"],
        correctAnswer: "Overlaps",
        explanation: "Intersection region."
      },
      {
        id: "si-4",
        text: "System: $x > 0, y > 0$. Which quadrant is this?",
        type: "multiple-choice",
        options: ["I", "II", "III", "IV"],
        correctAnswer: "I",
        explanation: "Both positive."
      },
      {
        id: "si-5",
        text: "If $y > x$ and $y < x$, the system has...",
        type: "multiple-choice",
        options: ["Infinite solutions", "No solution", "One solution", "Negative solutions"],
        correctAnswer: "No solution",
        explanation: "Can't be both greater and less than the same value."
      }
    ]
  },
  {
    id: "mixed-mastery",
    title: "8. Mixed SAT Mastery",
    icon: "Zap",
    content: `
# High Intensity Performance
Combination of algebra, absolute value, and word problems. Solve them all accurately and fast.

### Checklist:
1. Flipping correctly?
2. Distributing correctly?
3. Wording interpreted correctly?
4. Absolute value logic applied?
    `,
    examples: [
      {
        question: "Three times a number x decreased by 5 is at least 10 and at most 25. Solve for x.",
        steps: [
          "Compound: $10 \\le 3x - 5 \\le 25$.",
          "Add 5: $15 \\le 3x \\le 30$.",
          "Divide: $5 \\le x \\le 10$."
        ],
        answer: "5 <= x <= 10"
      },
      {
        question: "Solve $| -2x + 4 | < 6$.",
        steps: [
          "$-6 < -2x + 4 < 6$.",
          "$-10 < -2x < 2$.",
          "Divide by -2 and flip EVERYTHING: $5 > x > -1$.",
          "Rewrite: $-1 < x < 5$."
        ],
        answer: "-1 < x < 5"
      },
      {
        question: "You have 200 space in a truck. Boxes A are 10 space, Boxes B are 20 space. You must have at least 5 of Box A. Eq?",
        steps: [
          "Total space: $10A + 20B \\le 200$.",
          "A limit: $A \\ge 5$."
        ],
        answer: "System: 10A + 20B <= 200, A >= 5"
      }
    ],
    quiz: [
      {
        id: "mm-1",
        text: "If $2x - 5 < 15$ and $3x + 1 > 10$. Solve.",
        type: "input",
        correctAnswer: "3 < x < 10",
        explanation: "$2x < 20 \\rightarrow x < 10$; $3x > 9 \\rightarrow x > 3$."
      },
      {
        id: "mm-2",
        text: "Solve: $-1/2x > 4$.",
        type: "input",
        correctAnswer: "x < -8",
        explanation: "Multiply by -2 and flip."
      },
      {
        id: "mm-3",
        text: "Wait! Solve $|x - 10| < -1$.",
        type: "multiple-choice",
        options: ["x < 9", "x > 11", "No solution", "All Real Numbers"],
        correctAnswer: "No solution",
        explanation: "Abs val < negative is impossible."
      },
      {
        id: "mm-4",
        text: "A number is at least 2 and its triple is no more than 15. Range?",
        type: "input",
        correctAnswer: "2 <= x <= 5",
        explanation: "$x \\ge 2$ and $3x \\le 15$."
      },
      {
        id: "mm-5",
        text: "Solve: $2x + 10 < 2x + 5$.",
        type: "multiple-choice",
        options: ["x < 5", "No solution", "Infinite solutions", "x > 0"],
        correctAnswer: "No solution",
        explanation: "$10 < 5$ is False."
      }
    ]
  }
];
