from django.db import models


class FormSubmission(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    zipcode = models.CharField(max_length=10)
    state = models.CharField(max_length=50)

    def __str__(self):
        return self.name
