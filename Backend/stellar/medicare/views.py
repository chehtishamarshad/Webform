from rest_framework import generics
from .models import FormSubmission
from .serializers import FormSubmissionSerializer


class FormSubmissionView(generics.ListCreateAPIView):
    queryset = FormSubmission.objects.all()
    serializer_class = FormSubmissionSerializer


# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import FormSubmission  # Updated to FormSubmission
# from .serializers import FormSubmissionSerializer  # Updated to FormSubmissionSerializer


# class FormSubmissionView(APIView):  # Updated class name
#     def post(self, request, *args, **kwargs):
#         serializer = FormSubmissionSerializer(
#             data=request.data
#         )  # Updated to FormSubmissionSerializer
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
