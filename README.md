# Predicting CO2 Emissions — Notebook Analysis

This README analyzes the notebook `project-code.ipynb` in this repository and provides: a concise summary of what the notebook does, the libraries & data it uses, problems and correctness issues found, how to run it, suggested fixes and next steps.

## Quick summary

- Notebook title: "Predicting CO2 Emissions from Fuel Consumption Data using Machine Learning"
- Goal: Build models to predict CO2 emissions from vehicle features (engine size, cylinders, fuel consumption metrics, etc.).
- Dataset file expected: `Fuel consumption 2019.csv` (placed in the notebook's working directory).
- High-level flow: load dataset → inspect/clean → encode categorical features → select features → split data → fit models → evaluate.

## Main libraries used

- numpy
- pandas
- scikit-learn (LinearRegression, DecisionTreeClassifier, KNeighborsClassifier, preprocessing, model_selection, metrics)
- matplotlib
- seaborn

## major sections

1. Project description, dataset description and objectives.
2. Import libraries and read `Fuel consumption 2019.csv`.
3. Basic EDA: .shape, .info(), .describe(), missing value checks.
4. Copy dataset and fill missing values (`Engine-Size` filled with mean, `Cylinders` filled with median).

# Predicting CO2 Emissions — Developer README

This repository contains a Jupyter notebook, `project-code.ipynb`, that demonstrates building machine-learning models to estimate vehicle CO2 emissions from fuel consumption and vehicle specifications.

This README is written for developers: it documents the project purpose, data, environment, how to run and reproduce experiments, and where to extend the work.

## Project overview

- Goal: predict vehicle CO2 emissions using vehicle attributes such as fuel consumption (city/highway/combined), engine size and cylinder count.
- Dataset: expected file `Fuel consumption 2019.csv` (place this CSV in the project root or update the path used in the notebook).
- High-level pipeline: data load → EDA → preprocessing → feature selection → train/test split → model training → evaluation → visualization.

## Files

- `project-code.ipynb` — main notebook with the end-to-end experiment and notes.
- `README.md` — this developer-focused README.
- `Fuel consumption 2019.csv` — dataset (not included in repo; add your local copy to reproduce experiments).

## Environment & dependencies

Recommended Python version: 3.8+ (tested on 3.8–3.11).

Create a virtual environment and install dependencies. Example (PowerShell):

```powershell
# create venv (optional)
python -m venv .venv
.\.venv\Scripts\Activate.ps1

# install runtime deps
pip install --upgrade pip
pip install pandas numpy scikit-learn matplotlib seaborn jupyter
```

pandas
numpy
scikit-learn
matplotlib
seaborn
jupyter

````

## Quick start — run the notebook

1. Place `Fuel consumption 2019.csv` alongside `project-code.ipynb`.
2. Activate your virtual environment (if used).
3. Launch Jupyter (or open the notebook in VS Code):

```powershell
jupyter notebook project-code.ipynb
````

4. Run the notebook cells top-to-bottom. The notebook trains multiple models and prints evaluation metrics.

Note: the notebook includes model training for several algorithms and prints evaluation numbers that summarize each run.

## Models & features (as used in the notebook)

- Input features: `Fuel-Consumption-Comb`, `Fuel-Consumption-City`, `Fuel-Consumption-Hwy`, `Engine-Size`.
- Target: `CO2-Emissions` (continuous).
- Algorithms demonstrated: Linear Regression, Decision Tree model, K-Nearest Neighbors.

Reported metrics in the notebook (for quick reference):

- Linear Regression R2 ≈ 0.84
- Decision Tree (reported) ≈ 0.98
- KNN (reported) ≈ 0.91
