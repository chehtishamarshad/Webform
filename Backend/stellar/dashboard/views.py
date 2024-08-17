from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from medicare.models import FormSubmission
from medicare.serializers import FormSubmissionSerializer


class DashboardView(viewsets.ModelViewSet):
    queryset = FormSubmission.objects.all()
    serializer_class = FormSubmissionSerializer
