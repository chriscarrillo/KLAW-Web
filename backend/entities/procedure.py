'''
    Contains classes necessary for Procedure.    

    Author: Chris Carrillo
    Date: 1/12/2019
'''

from marshmallow import Schema, fields
from sqlalchemy import Column, String, Text, ForeignKey
from .database import Base
from .uuid import UUID
import uuid

class Procedure(Base):
    '''
        The Procedure class defines the procedure object that will be inserted into the database.
        A Procedure has a proc_id, a user_id (from the user), raw_xml, and a saved_procedure.
    '''

    __tablename__ = "PROCEDURE"

    proc_id = Column(UUID(), primary_key = True)
    user_id = Column(UUID(), ForeignKey("USER.user_id"), nullable = False)
    raw_xml = Column(Text, nullable = False)
    procedure_name = Column(String, nullable = False)
    saved_procedure = Column(Text)

    def __init__(self, proc_id, user_id, raw_xml, saved_procedure):
        self.proc_id = proc_id
        self.user_id = user_id
        self.raw_xml = raw_xml
        self.procedure_name = procedure_name
        self.saved_procedure = saved_procedure

class ProcedureSchema(Schema):
    '''
        ProcedureSchema is used to transform instances of Procedure into JSON objects.
    '''

    proc_id = fields.UUID()
    user_id = fields.UUID()
    raw_xml = fields.Str()
    procedure_name = fields.Str()
    saved_procedure = fields.Str()