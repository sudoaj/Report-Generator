from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from .models import Report, TimeSlot
from rest_framework import viewsets
from api.v1.account.serializers import UserSerializer
from api.v1.account.serializers import ReportSerializer
from api.v1.account.serializers import TimeSlotSerializer






class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TimeSlotViewSet (viewsets.ModelViewSet):
    
    """
    API endpoint that allows Timeslor to be viewed or edited.
    """
    queryset =  TimeSlot.objects.all()
    serializer_class = TimeSlotSerializer

class ReportViewSet (viewsets.ModelViewSet):

    """
    API endpoint that allows Reports to be viewed or edited.
    """
    queryset =  Report.objects.all()
    serializer_class = ReportSerializer