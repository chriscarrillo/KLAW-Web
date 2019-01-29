'''
    Contains classes necessary for Procedure.    

    Author: Chris Carrillo
    Date: 1/12/2019
'''

from marshmallow import Schema, fields
from sqlalchemy import Column, String, Text, ForeignKey, Integer
from .database import Base

class Procedure(Base):
    '''
        The Procedure class defines the procedure object that will be inserted into the database.
        A Procedure has an id, a user_id (from the user), raw_xml, and a saved_procedure.
    '''

    __tablename__ = "PROCEDURE"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("USER.id"), nullable=False)
    raw_xml = Column(Text, nullable = False)
    procedure_name = Column(String, nullable = False)
    saved_procedure = Column(Text)

    def __init__(self, id, user_id, raw_xml, procedure_name, saved_procedure):
        self.user_id = user_id
        self.raw_xml = raw_xml
        self.procedure_name = procedure_name
        self.saved_procedure = saved_procedure

class ProcedureSchema(Schema):
    '''
        ProcedureSchema is used to transform instances of Procedure into JSON objects.
    '''

    id = fields.Integer()
    user_id = fields.Integer()
    raw_xml = fields.Str()
    procedure_name = fields.Str()
    saved_procedure = fields.Str()