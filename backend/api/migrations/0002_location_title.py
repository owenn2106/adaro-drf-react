# Generated by Django 4.0.4 on 2022-04-21 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='title',
            field=models.CharField(blank=True, default='loc-title', max_length=50, null=True),
        ),
    ]