from flask import Flask, render_template, url_for
from flask_cachebuster import CacheBuster

config = { 'extensions': ['.js', '.css', '.csv'], 'hash_size': 5 }
cache_buster = CacheBuster(config=config)

app = Flask(__name__)
cache_buster.init_app(app)


@app.route('/')
def index():
	return render_template('index.html')

if __name__=='__main__':
	app.run(debug=True)