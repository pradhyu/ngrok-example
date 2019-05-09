# use ngrok https://www.quora.com/Can-I-host-my-own-website-with-my-own-computer-How-would-I-go-about-doing-that
# ./ngrok http 5000
# https://dashboard.ngrok.com/get-started
from flask import Flask
app = Flask(__name__)
app.debug = True
@app.route('/')
def main():
    with open('compute-api.json', 'r') as myfile:
        data = myfile.read()
    return data
if __name__ == '__main__':
 app.run(host='0.0.0.0')
