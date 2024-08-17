from django.urls import path
from .views import FormSubmissionView

urlpatterns = [
    path("submissions/", FormSubmissionView.as_view(), name="form-submission"),
]
