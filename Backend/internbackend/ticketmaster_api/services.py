import requests

def events(api_key,keyword,distance,category,location):
    url='https://app.ticketmaster.com/discovery/v2/events'
    params ={
        'apikey': api_key,
        'keyword': keyword,
        'distance': distance,
        'category': category,
        'location': location
    }
    response = requests.get(url,params=params)

    if response.status_code==200:
        return response.json()
    else:
        return None
