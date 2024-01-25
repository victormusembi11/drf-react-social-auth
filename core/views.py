from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "email")


class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
