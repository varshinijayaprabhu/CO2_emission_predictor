# 🌸 My First ML Journey: Predicting Carbon Pulses
> *A deep dive into my individual internship project at **Prinston Smart Engineers**.*

---

## 🚀 The Spark
Every journey has a beginning. For me, it started with a question: **Can we predict the environmental footprint of a vehicle before it even hits the road?** 

As my very first Machine Learning project during my internship at **Prinston Smart Engineers**, this was more than just an assignment—it was a quest to understand how data can drive sustainability. 

---

## 📝 The Problem Statement
In the fight against climate change, monitoring CO2 emissions is critical. However, physical testing for every vehicle model is expensive and time-consuming. 

**The Goal:** Develop an intelligent system that uses a vehicle's mechanical DNA—like engine size, cylinder count, and fuel efficiency—to accurately forecast its CO2 emissions. 

---

## 📊 The Map (The Dataset)
I utilized the **2019 Fuel Consumption Dataset** for new light-duty vehicles in Canada. This rich dataset provided the perfect training ground, containing:
- **Engine Size (L)**: The heart of the power.
- **Cylinders**: The rhythm of the engine.
- **Fuel Consumption (City/Hwy/Comb)**: How the vehicle "breathes" fuel.
- **CO2 Emissions (g/km)**: Our target variable.

---

## 🛠️ The Arsenal: Exploring the Models
### 🤖 Models Used & Performance Analysis

To find the most accurate predictor, I experimented with multiple machine learning algorithms. After rigorous training and evaluation on the 2019 dataset, here is how they performed:

1.  **Random Forest Regressor** (R2 Score: **0.97**)
    *   **Approach**: An ensemble learning method that builds multiple decision trees and merges them together.
    *   **Result**: Exceptional accuracy by capturing complex interactions between fuel consumption and engine size.

2.  **XGBoost Regressor** (R2 Score: **0.97**)
    *   **Approach**: Optimized gradient boosting designed for speed and performance.
    *   **Result**: Highly competitive results, matching Random Forest in R2 score and providing a slightly lower Mean Absolute Error (MAE: 3.43).

3.  **Linear Regression** (R2 Score: **0.84**)
    *   **Approach**: The baseline statistical model for relationship prediction.
    *   **Result**: Provided a solid foundation but struggled with the non-linear aspects of the dataset compared to ensemble methods.

### 🏆 The Best Result

After careful analysis, the **Random Forest Regressor** was selected as the primary model for this project. With an **R2 Score of 0.97**, it offers a near-perfect balance of precision and reliability. The model is so robust that it can predict CO2 emissions with an average error of only ~3.6 g/km!

---

## 🏆 The Results & Summary
| Model | R2-Score | Error (MAE) |
| :--- | :--- | :--- |
| **Random Forest** | **0.97** | **3.61** |
| **XGBoost** | **0.97** | **3.43** |
| **Linear Regression** | 0.84 | ~10.2 |

**The Verdict:** The high accuracy (97%) achieved by ensemble methods proved that machine learning can be a powerful tool for environmental monitoring. 

This project taught me that data isn't just numbers—it's a story. Working individually under the guidance of **Prinston Smart Engineers**, I learned how to preprocess raw data, handle missing values, and deploy the most effective model for real-world impact.

---

## 👩‍💻 About the Developer
**Varshini J**
This project marks the start of my path in AI. Feel free to reach out or explore my other work!

[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">](https://github.com/varshinijayaprabhu)
[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/in/varshinij2004/)
[<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white">](mailto:varshini.j.512004@gmail.com)

---
*Designed with 🌸 and ☕ during my first ML internship.*
