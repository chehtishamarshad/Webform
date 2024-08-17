# Generated by Django 5.0.7 on 2024-08-17 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=15)),
                ('zipcode', models.CharField(max_length=10)),
                ('state', models.CharField(max_length=50)),
            ],
        ),
    ]
