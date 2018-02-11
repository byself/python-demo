from django.urls import path
from . import views

urlpatterns = [
    path('book/add/<str:name>', views.add_book),
    path('book/show/', views.show_books),
]