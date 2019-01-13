'''
	Establishes a connection to the SQL Server database.

	Author: Chris Carrillo
	Date: 1/12/2019
'''

from datetime import datetime
from sqlalchemy import create_engine, Column, String, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


import pymssql

# The following variables need to change once we have the database up and running
db_url = "localhost:1433"
db_name = "KLAWDB"
db_user = "sa"
db_password = "aStrongPassword7"
engine = create_engine(f'mssql+pymssql://{db_user}:{db_password}@{db_url}/{db_name}')
Session = sessionmaker(bind=engine)

Base = declarative_base()