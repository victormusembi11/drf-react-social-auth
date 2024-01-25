from django.urls import path

from .views import UserListAPIView

app_name = "core"

urlpatterns = [
    path("users/", UserListAPIView.as_view(), name="user-list"),
]
