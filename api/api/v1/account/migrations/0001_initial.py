# Generated by Django 2.2.4 on 2020-05-29 04:21

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TimeSlot',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currentTime', models.IntegerField(choices=[(0, '00:00'), (1, '01:00'), (2, '02:00'), (3, '03:00'), (4, '04:00'), (5, '05:00'), (6, '06:00'), (7, '07:00'), (8, '08:00'), (9, '09:00'), (10, '10:00'), (11, '11:00'), (12, '12:00'), (13, '13:00'), (14, '14:00'), (15, '15:00'), (16, '16:00'), (17, '17:00'), (18, '18:00'), (19, '19:00'), (20, '20:00'), (21, '21:00'), (22, '22:00'), (23, '23:00'), (24, '24:00')], default='1', max_length=1)),
                ('noteForTimeSlot', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('companyPhotoLink', models.CharField(max_length=300)),
                ('firstName', models.CharField(max_length=120)),
                ('lastName', models.CharField(max_length=120)),
                ('date', models.DateField(default=datetime.datetime(2020, 5, 29, 4, 21, 25, 741422), verbose_name='Date')),
                ('currentTime', models.TimeField(auto_now_add=True, verbose_name='Conversation Time')),
                ('restOfReport', models.ForeignKey(default='0', on_delete=django.db.models.deletion.CASCADE, to='account.TimeSlot', verbose_name='All Time')),
            ],
        ),
    ]
