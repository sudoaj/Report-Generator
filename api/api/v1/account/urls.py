from django.conf.urls import url, include
from rest_framework import routers
from api.v1.account import views

router = routers.DefaultRouter()
router.register(r'/', views.UserViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'reports', views.ReportViewSet)
router.register(r'timeslot', views.TimeSlotViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]