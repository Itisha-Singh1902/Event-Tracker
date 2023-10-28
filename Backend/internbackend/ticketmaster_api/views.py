from django.shortcuts import render
from .serializer import TicketSerialzer
from .services import events
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class TicketAPI(APIView):
    def post(self,request):
        api_key = '8HMqa7rrRbtfbFd7DmDGxUdi3obXcLId'
        keyword = request.data['keyword']
        distance = request.data['distance']
        category = request.data['distance']
        location = request.data['location']
        serializer = TicketSerialzer(data = request.data)
        if serializer.is_valid():
            ticketevents = events(api_key, keyword, distance, category, location) 
            if ticketevents is not None:
                return Response(ticketevents)
            else:
                return Response({'error':'Events not fetched'})           
