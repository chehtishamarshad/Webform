from django.contrib import admin
from .models import FormSubmission


@admin.register(FormSubmission)
class FormSubmissionAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "zipcode", "state")
