import requests

# Define the URL where you want to send the POST request
url = 'http://localhost:3001/users'

# Define the parameters you want to send in the POST request
data = {
    'name': 'John Doe',
    'password': 'secretpassword',
    'isAdmin': True,  # You can set this to True or False as needed
    'email': 'johndoe@example.com',
    'address': '123 Main St, City'
}

# Send the POST request
response = requests.post(url, data=data)

# Check the response status code and content
if response.status_code == 200:
    print('POST request was successful')
    print('Response content:', response.text)
else:
    print('POST request failed with status code', response.status_code)
