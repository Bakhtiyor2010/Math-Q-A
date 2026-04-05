import { TrendingUp, Calculator, LineChart, Zap } from 'lucide-react';

export const exponentialLessons = [
  {
    id: "growth-decay-basics",
    title: "1. Exponential Growth & Decay",
    icon: "TrendingUp",
    content: `
# Mastering Exponential Growth & Decay

Exponential functions model some of the most dynamic real-world scenarios. Unlike linear functions that add the same amount every time, exponential functions **multiply** by a constant factor.

### The Foundation
Every exponential problem on the SAT follows this blueprint:
$$y = a(b)^x$$

- **$a$ is the Starting Point** (the initial amount when $x=0$).
- **$b$ is the Multiplier** (what you multiply the start amount by each time).

### Calculating the Multiplier
Add or subtract the percentage change from 1.00.
- Increase by 5%? Multiplier = **1.05**.
- Decrease by 12%? Multiplier = **0.88**.
    `,
    examples: [
      {
        question: "A population of 1,200 birds increases by 5% every year. Write an equation for the population P after t years.",
        steps: [
            "Start Number (a): 1,200",
            "Multiplier (b): 1.05",
            "Combine them: P = 1,200(1.05)^t"
        ],
        answer: "P = 1,200(1.05)^t"
      },
      {
        question: "A car worth $25,000 depreciates by 12% each year. What is its value after 3 years?",
        steps: [
            "Start Number (a): 25,000",
            "Multiplier (b): 0.88",
            "Equation: V = 25,000(0.88)^t",
            "Calculate for t=3: 25,000 * (0.88 * 0.88 * 0.88) ≈ 17,037"
        ],
        answer: "$17,037"
      },
      {
        question: "A stock starts at $100 and doubles every year. Equation?",
        steps: [
          "Start (a) = 100",
          "Multiplier (b) = 2",
          "Eq: y = 100(2)^t"
        ],
        answer: "y = 100(2)^t"
      },
      {
        question: "A substance starts at 500g and halves every hour. Equation?",
        steps: [
          "Start (a) = 500",
          "Multiplier (b) = 0.5",
          "Eq: y = 500(0.5)^t"
        ],
        answer: "y = 500(0.5)^t"
      },
      {
        question: "A bank account earns 2% interest. After 10 years, balance?",
        steps: [
          "Start (a) = a",
          "Multiplier (b) = 1.02",
          "Eq: y = a(1.02)^10"
        ],
        answer: "y = a(1.02)^10"
      }
    ],
    commonMistakes: [
      "Using the percent number as the base (e.g., using 5 instead of 1.05).",
      "Treating 5% as 0.5 instead of 0.05."
    ],
    quiz: [
      {
        id: "qe1-1",
        text: "In the equation y = 200(1.15)^x, what is the percent increase?",
        type: "input",
        correctAnswer: "15",
        explanation: "The base is 1.15. 1.15 - 1 = 0.15 = 15%."
      },
      {
        id: "qe1-2",
        text: "A substance starts at 80g and decays at 20% per hour. Equation?",
        type: "multiple-choice",
        options: ["M = 80(0.20)^h", "M = 80(0.80)^h", "M = 80(1.20)^h", "M = 80 - 20h"],
        correctAnswer: "M = 80(0.80)^h",
        explanation: "1 - 0.20 = 0.80. So M = 80(0.80)^h."
      },
      {
        id: "qe1-3",
        text: "What is the initial amount in the function f(x) = 450(1.03)^x?",
        type: "input",
        correctAnswer: "450",
        explanation: "The 'a' value is 450."
      },
      {
        id: "qe1-4",
        text: "If a population triples every year, what is the multiplier (b)?",
        type: "input",
        correctAnswer: "3",
        explanation: "Tripling means multiplying by 3."
      },
      {
        id: "qe1-5",
        text: "A car depreciates by 15% each year. What is the base of the exponential function?",
        type: "input",
        correctAnswer: "0.85",
        explanation: "1 - 0.15 = 0.85."
      }
    ]
  },
  {
    id: "interpreting-coefficients",
    title: "2. Decoding Successive Intervals",
    icon: "Calculator",
    content: `
# Deciphering Complex Models

### Growth and Intervals
If the exponent is $t/k$: The multiplier happens every **$k$** units.
Example: $y = a(2)^{t/4}$ means it **Doubles every 4 hours**.

### Multiplicity and Frequency
If the exponent is $kt$: The multiplier happens **$k$** times per unit.
Example: $y = a(1.02)^{12t}$ means interest is applied **12 times per year**.
    `,
    examples: [
      {
        question: "f(t) = 50(2)^{t/4}. What does 4 represent?",
        steps: [
            "Base 2 is doubling.",
            "Exponent t/4. Denominator is 4.",
            "Doubles every 4 hours."
        ],
        answer: "Doubles every 4 hours."
      },
      {
        question: "y = 300(1.05)^{4t}. Frequency?",
        steps: [
          "Check the exponent: 4t.",
          "t is years.",
          "Multiplier happens 4 times per year."
        ],
        answer: "4 times per year."
      },
      {
        question: "y = 400(0.5)^{t/10}. Half-life?",
        steps: [
          "Base 0.5 is half-life.",
          "Exponent t/10.",
          "10 years."
        ],
        answer: "10 years."
      },
      {
        question: "f(x) = 50(b)^x. f(0)=50, f(1)=150. b?",
        steps: [
          "50 * b = 150.",
          "b = 3."
        ],
        answer: "3"
      },
      {
        question: "Mass decays by 15% every 2 years. Eq?",
        steps: [
          "Multiplier 0.85.",
          "Interval 2 years, so t/2.",
          "y = m_0(0.85)^{t/2}"
        ],
        answer: "y = m_0(0.85)^{t/2}"
      }
    ],
    commonMistakes: [
      "Multiplying a and b first. Order of operations!",
      "Confusing frequency (kt) and interval (t/k)."
    ],
    quiz: [
      {
        id: "qe2-1",
        text: "A = 500(1.02)^{12t}. Interest applied how many times per year?",
        type: "input",
        correctAnswer: "12",
        explanation: "12t means it happens 12 times in a year."
      },
      {
        id: "qe2-2",
        text: "In the function y = a(2.5)^{t/10}, how many units of t for one growth period?",
        type: "input",
        correctAnswer: "10",
        explanation: "The denominator k is 10."
      },
      {
        id: "qe2-3",
        text: "If a population doubles every 3 days, what is the exponent for t in days?",
        type: "multiple-choice",
        options: ["t/3", "3t", "t+3", "t-3"],
        correctAnswer: "t/3",
        explanation: "Interval k=3 means t/3."
      },
      {
        id: "qe2-4",
        text: "How many growth periods happen in 12 units of time if k = 4?",
        type: "input",
        correctAnswer: "3",
        explanation: "12 / 4 = 3."
      },
      {
        id: "qe2-5",
        text: "Which function grows faster: f(x) = 100(2)^{x/3} or g(x) = 100(2)^{x/4}?",
        type: "multiple-choice",
        options: ["f(x)", "g(x)", "Same", "Not enough info"],
        correctAnswer: "f(x)",
        explanation: "f(x) takes only 3 units to double, while g(x) takes 4. Faster growth!"
      }
    ]
  }
];
