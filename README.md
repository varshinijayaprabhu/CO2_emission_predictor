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
I didn't just settle for one model. I experimented with three distinct algorithms to see which one could capture the complex relationships in the data:

### 1. Linear Regression (The Foundation)
- **R2-Score: 0.84**
- *The Logic:* A classic approach that looks for a straight-line relationship. While reliable, it couldn't quite capture the nuances of higher-performance engines.

### 2. K-Nearest Neighbors (The Reliable Neighbor)
- **R2-Score: 0.91**
- *The Logic:* This model makes predictions based on how "similar" vehicles performed. It was much sharper than linear regression but still had room for improvement.

### 3. Decision Tree Regressor (The Champion) 🏆
- **R2-Score: 0.98**
- *The Logic:* By branching out through the data features, the Decision Tree was able to perfectly map the intricate patterns of fuel consumption and engine mechanics. It emerged as the clear winner.

---

## 🏆 The Results & Conclusion
| Model | R2-Score | Performance |
| :--- | :--- | :--- |
| **Decision Tree** | **0.98** | **Exceptional** |
| **KNN** | 0.91 | Very Good |
| **Linear Regression** | 0.84 | Good |

**The Verdict:** The Decision Tree Regressor's high accuracy (98%) proved that machine learning can be a powerful tool for environmental monitoring. 

This project taught me that data isn't just numbers—it's a story. Working individually under the guidance of **Prinston Smart Engineers**, I learned how to preprocess raw data, handle missing values, and tune models to perfection.

---

## 👩‍💻 About the Developer
**Varshini J**
This project marks the start of my path in AI. Feel free to reach out or explore my other work!

[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">](https://github.com/varshinijayaprabhu)
[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/in/varshinij2004/)
[<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white">](mailto:varshini.j.512004@gmail.com)

---
*Designed with 🌸 and ☕ during my first ML internship.*
