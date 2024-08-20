from flask import Flask, jsonify
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)
CORS(app)

SUPABASE_URL = "https://hewvqhaokvcaxemogoeq.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld3ZxaGFva3ZjYXhlbW9nb2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzNjEwMDIsImV4cCI6MjAzODkzNzAwMn0.d9R8Yz8IT_YjcfUPyefRzhdat6RUn01u8zicDmJq8Vw"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/items', methods=['GET'])
def get_items():
    response = supabase.table('items').select('*').execute()
    print(response)
    return jsonify(response.data)

if __name__ == '__main__':
    app.run(debug=True)
