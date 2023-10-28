from django.urls import path
from .views import TicketAPI

urlpatterns = [
    path('result',TicketAPI.as_view()),
]