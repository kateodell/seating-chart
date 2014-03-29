#hackbright team at Facebook FemEngineers Hackathon
#Gowri & Kate

#Assignment definition: Model for WEdding tables app

import sqlite3
import json
#import traceback

DB = None
CONN = None

#Get event ID from FB dummy object
f = app/event.json
parsed_json = json.load(f) 

class Attendee(object):
    def __init__(self, id, first_name, last_name, photo, hometown):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.photo = photo  #URL
        self.hometown = hometown


    def add_new_attendees(self):
        # call FB API for the given event and pull down any new attendees

        return record


class Table(object):
    def __init__(self, id, seating_list):
        self.id = id
        self.seating_list= seating_list # list of Attendees

    def add_users_to_table(self):
        sql = """INSERT into Tables (id, seating_list) VALUES (?, ?, ?, ?)"""
        DB.execute(sql, (self.id, self.seating_list))
        CONN.commit()

def connect_to_db():
    global DB, CONN
    CONN = sqlite3.connect("hackbright.db")
    DB = CONN.cursor()

def get_all_tables():
    sql = """SELECT * FROM Tables"""
    DB.execute(sql)
    records = DB.fetchall()

    return records
