import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

cars_data = pd.read_excel("Vehicles_Data.xlsx", index_col=0, na_values=["?"])

train_set, test_set = train_test_split(
    cars_data, test_size=0.2, random_state=42)

train_set_features = train_set.drop("mpg", axis=1)


pipeline = Pipeline([
    ("impute", SimpleImputer(strategy="median")),
    ("std_scaler", StandardScaler())
])

pipeline.fit(train_set_features.values)
