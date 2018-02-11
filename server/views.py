from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.core import serializers
import json
from .models import Book

# Create your views here.

@require_http_methods(["GET"])
def add_book(request, name):
    response = {}
    book = Book(book_name=name)
    book.save()
    response['msg'] = 'success'
    response['error_num'] = 0

    return JsonResponse(response)

@require_http_methods(["GET"])
def show_books(request):
    response = {}
    books = Book.objects.filter()
    response['list'] = json.loads(serializers.serialize("json", books))
    response['msg'] = 'success'
    response['error_num'] = 0

    return JsonResponse(response)
