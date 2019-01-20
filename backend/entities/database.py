'''
	Establishes a connection to the SQL Server database.

	Author: Chris Carrillo
	Date: 1/12/2019
'''

from datetime import datetime
from sqlalchemy import create_engine, Column, String, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# Local connection
import pymssql

db_url = "localhost:1433"
db_name = "KLAWDB"
db_user = "sa"
db_password = "aStrongPassword7"
engine = create_engine(f'mssql+pymssql://{db_user}:{db_password}@{db_url}/{db_name}')
Session = sessionmaker(bind=engine)

'''
# Azure connection
import pyodbc

db_url = "DATABASE_URL_HERE"
db_name = "DATABASE_NAME_HERE"
db_user = "DATABASE_USERNAME_HERE"
db_password = "DATABASE_PASSWORD_HERE"
db_driver = "ODBC+Driver+17+for+SQL+Server"
engine = create_engine(f'mssql+pyodbc://{db_user}:{db_password}@{db_url}/{db_name}?driver={db_driver}?trusted_connection=yes')
Session = sessionmaker(bind=engine)
'''

Base = declarative_base()