from django.contrib.auth.models import User
from .models import Report, TimeSlot
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class TimeSlotSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TimeSlot
        fields = ('currentTime','timeSlotName','patrol', 'patrolNotes', 'lockedDoors', 'lockedDoorsNotes', 'unLockedDoors', 'unLockedDoorsNotes','securityRisk','securityRiskNotes','extraNotes', 'extraNotesNotes','attachedFile')

class ReportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'companyPhotoLink', 'firstName','lastName', 'date', 'currentTime', 'shiftTime', 'totalTimeInshift', 'restOfReport', 'officerSignature')