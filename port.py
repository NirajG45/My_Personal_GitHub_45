from flask import Flask, render_template, url_for
import requests

app = Flask(__name__)

# GitHub API URL
GITHUB_USERNAME = "NirajG45"
GITHUB_API_URL = f"https://api.github.com/users/{GITHUB_USERNAME}/repos"


@app.route("/")
def dashboard():
    try:
        response = requests.get(GITHUB_API_URL)
        repos = response.json()
        if isinstance(repos, dict) and "message" in repos:
            repos = []  # error case like rate limit
    except Exception as e:
        print("GitHub API Error:", e)
        repos = []

    return render_template("dashboard.html", repos=repos)


if __name__ == "__main__":
    app.run(debug=True)
