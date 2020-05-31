from django.db import models
from django.urls import reverse
from datetime import datetime


timeChoices = (

    (0, '00:00'),
    (1, '01:00'),
    (2, '02:00'),
    (3, '03:00'),
    (4, '04:00'),
    (5, '05:00'),
    (6, '06:00'),
    (7, '07:00'),
    (8, '08:00'),
    (9, '09:00'),
    (10, '10:00'),
    (11, '11:00'),
    (12, '12:00'),
    (13, '13:00'),
    (14, '14:00'),
    (15, '15:00'),
    (16, '16:00'),
    (17, '17:00'),
    (18, '18:00'),
    (19, '19:00'),
    (20, '20:00'),
    (21, '21:00'),
    (22, '22:00'),
    (23, '23:00'),
    (24, '24:00'),

)


class TimeSlot(models.Model):
    currentTime = models.IntegerField(
    max_length=1, choices=timeChoices, default="1")
    timeSlotName = models.CharField(("Form Name"), max_length=50, default=" ")
    patrol = models.BooleanField(default=False)
    patrolNotes = models.TextField(blank=True, null=True)
    lockedDoors = models.BooleanField(default=False)
    lockedDoorsNotes = models.TextField(blank=True, null=True)
    unLockedDoors = models.BooleanField(default=False)
    unLockedDoorsNotes = models.TextField(blank=True, null=True)
    securityRisk = models.BooleanField(default=False)
    securityRiskNotes = models.TextField(blank=True, null=True)
    extraNotes = models.BooleanField(default=False)
    extraNotesNotes = models.TextField(blank=True, null=True)
    attachedFile = models.BooleanField(default=False)
    attachedFileNotes = models.TextField(blank=True, null=True)

    def get_absolute_url(self):
        return reverse("articles:article-detail", kwargs={"id": self.id})

    def __str__(self):
        return str(self.currentTime)


class Report(models.Model):
    id = models.IntegerField(primary_key=True)
    companyPhotoLink = models.CharField(max_length=300,  default=" ")
    firstName = models.CharField(max_length=120,  default=" ")
    lastName = models.CharField(max_length=120,  default=" ")
    date = models.DateField(("Date"), default=datetime.today())
    currentTime = models.TimeField(
        (u"Conversation Time"), auto_now_add=True, blank=True)
    shiftTime = models.CharField(
        ("Form Name"), max_length=50, default="2000 - 0800")
    totalTimeInshift = models.IntegerField(default=8)

    restOfReport = models.ForeignKey("account.TimeSlot", verbose_name=(
        "All Time"), on_delete=models.CASCADE, default="0")

    officerSignature = models.CharField(max_length=120,  default=" ")
    # get the url of the object

    def get_absolute_url(self):
        return reverse("articles:article-detail", kwargs={"id": self.id})

    # show title as the obejct
    def __str__(self):
        return self.firstName
