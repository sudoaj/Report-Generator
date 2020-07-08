from django.contrib.auth.models import User
from .models import Report, TimeSlot
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups')
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user
class TimeSlotSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TimeSlot
        fields = ('currentTime','timeSlotName','patrol', 'patrolNotes', 'lockedDoors', 'lockedDoorsNotes', 'unLockedDoors', 'unLockedDoorsNotes','securityRisk','securityRiskNotes','extraNotes', 'extraNotesNotes','attachedFile')

class ReportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'companyPhotoLink', 'firstName','lastName', 'date', 'currentTime', 'shiftTime', 'totalTimeInshift', 'restOfReport', 'officerSignature')
