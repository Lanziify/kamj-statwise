import Formula from "../assets/Formula.png"

export const quizzes = [
  {
    quizId: 1,
    quizTitle: "CENTRAL TENDENCY: MEAN, MEDIAN, AN MODE",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question:
              "What is the measure of central tendency that represents the middle value in a set of data?",
            choices: ["Mean", "Median", "Mode", "Range"],
            answer: 1,
          },
          {
            question:
              "Which measure of central tendency is affected by outliers in a data set?",
            choices: ["Mean", "Median", "Mode", "Standard Deviation"],
            answer: 0,
          },
          {
            question:
              "In a symmetric dataset, which measure of central tendency is equal to the mean?",
            choices: ["Median", "Mode", "Range", "Mean"],
            answer: 3,
          },
          {
            question:
              "Which measure of central tendency is the most frequently occurring value in a data set?",
            choices: ["Mean", "Median", "Mode", "Standard Deviation"],
            answer: 2,
          },
          {
            question: "If a data set has two modes, it is called:",
            choices: ["Bimodal", "Unimodal", "Multimodal", "No mode"],
            answer: 0,
          },
        ],
      },
      {
        type: 1,
        description:
          "Identification. Determine whether the question is asking for the MEAN, MEDIAN, or MODE.",
        isGameBased: true,
        questions: [
          {
            question:
              "Identify the measure of central tendency that is the arithmetic average of a set of values.",
            answer: "MEAN",
          },
          {
            question:
              "Identify the measure of central tendency that divides the data into two equal parts.",
            answer: "MEDIAN",
          },
          {
            question:
              "Identify the measure of central tendency that represents the most frequent value in a dataset.",
            answer: "MODE",
          },
          {
            question:
              "Identify the measure of central tendency that is not affected by extreme values.",
            answer: "MEDIAN",
          },
          {
            question:
              "Identify the measure of central tendency that is suitable for categorical data.",
            answer: "MODE",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. The sum of all values divided by the total number of values.",
          "b. The value that separates the higher half from the lower half of a dataset.",
          "c. The value that occurs most frequently in a dataset.",
          "d. The value that is in the middle of a dataset when arranged in order.",
          "e. The value that is the arithmetic average of a set of values.",
          "f. The value that is suitable for representing categorical data.",
          "g. The value that divides the data into two equal parts.",
          "h. The value that is the most frequently occurring in a dataset.",
          "i. The value that represents the middle value in a dataset.",
          "j. The value that is the average of a set of values.",
        ],
        questions: [
          {
            question: "Mean",
            answer: "e",
          },
          {
            question: "Median",
            answer: "d",
          },
          {
            question: "Mode",
            answer: "c",
          },
          {
            question: "Arithmetic Average",
            answer: "a",
          },
          {
            question: "Middle Value",
            answer: "e",
          },
          {
            question: "Most Frequently Occurring",
            answer: "c",
          },
          {
            question: "Average Value",
            answer: "e",
          },
          {
            question: "Divides Data into Two Equal Parts",
            answer: "i",
          },
          {
            question: "Represents the Middle Value",
            answer: "d",
          },
          {
            question: "Suitable for Categorical Data",
            answer: "c",
          },
        ],
      },
      {
        type: 3,
        description: "Solving.",
        isGameBased: false,
        questions: [
          {
            question:
              "Calculate the mean of the following dataset: 12, 15, 18, 21, 24.",
            answer: 20,
          },
          {
            question:
              "Find the median of the set of numbers: 10, 15, 20, 25, 30, 35.",
            answer: 22.5,
          },
          {
            question: "Identify the mode of the dataset: 5, 7, 5, 9, 13, 5.",
            answer: 5,
          },
          {
            question:
              "Determine the mean of the data: 25, 30, 35, 40, 45, 50, 55, 60.",
            answer: 40,
          },
          {
            question:
              "Calculate the median of the following numbers: 12, 15, 18, 21, 24, 27.",
            answer: 19.5,
          },
          {
            question: "Find the mode of the dataset: 8, 10, 12, 10, 15, 8, 10.",
            answer: 10,
          },
          {
            question:
              "Calculate the mean of the numbers: 5, 10, 15, 20, 25, 30, 35.",
            answer: 20,
          },
          {
            question: "Find the median of the set: 5, 7, 9, 11, 13.",
            answer: 9,
          },
          {
            question:
              "Identify the mode of the data: 7, 9, 12, 9, 15, 7, 12, 9.",
            answer: 9,
          },
          {
            question:
              "Determine the mean of the following values: 18, 22, 25, 28, 31.",
            answer: 24.8,
          },
          {
            question:
              "Calculate the median of the numbers: 8, 12, 16, 20, 24, 28, 32.",
            answer: 20,
          },
          {
            question: "Find the mode of the dataset: 10, 12, 14, 12, 16, 10.",
            answer: 12,
          },
          {
            question:
              "Calculate the mean of the given values: 30, 35, 40, 45, 50, 55, 60, 65.",
            answer: 47.5,
          },
          {
            question: "Find the median of the set: 6, 8, 10, 12, 14, 16, 18.",
            answer: 12,
          },
          {
            question: "Identify the mode of the data: 6, 8, 10, 6, 12, 10, 6.",
            answer: 6,
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "Sarah recorded the temperatures in her city for seven consecutive days: 28°C, 30°C, 32°C, 35°C, 29°C, 31°C, 34°C.",
            questions: [
              "Calculate the mean, median, and mode of the recorded temperatures.",
              "Based on the central tendency measures, which temperature value would best represent the typical weather in Sarah's city during that week?",
            ],
            answer: "",
          },
          {
            problem:
              "A survey was conducted among a group of students to determine the number of siblings they have. The data collected is as follows: 0 siblings, 1 sibling, 2 siblings, 3 siblings, 2 siblings, 1 sibling, 4 siblings, 2 siblings, 0 siblings.",
            questions: [
              "Calculate the mean, median, and mode of the number of siblings reported by the students.",
              "Which measure of central tendency would be most informative in this scenario, and why?",
            ],
            answer: "",
          },
        ],
      },
    ],
  },
  {
    quizId: 2,
    quizTitle: "VARIANCE AND STANDARD DEVIATION OF A POPULATION",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question:
              "What is the formula to calculate the variance of a population?",
            choices: [
              "Sum of Squares / Number of Values",
              "Sum of Squares / (Number of Values - 1)",
              "Square Root of the Sum of Squares",
              "Mean / Number of Values",
            ],
            answer: 1,
          },
          {
            question:
              "Which measure quantifies the amount of variation or dispersion in a set of data points?",
            choices: ["Mean", "Median", "Range", "Standard Deviation"],
            answer: 3,
          },
          {
            question: "What is the standard deviation of a population?",
            choices: [
              "The square root of the variance",
              "The mean of the dataset",
              "The sum of squares of all values",
              "The range of the values",
            ],
            answer: 0,
          },
          {
            question:
              "How does increasing variability in a dataset affect the standard deviation?",
            choices: [
              "Increases",
              "Decreases",
              "No effect",
              "Depends on the mean",
            ],
            answer: 0,
          },
          {
            question:
              "What does a high standard deviation indicate about the data points in a population?",
            choices: [
              "They are closely clustered around the mean",
              "They are widely spread out from the mean",
              "They are all equal to the mean",
              "The dataset has no variance",
            ],
            answer: 1,
          },
        ],
      },
      {
        type: 1,
        description:
          'Identification. Determine whether the question is asking for "The square root of the variance", "Standard Deviation", or "Variance".',
        isGameBased: true,
        questions: [
          {
            question:
              "Identify the formula for calculating the standard deviation of a population.",
            answer: "The square root of the variance",
          },
          {
            question:
              "Identify the measure that represents the square root of the variance.",
            answer: "Standard Deviation",
          },
          {
            question:
              "Identify the term that measures the average distance of each data point from the mean.",
            answer: "Standard Deviation",
          },
          {
            question:
              "Identify the measure that indicates the spread of data points from the mean.",
            answer: "Standard Deviation",
          },
          {
            question:
              "dentify the calculation that involves squaring the deviations from the mean.",
            answer: "Variance",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Measure of the average distance of each data point from the mean.",
          "b. The square root of the variance.",
          "c. The sum of squared differences from the mean divided by the number of values.",
          "d. Complete set of items or individuals that have common observable characteristics.",
          "e. Measure that quantifies the amount of variation or spread in a dataset.",
        ],
        questions: [
          {
            question: "Variance",
            answer: "c",
          },
          {
            question: "Standard Deviation",
            answer: "b",
          },
          {
            question: "Mean",
            answer: "a",
          },
          {
            question: "Population",
            answer: "d",
          },
          {
            question: "Dispersion",
            answer: "e",
          },
        ],
      },
      {
        type: 3,
        description: "Solving.",
        isGameBased: false,
        questions: [
          {
            question:
              "Calculate the variance of the following dataset: 10, 12, 14, 16, 18.",
            answer: 8.0,
          },
          {
            question:
              "Find the standard deviation of the set of numbers: 20, 25, 30, 35, 40.",
            answer: 7.07,
          },
          {
            question:
              "Determine the mean and standard deviation of the data: 5, 10, 15, 20, 25.",
            answer: 7.07,
          },
          {
            question:
              "Calculate the variance of the dataset: 8, 12, 8, 16, 20.",
            answer: 21.76,
          },
          {
            question:
              "Find the standard deviation of the numbers: 6, 8, 10, 12, 14.",
            answer: 2.83,
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "A company recorded the profits for six consecutive months: $5000, $7000, $6000, $8000, $9000, $7500.",
            questions: [
              "Calculate the variance and standard deviation of the recorded profits.",
              "Based on the standard deviation, which month had the most fluctuation in profits?",
            ],
            answer: "",
          },
          {
            problem:
              "A study measured the reaction times of participants in a test: 0.2s, 0.3s, 0.1s, 0.25s, 0.15s, 0.2s.",
            questions: [
              "Find the variance and standard deviation of the reaction times.",
              "How does the variance and standard deviation help in understanding the consistency of reaction times among participants?",
            ],
            answer: "",
          },
        ],
      },
    ],
  },
  {
    quizId: 3,
    quizTitle: "VARIANCE AND STANDARD DEVIATION OF A SAMPLE",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question:
              "What is the formula for calculating the variance of a sample?",
            imgSrc: Formula,
            choices: ["", "", "", ""],
            answer: 2,
          },
          {
            question:
              "Which of the following is a measure of the spread of data in a sample?",
            choices: ["Mean", "Variance", "Median", "Mode"],
            answer: 1,
          },
          {
            question:
              "If the standard deviation of a sample is 5, what is the variance?",
            choices: ["25", "5", "10", "15"],
            answer: 0,
          },
          {
            question:
              "Which of the following statements is true about variance and standard deviation?",
            choices: [
              "Variance is the square root of standard deviation",
              "Standard deviation is the square root of variance",
              "Variance and standard deviation are the same",
              "Variance and standard deviation are unrelated",
            ],
            answer: 1,
          },
          {
            question:
              "What effect does increasing the sample size have on the variance and standard deviation?",
            choices: [
              "Variance and standard deviation increase",
              "Variance and standard deviation decrease",
              "Variance increases, standard deviation decreases",
              "Variance decreases, standard deviation increases ",
            ],
            answer: 3,
          },
        ],
      },
      {
        type: 1,
        description: "Identification",
        isGameBased: true,
        questions: [
          {
            question: "What does Variance measure?",
            answer: "The square root of the variance",
          },
          {
            question: "What does Standard Deviation represent?",
            answer: "Standard Deviation",
          },
          {
            question: "What does a high Variance indicate about the data?",
            answer: "Standard Deviation",
          },
          {
            question:
              "What is the importance of Standard Deviation in statistics?",
            answer: "Standard Deviation",
          },
          {
            question: "How is Variance distinct from Standard Deviation?",
            answer: "Variance",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Measure of dispersion",
          "b. Entire set of individuals or objects",
          "c. Square of the standard deviation",
          "d. Square root of the variance",
          "e. Subset of the population",
        ],
        questions: [
          {
            question: "Population",
            answer: "b",
          },
          {
            question: "Variance",
            answer: "a",
          },
          {
            question: "Standard Deviation",
            answer: "d",
          },
          {
            question: "Sample",
            answer: "e",
          },
          {
            question: "Variance",
            answer: "c",
          },
        ],
      },
      {
        type: 3,
        description: "Solving.",
        isGameBased: false,
        questions: [
          {
            question:
              "Calculate the variance and standard deviation of the sample: {2, 4, 6, 8, 10}.",
            answer: 2.83,
          },
          {
            question:
              "If the variance of a sample is 16, what is the standard deviation?",
            answer: 4,
          },
          {
            question: "Find the variance of the sample: {3, 5, 7, 9}.",
            answer: 6,
          },
          {
            question:
              "Calculate the standard deviation of the sample: {12, 14, 16, 18, 20}.",
            answer: 3.16,
          },
          {
            question:
              "A sample has a variance of 25. What is the standard deviation of the sample?",
            answer: 5,
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "In a sample of test scores, the variance is 36. If the mean score is 70, what are the standard deviation and the scores' spread?",
            answer: "",
          },
          {
            problem:
              "The weights of five students are 120 lbs, 130 lbs, 140 lbs, 150 lbs, and 160 lbs. Calculate the variance and standard deviation of the weights.",
            answer: "",
          },
        ],
      },
    ],
  },
  {
    quizId: 4,
    quizTitle: "PERCENTILES AND QUARTILES",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question:
              "What are the score points which divide a distribution into four equal parts?",
            choices: ["Deciles", "Median", "Quartiles", "Percentiles"],
            answer: 2,
          },
          {
            question:
              "What is the first quartile of the data set 4, 1, 5, 2, 6, 5, 3, 8, 7, and 9?",
            choices: ["2.5", "3.25", "3.5", "4"],
            answer: 2,
          },
          {
            question:
              "If Q1 is 25% in percentile, what is the percentile of the 3rd quartile?",
            choices: ["30%", "50%", "75%", "90%"],
            answer: 2,
          },
          {
            question:
              "What is the 3rd quartile in 1, 1, 5, 5, 3, 3, 4, 4, 2, 2 using interpolation?",
            choices: ["4", "4.25", "4.5", "5"],
            answer: 1,
          },
          {
            question:
              "Given the data set: 1, 2, 3, 6, 9, 11, 45, 102, calculate the percentile rank for 11.",
            choices: [
              "70th percentile",
              "62.5th percentile",
              "72.5th percentile",
              "75th percentile",
            ],
            answer: 1,
          },
          {
            question: "Identify the 75th percentile as known as:",
            choices: [
              "Median",
              "Third Quartile",
              "1st Quartile",
              "Interquartile Range",
            ],
            answer: 1,
          },
          {
            question:
              'Interpret the statement: "Your height is the 70th percentile of all heights for people your age."',
            choices: [
              "Your height is the same as about 70% of all other people your age.",
              "Your height is the same as or higher than about 70% of all other people your age.",
              "Your score height is lower than approximately 70% of all other people your age.",
              "70% of all people your age is taller than you.",
            ],
            answer: 1,
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Represents the median.",
          "b. Divides the data into the lower 25% and upper 75%.",
          "c. Marks the third quartile.",
        ],
        questions: [
          {
            question: "25th percentile",
            answer: "b",
          },
          {
            question: "50th percentile",
            answer: "a",
          },
          {
            question: "75th percentile",
            answer: "c",
          },
        ],
      },
      {
        type: 3,
        description: "Solving.",
        isGameBased: false,
        questions: [
          {
            question:
              "Find the interquartile range (Q3 - Q1) of the following test scores of grade 10 students: 45, 50, 55, 60, 65, 70, 75, 80, 81, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130.",
            answer: 55,
          },
          {
            question:
              "Calculate the 46th percentile of the set of values: 22, 5, 12, 16, 31, 25, 30, 39, 32, 33, 18.",
            answer: 25,
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "In the set of scores: 4, 1, 5, 2, 6, 5, 3, 8, 7, and 9, what is the median or 2nd quartile?",
            answer: "",
          },
          {
            problem:
              "Find the 1st quartile of the following using the Sincich and Mendenhall method: 100, 200, 205, 206, 314, 512, 600, 710, 800, 1000.",
            answer: "",
          },
        ],
      },
    ],
  },
  {
    quizId: 5,
    quizTitle: "SKEWNESS",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "What does positive skewness indicate?",
            choices: [
              "Data is evenly distributed",
              "Data is skewed to the right",
              "Data is skewed to the left",
              "Data is normally distributed",
            ],
            answer: 1,
          },
          {
            question:
              "Which measure of skewness is used for moderately skewed distributions?",
            choices: [
              "Pearson mode skewness",
              "Karl Pearson skewness",
              "Pearson's first skewness coefficient",
              "Sample skewness",
            ],
            answer: 2,
          },
          {
            question:
              "In a negatively skewed distribution, where is the tail of the curve longer?",
            choices: [
              "Right side",
              "Left side",
              "Center",
              "Both sides equally",
            ],
            answer: 1,
          },
          {
            question: "What is the range of skewness values?",
            choices: ["-1 to 1", "-2 to 2", "-3 to 3", "-4 to 4"],
            answer: 0,
          },
          {
            question:
              "Which type of skewness is most common in financial data?",
            choices: [
              "Positive skewness",
              "Negative skewness",
              "Zero skewness",
              "None of the above",
            ],
            answer: 0,
          },
          {
            question: "Skewness is a measure of what aspect of a distribution?",
            choices: ["Spread", "Shape", "Central tendency", "Variability"],
            answer: 2,
          },
          {
            question:
              "Which statistical software is commonly used to calculate skewness?",
            choices: ["Excel", "SPSS", "R", "All of the above"],
            answer: 3,
          },
          {
            question:
              "What is the skewness of a perfectly symmetrical distribution?",
            choices: ["0", "1", "-1", "Infinity"],
            answer: 0,
          },
          {
            question: "What is the formula for calculating skewness?",
            choices: [
              "(Mean - Mode) / Standard Deviation",
              "3 * (Mean - Median) / Standard Deviation",
              "(Mean - Median) / Standard Deviation",
              "3 * (Mean - Mode) / Standard Deviation",
            ],
            answer: 1,
          },
          {
            question: "Which of the following is not a measure of skewness?",
            choices: [
              "Pearson's mode skewness",
              "Fisher-Pearson coefficient of skewness",
              "Bowley skewness coefficient",
              "Kurtosis",
            ],
            answer: 3,
          },
        ],
      },
      {
        type: 1,
        description: "Identification",
        isGameBased: true,
        questions: [
          {
            question: "Define Skewness:",
            list: ["Symmetry", "Asymmetry"],
            answer: "Asymmetry",
          },
          {
            question: "Positive Skewness Direction:",
            list: ["Left", "Right"],
            answer: "Right",
          },
          {
            question: "Negative Skewness Direction:",
            list: ["Right", "Left"],
            answer: "Left",
          },
          {
            question: "Skewness Calculation Formula:",
            list: [
              "(Mean - Mode) / Standard Deviation",
              "(Mean - Median) / Standard Deviation",
            ],
            answer: "(Mean - Median) / Standard Deviation",
          },
          {
            question: "Skewness Measure Range",
            list: ["-1 to 1", "-2 to 2"],
            answer: "-1 to 1",
          },
          {
            question: "Skewness Impact on Data Interpretation:",
            list: ["Neutral", "Misleading"],
            answer: "Misleading",
          },
          {
            question: "Skewness and Outliers Relationship:",
            list: ["No impact", "Influence"],
            answer: "Influence",
          },
          {
            question: "Skewness in Symmetrical Distribution:",
            list: ["1", "Zero"],
            answer: "Zero",
          },
          {
            question: "Skewness Calculation Software:",
            list: ["Excel, SPSS, R", "Python, Java, C++"],
            answer: "Excel, SPSS, R",
          },
          {
            question: "Skewness Common in Financial Data:",
            list: ["Negative", "Positive"],
            answer: "Positive",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Measure of skewness that uses the difference between the mode and median.",
          "b. Measure of skewness that is calculated using the third standardized moment.",
          "c. Measure of skewness that is used for moderately skewed distributions.",
          "d. Measure of skewness that is based on the difference between the mean and median.",
          "e. Measure of asymmetry based on mean, median, and standard deviation.",
          "f. Measure of skewness based on the third standardized moment.",
          "g. Measure of skewness based on the difference between mean and mode.",
          "h. Measure of skewness based on the difference between mean and median",
        ],
        questions: [
          {
            question: "Pearson's First Coefficient of Skewness",
            answer: "g",
          },
          {
            question: "Karl Pearson Skewness",
            answer: "e",
          },
          {
            question: "Fisher-Pearson Coefficient of Skewness",
            answer: "f",
          },
          {
            question: "Mode Skewness",
            answer: "a",
          },
          {
            question: "Pearson's Mode Skewness",
            answer: "g",
          },
          {
            question: "Sample Skewness",
            answer: "h",
          },
          {
            question: "Skewness Coefficient",
            answer: "e",
          },
          {
            question: "Karl Pearson's Coefficient of Skewness",
            answer: "h",
          },
        ],
      },
    ],
  },
  {
    quizId: 6,
    quizTitle: "THE NORMAL CURVE AND EMPIRICAL RULE",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "What is the shape of the normal curve?",
            choices: ["Bell-shaped", "U-shaped", "V-shaped", "W-shaped"],
            answer: 0,
          },
          {
            question:
              "What percentage of data falls within one standard deviation of the mean in a normal distribution?",
            choices: ["68%", "95%", "99.7%", "50%"],
            answer: 0,
          },
          {
            question:
              "Which of the following is NOT a characteristic of the normal curve?",
            choices: ["Symmetrical", "Skewed", "Unimodal", "Bell-shaped"],
            answer: 1,
          },
          {
            question:
              "In a normal distribution, what is the value of the mean, median, and mode?",
            choices: [
              "All different",
              "All the same",
              "Mean and median are the same",
              "Mode and median are the same",
            ],
            answer: 2,
          },
          {
            question:
              "The empirical rule states that approximately what percentage of data falls within two standard deviations of the mean?",
            choices: ["68%", "95%", "99.7%", "50%"],
            answer: 1,
          },
          {
            question:
              "Which of the following is true about the standard deviation in a normal distribution?",
            choices: [
              "It measures the spread of data",
              "It measures the central tendency of data",
              "It is always zero",
              "It is the same as the mean",
            ],
            answer: 0,
          },
          {
            question:
              "What is the z-score of a data point that is one standard deviation above the mean in a standard normal distribution?",
            choices: ["0", "1", "-1", "2"],
            answer: 1,
          },
          {
            question:
              "The area under the normal curve between z = -1 and z = 1 represents what percentage of the data?",
            choices: ["34%", "68%", "95%", "99.7%"],
            answer: 1,
          },
          {
            question: "Which of the following is NOT a valid z-score?",
            choices: ["-1", "0", "2", "1.5"],
            answer: 2,
          },
          {
            question:
              "What is the standard deviation of a normal distribution with a variance of 16?",
            choices: ["2", "4", "8", "16"],
            answer: 1,
          },
        ],
      },
      {
        type: 1,
        description: "Identification",
        isGameBased: true,
        questions: [
          {
            question: "The shape that the normal curve have.",
            list: ["Bell-shaped", "U-shaped"],
            answer: "Bell-shaped",
          },
          {
            question:
              "of data falls within one standard deviation of the mean in a normal distribution.",
            list: ["68%", "95%"],
            answer: "68%",
          },
          {
            question: "Is NOT a characteristic of the normal curve?",
            list: ["Symmetrical", "Skewed"],
            answer: "Skewed",
          },
          {
            question:
              "The value of mean, median, and mode in a normal distribution.",
            list: ["All the same", "All different"],
            answer: "All the same",
          },
          {
            question:
              "The empirical rule states that approximately ______ of data falls within two standard deviations of the mean.",
            list: ["68%", "95%"],
            answer: "95%",
          },
          {
            question:
              "The standard deviation in a normal distribution _________.",
            list: ["Measures the spread of data", "Always zero"],
            answer: "Measures the spread of data",
          },
          {
            question:
              "The z-score of a data point that is one standard deviation above the mean in a standard normal distribution.",
            list: ["1", "0"],
            answer: "1",
          },
          {
            question:
              "The area under the normal curve between z = -1 and z = 1 represents ______ of the data.",
            list: ["68%", "95%"],
            answer: "68%",
          },
          {
            question: "is NOT a valid z-score.",
            list: ["2", "-1"],
            answer: "2",
          },
          {
            question:
              "The standard deviation of a normal distribution with a variance of 16",
            list: ["4", "8"],
            answer: "4",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Measure of central tendency in a dataset.",
          "b. Measure of the spread of data in a dataset.",
          "c. Measure of the asymmetry of a distribution.",
          "d. A statistical rule stating percentages of data within certain standard deviations of the mean.",
          "e. A measure of how far a data point is from the mean in terms of standard deviations.",
          "f. A bell-shaped distribution of data.",
          "g. The most frequently occurring value in a dataset.",
          "h. The middle value in a dataset when arranged in ascending order.",
          "i. A measure of the average squared deviation from the mean.",
          "j. The likelihood of a specific event occurring.",
        ],
        questions: [
          {
            question: "Mean",
            answer: "a",
          },
          {
            question: "Median",
            answer: "h",
          },
          {
            question: "Mode",
            answer: "g",
          },
          {
            question: "Standard Deviation",
            answer: "b",
          },
          {
            question: "Z-Score",
            answer: "e",
          },
          {
            question: "Normal Distribution",
            answer: "f",
          },
          {
            question: "Empirical Rule",
            answer: "d",
          },
          {
            question: "Skewness",
            answer: "c",
          },
          {
            question: "Variance",
            answer: "i",
          },
          {
            question: "Probability",
            answer: "j",
          },
        ],
      },
    ],
  },
  {
    quizId: 7,
    quizTitle: "Z-SCORE",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "What does a Z-Score measure?",
            choices: [
              "Variability",
              "Central Tendency",
              "Standard Deviation",
              "Distance from the Mean",
            ],
            answer: 3,
          },
          {
            question: "A Z-Score of 0 indicates that the data point:",
            choices: [
              "Is below the Mean",
              "Is above the Mean",
              "Equals the Mean",
              "Is an Outlier",
            ],
            answer: 2,
          },
          {
            question:
              "In a standard normal distribution, what percentage of data falls within one standard deviation of the mean?",
            choices: ["68%", "75%", "95%", "99.7%"],
            answer: 0,
          },
          {
            question:
              "If a data point has a Z-Score of -2, it means that it is:",
            choices: [
              "Two Standard Deviations above the Mean",
              "Two Standard Deviations below the Mean",
              "Equal to the Mean",
              "Three Standard Deviations below the Mean",
            ],
            answer: 1,
          },
          {
            question:
              "When comparing two data points with different units, which measure allows for a more accurate comparison?",
            choices: ["Mean", "Median", "Z-Score", "Range"],
            answer: 2,
          },
          {
            question: "How is the formula for calculating a Z-Score defined?",
            choices: [
              "(X - Mean) / Standard Deviation",
              "(X - Median) / Range",
              "(X - Mode) / Variance",
              "(X - Maximum) / Minimum",
            ],
            answer: 0,
          },
          {
            question: "A Z-Score of 1.5 indicates that the data point is:",
            choices: [
              "Above the Mean",
              "Below the Mean",
              "Equal to the Mean",
              "Out of Range",
            ],
            answer: 0,
          },
          {
            question:
              "What is the Z-Score of the Mean in a standard normal distribution?",
            choices: ["0", "1", "-1", "Depends on the Data"],
            answer: 0,
          },
          {
            question:
              "Which statement accurately describes a negative Z-Score?",
            choices: [
              "Data point is above the Mean",
              "Data point is below the Mean",
              "Data point is an Outlier",
              "Data point is Equal to the Mean",
            ],
            answer: 1,
          },
          {
            question: "How does a Z-Score help in data analysis?",
            choices: [
              "Identifying Outliers",
              "Comparing Data Points",
              "Standardizing Data",
              "All of the Above",
            ],
            answer: 3,
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Measure of how spread out numbers are.",
          "b. Average of a set of numbers.",
          "c. Measure of how far a data point is from the Mean.",
          "d. Represents the number of standard deviations a data point is from the Mean.",
          "e. Middle value of a dataset.",
          "f. Most frequently occurring value in a dataset.",
          "g. Data point that significantly differs from other observations.",
          "h. The difference between the maximum and minimum values in a dataset.",
          "i. Symmetrical distribution where mean, median, and mode are equal.",
          "j. Individual value in a dataset.",
        ],
        questions: [
          {
            question: "Mean",
            answer: "a",
          },
          {
            question: "Standard Deviation",
            answer: "h",
          },
          {
            question: "Z-Score",
            answer: "g",
          },
          {
            question: "Variability",
            answer: "b",
          },
          {
            question: "Median",
            answer: "e",
          },
          {
            question: "Mode",
            answer: "f",
          },
          {
            question: "Outlier",
            answer: "d",
          },
          {
            question: "Range",
            answer: "c",
          },
          {
            question: "Normal Distribution",
            answer: "i",
          },
          {
            question: "Data Point",
            answer: "j",
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "Calculate the Z-Score for a data point of 85, a Mean of 75, and a Standard Deviation of 5.",
            answer: "",
          },
          {
            problem:
              "If a data point has a Z-Score of -1.5 in a standard normal distribution, what percentage of data lies above it?",
            answer: "",
          },
          {
            problem:
              "A dataset has a Mean of 50 and a Standard Deviation of 10. What is the Z-Score for a data point of 65?",
            answer: "",
          },
          {
            problem:
              "In a standard normal distribution, if a data point has a Z-Score of 2, what percentage of data lies below it?",
            answer: "",
          },
        ],
      },
    ],
  },
  {
    quizId: 8,
    quizTitle: "PARAMETERS, STATISTICS, AND SAMPLING ERROR",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "What is a parameter in statistics?",
            choices: [
              "A descriptive measure of the sample",
              "A numerical value summarizing a population characteristic",
              "The average of a sample",
              "The range of a dataset",
            ],
            answer: 1,
          },
          {
            question: "Sampling error occurs when:",
            choices: [
              "The sample is too small",
              "The sample is not representative of the population",
              "The sample mean is calculated incorrectly",
              "The sample standard deviation is too high",
            ],
            answer: 1,
          },
          {
            question: "Which of the following is an example of a parameter?",
            choices: [
              "Mean age of students in a class",
              "Median income of a city",
              "Standard deviation of test scores",
              "Proportion of voters in a country",
            ],
            answer: 3,
          },
          {
            question:
              "Statistics is the branch of mathematics that deals with:",
            choices: [
              "Calculating exact values",
              "Analyzing data",
              "Predicting future outcomes",
              "Solving algebraic equations",
            ],
            answer: 1,
          },
          {
            question: "What is the purpose of sampling in statistics?",
            choices: [
              "To ensure every individual is surveyed",
              "To make inferences about a population",
              "To eliminate sampling error",
              "To calculate parameters accurately",
            ],
            answer: 1,
          },
          {
            question:
              "Which of the following is a measure of central tendency?",
            choices: ["Standard deviation", "Variance", "Mode", "Range"],
            answer: 2,
          },
          {
            question: "A statistic is:",
            choices: [
              "A numerical value summarizing a population characteristic",
              "A descriptive measure of the sample",
              "The average of a sample",
              "The range of a dataset",
            ],
            answer: 1,
          },
          {
            question: "Sampling bias occurs when:",
            choices: [
              "Every individual in the population is surveyed",
              "The sample is not representative of the population",
              "The sample size is too large",
              "The sample mean is calculated incorrectly",
            ],
            answer: 1,
          },
          {
            question: "Which of the following is an example of sampling error?",
            choices: [
              "Calculating the mean of a sample",
              "Surveying only male participants in a study on gender",
              "Using the median instead of the mode",
              "Reporting the range of a dataset",
            ],
            answer: 1,
          },
          {
            question: "The margin of error in a survey is influenced by:",
            choices: [
              "The sample size",
              "The population size",
              "The confidence level",
              "All of the above",
            ],
            answer: 3,
          },
        ],
      },
      {
        type: 1,
        description: "Identification",
        isGameBased: true,
        questions: [
          {
            question:
              "Identify the term that refers to a numerical value summarizing a population characteristic",
            list: ["Parameter", "Variable"],
            answer: "Parameter",
          },
          {
            question:
              "Choose the term that describes the error that occurs when a sample is not representative of the population:",
            list: ["Sampling Error", "Sampling Bias"],
            answer: "Sampling Error",
          },
          {
            question:
              "Select the term that represents the measure of the middle or center of a dataset:",
            list: ["Mean", "Mode"],
            answer: "Mean",
          },
          {
            question:
              "Identify the term that defines the branch of mathematics dealing with data collection and analysis:",
            list: ["Statistics", "Probability"],
            answer: "Statistics",
          },
          {
            question:
              "Choose the term that represents a subset of the population used to draw conclusions:",
            list: ["Sample", "Population"],
            answer: "Sample",
          },
          {
            question:
              "Select the term that refers to the error that occurs when the sample mean is calculated incorrectly:",
            list: ["Sampling Error", "Measurement Error"],
            answer: "Measurement Error",
          },
          {
            question:
              "Identify the term that represents a measure of how spread out the values in a dataset are:",
            list: ["Variance", "Standard Deviation"],
            answer: "Standard Deviation",
          },
          {
            question:
              "Choose the term that defines the range within which the true population parameter is estimated to lie:",
            list: ["Confidence Interval", "Margin of Error"],
            answer: "Margin of Error",
          },
          {
            question:
              "Select the term that describes the process of making inferences about a population based on sample data:",
            list: ["Descriptive Statistics", "Inferential Statistics"],
            answer: "Inferential Statistics",
          },
          {
            question:
              "Identify the term that represents the error that occurs when every individual in the population is not surveyed:",
            list: ["Sampling Bias", "Non-response Bias"],
            answer: "Sampling Bias",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Measure of how spread out the values in a dataset are",
          "b. Numerical value summarizing a population characteristic",
          "c. Branch of mathematics dealing with data collection and analysis",
          "d. Error that occurs when a sample does not represent the population",
          "e. Statistical methods for making inferences about a population",
          "f. Measure of the middle or center of a dataset",
          "g. Summary statistics that describe features of data",
          "h. All individuals of interest in a study",
          "i. Subset of the population used to draw conclusions",
          "j. Range within which the true population parameter is estimated to lie",
        ],
        questions: [
          {
            question: "Parameter",
            answer: "b",
          },
          {
            question: "Statistics",
            answer: "c",
          },
          {
            question: "Sampling Error",
            answer: "d",
          },
          {
            question: "Central Tendency",
            answer: "f",
          },
          {
            question: "Descriptive Statistics",
            answer: "g",
          },
          {
            question: "Sampling Bias",
            answer: "d",
          },
          {
            question: "Margin of Error",
            answer: "j",
          },
          {
            question: "Population",
            answer: "h",
          },
          {
            question: "Sample",
            answer: "i",
          },
          {
            question: "Inferential Statistics",
            answer: "e",
          },
        ],
      },
    ],
  },
  {
    quizId: 9,
    quizTitle: "DISTRIBUTION OF THE SAMPLE MEAN",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "What is the central limit theorem?",
            choices: [
              "A theorem that states the sample mean is normally distributed",
              "A theorem that states the sample mean approaches a normal distribution as the sample size increases",
              "A theorem that states the sample mean is always equal to the population mean",
              "A theorem that states the sample mean is skewed",
            ],
            answer: 1,
          },
          {
            question: "Which distribution does the sample mean follow?",
            choices: [
              "Uniform distribution",
              "Normal distribution",
              "Exponential distribution",
              "Poisson distribution",
            ],
            answer: 1,
          },
          {
            question:
              "What happens to the distribution of the sample mean as the sample size increases?",
            choices: [
              "It becomes more skewed",
              "It becomes narrower",
              "It becomes more random",
              "It becomes bimodal",
            ],
            answer: 1,
          },
          {
            question:
              "What is the formula for the standard error of the sample mean?",
            choices: [
              "Standard deviation / √sample size",
              "Sample size / standard deviation",
              "Standard deviation * sample size",
              "Sample size - standard deviation",
            ],
            answer: 0,
          },
          {
            question:
              "Which of the following is NOT a property of the distribution of the sample mean?",
            choices: [
              "It is normally distributed",
              "It has the same mean as the population mean",
              "It has a standard deviation equal to the population standard deviation",
              "It becomes more variable as the sample size increases",
            ],
            answer: 3,
          },
          {
            question:
              "In a distribution of sample means, what does the central limit theorem guarantee?",
            choices: [
              "The sample means are normally distributed",
              "The sample means are identical to the population mean",
              "The sample means are independent of the sample size",
              "The sample means are skewed",
            ],
            answer: 0,
          },
          {
            question: "What is the main purpose of sampling distribution?",
            choices: [
              "To ensure the sample mean is always equal to the population mean",
              "To provide a distribution of sample means to estimate population parameters",
              "To eliminate the need for hypothesis testing",
              "To make the sample size smaller",
            ],
            answer: 1,
          },
          {
            question:
              "Which of the following is a characteristic of the distribution of the sample mean?",
            choices: [
              "It is always negatively skewed",
              "It is always positively skewed",
              "It is always normally distributed",
              "It is always uniform",
            ],
            answer: 2,
          },
          {
            question:
              "What is the relationship between the sample mean and the population mean?",
            choices: [
              "They are always equal",
              "They are independent of each other",
              "The sample mean approaches the population mean as the sample size increases",
              "The sample mean is always greater than the population mean",
            ],
            answer: 2,
          },
          {
            question:
              "What is the effect of increasing the sample size on the distribution of the sample mean?",
            choices: [
              "It becomes more spread out",
              "It becomes more concentrated",
              "It becomes more skewed",
              "It becomes more random",
            ],
            answer: 1,
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Represents the average of all values in a specific group.",
          "b. Provides a distribution of sample means to estimate population parameters.",
          "c. States that the sample mean approaches a normal distribution as the sample size increases.",
          "d. Measures the variability of the sample mean.",
          "e. Guarantees that the sample means are normally distributed.",
        ],
        questions: [
          {
            question: "Central Limit Theorem",
            answer: "c",
          },
          {
            question: "Standard Error",
            answer: "d",
          },
          {
            question: "Sampling Distribution",
            answer: "b",
          },
          {
            question: "Population Mean",
            answer: "a",
          },
          {
            question: "Sample Mean",
            answer: "e",
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "Calculate the standard error of the sample mean for a sample size of 50 with a population standard deviation of 10.",
            answer: "",
          },
          {
            problem:
              "If the population mean is 100 and the sample mean is 105, what is the sampling error?",
            answer: "",
          },
          {
            problem:
              "If the sample mean is normally distributed with a mean of 50 and a standard deviation of 5, what is the probability that a sample mean is less than 45?",
            answer: "",
          },
        ],
      },
    ],
  },
  {
    quizId: 10,
    quizTitle: "NULL AND ALTERNATIVE HYPOTHESES",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question:
              "What does the null hypothesis (H0) state in a hypothesis test?",
            choices: [
              "It assumes there is no effect or no difference",
              "It assumes there is a significant effect",
              "It is the alternative hypothesis",
              "It is not relevant to hypothesis testing",
            ],
            answer: 0,
          },
          {
            question:
              "In a hypothesis test, the alternative hypothesis (Ha) typically represents:",
            choices: [
              "The researcher's initial assumption",
              "The absence of an effect",
              "The claim to be tested",
              "The null hypothesis",
            ],
            answer: 2,
          },
          {
            question:
              "Which of the following is true about the p-value in hypothesis testing?",
            choices: [
              "It represents the probability of making a Type I error",
              "A smaller p-value indicates stronger evidence against the null hypothesis",
              "It is always greater than 0.05",
              "It is used to accept the null hypothesis",
            ],
            answer: 1,
          },
          {
            question:
              "When conducting a hypothesis test, if the p-value is less than the significance level (α), what is the recommended action?",
            choices: [
              "Reject the null hypothesis",
              "Accept the null hypothesis",
              "Revise the alternative hypothesis",
              "Ignore the results",
            ],
            answer: 0,
          },
          {
            question:
              "Which type of error occurs when the null hypothesis is rejected when it is actually true?",
            choices: [
              "Type I error",
              "Type II error",
              "Sampling error",
              "Measurement error",
            ],
            answer: 0,
          },
          {
            question: "The alternative hypothesis is usually denoted by:",
            choices: ["H0", "H1", "H2", "H3"],
            answer: 1,
          },
          {
            question:
              "Which of the following statements is correct about the null hypothesis?",
            choices: [
              "It is the hypothesis that the researcher wants to prove",
              "It assumes there is a significant effect",
              "It is always rejected in hypothesis testing",
              "It is denoted by Ha",
            ],
            answer: 1,
          },
          {
            question:
              "The significance level (α) in hypothesis testing represents:",
            choices: [
              "The probability of making a Type II error",
              "The probability of rejecting the null hypothesis when it is true",
              "The level of statistical significance chosen by the researcher",
              "The confidence interval",
            ],
            answer: 2,
          },
          {
            question:
              "In hypothesis testing, the null hypothesis is typically set as:",
            choices: [
              "The hypothesis that the researcher believes to be true",
              "The opposite of the alternative hypothesis",
              "The hypothesis that is tested for significance",
              "A random assumption",
            ],
            answer: 1,
          },
          {
            question:
              "What does the alternative hypothesis (Ha) state in a hypothesis test?",
            choices: [
              "It assumes there is no effect or no difference",
              "It assumes there is a significant effect",
              "It is the null hypothesis",
              "It is not relevant to hypothesis testing",
            ],
            answer: 1,
          },
        ],
      },
      {
        type: 1,
        description: "Fill-in the Blanks",
        isGameBased: true,
        questions: [
          {
            question:
              "The null hypothesis assumes that there is ________ effect or difference.",
            answer: "no",
          },
          {
            question:
              "The alternative hypothesis challenges the ________ hypothesis.",
            answer: "null",
          },
          {
            question:
              "The p-value indicates the ________ of the data given the null hypothesis.",
            answer: "strength",
          },
          {
            question:
              "Type I error occurs when the null hypothesis is ________ incorrectly.",
            answer: "rejected",
          },
          {
            question:
              "The significance level (α) is the threshold for ________ the null hypothesis.",
            answer: "rejecting",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Failing to reject a false null hypothesis",
          "b. Rejecting a true null hypothesis",
          "c. Probability of rejecting the null hypothesis when it is true",
          "d. Represents the claim to be tested",
          "e. Assumes no effect or difference",
        ],
        questions: [
          {
            question: "Type I Error",
            answer: "b",
          },
          {
            question: "Type II Error",
            answer: "a",
          },
          {
            question: "Significance Level",
            answer: "c",
          },
          {
            question: "Alternative Hypothesis",
            answer: "d",
          },
          {
            question: "Null Hypothesis",
            answer: "e",
          },
        ],
      },
    ],
  },
  {
    quizId: 11,
    quizTitle: "TYPE I AND TYPE II ERRORS",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "What is a Type I error?",
            choices: [
              "Accepting the null hypothesis when it is true",
              "Rejecting the null hypothesis when it is true",
              "Accepting the alternative hypothesis when it is false",
              "Rejecting the alternative hypothesis when it is true",
            ],
            answer: 1,
          },
          {
            question: "In hypothesis testing, which error is more serious?",
            choices: ["Type I Error", "Type II Error"],
            answer: 0,
          },
          {
            question: "What is the probability of a Type I error called?",
            choices: ["Alpha", "Beta", "Gamma", "Delta"],
            answer: 0,
          },
          {
            question: "Type II error is also known as:",
            choices: [
              "False Positive",
              "False Negative",
              "True Positive",
              "True Negative",
            ],
            answer: 1,
          },
          {
            question: "Which of the following is a way to reduce Type I error?",
            choices: [
              "Increase sample size",
              "Decrease sample size",
              "Increase significance level",
              "Decrease significance level",
            ],
            answer: 3,
          },
          {
            question:
              "When the power of a test is increased, what happens to Type II error?",
            choices: ["Increases", "Decreases"],
            answer: 1,
          },
          {
            question:
              "Which error is related to the concept of statistical significance?",
            choices: ["Type I Error", "Type II Error"],
            answer: 0,
          },
          {
            question: "Type I error is denoted by:",
            choices: ["α", "β", "δ", "ω"],
            answer: 0,
          },
          {
            question:
              "Which error is associated with the concept of statistical power?",
            choices: ["Type I Error", "Type II Error"],
            answer: 1,
          },
          {
            question:
              "A researcher wants to be very sure before rejecting the null hypothesis. What should they do to reduce Type I error?",
            choices: [
              "Lower the significance level",
              "Increase the significance level",
            ],
            answer: 0,
          },
        ],
      },
      {
        type: 1,
        description: "Fill-in the Blanks",
        isGameBased: true,
        questions: [
          {
            question:
              "Type I error occurs when the null hypothesis is ________ but is rejected.",
            answer: "true",
          },
          {
            question:
              "Type II error occurs when the null hypothesis is ________ but is not rejected.",
            answer: "false",
          },
          {
            question:
              "The probability of Type I error is denoted by the symbol _______.",
            answer: "α",
          },
          {
            question:
              "The probability of Type II error is denoted by the symbol _______.",
            answer: "β",
          },
        ],
      },
      {
        type: 2,
        description:
          "Matching Type. Match the following terms to their corresponding definitions.",
        isGameBased: true,
        choices: [
          "a. Probability of rejecting the null hypothesis when it is true",
          "b. Probability of accepting the null hypothesis when it is false",
          "c. Level of significance at which the null hypothesis is rejected",
          "d. Probability of rejecting the null hypothesis when it is false",
          "e. Probability of accepting the null hypothesis when it is false",
        ],
        questions: [
          {
            question: "Significance Level",
            answer: "c",
          },
          {
            question: "Power",
            answer: "a",
          },
          {
            question: "Type I Error",
            answer: "b",
          },
          {
            question: "Type II Error",
            answer: "d",
          },
          {
            question: "Null Hypothesis",
            answer: "e",
          },
        ],
      },
    ],
  },
  {
    quizId: 12,
    quizTitle: "ONE-TAILED AND TWO-TAILED TESTS",
    quizTypes: [
      {
        type: 0,
        description: "Multiple Choice",
        isGameBased: true,
        questions: [
          {
            question: "In a one-tailed test, the critical region is located:",
            choices: [
              "On one side of the distribution",
              "In the center of the distribution",
              "On both sides of the distribution",
              "Nowhere in the distribution",
            ],
            answer: 0,
          },
          {
            question:
              "When conducting a two-tailed test, the significance level is typically:",
            choices: [
              "Divided equally between the two tails",
              "Only applied to the left tail",
              "Only applied to the right tail",
              "Ignored",
            ],
            answer: 0,
          },
          {
            question:
              "Which of the following statements is true regarding a one-tailed test?",
            choices: [
              "It is more conservative than a two-tailed test",
              "It is less sensitive than a two-tailed test",
              "It is used when the researcher has no specific hypothesis",
              "It is not commonly used in statistical analysis",
            ],
            answer: 0,
          },
          {
            question: "A two-tailed test is used when:",
            choices: [
              "The researcher has a specific direction in mind",
              "The researcher is unsure about the direction of the effect",
              "The sample size is small",
              "The data is qualitative",
            ],
            answer: 1,
          },
          {
            question:
              "The null hypothesis in a one-tailed test is typically formulated as:",
            choices: [
              "There is no difference between the groups",
              "There is a difference between the groups",
              "The effect is positive",
              "The effect is negative",
            ],
            answer: 0,
          },
          {
            question:
              "Which of the following is an advantage of using a two-tailed test?",
            choices: [
              "It requires less computational power",
              "It is easier to interpret the results",
              "It can detect effects in either direction",
              "It is more specific in hypothesis testing",
            ],
            answer: 2,
          },
          {
            question: "The critical values for a one-tailed test are:",
            choices: [
              "Lower than for a two-tailed test",
              "Higher than for a two-tailed test",
              "Equal to those of a two-tailed test",
              "Not applicable",
            ],
            answer: 1,
          },
          {
            question: "When conducting a two-tailed test, the p-value is:",
            choices: [
              "Divided by 2",
              "Multiplied by 2",
              "Unchanged",
              "Ignored",
            ],
            answer: 1,
          },
          {
            question: "In a one-tailed test, the rejection region is:",
            choices: [
              "Split into two equal parts",
              "Located on one side of the distribution",
              "Centered around the mean",
              "Not defined",
            ],
            answer: 1,
          },
          {
            question:
              "Which type of test is more appropriate when the researcher is interested in detecting any difference, whether positive or negative?",
            choices: ["One-tailed test", "Two-tailed test", "Neither", "Both"],
            answer: 1,
          },
        ],
      },
      {
        type: 1,
        description: "Fill-in the Blanks",
        isGameBased: true,
        questions: [
          {
            question:
              "In a one-tailed test, the alternative hypothesis is focused on ______ direction.",
            answer: "one",
          },
          {
            question:
              "The critical region in a two-tailed test is divided into ______ equal parts.",
            answer: "two",
          },
          {
            question:
              "The null hypothesis states that there is ______ effect or difference.",
            answer: "no",
          },
          {
            question:
              "The p-value in a two-tailed test is ______ by 2 to account for both tails.",
            answer: "divided",
          },
          {
            question:
              "A two-tailed test is more ______ than a one-tailed test.",
            answer: "sensitive",
          },
        ],
      },
      {
        type: 4,
        description: "Problem Solving.",
        isGameBased: false,
        questions: [
          {
            problem:
              "A researcher is conducting a hypothesis test to determine if a new drug increases the average test scores of students. Should the researcher use a one-tailed or two-tailed test? Explain your choice.",
            answer: "",
          },
          {
            problem:
              "Given a significance level of 0.05, what would be the critical value(s) for a two-tailed test?",
            answer: "",
          },
          {
            problem:
              "If the p-value of a hypothesis test is 0.03 in a one-tailed test, what would the p-value be in a two-tailed test?",
            answer: "",
          },
          {
            problem:
              "Calculate the critical value for a one-tailed test with a significance level of 0.01 and a sample size of 50.",
            answer: "",
          },
        ],
      },
    ],
  },
]
