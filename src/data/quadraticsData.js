export const quadraticsLessons = [
  {
    id: "diagnostic-quadratics",
    title: "0. Diagnostic: The Performance Scan",
    icon: "Target",
    content: `
# Initial Diagnostic Test
No explanations. No formulas. Show me what you know right now. If you fail these, you aren't ready for elite SAT quadratics yet.

### Rule:
1. Attempt all 5 questions.
2. If you don't know, guess based on logic.
3. Speed matters.
    `,
    examples: [
      {
        question: "If a quadratic equation $ax^2 + bx + c = 0$ has exactly one real solution, what is the value of the discriminant?",
        steps: ["Checking conceptual understanding of roots."],
        answer: "$0$"
      },
      {
        question: "Find the vertex of $y = (x-4)^2 + 7$.",
        steps: ["Testing vertex form recognition."],
        answer: "$(4, 7)$"
      }
    ],
    quiz: [
      {
        id: "q-diag-1",
        text: "If the discriminant ($b^2 - 4ac$) of a quadratic is negative, how many real solutions are there?",
        type: "input",
        correctAnswer: "0",
        explanation: "A negative discriminant means there are zero real solutions (only complex ones)."
      },
      {
        id: "q-diag-2",
        text: "Solve for $x$: $x^2 - 7x + 12 = 0$. (Provide one solution if multiple exist)",
        type: "input",
        correctAnswer: "3",
        explanation: "Factoring yields $(x-3)(x-4)=0$. Solutions are $3$ and $4$."
      },
      {
        id: "q-diag-3",
        text: "What is the vertex of $y = -2(x+5)^2 - 8$?",
        type: "input",
        correctAnswer: "(-5, -8)",
        explanation: "In vertex form $y = a(x-h)^2 + k$, the vertex is $(h, k)$. Here $h=-5, k=-8$."
      },
      {
        id: "q-diag-4",
        text: "If $x^2 + kx + 49 = (x + m)^2$ for all values of $x$ and $m < 0$, what is the value of $k$?",
        type: "input",
        correctAnswer: "-14",
        explanation: "$(x+m)^2 = x^2 + 2mx + m^2$. So $m^2 = 49$, meaning $m = -7$ (since $m<0$). Then $k = 2m = -14$."
      },
      {
        id: "q-diag-5",
        text: "What is the axis of symmetry for the parabola $y = (x-3)^2 + 4$?",
        type: "input",
        correctAnswer: "x=3",
        explanation: "The axis of symmetry passes through the $x$-coordinate of the vertex ($h=3$)."
      }
    ]
  },
  {
    id: "quad-forms",
    title: "1. The Trinity: Standard, Vertex, and Factored",
    icon: "Layers",
    content: `
# Every Parabola has Three Faces
On the SAT, recognizing which form is given tells you the answer's location instantly.

### 1. Standard Form: $y = ax^2 + bx + c$
- **$y$-intercept:** $(0, c)$
- **Axis of Symmetry:** $x = -b / (2a)$
- **Vertex $x$-coord:** Always $-b / (2a)$

### 2. Vertex Form: $y = a(x - h)^2 + k$
- **Vertex:** $(h, k)$
- **Direction:** If $a > 0$, opens up. If $a < 0$, opens down.
- **Conversion:** Use "Completing the Square."

### 3. Factored Form: $y = a(x - r_1)(x - r_2)$
- **$x$-intercepts (Roots):** $(r_1, 0)$ and $(r_2, 0)$
- **Vertex Location:** Exactly halfway between $r_1$ and $r_2$.
    `,
    examples: [
      {
        question: "Find the vertex of $y = x^2 - 6x + 10$ by converting to vertex form.",
        steps: [
          "Take half of $b$ ($6/2 = 3$), square it ($9$).",
          "Rewrite: $y = (x^2 - 6x + 9) + 10 - 9$.",
          "Result: $y = (x-3)^2 + 1$."
        ],
        answer: "$(3, 1)$"
      },
      {
        question: "A parabola has roots at $-2$ and $6$. What is the $x$-coordinate of the vertex?",
        steps: [
          "The vertex is the midpoint of the roots.",
          "Midpoint = $(-2 + 6) / 2 = 2$."
        ],
        answer: "$x = 2$"
      }
    ],
    commonMistakes: [
      "Mixing up the sign in vertex form: $y = (x+3)^2$ has $h = -3$.",
      "Forgetting to multiply the constant added when completing the square if $a \\neq 1$."
    ],
    quiz: [
      {
        id: "f-1",
        text: "What is the $y$-intercept of $y = 3x^2 - 5x + 7$?",
        type: "input",
        correctAnswer: "7",
        explanation: "The $c$ term in standard form is the $y$-intercept."
      },
      {
        id: "f-2",
        text: "Find the vertex of $y = 2(x-1)^2 + 5$.",
        type: "input",
        correctAnswer: "(1, 5)",
        explanation: "Vertex form $(h, k)$."
      },
      {
        id: "f-3",
        text: "If $y = (x-2)(x-6)$, what is the $x$-coordinate of the vertex?",
        type: "input",
        correctAnswer: "4",
        explanation: "Midpoint of 2 and 6 is 4."
      },
      {
        id: "f-4",
        text: "Convert $y = x^2 + 8x + 15$ to vertex form.",
        type: "multiple-choice",
        options: ["y = (x+4)^2 - 1", "y = (x+4)^2 + 1", "y = (x-4)^2 - 1", "y = (x+8)^2 - 49"],
        correctAnswer: "y = (x+4)^2 - 1",
        explanation: "Half of 8 is 4, squared is 16. $y = (x^2 + 8x + 16) + 15 - 16 = (x+4)^2 - 1$."
      }
    ]
  },
  {
    id: "quad-solving",
    title: "2. Solving: Factoring vs. Formula",
    icon: "Shield",
    content: `
# Solving Like a Pro
SAT math isn't about working hard; it's about working fast.

### 1. Factoring (Priority)
Use this if the roots look like integers. 
- Look for two numbers that multiply to $ac$ and add to $b$.

### 2. Quadratic Formula
$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- Use ONLY if factoring is obviously impossible or the answers contain square roots.

### 3. Square Root Method
If $b=0$, e.g., $x^2 - 25 = 0$, just move the number and take the $\\pm \\sqrt{}$.
    `,
    examples: [
      {
        question: "Solve $x^2 + 5x - 6 = 0$.",
        steps: [
          "Find numbers that multiply to $-6$ and add to $5$.",
          "Numbers are $6$ and $-1$.",
          "$(x+6)(x-1) = 0$."
        ],
        answer: "$x = -6, 1$"
      },
      {
        question: "Solve $2x^2 + 4x - 1 = 0$.",
        steps: [
          "Factoring failed? Formula it.",
          "$x = [-4 \\pm \\sqrt{16 - 4(2)(-1)}] / 4$",
          "$x = [-4 \\pm \\sqrt{24}] / 4 = [-4 \\pm 2\\sqrt{6}] / 4 = -1 \\pm \\frac{\\sqrt{6}}{2}$"
        ],
        answer: "$-1 \\pm \\frac{\\sqrt{6}}{2}$"
      }
    ],
    quiz: [
      {
        id: "s-1",
        text: "Solve $x^2 - 10x + 25 = 0$.",
        type: "input",
        correctAnswer: "5",
        explanation: "$(x-5)^2 = 0$."
      },
      {
        id: "s-2",
        text: "If $x^2 = 49$, what are all possible values of $x$?",
        type: "multiple-choice",
        options: ["7 only", "-7 only", "7 and -7", "None"],
        correctAnswer: "7 and -7",
        explanation: "Remember the $\\pm$ when taking square roots!"
      },
      {
        id: "s-3",
        text: "In $3x^2 + 7x + 1 = 0$, what is the discriminant?",
        type: "input",
        correctAnswer: "37",
        explanation: "$b^2 - 4ac = 49 - 4(3)(1) = 49 - 12 = 37$."
      }
    ]
  },
  {
    id: "quad-shortcuts",
    title: "3. The SAT Shortcuts: Sum & Product",
    icon: "Zap",
    content: `
# Don't Solve, Summarize
If the SAT asks for the "sum of the solutions" or the "product of the solutions," **NEVER** find the solutions individually. Use these:

### 1. Sum of Roots ($r_1 + r_2$)
$$\\text{Sum} = -\\frac{b}{a}$$

### 2. Product of Roots ($r_1 \\times r_2$)
$$\\text{Product} = \\frac{c}{a}$$

### 3. Discriminant ($D = b^2 - 4ac$)
- $D > 0$: **2 Real Solutions**
- $D = 0$: **1 Real Solution** (Double root)
- $D < 0$: **0 Real Solutions**
    `,
    examples: [
      {
        question: "Find the sum of the solutions to $5x^2 - 100x + 1 = 0$.",
        steps: [
          "Don't use the formula!",
          "Sum = $-b/a = -(-100)/5 = 20$."
        ],
        answer: "$20$"
      },
      {
        question: "How many real solutions does $x^2 + 4x + 5 = 0$ have?",
        steps: [
          "Check Discriminant: $b^2 - 4ac = 16 - 20 = -4$.",
          "Since $D < 0$, there are no real solutions."
        ],
        answer: "$0$"
      }
    ],
    quiz: [
      {
        id: "sh-1",
        text: "What is the product of the solutions to $2x^2 + 8x - 12 = 0$?",
        type: "input",
        correctAnswer: "-6",
        explanation: "Product = $c/a = -12/2 = -6$."
      },
      {
        id: "sh-2",
        text: "If the sum of roots of $x^2 + kx + 10 = 0$ is 7, what is k?",
        type: "input",
        correctAnswer: "-7",
        explanation: "Sum = $-b/a = -k/1 = 7$. So $k = -7$."
      },
      {
        id: "sh-3",
        text: "For $kx^2 + 4x + 1 = 0$ to have exactly one real solution, what must k be?",
        type: "input",
        correctAnswer: "4",
        explanation: "$b^2 - 4ac = 16 - 4k = 0 \\rightarrow 4k = 16 \\rightarrow k = 4$."
      }
    ]
  },
  {
    id: "quad-graphing",
    title: "4. Graph Mastery & Transformations",
    icon: "Activity",
    content: `
# Visualizing the Parabola
The SAT tests how the numbers in the equation change the graph.

### Transformations: $y = a(x - h)^2 + k$
- **$k$: Vertical Shift.** ($+k$ is up, $-k$ is down).
- **$h$: Horizontal Shift.** ($+h$ is left, $-h$ is right — counter-intuitive!).
- **$a$: Width & Direction.**
  - $|a| > 1$: Narrower (Vertical stretch).
  - $0 < |a| < 1$: Wider (Vertical compression).
  - $-a$: Upside down reflection.

### Symmery Insight
Points with the same $y$-value are always equidistant from the axis of symmetry $x=h$.
    `,
    examples: [
      {
        question: "If $f(x) = x^2$ is shifted 3 units right and 2 units down, what is the new equation?",
        steps: [
          "Right 3 $\\rightarrow h = 3$. New part: $(x-3)^2$.",
          "Down 2 $\\rightarrow k = -2$.",
          "Combine: $y = (x-3)^2 - 2$."
        ],
        answer: "$y = (x-3)^2 - 2$"
      },
      {
        question: "How does the graph of $g(x) = 3(x+5)^2 + 1$ compare to $f(x) = x^2$?",
        steps: [
          "Lead coefficient 3: Vertical stretch (narrower).",
          "$(x+5)$: Horizontal shift 5 units LEFT.",
          "$+1$: Vertical shift 1 unit UP."
        ],
        answer: "Narrower, Left 5, Up 1"
      },
      {
        question: "Given the vertex (4, -3), if the parabola opens down, write a possible equation.",
        steps: [
          "Vertex (4, -3) $\\rightarrow y = a(x-4)^2 - 3$.",
          "Opens down $\\rightarrow a < 0$.",
          "Example: $y = -1(x-4)^2 - 3$."
        ],
        answer: "$y = -(x-4)^2 - 3$"
      }
    ],
    quiz: [
      {
        id: "g-1",
        text: "Which value of 'a' creates the widest parabola: 0.5, 1, or 5?",
        type: "input",
        correctAnswer: "0.5",
        explanation: "Values closer to 0 make the parabola wider."
      },
      {
        id: "g-2",
        text: "The vertex is (2, 5). If (0, 9) is on the parabola, find the other point with y=9.",
        type: "input",
        correctAnswer: "(4, 9)",
        explanation: "Distance from 0 to 2 is 2. So the other point is $2+2=4$."
      },
      {
        id: "g-3",
        text: "How does $y = -x^2$ compare to $y = x^2$?",
        type: "multiple-choice",
        options: ["Shifted up", "Shifted left", "Reflected over x-axis", "No difference"],
        correctAnswer: "Reflected over x-axis",
        explanation: "A negative lead coefficient flips it upside down."
      }
    ]
  },
  {
    id: "quad-tricks",
    title: "5. Pattern Recognition (Secret SAT Tricks)",
    icon: "Key",
    content: `
# The Elite Layer
Hidden quadratics and substitution traps.

### 1. Substitution (U-substitution)
If you see $(x-3)^2 + 5(x-3) + 6 = 0$:
- Let $u = (x-3)$.
- Solve $u^2 + 5u + 6 = 0 \\rightarrow (u+2)(u+3) = 0$.
- So $u = -2, -3$.
- Then $x-3 = -2 \\rightarrow x=1$ and $x-3 = -3 \\rightarrow x=0$.

### 2. Vertex form in word problems
"Maximum" or "Minimum" always means "find the vertex."
"Initial height" means "find the $y$-intercept ($x=0$)."
"Hits the ground" means "find the positive $x$-intercept (root)."
    `,
    examples: [
      {
        question: "Find the max value of $h(t) = -16t^2 + 64t + 5$.",
        steps: [
          "Find vertex $t = -64 / (2 \\times -16) = 2$.",
          "Plugin $t=2$: $h(2) = -16(4) + 64(2) + 5$.",
          "$-64 + 128 + 5 = 69$."
        ],
        answer: "$69$"
      },
      {
        question: "Factor $x^4 - 13x^2 + 36 = 0$.",
        steps: [
          "Let $u = x^2$. Equation becomes $u^2 - 13u + 36 = 0$.",
          "Factors: $(u-4)(u-9) = 0$.",
          "Substitute back: $(x^2-4)(x^2-9) = 0$.",
          "$(x-2)(x+2)(x-3)(x+3) = 0$."
        ],
        answer: "$x = \\pm 2, \\pm 3$"
      },
      {
        question: "A rectangle has an area of 48. The length is $x+2$ and width is $x$. Find x.",
        steps: [
          "$x(x+2) = 48 \\rightarrow x^2 + 2x - 48 = 0$.",
          "$(x+8)(x-6) = 0$.",
          "Side length cannot be negative, so $x=6$."
        ],
        answer: "$x = 6$"
      }
    ],
    quiz: [
      {
        id: "t-1",
        text: "Find the x-intercepts of $(x-5)^2 - 4 = 0$.",
        type: "input",
        correctAnswer: "3, 7",
        explanation: "$(x-5)^2 = 4 \\rightarrow x-5 = \\pm 2 \\rightarrow x = 5 \\pm 2 = 7, 3$."
      },
      {
        id: "t-2",
        text: "A projectile's height is $h = -5t^2 + 20t + 2$. At what time does it reach max height?",
        type: "input",
        correctAnswer: "2",
        explanation: "$t = -b/2a = -20 / -10 = 2$."
      },
      {
        id: "t-3",
        text: "Solve $x^4 - 5x^2 + 4 = 0$ for its largest root.",
        type: "input",
        correctAnswer: "2",
        explanation: "Treat $x^2$ as $u$. $u^2 - 5u + 4 = 0 \\rightarrow (u-1)(u-4)=0 \\rightarrow x^2=1, 4$. Largest $x$ is 2."
      }
    ]
  },
  {
    id: "quad-mixed-drill",
    title: "6. The Elite SAT Mixed Drill",
    icon: "Target",
    content: `
# The Final Push
This is where we separate the high scorers from the masters. These problems combine multiple concepts: symmetry, shortcuts, and transformations.

### Remember the Elite Rules:
1. **Shortcut First:** Can you use $-b/a$ or $c/a$?
2. **Symmetry Second:** Is the vertex the midpoint?
3. **Plug-and-Chug Last:** Only use the formula if all else fails.
    `,
    examples: [
      {
        question: "A parabola $y = ax^2 + bx + c$ passes through $(0, 5)$ and $(-2, 21)$. If the axis of symmetry is $x = 1$, find the value of $a$.",
        steps: [
          "From $(0, 5)$, we know $c = 5$.",
          "Axis of symmetry $h = -b/(2a) = 1 \\rightarrow b = -2a$.",
          "Plug $(-2, 21)$ into $y = ax^2 + bx + 5$: $21 = a(-2)^2 + b(-2) + 5$.",
          "$21 = 4a - 2b + 5 \\rightarrow 16 = 4a - 2b$.",
          "Substitute $b = -2a$: $16 = 4a - 2(-2a) \\rightarrow 16 = 8a$.",
          "Result: $a = 2$."
        ],
        answer: "$a = 2$"
      },
      {
        question: "If $f(x) = (x-k)(x-10)$ and the vertex of the graph $y=f(x)$ is at $(7, -9)$, what is the value of $k$?",
        steps: [
          "The $x$-coordinate of vertex (7) is the midpoint of the roots $k$ and $10$.",
          "$(k + 10) / 2 = 7$.",
          "$k + 10 = 14 \\rightarrow k = 4$."
        ],
        answer: "$k = 4$"
      },
      {
        question: "In the equation $3x^2 + px + 12 = 0$, for what value of $p$ does the equation have exactly one real solution, given $p > 0$?",
        steps: [
          "Exactly one solution means $D = b^2 - 4ac = 0$.",
          "$p^2 - 4(3)(12) = 0$.",
          "$p^2 - 144 = 0 \\rightarrow p = 12$ (since $p>0$)."
        ],
        answer: "$p = 12$"
      }
    ],
    quiz: [
      {
        id: "md-1",
        text: "The sum of the solutions to $x^2 - 14x + 40 = 0$ is equal to what value?",
        type: "input",
        correctAnswer: "14",
        explanation: "Sum = $-b/a = -(-14)/1 = 14$."
      },
      {
        id: "md-2",
        text: "If $y = a(x+2)(x-4)$ passes through $(0, -16)$, find the value of $a$.",
        type: "input",
        correctAnswer: "2",
        explanation: "$-16 = a(0+2)(0-4) \\rightarrow -16 = -8a \\rightarrow a = 2$."
      },
      {
        id: "md-3",
        text: "A parabola has a vertex at $(5, -2)$. If the point $(3, 6)$ is on the graph, what is the value of $y$ when $x=7$?",
        type: "input",
        correctAnswer: "6",
        explanation: "By symmetry, points equidistant from the vertex $x=5$ have the same $y$. 3 and 7 are both 2 units away from 5. So $y=6$."
      },
      {
        id: "md-4",
        text: "How many real solutions are there for $2x^2 - 3x + 5 = 0$?",
        type: "input",
        correctAnswer: "0",
        explanation: "$D = (-3)^2 - 4(2)(5) = 9 - 40 = -31$. Negative discriminant = 0 real solutions."
      },
      {
        id: "md-5",
        text: "Find the product of the solutions to $4x^2 - 8x - 100 = 0$.",
        type: "input",
        correctAnswer: "-25",
        explanation: "Product = $c/a = -100/4 = -25$."
      }
    ]
  }
];
