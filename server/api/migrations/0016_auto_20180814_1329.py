# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-08-14 13:29
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_usercategoryhistory_usereventhistory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='date',
        ),
        migrations.RemoveField(
            model_name='event',
            name='time',
        ),
        migrations.AddField(
            model_name='andelauserprofile',
            name='timezone',
            field=models.CharField(blank=True, max_length=80),
        ),
        migrations.AddField(
            model_name='event',
            name='end_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2018, 8, 14, 13, 29, 5, 622047, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='start_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2018, 8, 14, 13, 29, 12, 950122, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='timezone',
            field=models.CharField(blank=True, max_length=80),
        ),
    ]